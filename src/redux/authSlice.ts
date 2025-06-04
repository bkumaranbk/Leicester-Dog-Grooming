import { tokenExpireIn } from "@/common/constant";
import { AuthResponse, User } from "@/common/modal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialAuthState: AuthResponse = {
  user: null,
  token: null,
  refreshToken: null,
  expireIn: tokenExpireIn,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setLogin: (
      state,
      action: PayloadAction<{
        user: User;
        token: string;
        refreshToken: string;
        expireIn?: number | string;
      }>
    ) => {
      const { user, token, refreshToken, expireIn } = action.payload;
      state.user = user;
      state.token = token;
      state.refreshToken = refreshToken;
      state.expireIn = expireIn || tokenExpireIn;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.expireIn = tokenExpireIn;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export const authReducer = authSlice.reducer;
