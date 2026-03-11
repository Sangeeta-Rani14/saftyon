"use client";

import React, { memo } from 'react';
import Image from 'next/image';

const HeroLeft = () => {
    return (
        <div className="flex flex-col justify-center items-center px-10 py-20 bg-[#f9fafb]">
            <div className="flex flex-col gap-6 max-w-xl">
                <div className="inline-flex items-center self-start px-4 py-1.5 rounded-full bg-red-50 text-red-500 font-bold text-xs uppercase tracking-wider">
                    Security Simplified
                </div>

                <h1 className="text-6xl font-black text-gray-900 leading-tight">
                    Secure Your World with <span className="text-red-500">SafeOn</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                    Advanced security solutions tailored for your peace of mind. Experience the next generation of protection with our integrated smart systems.
                </p>

                <div className="flex flex-wrap gap-8 mt-10">
                    <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-red-500 border border-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Encrypted Data</h3>
                            <p className="text-sm text-gray-500 max-w-[150px]">Bank-level security protocols.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-red-500 border border-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Real-time Alerts</h3>
                            <p className="text-sm text-gray-500 max-w-[150px]">Instant updates on all devices.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 relative w-full h-[300px] overflow-hidden rounded-2xl shadow-2xl border border-gray-100">
                    <Image
                        src="/hero-laptop.png"
                        alt="Security Dashboard Mockup"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(HeroLeft);
