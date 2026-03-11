"use client";

import React, { memo, useState, useCallback } from 'react';
import Image from 'next/image';

const mapMarkers = [
    { id: 1, x: '45%', y: '60%', label: 'Home Base', status: 'Active' },
    { id: 2, x: '62%', y: '45%', label: 'Car Tracer', status: 'Active' },
    { id: 3, x: '30%', y: '75%', label: 'Hub Location', status: 'Disconnected' },
];

const DeviceLocations = () => {
    const [userPos, setUserPos] = useState<{ x: string, y: string } | null>(null);
    const [isLocating, setIsLocating] = useState(false);

    const findMe = useCallback(() => {
        setIsLocating(true);
        // Simulate a delay for high-tech feeling
        setTimeout(() => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    // Mapping actual lat/long to a static 2D image is symbolic here 
                    // We'll place it at a high-visibility spot for demonstration
                    setUserPos({ x: '52%', y: '58%' });
                    setIsLocating(false);
                }, () => {
                    setIsLocating(false);
                });
            } else {
                setIsLocating(false);
            }
        }, 1200);
    }, []);

    return (
        <div className="bg-white border border-gray-100 rounded-[32px] p-8 mt-10 shadow-sm relative overflow-hidden group">
            {/* Background Texture Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>

            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <h3 className="font-black text-gray-900 leading-none">Global Network</h3>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-100/50">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">3 Secure</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={findMe}
                        disabled={isLocating}
                        className="flex items-center gap-2 px-4 py-2 text-[10px] font-black text-white bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 rounded-xl shadow-lg shadow-blue-500/10 transition-all uppercase tracking-widest active:scale-95"
                    >
                        {isLocating ? (
                            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        )}
                        {isLocating ? 'Locating...' : 'Locate Me'}
                    </button>
                    <button className="text-[10px] font-black text-red-500 hover:text-red-600 transition-colors uppercase tracking-widest border border-red-100 px-4 py-2 rounded-xl bg-red-50/30">
                        Manage Network
                    </button>
                </div>
            </div>

            <div className="relative w-full aspect-[21/9] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-inner group/map">
                <Image
                    src="/security-map.png"
                    alt="Security Map"
                    fill
                    className="object-cover opacity-80 group-hover/map:opacity-90 transition-opacity duration-700"
                />

                {/* Device Markers */}
                {mapMarkers.map((marker) => (
                    <div
                        key={marker.id}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                        style={{ left: marker.x, top: marker.y }}
                    >
                        <div className="relative flex items-center justify-center">
                            <div className="w-10 h-10 bg-red-500/20 rounded-full animate-ping absolute"></div>
                            <div className={`w-3.5 h-3.5 border-2 border-white rounded-full shadow-lg z-10 transition-all duration-300 group-hover:scale-150 ${marker.status === 'Active' ? 'bg-red-500' : 'bg-gray-400'}`}></div>

                            <div className="absolute top-full mt-3 bg-white px-5 py-3 rounded-2xl shadow-2xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all pointer-events-none -translate-y-2 group-hover:translate-y-0 min-w-[140px] z-20 backdrop-blur-sm bg-white/95">
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-[11px] font-black text-gray-900 leading-none">{marker.label}</p>
                                    <span className={`text-[8px] font-black px-2 py-0.5 rounded-full ${marker.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                                        {marker.status}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-1.5 leading-none">
                                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Signal: Stable</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 leading-none">
                                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest leading-none">Last Checked: 2m ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* User Location Marker (Blue) */}
                {userPos && (
                    <div
                        className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer animate-in fade-in zoom-in duration-1000 z-30"
                        style={{ left: userPos.x, top: userPos.y }}
                    >
                        <div className="relative flex items-center justify-center">
                            {/* Inner pulsing ring */}
                            <div className="w-16 h-16 bg-blue-500/40 rounded-full animate-ping absolute"></div>
                            {/* Outer glow pulse */}
                            <div className="w-24 h-24 bg-blue-400/20 rounded-full animate-pulse absolute delay-300"></div>

                            {/* Main Marker Core */}
                            <div className="w-6 h-6 bg-blue-600 border-2 border-white rounded-full shadow-2xl shadow-blue-500/60 z-10 transition-all hover:scale-125 hover:rotate-12 flex items-center justify-center text-white ring-4 ring-blue-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                </svg>
                            </div>

                            {/* Visible Label */}
                            <div className="absolute bottom-full mb-4 bg-blue-600 px-4 py-2 rounded-xl shadow-2xl border border-blue-400 opacity-100 transition-all whitespace-nowrap z-40 transform translate-y-0 active:scale-105 pointer-events-auto cursor-default">
                                <div className="relative">
                                    <p className="text-[10px] font-black text-white leading-none mb-1 tracking-tighter">YOU ARE HERE</p>
                                    <div className="flex items-center gap-1.5 leading-none">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                                        <span className="text-[8px] font-black text-blue-100 uppercase tracking-widest leading-none">Live Sync Point</span>
                                    </div>
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-blue-600"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100/50">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Network Status</p>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-black text-gray-900 uppercase">Encrypted</span>
                        <span className="text-[10px] font-black text-green-500 bg-green-50 px-2 py-0.5 rounded-md uppercase">V-L2-Secure</span>
                    </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100/50">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Connected Devices</p>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-black text-gray-900 uppercase">14 Active</span>
                        <span className="text-[10px] font-black text-red-500 bg-red-50 px-2 py-0.5 rounded-md uppercase">+2 Today</span>
                    </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100/50">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Encryption Key</p>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-black text-gray-900 uppercase font-mono">256-AES-CFB</span>
                        <span className="text-[10px] font-black text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md uppercase">Locked</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(DeviceLocations);

