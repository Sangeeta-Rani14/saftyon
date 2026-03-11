"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '../../components/dashboard/Sidebar';
import TopBar from '../../components/dashboard/TopBar';

// Performance Optimization: Lazy loading the UserProfile component
const UserProfile = dynamic(() => import('../../components/UserProfile'), {
    ssr: false,
    loading: () => <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-black text-gray-900 uppercase tracking-widest animate-pulse">Accessing Secure Profile...</p>
        </div>
    </div>
});

const ProfilePage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Consistent Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 ml-72 flex flex-col min-h-screen">
                <TopBar />

                <div className="flex-1 p-8 overflow-y-auto">
                    <UserProfile />
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;
