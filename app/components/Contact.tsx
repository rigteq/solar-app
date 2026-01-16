"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulation of sending email to ops@rigteq.com
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            // Actual email sending logic would involve a POST request to a backend API
            console.log("Form submitted. Notification sent to ops@rigteq.com");
        }, 2000);
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
            {/* Decorative Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -ml-48 -mb-48" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Get in Touch</span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Contact Us / Order Now</h2>
                    <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mb-6" />
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to switch to clean energy? Fill out the form below and our experts from <strong>Radhe Raj Enterprises</strong> will reach out.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-gray-100 flex flex-col justify-center min-h-[600px]">
                        {submitted ? (
                            <div className="text-center py-10 animate-in zoom-in duration-500">
                                <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-lg">
                                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h3 className="text-3xl font-black text-green-800 mb-4">Success!</h3>
                                <p className="text-xl text-gray-600 mb-8 lowercase">Your enquiry has been successfully sent to <span className="font-bold text-gray-900">ops@rigteq.com</span></p>
                                <p className="text-gray-500 italic">Our team will call you within 24 hours.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-10 text-green-600 font-bold hover:underline"
                                >
                                    Send another enquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-green-500 pl-4">Enquiry Details</h3>

                                <div className="space-y-4">
                                    <div className="group">
                                        <label className="block text-sm font-bold text-gray-700 mb-2 transition-colors group-focus-within:text-green-600">Full Name</label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 group-focus-within:text-green-500 transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </span>
                                            <input type="text" required className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all placeholder:text-gray-400" placeholder="e.g. Rahul Sharma" />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-bold text-gray-700 mb-2 transition-colors group-focus-within:text-green-600">Phone Number</label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 group-focus-within:text-green-500 transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </span>
                                            <input type="tel" required className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all placeholder:text-gray-400" placeholder="+91 98765 43210" />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-bold text-gray-700 mb-2 transition-colors group-focus-within:text-green-600">City / Village</label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 group-focus-within:text-green-500 transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </span>
                                            <input type="text" required className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all placeholder:text-gray-400" placeholder="Gajraula, UP" />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full ${isSubmitting ? 'bg-orange-300' : 'bg-orange-500 hover:bg-orange-600'} text-white font-black py-5 rounded-2xl shadow-xl shadow-orange-500/20 transform active:scale-[0.98] transition-all text-xl mt-4 flex items-center justify-center gap-3`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                            Processing...
                                        </>
                                    ) : (
                                        "Confirm Registration"
                                    )}
                                </button>
                                <p className="text-sm text-center text-gray-500 mt-6 px-10">
                                    Official implementation partner. Your data is secure and will be sent to the operations team at <span className="text-gray-900 font-semibold">ops@rigteq.com</span> for processing.
                                </p>
                            </form>
                        )}
                    </div>

                    <div className="space-y-10 lg:pl-10">
                        <div className="relative h-[300px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-white">
                            <Image src="/images/technician.png" alt="Expert Installation" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                                <div>
                                    <div className="bg-orange-500 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-md mb-2 inline-block">Professional</div>
                                    <h4 className="text-white text-2xl font-black">Expert Installation Team</h4>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-10 rounded-[2rem] shadow-xl border-l-[10px] border-green-500">
                            <h4 className="text-2xl font-black text-gray-900 mb-6">Contact Information</h4>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Director</p>
                                        <p className="text-xl font-bold text-gray-800">Hemandra Gautam</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone</p>
                                        <a href="tel:+919410297051" className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors">+91 9410297051</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</p>
                                        <a href="mailto:ops@rigteq.com" className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors">ops@rigteq.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-6">
                                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">GSTIN</p>
                                        <p className="text-lg font-bold text-gray-800 tracking-tight">09CJAPG9809C1ZB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
