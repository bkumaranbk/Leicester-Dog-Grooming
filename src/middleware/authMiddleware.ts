import apiRequest from "@/axios/apiRequest";
import { getNavigateCallback } from "@/axios/axiosInstance";
import { sessionInactivityCheckTime, tokenExpireIn } from "@/common/constant";
import { AuthResponse, User } from "@/common/modal";
import { setLogin, setLogout } from "@/redux/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

let refreshTimeout: NodeJS.Timeout | null = null;
let inactivityTimeout: NodeJS.Timeout | null = null;

// Custom Hook for Auth Session Management
export const useAuthSession = () => {
    const dispatch = useDispatch();
    const { token, refreshToken, expireIn } = useSelector((state: {
        auth: {
            user: User | null;
            token: string | null;
            refreshToken: string | null;
            expireIn: number;
        }
    }) => state.auth);

    // Function to handle logout with navigation
    const handleLogout = () => {
        dispatch(setLogout());
        const navigate = getNavigateCallback();
        if (navigate) {
            navigate("/login/admin");
        }
    };

    // Function to refresh token
    const refreshAuthToken = async () => {
        if (!refreshToken) {
            handleLogout();
            return;
        }

        try {
            const response = await apiRequest<AuthResponse | {
                error: string;
            }>({
                method: "POST",
                url: "/api/auth/refresh-token",
                data: { refreshToken },
            });

            if ('error' in response) {
                handleLogout();
                return;
            }

            dispatch(setLogin({
                user: response.user,
                token: response.token,
                refreshToken: response.refreshToken,
                expireIn: response.expireIn
            }));

            scheduleTokenRefresh(response.expireIn || tokenExpireIn);

        } catch (error) {
            console.error("Token refresh failed:", error);
            handleLogout();
        }
    };

    // Function to schedule auto-refresh before token expires
    const scheduleTokenRefresh = (expireIn: number | string) => {
        if (refreshTimeout) clearTimeout(refreshTimeout);
        refreshTimeout = setTimeout(refreshAuthToken, 360000); // Refresh 1 min before expiry
    };

    // Function to start inactivity detection
    const startInactivityTimer = () => {
        if (inactivityTimeout) clearTimeout(inactivityTimeout);

        inactivityTimeout = setTimeout(() => {
            console.log("User inactive for 5 minutes. Logging out...");
            handleLogout();
        }, sessionInactivityCheckTime); // 5 minutes = 300,000ms
    };

    // Attach event listeners to reset inactivity timer on user activity
    const setupInactivityListeners = () => {
        ["mousemove", "mousedown", "keydown", "scroll", "touchstart"].forEach((event) => {
            window.addEventListener(event, startInactivityTimer);
        });
    };

    // Initialize auth session
    useEffect(() => {
        if (token) {
            scheduleTokenRefresh(expireIn || tokenExpireIn);
            setupInactivityListeners();
            startInactivityTimer();
        }

        return () => {
            if (refreshTimeout) clearTimeout(refreshTimeout);
            if (inactivityTimeout) clearTimeout(inactivityTimeout);

            // Clean up event listeners
            ["mousemove", "mousedown", "keydown", "scroll", "touchstart"].forEach((event) => {
                window.removeEventListener(event, startInactivityTimer);
            });
        };
    }, [token, expireIn]);
};