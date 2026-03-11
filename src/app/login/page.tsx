"use client";

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '../../components/LoginForm';
import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';

export default function LoginPage() {
    const router = useRouter();

    const handleLoginSuccess = useCallback(() => {
        // Redirection logic after successful mock auth
        router.push('/dashboard');
    }, [router]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <main className="flex-1 flex items-center justify-center p-6 pt-24">
                <div className="w-full max-w-6xl bg-white rounded-[48px] shadow-2xl shadow-red-500/5 overflow-hidden border border-gray-100 flex min-h-[700px]">
                    {/* Left Side: Dynamic Branding */}
                    <div className="hidden lg:flex flex-1 bg-gray-900 relative p-16 flex-col justify-between overflow-hidden">
                        {/* Abstract Background Decoration */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/20 blur-[120px] rounded-full -mr-64 -mt-64 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full -ml-32 -mb-32 text-transparent">.</div>

                        <div className="relative z-10">
                            <Logo variant="white" />
                            <div className="mt-20">
                                <h1 className="text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
                                    Secure Access <br />
                                    <span className="text-red-500">Starts Here.</span>
                                </h1>
                                <p className="text-lg text-gray-400 font-medium max-w-md leading-relaxed">
                                    Join thousands of users who trust SafeOn to protect their digital life with military-grade anti-theft protocols.
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10 grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-3xl font-black text-white">99.9%</p>
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">Theft Recovery</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black text-white">256-bit</p>
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">AES Encryption</p>
                            </div>
                        </div>

                        {/* Visual element: Animated Rings */}
                        <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
                            <div className="w-96 h-96 border-[40px] border-red-500 rounded-full animate-ping"></div>
                        </div>
                    </div>

                    {/* Right Side: Authentication Form */}
                    <div className="flex-[0.85] flex flex-col justify-center bg-white relative">
                        <div className="absolute top-10 right-10 flex items-center gap-2">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Security Status:</span>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-100">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-[8px] font-black text-green-600 uppercase tracking-widest">Active Guard</span>
                            </div>
                        </div>

                        <LoginForm onLogin={handleLoginSuccess} />
                    </div>
                </div>
            </main>

            {/* Footer text */}
            <footer className="py-8 text-center">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    &copy; 2026 SafeOn Security Systems • adSky solution • Global Protection Network
                </p>
            </footer>
        </div>
    );
}
