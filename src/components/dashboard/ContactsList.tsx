"use client";

import React, { memo } from 'react';

const emergencyContacts = [
    {
        id: 1,
        name: "Sarah Sterling",
        phone: "+91 91234 56780",
        relation: "Family (Spouse)",
        status: "Active",
        lastSync: "2 mins ago"
    },
    {
        id: 2,
        name: "Marcus Kane",
        phone: "+91 82345 67891",
        relation: "Security Partner",
        status: "Away",
        lastSync: "15 mins ago"
    },
    {
        id: 3,
        name: "Elena Rossi",
        phone: "+91 73456 78902",
        relation: "Colleague",
        status: "Active",
        lastSync: "Just Now"
    },
    {
        id: 4,
        name: "John Miller",
        phone: "+91 64567 89013",
        relation: "Family (Brother)",
        status: "Offline",
        lastSync: "4 hours ago"
    },
    {
        id: 5,
        name: "Office Security HQ",
        phone: "+91 55678 90124",
        relation: "Corporate Support",
        status: "Active",
        lastSync: "Connected"
    }
];

const ContactsList = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-3">Emergency Responders</h1>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Manage Critical Safety Contacts • Max 5 Responders</p>
                </div>
                <button className="px-8 py-4 bg-red-500 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white shadow-xl shadow-red-500/20 hover:bg-black transition-all active:scale-95 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Modify Responder List
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {emergencyContacts.map((contact) => (
                    <div key={contact.id} className="group relative bg-white border border-gray-100 rounded-[40px] p-8 shadow-2xl shadow-gray-200/50 hover:border-red-500/20 transition-all duration-500 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            {/* Avatar / Icon */}
                            <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-gray-400 group-hover:bg-red-50 group-hover:text-red-500 transition-all duration-500 shadow-inner overflow-hidden relative">
                                <div className="text-2xl font-black">{contact.name.split(' ').map(n => n[0]).join('')}</div>
                                {/* Pulse Status */}
                                <div className={`absolute bottom-0 right-0 w-6 h-6 border-4 border-white rounded-full ${contact.status === 'Active' ? 'bg-green-500 animate-pulse' :
                                        contact.status === 'Away' ? 'bg-yellow-500' : 'bg-gray-300'
                                    }`}></div>
                            </div>

                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{contact.relation}</p>
                                <h3 className="text-xl font-black text-gray-900 tracking-tight mb-2">{contact.name}</h3>
                                <p className="text-sm font-bold text-gray-500">{contact.phone}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-3 text-right">
                            {/* <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Status</p>
                                <p className={`text-[11px] font-black uppercase tracking-widest ${contact.status === 'Active' ? 'text-green-600' :
                                        contact.status === 'Away' ? 'text-yellow-600' : 'text-gray-400'
                                    }`}>{contact.status} • {contact.lastSync}</p>
                            </div> */}

                            <div className="flex items-center gap-2">
                                <button className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H3.75A2.25 2.25 0 0 0 1.5 4.5v2.25Z" />
                                    </svg>
                                </button>
                                <button className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Status Card */}
                <div className="bg-gray-900 rounded-[40px] p-10 text-white relative overflow-hidden flex flex-col justify-between group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full group-hover:bg-red-500/20 transition-all"></div>
                    <div>
                        <h4 className="text-2xl font-black tracking-tight mb-4 leading-none">Global Safety Shield</h4>
                        <p className="text-xs font-medium text-gray-400 max-w-xs leading-relaxed">Your emergency responders are automatically notified during theft events, SIM removal, or when incorrect patterns are entered.</p>
                    </div>

                    <div className="flex items-center gap-4 mt-8">
                        <div className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[8px] font-black uppercase tracking-widest text-white/50 leading-none">Sync Active</span>
                        </div>
                        <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Protocol Ready</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ContactsList);
