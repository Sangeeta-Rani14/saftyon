"use client";

import React, { memo } from 'react';

const DeviceSafeBanner = () => {
    return (
        <div className="bg-white px-8 py-5 border border-gray-100 rounded-[32px] mb-10 flex items-center justify-between group shadow-sm hover:shadow-lg hover:shadow-green-500/5 transition-all">
            <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 shadow-inner shadow-green-500/10 border border-green-100/50 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-lg font-black text-gray-900 leading-none mb-1">Device Safe</h3>
                    <p className="text-sm font-bold text-gray-400 leading-none">Your system is currently protected and no threats were detected.</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-[12px] font-bold text-green-500 uppercase tracking-widest leading-none">Protected</span>
                <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer shadow-inner shadow-black/10 transition-colors">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md"></div>
                </div>
            </div>
        </div>
    );
};

export default memo(DeviceSafeBanner);
