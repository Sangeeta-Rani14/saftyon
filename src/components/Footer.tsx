"use client";

import React, { memo } from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        © 2026 SAFEON SECURITY BY ADSKY SOLUTION. ALL RIGHTS RESERVED.
                    </p>

                    <div className="flex items-center gap-8">
                        <a href="#" className="text-xs font-bold text-gray-400 hover:text-gray-600 uppercase tracking-widest transition-colors">Privacy Policy</a>
                        <a href="#" className="text-xs font-bold text-gray-400 hover:text-gray-600 uppercase tracking-widest transition-colors">Terms of Service</a>
                        <a href="#" className="text-xs font-bold text-gray-400 hover:text-gray-600 uppercase tracking-widest transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);
