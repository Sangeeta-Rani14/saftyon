"use client";

import React, { useState, memo } from 'react';

const AntiTheft = () => {
    const [isRinging, setIsRinging] = useState(false);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Anti-Theft Tracking</h1>
                    <p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-widest text-[10px]">Find My Device • Active Security</p>
                </div>
                <div className="flex items-center gap-3 bg-red-50 border border-red-100 px-4 py-2 rounded-2xl">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Tracking Live</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Map Section */}
                <div className="lg:col-span-2 relative h-[600px] bg-gray-100 rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl shadow-gray-200/50 group">
                    <img
                        src="/security-map.png"
                        alt="Security Map"
                        className="w-full h-full object-cover grayscale opacity-50 contrast-125 group-hover:scale-105 transition-transform duration-10000"
                    />

                    {/* Pulsing Marker */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                            <div className="w-20 h-20 bg-red-500/20 rounded-full animate-ping absolute -top-6 -left-6"></div>
                            <div className="w-12 h-12 bg-red-500/30 rounded-full animate-pulse absolute -top-2 -left-2"></div>
                            <div className="relative w-8 h-8 bg-red-500 border-4 border-white rounded-full shadow-2xl z-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                            </div>

                            {/* Device Info Tooltip */}
                            <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl border border-gray-100 px-4 py-3 rounded-2xl shadow-2xl min-w-[180px]">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Current Device</p>
                                <p className="text-sm font-black text-gray-900">Alex's iPhone 15 Pro</p>
                                <div className="mt-2 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                    <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Active • 94% Battery</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Controls */}
                    <div className="absolute bottom-10 left-10 p-2 bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-100 shadow-2xl flex flex-col gap-2">
                        <button className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-xl transition-all">
                            <PlusIcon className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-xl transition-all">
                            <MinusIcon className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                    <div className="absolute top-10 right-10 flex items-center gap-3">
                        <div className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl p-4 shadow-2xl">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Last Update</p>
                            <p className="text-xs font-black text-gray-900">Just Now (0.02s ago)</p>
                        </div>
                    </div>
                </div>

                {/* Control Panel */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white border border-gray-100 p-8 rounded-[40px] shadow-2xl shadow-gray-200/50 flex-1">
                        <h2 className="text-xl font-black text-gray-900 tracking-tight mb-2">Remote Controls</h2>
                        <p className="text-sm font-medium text-gray-500 leading-relaxed mb-8">Execute remote security protocols to secure your device.</p>

                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => setIsRinging(!isRinging)}
                                className={`w-full group py-6 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all active:scale-95 border ${isRinging
                                    ? 'bg-red-500 border-red-500 text-white shadow-2xl shadow-red-500/40 ring-4 ring-red-500/20'
                                    : 'bg-white border-gray-100 text-gray-900 hover:border-red-500/30 hover:shadow-xl'
                                    }`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${isRinging ? 'bg-white/20' : 'bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-8 h-8 ${isRinging ? 'animate-bounce' : ''}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                    </svg>
                                </div>
                                <span className="font-black text-xs uppercase tracking-[0.2em]">{isRinging ? 'Ringing Device...' : 'Ring it'}</span>
                            </button>

                            <button className="w-full group py-6 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all active:scale-95 border border-gray-100 bg-white text-gray-900 hover:border-red-500/30 hover:shadow-xl">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center transition-all group-hover:bg-gray-900 group-hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0V10.5m-2.25 2.1c0-2.73 2.22-4.95 4.95-4.95h4.5c2.73 0 4.95 2.22 4.95 4.95v5.25c0 2.73-2.22 4.95-4.95 4.95h-4.5c-2.73 0-4.95-2.22-4.95-4.95v-5.25Z" />
                                    </svg>
                                </div>
                                <span className="font-black text-xs uppercase tracking-[0.2em]">Secure Lock</span>
                            </button>

                            <button className="w-full group py-6 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all active:scale-95 border border-gray-100 bg-white text-gray-900 hover:border-red-600/30 hover:shadow-xl">
                                <div className="w-14 h-14 bg-red-50/50 rounded-2xl flex items-center justify-center transition-all group-hover:bg-red-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-600/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-red-500 group-hover:text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.34 12m-4.72 0-.34-12M4.5 9h15M10.125 4.5h3.75m4.875 4.5H5.25m3.75 0V4.5c0-.621.504-1.125 1.125-1.125h4.125c.621 0 1.125.504 1.125 1.125V9M10.125 4.5V9h3.75V4.5" />
                                    </svg>
                                </div>
                                <span className="font-black text-xs uppercase tracking-[0.2em] text-red-600 group-hover:text-white">Erase Data</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-[40px] p-8 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 blur-[60px] rounded-full group-hover:bg-red-500/30 transition-all"></div>
                        <h3 className="text-lg font-black mb-4">Security Tip</h3>
                        <p className="text-xs font-medium text-gray-400 leading-relaxed mb-6">
                            If your device is stolen, immediately use the 'Secure Lock' feature to prevent unauthorized access to your private data and banking apps.
                        </p>
                        <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                            Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PlusIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

const MinusIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
);

export default memo(AntiTheft);
