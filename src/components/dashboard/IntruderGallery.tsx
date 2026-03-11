"use client";

import React, { memo } from 'react';

const intruderLogs = [
    {
        id: 1,
        image: '/intruder_1.png',
        date: 'Oct 24, 2026',
        time: '02:14 AM',
        location: 'Bedroom • Home',
        status: 'Identity Captured'
    },
    {
        id: 2,
        image: '/intruder_2.png',
        date: 'Oct 23, 2026',
        time: '11:45 AM',
        location: 'Main Office • Work',
        status: 'Unauthorized Motion'
    },
    {
        id: 3,
        image: '/intruder_1.png', // Reusing for mock variety
        date: 'Oct 22, 2026',
        time: '23:58 PM',
        location: 'Living Room • Home',
        status: 'Pattern Failed (3x)'
    },
    {
        id: 4,
        image: '/intruder_2.png',
        date: 'Oct 21, 2026',
        time: '09:12 AM',
        location: 'Parking Area • Public',
        status: 'Sim Removed'
    }
];

const IntruderGallery = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-3">Intruder Evidence Log</h1>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Visual Evidence • Captured by SafeOn Guard</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="px-6 py-3 bg-white border border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-red-500 hover:border-red-500/20 transition-all shadow-sm">
                        Export Log
                    </button>
                    <button className="px-6 py-3 bg-red-500 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white shadow-xl shadow-red-500/20 hover:bg-black transition-all">
                        Clear All Logs
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {intruderLogs.map((log) => (
                    <div key={log.id} className="group relative bg-white border border-gray-100 rounded-[40px] overflow-hidden shadow-2xl shadow-gray-200/50 hover:-translate-y-2 transition-all duration-500">
                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden bg-gray-900">
                            <img
                                src={log.image}
                                alt={`Intruder ${log.id}`}
                                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                            />
                            {/* Overlay Badges */}
                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                                <div className="px-3 py-1.5 bg-red-500/90 backdrop-blur-md rounded-full flex items-center gap-2 border border-white/20">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                                    <span className="text-[8px] font-black text-white uppercase tracking-widest leading-none">High Alert</span>
                                </div>
                                <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full flex items-center gap-2 border border-white/10">
                                    <span className="text-[8px] font-black text-white/80 uppercase tracking-widest leading-none">{log.time}</span>
                                </div>
                            </div>

                            {/* Action Icon */}
                            <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-500 shadow-2xl scale-50 group-hover:scale-100 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m-.707-1.907a4.5 4.5 0 1 1-6.364-6.364 4.5 4.5 0 0 1 6.364 6.364Zm7.662 4.588-2.12-2.121m-1.291-1.291L17.25 10.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{log.date}</p>
                                    <p className="text-lg font-black text-gray-900 tracking-tight leading-none group-hover:text-red-500 transition-colors">Incident #{log.id * 1024}</p>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-gray-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-red-50 group-hover:text-red-500 transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-inherit">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Location</p>
                                            <p className="text-[11px] font-black text-gray-700">{log.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-red-50 group-hover:text-red-500 transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-inherit">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Status</p>
                                            <p className="text-[11px] font-black text-red-600">{log.status}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-8 bg-gray-900 rounded-[40px] text-white flex items-center justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full group-hover:bg-red-500/20 transition-all"></div>
                <div>
                    <h4 className="text-xl font-black tracking-tight mb-2">Secure Cloud Sync Active</h4>
                    <p className="text-xs font-medium text-gray-400 max-w-lg leading-relaxed">Evidence images are encrypted and stored in adSky's security vault for 30 days. You can download high-resolution copies for local reporting.</p>
                </div>
                <button className="px-8 py-5 bg-white text-gray-900 font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-2xl">
                    View Archieve
                </button>
            </div>
        </div>
    );
};

export default memo(IntruderGallery);
