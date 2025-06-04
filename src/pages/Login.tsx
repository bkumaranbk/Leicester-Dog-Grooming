import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useDispatch } from 'react-redux';
import apiRequest from '@/axios/apiRequest';
import { setLogin } from '@/redux/authSlice';
import { AuthResponse } from '@/common/modal';

interface LoginFormData {
    email: string;
    password: string;
}

interface ApiResponse {
    error?: string;
    [key: string]: unknown;
}

const Login = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState<Partial<LoginFormData>>({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name as keyof LoginFormData]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<LoginFormData> = {};
        let isValid = true;

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form before submission
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        const res = await apiRequest<AuthResponse | { error: string }>({
            method: "POST",
            url: "/api/auth/login",
            data: {
                email: formData.email,
                password: formData.password,
                role: "Admin",
            },
        });

        setIsLoading(false);

        if ('error' in res) {
            toast.error(res.error);
            return;
        }

        // Type guard to ensure we have the correct response
        if ('user' in res && 'token' in res) {
            toast.success('Login successful!');
            dispatch(setLogin(res));
        } else {
            toast.error('Invalid response format from server');
        }
        

    };

    return (
        <section className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
            <div className="glass-card p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-2">Welcome Back</h2>
                    <p className="text-gray-400">Please enter your credentials to login</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 bg-dark-700 border-2 ${errors.email ? 'border-blue-500' : 'border-gray-600'
                                } rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400`}
                            placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 bg-dark-700 border-2 ${errors.password ? 'border-blue-500' : 'border-gray-600'
                                } rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400`}
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>

                    {/* <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 bg-dark-700 border-gray-600 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="text-sm text-blue-500 hover:text-blue-400">
                            Forgot password?
                        </a>
                    </div> */}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full button-primary flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <span>Logging in...</span>
                        ) : (
                            <>
                                <span>Login</span>
                                <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </form>

                {/* <div className="mt-6 text-center">
                    <p className="text-gray-400">
                        Don't have an account?{' '}
                        <a href="#" className="text-blue-500 hover:text-blue-400">
                            Sign up
                        </a>
                    </p>
                </div> */}
            </div>
        </section>
    );
};

export default Login;