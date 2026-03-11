"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Performance Optimization: Lazy loading the main DashboardRoot
const DashboardRoot = dynamic(() => import('../../components/dashboard/DashboardRoot'), {
    ssr: false,
    loading: () => <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-black text-gray-900 uppercase tracking-widest animate-pulse">Initializing Secure Dashboard...</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Scanning for devices and threats</p>
        </div>
    </div>
});

export default function DashboardPage() {
    return <DashboardRoot />;
}
