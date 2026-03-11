"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

// Performance Optimization: Lazy loading sections
const FeatureCard = dynamic(() => import('../components/FeatureCard'), { ssr: true });

const features = [
  {
    title: "Intruder Alert",
    description: "Captures a secret photo and records audio instantly when someone tries to unlock your device unauthorized.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
    tag: "Pro Protection"
  },
  {
    title: "Wrong Pattern Siren",
    description: "Triggers a high-decibel secure alarm if a wrong pattern or password is entered multiple times.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
    ),
    tag: "Instant Response"
  },
  {
    title: "Live GPS Tracking",
    description: "Pinpoint your device location anywhere in the world with real-time updates and movement logs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    tag: "Global Network"
  },
  {
    title: "Remote SIM Lock",
    description: "Instantly lock your SIM card and prevent data misuse even if the intruder changes the card.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.57a4.5 4.5 0 1 1 5.9 5.9l-5.9-5.9ZM8.037 3.06a30.231 30.231 0 0 0-4.967.683 2.25 2.25 0 0 0-1.82 2.152V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175" />
      </svg>
    ),
    tag: "Data Shield"
  },
  {
    title: "Emergency SOS",
    description: "Send instant distress signals and location details to your pre-set emergency contacts with one click.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.007.51.01.77.01h.75a6.75 6.75 0 1 0 0-13.5h-.75c-.26 0-.517.003-.77.01m0 9.18c-.28.397-.49.861-.62 1.353-.13.492-.19 1-.18 1.517.01.517.1 1.02.26 1.493l.36 1.08..." />
      </svg>
    ),
    tag: "Public Safety"
  },
  {
    title: "USB Shield",
    description: "Stop unauthorized data transfer through USB charging points in public places with data-block technology.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.164a2.25 2.25 0 0 0-.57-1.515l-2.225-2.553a2.25 2.25 0 0 0-1.715-.746H11.25m1.125 12h-11.25m11.25-7.5H4.5m10.5 0h2.25m-15 0v3.75" />
      </svg>
    ),
    tag: "Hardware Guard"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-500/5 blur-[120px] rounded-full -mr-96 -mt-96 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -ml-96 -mb-96 text-transparent">.</div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <span className="text-[10px] font-black text-red-600 uppercase tracking-widest leading-none">Global Protection Live</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-8">
                Secure Your <span className="text-red-500">World</span> <span className="block text-gray-300">With SafeOn</span>
              </h1>
              <p className="text-lg font-medium text-gray-500 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Advanced mobile anti-theft solutions designed for the modern era. Protect your data, track your device, and stay safe with our all-in-one security ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  href="/login"
                  className="px-8 py-5 bg-red-500 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-red-500/20 hover:bg-black transition-all active:scale-95"
                >
                  Get Started Free
                </Link>
                <a
                  href="#features"
                  className="px-8 py-5 border border-gray-100 bg-white text-gray-900 font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-gray-50 transition-all"
                >
                  Explore Features
                </a>
              </div>

              <div className="mt-16 pt-10 border-t border-gray-50 flex items-center justify-center lg:justify-start gap-12">
                <div>
                  <p className="text-2xl font-black text-gray-900 leading-none">0.02s</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Response Time</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-gray-900 leading-none">99.9%</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Uptime Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-gray-900 leading-none">24/7</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Active Monitoring</p>
                </div>
              </div>
            </div>

            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-red-500 rotate-6 rounded-[48px] opacity-10 group-hover:rotate-12 transition-transform duration-700"></div>
              <div className="relative bg-white border border-gray-100 rounded-[48px] p-4 shadow-2xl shadow-red-500/10 transition-transform duration-700 hover:-translate-y-4 hover:-rotate-2">
                <img
                  src="/security-map.png"
                  alt="Live Tracking Demonstration"
                  className="w-full h-auto rounded-[32px] shadow-sm"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-red-500/20 rounded-full animate-ping absolute"></div>
                  <div className="relative w-8 h-8 bg-red-500 border-4 border-white rounded-full shadow-lg z-10"></div>
                </div>

                <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 18c-1.11 0-2.013-1.802-2.013-4.035 0-2.233.903-4.035 2.013-4.035" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-black text-gray-900 leading-tight">Live Tracker Active</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Status: Fully Encrypted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight leading-none mb-6">
              Next-Gen <span className="text-red-500">Security</span> Features
            </h2>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Everything you need to keep your mobile world safe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <FeatureCard
                key={idx}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                tag={feature.tag}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About / Impact Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full text-transparent">.</div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] mb-4 block">Our Story & Dedication</span>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tighter">
                Securing people who want to <span className="text-red-500 underline decoration-red-200 decoration-8 underline-offset-4">take action</span> against mobile theft.
              </h2>
              <p className="text-lg font-medium text-gray-500 leading-relaxed mb-10">
                At SafeOn, we believe that security shouldn't be a luxury. We've developed a robust ecosystem that combines hardware-level guardrails with intelligent software monitoring to ensure that even if your device leaves your pocket, it never leaves your control.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex-shrink-0 flex items-center justify-center text-red-500 font-black">1</div>
                  <div>
                    <p className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">Mission Driven</p>
                    <p className="text-xs text-gray-500 font-medium">Empowering users with tools that deter theft before it happens.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex-shrink-0 flex items-center justify-center text-blue-500 font-black">2</div>
                  <div>
                    <p className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">Quality Assurance</p>
                    <p className="text-xs text-gray-500 font-medium">Every line of code is optimized for reliability and zero-latency triggers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-[48px] p-12 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full animate-pulse transition-all"></div>

              <h3 className="text-2xl font-black mb-8 leading-tight tracking-tight">Become a part of the <span className="text-red-500">SafeOn Network</span></h3>

              <div className="space-y-8 mb-12">
                <div>
                  <p className="text-4xl lg:text-6xl font-black text-white leading-none">750k+</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">Active SafeOn Users</p>
                </div>
                <div>
                  <p className="text-4xl lg:text-6xl font-black text-white leading-none">99%</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-3">Security Satisfaction</p>
                </div>
              </div>

              <Link
                href="/login"
                className="inline-flex items-center gap-3 px-8 py-5 bg-white text-gray-900 font-black text-xs uppercase tracking-[0.2em] rounded-2xl w-full justify-center transition-all hover:bg-red-500 hover:text-white group-hover:shadow-2xl group-hover:shadow-white/5"
              >
                Get Dealer Opportunities
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Banner */}
      <section className="bg-red-500 py-16 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="flex items-center gap-6">
              <span className="text-6xl font-black text-white/20 uppercase tracking-tighter">SafeOn Secure</span>
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
