"use client";

import React from 'react';

const Logo = ({ className = "", variant = "default" }: { className?: string, variant?: "default" | "white" }) => {
    const isWhite = variant === "white";

    return (
        <div className={`flex items-center gap-0 tracking-tight select-none ${className}`}>
            <span className={`text-2xl font-black ${isWhite ? 'text-white' : 'text-[#1a2b3c]'}`}>Safe</span>
            <div className="relative flex items-center justify-center mx-0.5">
                {/* Signal Arcs */}
                <svg
                    className={`absolute -top-4 w-6 h-6 animate-pulse ${isWhite ? 'text-red-400' : 'text-[#ef4444]'}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                >
                    <path d="M8 6c1.5-1.5 6.5-1.5 8 0" />
                    <path d="M6 4c2.5-2.5 9.5-2.5 12 0" />
                </svg>

                {/* Power Icon 'O' */}
                <div className={`w-6 h-6 rounded-full border-[3px] flex items-center justify-center relative ${isWhite ? 'border-red-400' : 'border-[#ef4444]'}`}>
                    <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-3 rounded-full border-2 ${isWhite ? 'bg-red-400 border-gray-900' : 'bg-[#ef4444] border-white'}`}></div>
                </div>
            </div>
            <span className={`text-2xl font-black ml-0.5 ${isWhite ? 'text-red-400' : 'text-[#ef4444]'}`}>n</span>
        </div>
    );
};

export default Logo;
