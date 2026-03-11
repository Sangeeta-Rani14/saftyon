"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '@/components/dashboard/Sidebar';
import TopBar from '@/components/dashboard/TopBar';

const IntruderGallery = dynamic(() => import('@/components/dashboard/IntruderGallery'), {
    loading: () => (
        <div className="w-full h-[600px] bg-gray-50 animate-pulse rounded-[40px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Scanning Security Vault...</p>
            </div>
        </div>
    ),
    ssr: false
});

export default function IntruderPage() {
    return (
        <div className="min-h-screen bg-white flex">
            <Sidebar />
            <div className="flex-1 ml-72 flex flex-col min-h-screen">
                <TopBar />
                <main className="flex-1 p-10 mt-16">
                    <IntruderGallery />
                </main>
            </div>
        </div>
    );
}
