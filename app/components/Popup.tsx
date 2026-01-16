"use client";
import React, { useState, useEffect } from "react";

export default function Popup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem("hasVisitedSolar");
        if (!hasVisited) {
            const timer = setTimeout(() => {
                setShow(true);
                localStorage.setItem("hasVisitedSolar", "true");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative transform transition-all scale-100">
                <button
                    onClick={() => setShow(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white/80 rounded-full p-1"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 text-center">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Limited Time Offer!</h3>
                    <p className="text-orange-100 mt-1">Free Consultation & Site Visit</p>
                </div>

                <div className="p-8">
                    <h4 className="text-xl font-semibold text-center text-gray-800 mb-6">Get <span className="text-green-600 font-bold">₹1,08,000</span> Subsidy Information</h4>
                    <div className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                        <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-lg">
                            Check Eligibility Now
                        </button>
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-4">100% Privacy Guaranteed.</p>
                </div>
            </div>
        </div>
    );
}
