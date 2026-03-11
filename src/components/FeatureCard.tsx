"use client";

import React, { memo } from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    tag?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, tag }) => {
    return (
        <div className="group relative bg-white border border-gray-100 rounded-[32px] p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-red-500/10 transition-colors duration-500"></div>

            <div className="relative z-10">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-red-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-500/30">
                    {icon}
                </div>

                {tag && (
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
                        {tag}
                    </span>
                )}

                <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight group-hover:text-red-600 transition-colors">
                    {title}
                </h3>

                <p className="text-sm font-medium text-gray-500 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 transition-all duration-500 group-hover:w-full"></div>
        </div>
    );
};

export default memo(FeatureCard);
