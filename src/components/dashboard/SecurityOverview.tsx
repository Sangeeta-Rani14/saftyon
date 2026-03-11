"use client";

import React, { memo } from 'react';
import Image from 'next/image';

const SecurityOverview = () => {
    return (
        <div className="flex flex-col gap-8 mb-10">
            <div className="flex justify-between items-center px-4">
                <h2 className="text-2xl font-black text-gray-900 leading-none">Security Overview</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
                {/* Main Card (Hero) */}
                <div className="lg:col-span-2 relative h-[380px] bg-gray-900 rounded-[40px] overflow-hidden group shadow-2xl shadow-red-500/10 border border-gray-100 hover:scale-[1.01] transition-transform duration-500">
                    <Image
                        src="/hero-laptop.png"
                        alt="Advanced Protection"
                        fill
                        className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-[1500ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent flex flex-col justify-end p-10 gap-3">
                        <div className="inline-flex items-center self-start gap-2 bg-red-500/20 px-4 py-1.5 rounded-full border border-red-500/20 backdrop-blur-md">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-sm shadow-red-500"></div>
                            <span className="text-[10px] font-black text-red-500 uppercase tracking-widest leading-none">Live Monitoring</span>
                        </div>
                        <h3 className="text-3xl font-black text-white leading-tight pr-10">
                            Advanced Protection Enabled
                        </h3>
                        <p className="text-md font-medium text-gray-300 leading-relaxed max-w-lg mb-6 line-clamp-2">
                            Our AI-driven system is scanning your perimeter for any unusual activity. Stay protected 24/7 with SafeOn professional security.
                        </p>
                        <button className="self-start px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-black rounded-2xl shadow-xl transition-all active:scale-95 text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                            View Reports
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Side Cards Stack */}
                <div className="flex flex-col gap-6">
                    {/* Real-time Alerts Card */}
                    <div className="grow bg-red-50/50 border border-red-100/50 rounded-[40px] p-8 flex flex-col gap-4 group transition-all hover:bg-white hover:shadow-xl hover:shadow-red-500/5 cursor-pointer">
                        <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform shadow-inner shadow-red-500/5 border border-red-100/30">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-black text-gray-900 leading-tight pr-6 mb-1">Real-time Alerts</h3>
                            <p className="text-[12px] font-bold text-gray-400 leading-relaxed leading-[1.45] line-clamp-2">Instant notifications for every sensor trigger directly to your phone.</p>
                        </div>
                    </div>

                    {/* System Health Card */}
                    <div className="grow bg-gray-900 rounded-[40px] p-8 flex flex-col gap-4 group transition-all hover:shadow-2xl hover:shadow-gray-900/10 cursor-pointer">
                        <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform shadow-inner shadow-red-500/5 border border-red-100/30">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-black text-white leading-tight pr-6 mb-1">System Health</h3>
                            <p className="text-[12px] font-bold text-gray-400 leading-relaxed leading-[1.45] line-clamp-2">All 14 connected devices are operating at peak efficiency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(SecurityOverview);
