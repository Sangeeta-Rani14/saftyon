"use client";

import React, { useState, useEffect, useCallback, memo } from 'react';
import { useDebounce } from '../hooks/use-debounce';

const LoginForm = ({ onLogin }: { onLogin: () => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // Debouncing email and password for theoretical background validation or API checks
    const debouncedEmail = useDebounce(email, 500);
    const debouncedPassword = useDebounce(password, 500);

    useEffect(() => {
        if (debouncedEmail) {
            console.log('Debounced Email:', debouncedEmail);
        }
    }, [debouncedEmail]);

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password, rememberMe });
        // Mock login success
        onLogin();
    }, [email, password, rememberMe, onLogin]);

    return (
        <div className="flex flex-col justify-center items-center px-10 py-20 bg-white">
            <div className="flex flex-col gap-8 w-full max-w-md">
                <div className="flex flex-col gap-2">
                    <h2 className="text-4xl font-black text-gray-900 leading-tight">Welcome Back</h2>
                    <p className="text-lg text-gray-500 font-medium">Please enter your details to sign in to your account.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">Email Address</label>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all group-hover:bg-gray-50"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-gray-700">Password</label>
                            <button type="button" className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors">Forgot password?</button>
                        </div>
                        <div className="relative group">
                            <input
                                type="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all group-hover:bg-gray-50 text-2xl tracking-widest placeholder:text-lg placeholder:tracking-normal"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0V10.5m-2.25 2.1c0-2.73 2.22-4.95 4.95-4.95h4.5c2.73 0 4.95 2.22 4.95 4.95v5.25c0 2.73-2.22 4.95-4.95 4.95h-4.5c-2.73 0-4.95-2.22-4.95-4.95v-5.25Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-4 h-4 text-red-500 bg-gray-50 border-gray-300 rounded focus:ring-red-500"
                        />
                        <label htmlFor="rememberMe" className="text-sm font-medium text-gray-600">Remember me for 30 days</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-red-500 hover:bg-red-600 active:scale-[0.98] text-white font-bold rounded-xl shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2 group"
                    >
                        <span>Sign In</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
                    </button>
                </form>

                <p className="text-center text-sm font-medium text-gray-500">
                    Create new account? <button type="button" className="font-bold text-red-500 hover:text-red-600 transition-colors">Register</button>
                </p>
            </div>
        </div>
    );
};

export default memo(LoginForm);
