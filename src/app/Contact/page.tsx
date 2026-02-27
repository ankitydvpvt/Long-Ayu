'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const PremiumContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        healthIssue: '',
        longevityQuestion: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await addDoc(collection(db, "contacts"), {
                ...formData,
                createdAt: serverTimestamp()
            });

            setSubmitStatus('success');

            setFormData({
                name: '',
                phone: '',
                email: '',
                healthIssue: '',
                longevityQuestion: ''
            });

        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#2f423d] to-[#1e2d29] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#e5b02b]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#e5b02b]/10 rounded-full blur-3xl animate-pulse delay-1000" />

                {/* Floating particles */}
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#e5b02b]/30 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${10 + Math.random() * 10}s`
                        }}
                    />
                ))}
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(229, 176, 43, 0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(229, 176, 43, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
                        <span className="bg-gradient-to-r from-[#e5b02b] to-[#f5c542] text-transparent bg-clip-text">
                            Let's Connect
                        </span>
                    </h1>
                    <p className="text-[#e5b02b]/70 text-lg max-w-2xl mx-auto">
                        Share your health journey with us. We're here to help you achieve optimal wellness.
                    </p>

                    {/* Decorative line */}
                    <div className="w-24 h-1 bg-gradient-to-r from-[#e5b02b] to-transparent mx-auto mt-6 rounded-full" />
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column - Contact Info */}

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="relative group mt-[40%]">
                            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_40px_-15px_black,0_0_0_2px_rgba(210,190,255,0.15),0_0_70px_#ffde01] group-hover:shadow-[0_40px_55px_-10px_black,0_0_0_3px_rgba(215,195,255,0.4),0_0_100px_#9f8bff] transition-all duration-500">
                                <img
                                    src="/ContactUs.avif"
                                    alt="Two people collaborating at a modern desk, representing contact and communication"
                                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700 brightness-105"
                                />
                            </div>
                        </div>
                        {/* Premium Info Cards
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-[#e5b02b]/20">
                            <h3 className="text-xl font-light text-white mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-[#e5b02b]/20 flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-[#e5b02b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                Response Time
                            </h3>
                            <p className="text-gray-300 text-sm">
                                We typically respond within 24-48 hours during business days.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-[#e5b02b]/20">
                            <h3 className="text-xl font-light text-white mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-[#e5b02b]/20 flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-[#e5b02b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </span>
                                Confidential
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Your information is protected with enterprise-grade encryption.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-[#e5b02b]/20">
                            <h3 className="text-xl font-light text-white mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-[#e5b02b]/20 flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-[#e5b02b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                Direct Support
                            </h3>
                            <p className="text-gray-300 text-sm">
                                For urgent matters, reach us at <span className="text-[#e5b02b]">support@longevity.com</span>
                            </p>
                        </div> */}
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-[#e5b02b]/20"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field - Required */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[#e5b02b] mb-2">
                                    Full Name <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-[#e5b02b]/30 rounded-xl focus:outline-none focus:border-[#e5b02b] focus:ring-1 focus:ring-[#e5b02b] text-white placeholder-gray-500 transition-all duration-300"
                                    placeholder="Write Your Name"
                                />
                            </div>

                            {/* Phone Number Field - Required */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-[#e5b02b] mb-2">
                                    Phone Number <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-[#e5b02b]/30 rounded-xl focus:outline-none focus:border-[#e5b02b] focus:ring-1 focus:ring-[#e5b02b] text-white placeholder-gray-500 transition-all duration-300"
                                    placeholder="+91 0000000000"
                                />
                            </div>

                            {/* Email Field - Required */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#e5b02b] mb-2">
                                    Email Address <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-[#e5b02b]/30 rounded-xl focus:outline-none focus:border-[#e5b02b] focus:ring-1 focus:ring-[#e5b02b] text-white placeholder-gray-500 transition-all duration-300"
                                    placeholder="Gmail@example.com"
                                />
                            </div>

                            {/* Health Issue Field */}
                            <div>
                                <label htmlFor="healthIssue" className="block text-sm font-medium text-[#e5b02b] mb-2">
                                    Any Health Issues?
                                </label>
                                <textarea
                                    id="healthIssue"
                                    name="healthIssue"
                                    value={formData.healthIssue}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-3 bg-white/5 border border-[#e5b02b]/30 rounded-xl focus:outline-none focus:border-[#e5b02b] focus:ring-1 focus:ring-[#e5b02b] text-white placeholder-gray-500 transition-all duration-300 resize-none"
                                    placeholder="Please describe any health concerns you'd like to discuss..."
                                />
                            </div>

                            {/* Longevity Question Field */}
                            <div>
                                <label htmlFor="longevityQuestion" className="block text-sm font-medium text-[#e5b02b] mb-2">
                                    Longevity Questions?
                                </label>
                                <textarea
                                    id="longevityQuestion"
                                    name="longevityQuestion"
                                    value={formData.longevityQuestion}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-3 bg-white/5 border border-[#e5b02b]/30 rounded-xl focus:outline-none focus:border-[#e5b02b] focus:ring-1 focus:ring-[#e5b02b] text-white placeholder-gray-500 transition-all duration-300 resize-none"
                                    placeholder="Ask us anything about longevity, biomarkers, or optimal health..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 bg-gradient-to-r from-[#e5b02b] to-[#f5c542] text-[#2f423d] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#e5b02b]/25 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#2f423d]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </span>
                                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </button>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-sm text-center"
                                >
                                    Thank you for reaching out! We'll get back to you within 24-48 hours.
                                </motion.div>
                            )}
                        </form>

                        {/* Required Fields Note */}
                        <p className="text-xs text-gray-500 mt-4 text-center">
                            <span className="text-red-400">*</span> Required fields
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Decorative Element */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center space-x-2 text-[#e5b02b]/50 text-sm">
                        <span>✨</span>
                        <span>LongAyu </span>
                        <span>✨</span>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                        opacity: 0.3;
                    }
                    25% {
                        transform: translateY(-20px) translateX(10px);
                        opacity: 0.6;
                    }
                    50% {
                        transform: translateY(10px) translateX(-10px);
                        opacity: 0.3;
                    }
                    75% {
                        transform: translateY(20px) translateX(5px);
                        opacity: 0.6;
                    }
                }
                .animate-float {
                    animation: float linear infinite;
                }
            `}</style>
        </div>
    );
};

export default PremiumContactPage;