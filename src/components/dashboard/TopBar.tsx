"use client";

import React, { memo } from 'react';
import Link from 'next/link';

const TopBar = () => {
    return (
        <header className="fixed top-0 right-0 left-72 bg-gray-50/80 backdrop-blur-md h-20 flex items-center justify-between px-10 z-30 transition-all border-b border-gray-100/50">
            <div className="relative flex-1 max-w-2xl">
                <input
                    type="text"
                    placeholder="Search security logs..."
                    className="w-full bg-white/50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-500/30 transition-all"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative p-2 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
                </button>

                <div className="flex items-center gap-3">
                    <Link href="/profile" className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 overflow-hidden shadow-sm hover:ring-4 hover:ring-red-500/10 transition-all active:scale-95">
                        <img src="https://ui-avatars.com/api/?name=Alex+Sterling&background=ef4444&color=fff" alt="User Profile" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default memo(TopBar);
