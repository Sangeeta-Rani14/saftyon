"use client";

import React, { memo } from 'react';

const actions = [
    {
        id: 'sos', label: 'SOS', sub: 'EMERGENCY', color: 'red', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
        )
    },
    {
        id: 'lock', label: 'Lock', sub: 'SECURE HOME', color: 'red', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0V10.5m-2.25 2.1c0-2.73 2.22-4.95 4.95-4.95h4.5c2.73 0 4.95 2.22 4.95 4.95v5.25c0 2.73-2.22 4.95-4.95 4.95h-4.5c-2.73 0-4.95-2.22-4.95-4.95v-5.25Z" />
            </svg>
        )
    },
    {
        id: 'siren', label: 'Siren', sub: 'ALERT ON', color: 'red', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
        )
    },
    {
        id: 'stop', label: 'Stop Alarm', sub: 'DEACTIVATE', color: 'red', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 0 1 0 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 0 1 0 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 48.318 0 0 1-1.414-1.414m-1.414-5.656a9 9 0 0 1 1.414-1.414M9 10.5h.008v.008H9V10.5Z" />
            </svg>
        )
    },
];

const QuickActions = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {actions.map((action) => (
                <button
                    key={action.id}
                    className="flex flex-col items-center justify-center gap-4 p-8 bg-white border border-gray-100 rounded-[32px] hover:shadow-xl hover:shadow-red-500/5 transition-all active:scale-95 group"
                >
                    <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform shadow-inner shadow-red-500/5 border border-red-100/30">
                        {action.icon}
                    </div>
                    <div className="text-center">
                        <h3 className="font-black text-gray-900 leading-none mb-1">{action.label}</h3>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">{action.sub}</p>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default memo(QuickActions);
