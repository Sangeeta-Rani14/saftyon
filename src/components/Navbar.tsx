"use client";

import React, { memo } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center group transition-all active:scale-95">
                        <Logo className="scale-75 origin-left" />
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors">Solutions</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors">Services</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors">About Us</a>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors">Contact</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="px-5 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-sm transition-all active:scale-95">
                            Sign Up
                        </Link>
                        <Link href="/login" className="px-5 py-2 text-sm font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-all active:scale-95 hover:border-red-500/20 hover:text-red-500">
                            Already User? Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default memo(Navbar);
