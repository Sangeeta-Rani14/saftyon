"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '@/components/dashboard/Sidebar';
import TopBar from '@/components/dashboard/TopBar';

const ComplaintForm = dynamic(() => import('@/components/dashboard/ComplaintForm'), {
    loading: () => (
        <div className="w-full h-[500px] bg-gray-50 animate-pulse rounded-[48px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Opening Support Channel...</p>
            </div>
        </div>
    ),
    ssr: false
});

export default function ComplaintsPage() {
    return (
        <div className="min-h-screen bg-gray-50/50 flex">
            <Sidebar />
            <div className="flex-1 ml-72 flex flex-col min-h-screen">
                <TopBar />
                <main className="flex-1 p-10 mt-16 overflow-y-auto">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-3">Customer Support</h1>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Resolving Issues with adSky solution Expertise</p>
                        </div>

                        <ComplaintForm />
                    </div>
                </main>
            </div>
        </div>
    );
}
