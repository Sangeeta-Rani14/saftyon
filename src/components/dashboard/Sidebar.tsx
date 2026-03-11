"use client";

import React, { memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';

const navItems = [
    {
        id: 'Home', label: 'Home', path: '/dashboard', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        )
    },
    {
        id: 'Anti-Theft', label: 'Anti-Theft', path: '/dashboard/anti-theft', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
        )
    },
    {
        id: 'Devices', label: 'Devices', path: '#', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        )
    },
    {
        id: 'Vehicle Safety', label: 'Vehicle Safety', path: '#', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.164a2.25 2.25 0 0 0-.57-1.515l-2.225-2.553a2.25 2.25 0 0 0-1.715-.746H11.25m1.125 12h-11.25m11.25-7.5H4.5m10.5 0h2.25m-15 0v3.75m11.25-3.75v3.75" />
            </svg>
        )
    },
    {
        id: 'Intruder', label: 'Intruder', path: '/dashboard/intruder', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        )
    },
    {
        id: 'Contacts', label: 'Contacts', path: '/dashboard/contacts', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        )
    },
    {
        id: 'Status', label: 'Status', path: '/dashboard/status', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m0-5.17L12 2.25 9 4.547m0 14.908L12 21.75l3-2.295" />
            </svg>
        )
    },
    {
        id: 'Complaints', label: 'Complaints', path: '/dashboard/complaints', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
        )
    },
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="w-72 bg-white h-screen border-r border-gray-100 flex flex-col pt-8 pb-10 px-6 fixed left-0 top-0 z-40">
            <div className="flex flex-col gap-1 mb-10 pl-2">
                <Logo className="scale-75 origin-left mb-2" />
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Your safety, our priority</p>
            </div>

            <nav className="flex-1 flex flex-col gap-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.id}
                            href={item.path}
                            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-bold text-sm ${isActive
                                ? 'bg-red-500 text-white shadow-lg shadow-red-500/20'
                                : 'text-gray-500 hover:text-red-500 hover:bg-red-50 text-gray-400 group-hover:text-red-500'
                                }`}
                        >
                            <span className={isActive ? 'text-white' : 'text-gray-400'}>
                                {item.icon}
                            </span>
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <Link 
                href="/dashboard/upgrade"
                className="w-full bg-red-500 hover:bg-red-600 px-6 py-4 rounded-xl text-white font-bold text-sm shadow-xl shadow-red-500/10 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
                Upgrade Plan
            </Link>
        </aside>
    );
};

export default memo(Sidebar);
