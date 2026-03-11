"use client";

import React, { useState, useCallback, memo } from 'react';

// Memoized Atomic Input Components to reduce re-renders
const FormInput = memo(({ label, type, placeholder, value, name, onChange }: any) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="relative group">
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 font-medium text-gray-900 transition-all placeholder:text-gray-400"
                />
            </div>
        </div>
    );
});

const FormSelect = memo(({ options, value, name, onChange }: any) => {
    return (
        <div className="relative group">
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 font-black text-gray-600 transition-all appearance-none uppercase tracking-widest text-[11px]"
            >
                {options.map((opt: string) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-focus-within:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
    );
});

const FormTextarea = memo(({ placeholder, value, name, onChange }: any) => {
    return (
        <div className="relative">
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={5}
                className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-[32px] focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 font-medium text-gray-900 transition-all placeholder:text-gray-400 resize-none"
            />
        </div>
    );
});

const ComplaintForm = () => {
    const [formData, setFormData] = useState({
        type: 'Select Complaint Type',
        name: '',
        mobile: '',
        email: '',
        subject: '',
        remark: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Optimized Handler using useCallback to prevent recreation on every parent render
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log('Incident Reported:', formData);

        // Mock API lag
        await new Promise(resolve => setTimeout(resolve, 1500));

        alert('Complaint Submitted Successfully to adSky Support.');
        setIsSubmitting(false);
    };

    return (
        <div className="w-full mx-auto">
            <div className="bg-white border border-gray-100 rounded-[48px] p-10 shadow-2xl shadow-gray-200/50 relative overflow-hidden">
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[60px] rounded-full -mr-16 -mt-16"></div>

                <div className="mb-10 flex flex-col items-center">
                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight leading-none mb-2">Complaint Form</h2>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Connect with adSky Security Support</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <FormSelect
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        options={[
                            'Select Complaint Type',
                            'Complaint',
                            'Feedback',
                            'Suggestions',

                        ]}
                    />

                    <FormInput
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <FormInput
                        name="mobile"
                        type="tel"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                    />

                    <FormInput
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <FormInput
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />

                    <FormTextarea
                        name="remark"
                        placeholder="Remark"
                        value={formData.remark}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-5 rounded-[24px] font-black text-[12px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 active:scale-95 shadow-2xl ${isSubmitting
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-red-500 text-white shadow-red-500/20 hover:bg-black hover:shadow-black/20'
                            }`}
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                                Submitting...
                            </>
                        ) : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default memo(ComplaintForm);
