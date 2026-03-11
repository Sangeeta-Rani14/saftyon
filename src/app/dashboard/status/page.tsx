"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import TopBar from '@/components/dashboard/TopBar';

const initialSettings = [
    {
        id: 'alerts',
        title: 'Security Alerts',
        description: 'Receive real-time notifications for suspicious activities.',
        enabled: true,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
        )
    },
    {
        id: 'anti-theft',
        title: 'Anti-Theft Protection',
        description: 'Lock device and sound alarm if unauthorized access detected.',
        enabled: true,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
        )
    },
    {
        id: 'sos',
        title: 'Emergency SOS',
        description: 'Quickly alert emergency services and emergency contacts.',
        enabled: false,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.213m5.105-9.18c-.253-.962-.584-1.892-.985-2.783a1.125 1.125 0 0 1 .463-1.511l.657-.38c.551-.318 1.26-.117 1.527.461 1.283 2.785 2.053 5.756 2.216 8.856m-9.18 2.368a19.615 19.615 0 0 1 3.33-2.368m5.85 2.368a19.615 19.615 0 0 1-3.33-2.368m3.33 2.368c.498.305.987.637 1.462.994.524.394.54 1.16.033 1.57l-.571.462c-.46.373-1.126.312-1.523-.141a11.321 11.321 0 0 1-1.405-1.885m0-4.32a11.321 11.321 0 0 1 1.405-1.885c.397-.453 1.062-.514 1.523-.141l.571.462c.507.41.491 1.176-.033 1.57a12.1 12.1 0 0 1-1.462.994" />
            </svg>
        )
    },
    {
        id: 'backup',
        title: 'Cloud Backup',
        description: 'Automatically sync security logs and footage to the cloud.',
        enabled: true,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
            </svg>
        )
    },
    {
        id: 'usb',
        title: 'USB Debugging',
        description: 'Secure USB connection and prevent data extraction.',
        enabled: false,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5m-15 4.5H3m18 0h-1.5m-15 4.5H3m18 0h-1.5m-1.5-13.5v1.5m0 12v1.5m-9-15v1.5m0 12v1.5M5.25 5.25l.75.75m12.75-1.5-.75.75m-12 11.25.75.75m12.75-1.5-.75.75" />
            </svg>
        )
    },
    {
        id: 'file-manager',
        title: 'File Manager Access',
        description: 'Restrict unauthorized apps from browsing your files.',
        enabled: true,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.625-1.5h.375a.375.375 0 1 1 0 .75h-.375a.375.375 0 1 1 0-.75Zm0 3.75h.375a.375.375 0 1 1 0 .75h-.375a.375.375 0 1 1 0-.75Zm6 0h.375a.375.375 0 1 1 0 .75h-.375a.375.375 0 1 1 0-.75Z" />
            </svg>
        )
    },
    {
        id: 'camera',
        title: 'Camera Protection',
        description: 'Block apps from accessing camera without explicit permission.',
        enabled: true,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
        )
    }
];

export default function StatusPage() {
    const [settings, setSettings] = useState(initialSettings);

    const toggleSetting = (id: string) => {
        setSettings(prev => prev.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s));
    };

    return (
        <div className="min-h-screen bg-gray-50/50 flex transition-all duration-500">
            <Sidebar />
            <div className="flex-1 ml-72 flex flex-col min-h-screen">
                <TopBar />
                <main className="flex-1 p-10 mt-16 overflow-y-auto">
                    <div className="max-w-4xl mx-auto space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-10">
                            <div>
                                <h1 className="text-4xl font-black text-gray-900 tracking-tight leading-none mb-4">Device Status</h1>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Configure and monitor your mobile security layers</p>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
                                <span className="flex h-3 w-3 relative ml-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-[11px] font-black text-gray-900 uppercase tracking-widest pr-4">System Online</span>
                            </div>
                        </div>

                        {/* Status Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { label: 'Battery', value: '82%', color: 'text-green-500' },
                                { label: 'Storage', value: '45 GB Free', color: 'text-blue-500' },
                                { label: 'Last Sync', value: '2m ago', color: 'text-orange-500' },
                                { label: 'Threats', value: '0 Clean', color: 'text-red-500' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 group-hover:text-red-500 transition-colors">{stat.label}</p>
                                    <p className={`text-xl font-black ${stat.color}`}>{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Settings Section */}
                        <div className="bg-white rounded-[48px] p-10 border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-black text-gray-900 tracking-tight">Mobile Security Settings</h2>
                            </div>

                            <div className="space-y-4">
                                {settings.map((setting) => (
                                    <div 
                                        key={setting.id}
                                        className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-[32px] border border-gray-50 hover:border-red-100 hover:bg-red-50/10 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-6 mb-4 md:mb-0">
                                            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                                {setting.icon}
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-[15px] font-black text-gray-900 tracking-tight leading-none group-hover:text-red-500 transition-colors uppercase">{setting.title}</h3>
                                                <p className="text-xs font-bold text-gray-400 group-hover:text-gray-500 transition-colors">{setting.description}</p>
                                            </div>
                                        </div>

                                        <button 
                                            onClick={() => toggleSetting(setting.id)}
                                            className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-500 focus:outline-none ${setting.enabled ? 'bg-red-500' : 'bg-gray-200'}`}
                                        >
                                            <span className="sr-only">Toggle {setting.title}</span>
                                            <span
                                                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-500 shadow-sm ${setting.enabled ? 'translate-x-7' : 'translate-x-1'}`}
                                            />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Diagnostic Section */}
                        <div className="bg-gray-900 rounded-[48px] p-10 text-white overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-all duration-700 group-hover:bg-red-500/20" />
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-md">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Diagnostic Tool</span>
                                    </div>
                                    <h3 className="text-3xl font-black tracking-tight leading-none">Security Audit Required</h3>
                                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest max-w-md">Your last full system scan was 12 days ago. Run a diagnostic check now to ensure all layers are functioning correctly.</p>
                                </div>
                                <button className="bg-red-500 hover:bg-red-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-2xl shadow-red-500/20 whitespace-nowrap">
                                    Run Deep Scan
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
