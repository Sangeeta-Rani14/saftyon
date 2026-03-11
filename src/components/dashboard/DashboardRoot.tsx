"use client";

import React, { memo } from 'react';
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('./Sidebar'), { ssr: false });
const TopBar = dynamic(() => import('./TopBar'), { ssr: false });
const DeviceSafeBanner = dynamic(() => import('./DeviceSafeBanner'), { ssr: false });
const SecurityOverview = dynamic(() => import('./SecurityOverview'), { ssr: false });
const QuickActions = dynamic(() => import('./QuickActions'), { ssr: false });
const DeviceLocations = dynamic(() => import('./DeviceLocations'), { ssr: false });

const DashboardRoot = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar - Fixed Left */}
            <Sidebar />

            {/* Main Content - Pushed by Sidebar */}
            <main className="flex-1 ml-72 flex flex-col pt-20 transition-all duration-300 relative">
                {/* TopBar - Fixed at top, between sidebar and right edge */}
                <TopBar />

                {/* Scrollable Dashboard Area */}
                <div className="flex-1 p-10 overflow-y-auto w-full max-w-7xl mx-auto space-y-12 pb-20">
                    {/* Status Banner */}
                    <DeviceSafeBanner />

                    {/* Security Overview Module */}
                    <SecurityOverview />

                    {/* High Priority Actions Grid */}
                    <QuickActions />

                    {/* Map and Device Tracking */}
                    <DeviceLocations />
                </div>
            </main>
        </div>
    );
};

export default memo(DashboardRoot);
