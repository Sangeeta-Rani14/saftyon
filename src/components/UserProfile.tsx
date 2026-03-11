"use client";

import React, { memo } from 'react';

const UserProfile = () => {
    const userData = {
        name: "Alex Sterling",
        phone: "+1 (555) 942-0318",
        email: "alex.sterling@safeon.secure",
        place: "Downtown Tech District",
        state: "California, USA",
        emergencyContact: {
            name: "Sarah Sterling",
            phone: "+1 (555) 123-4567",
            relation: "Spouse"
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-10 px-6">
            {/* Header / Brand Identity */}
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-1">Security Profile</h1>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Authorized Personnel Access Only</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-2xl">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Verified Account</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Avatar & Quick Info */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm flex flex-col items-center text-center">
                        <div className="w-32 h-32 bg-gray-50 rounded-full border-4 border-white shadow-xl mb-6 relative group overflow-hidden">
                            <img
                                src="https://ui-avatars.com/api/?name=Alex+Sterling&background=ef4444&color=fff&size=200"
                                alt="User Avatar"
                                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Edit Photo</span>
                            </div>
                        </div>
                        <h2 className="text-xl font-black text-gray-900 leading-tight">{userData.name}</h2>
                        <p className="text-sm font-bold text-blue-500 mb-6 uppercase tracking-widest text-[10px]">Tier 3 Administrator</p>

                        <div className="w-full pt-6 border-t border-gray-50 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Master Key</span>
                                <span className="text-[10px] font-black text-gray-900">#SO-9420</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Joined</span>
                                <span className="text-[10px] font-black text-gray-900">Oct 2025</span>
                            </div>
                        </div>
                    </div>

                    <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-gray-900/10 hover:bg-black transition-all active:scale-95">
                        Download Security Badge
                    </button>
                </div>

                {/* Right Column: Detailed Information */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Personal Information */}
                    <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>

                        <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 bg-red-50 rounded-xl flex items-center justify-center text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Account Details
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                                <p className="text-sm font-bold text-gray-900 border-b border-gray-50 pb-2">{userData.name}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                                <p className="text-sm font-bold text-gray-900 border-b border-gray-50 pb-2">{userData.phone}</p>
                            </div>
                            <div className="space-y-1 md:col-span-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                                <p className="text-sm font-bold text-gray-900 border-b border-gray-50 pb-2">{userData.email}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Registered Place</label>
                                <p className="text-sm font-bold text-gray-900 border-b border-gray-50 pb-2">{userData.place}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Current State</label>
                                <p className="text-sm font-bold text-gray-900 border-b border-gray-50 pb-2">{userData.state}</p>
                            </div>
                        </div>
                    </div>

                    {/* Emergency Contacts */}
                    <div className="bg-red-500/5 border border-red-100 rounded-[32px] p-8 shadow-sm relative overflow-hidden group">
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-red-500/10 blur-3xl rounded-full"></div>

                        <h3 className="text-sm font-black text-red-600 uppercase tracking-widest mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 bg-red-500 text-white rounded-xl flex items-center justify-center animate-pulse">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a1.35 1.35 0 0 1-1.394 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
                            </span>
                            Emergency Protocols
                        </h3>

                        <div className="bg-white border border-red-50 rounded-2xl p-6 relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-xs font-black text-gray-900 mb-1">{userData.emergencyContact.name}</p>
                                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-50 px-2 py-0.5 rounded-md">{userData.emergencyContact.relation}</span>
                                </div>
                                <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l.515 2.061c.223.89-.312 1.815-1.17 2.14l-2.335.876a13.137 13.137 0 0 0 5.666 5.666l.876-2.335c.325-.858 1.25-1.393 2.14-1.17l2.061.515c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-2.25a16.5 16.5 0 0 1-16.5-16.5V4.5Z" />
                                    </svg>
                                </div>
                                <span className="font-mono text-xs font-black text-gray-900 tracking-widest">{userData.emergencyContact.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(UserProfile);
