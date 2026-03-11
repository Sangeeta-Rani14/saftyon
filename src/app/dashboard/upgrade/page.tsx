"use client";

import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import TopBar from '@/components/dashboard/TopBar';
import Link from 'next/link';

const pricingPlans = [
    {
        name: 'Gold',
        price: '399',
        description: 'Essential security for individuals who want core protection.',
        features: [
            'Basic Anti-Theft Protection',
            '24/7 Automated Monitoring',
            '1 Connected Device',
            'Email Alerts',
            'Standard Response Time'
        ],
        color: 'from-amber-400 to-yellow-600',
        textColor: 'text-amber-600',
        shadowColor: 'shadow-amber-500/20',
        buttonColor: 'bg-amber-500 hover:bg-amber-600',
        popular: false
    },
    {
        name: 'Platinum',
        price: '499',
        description: 'Advanced guard for those who need higher level of safety.',
        features: [
            'All Gold Features',
            'Priority Support Access',
            '3 Connected Devices',
            'Cloud Incident Storage',
            'SMS & Push Notifications',
            'Geo-fencing Alerts'
        ],
        color: 'from-slate-300 to-slate-500',
        textColor: 'text-slate-600',
        shadowColor: 'shadow-slate-500/20',
        buttonColor: 'bg-slate-600 hover:bg-slate-700',
        popular: true
    },
    {
        name: 'Diamond',
        price: '599',
        description: 'The ultimate security experience with zero compromise.',
        features: [
            'All Platinum Features',
            'Personal Security Advisor',
            'Unlimited Devices',
            'Real-time Police Integration',
            'Identity Theft Protection',
            'Premium 1-on-1 Support'
        ],
        color: 'from-cyan-400 to-blue-600',
        textColor: 'text-cyan-600',
        shadowColor: 'shadow-cyan-500/20',
        buttonColor: 'bg-cyan-600 hover:bg-cyan-700',
        popular: false
    }
];

export default function UpgradePage() {
    return (
        <div className="min-h-screen bg-gray-50/50 flex">
            <Sidebar />
            <div className="flex-1 ml-72 flex flex-col min-h-screen">
                <TopBar />
                <main className="flex-1 p-10 mt-16 overflow-y-auto">
                    <div className="flex flex-col gap-12 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="text-center space-y-4">
                            <h1 className="text-4xl font-black text-gray-900 tracking-tight leading-none">Elevate Your Security</h1>
                            <p className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.3em]">Choose the plan that fits your safety needs</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {pricingPlans.map((plan, index) => (
                                <div 
                                    key={plan.name}
                                    style={{ animationDelay: `${index * 150}ms` }}
                                    className={`relative group bg-white rounded-[40px] p-8 transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col ${plan.popular ? 'ring-2 ring-red-500 ring-offset-4' : ''} animate-in fade-in slide-in-from-bottom-4 fill-mode-both`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-lg z-10">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="space-y-6 flex-1">
                                        <div className="space-y-2">
                                            <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${plan.textColor}`}>
                                                {plan.name} Plan
                                            </span>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl font-black text-gray-900 leading-none">₹{plan.price}</span>
                                                <span className="text-gray-400 text-sm font-bold">/mo</span>
                                            </div>
                                            <p className="text-gray-500 text-xs font-medium leading-relaxed">
                                                {plan.description}
                                            </p>
                                        </div>

                                        <div className="h-px w-full bg-gray-100" />

                                        <ul className="space-y-4">
                                            {plan.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-3">
                                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br ${plan.color} shadow-lg ${plan.shadowColor}`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-3 h-3">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-[13px] font-bold text-gray-700 tracking-tight">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button className={`w-full mt-10 py-5 rounded-2xl text-white font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-xl ${plan.buttonColor} ${plan.shadowColor}`}>
                                        Get Started
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div 
                            style={{ animationDelay: '600ms' }}
                            className="bg-red-500 overflow-hidden relative rounded-[40px] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 group animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/20 transition-all duration-700" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl group-hover:bg-black/20 transition-all duration-700" />
                            
                            <div className="relative z-10 space-y-2">
                                <h3 className="text-2xl font-black tracking-tight leading-none">Need a Custom Solution?</h3>
                                <p className="text-[10px] font-bold text-white/70 uppercase tracking-[0.2em]">For large organizations and enterprise security</p>
                            </div>
                            
                            <button className="relative z-10 bg-white text-red-500 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-50 transition-all active:scale-95 shadow-xl shadow-black/10">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
