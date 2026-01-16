"use client";
import React from 'react';

export default function Marquee() {
    return (
        <div className="bg-gradient-to-r from-green-600 to-green-800 py-2 overflow-hidden border-b-2 border-orange-400 relative z-40">
            <div className="animate-marquee whitespace-nowrap">
                <span className="text-white font-bold text-lg mx-4">
                    ☀️ Pradhan Mantri Surya Ghar Mukt Bijli Yojna - Get up to ₹1,08,000 Subsidy!
                </span>
                <span className="text-yellow-300 font-bold text-lg mx-4">
                    ☀️ Solar Panel Lagwaye, Bijli Bachaye!
                </span>
                <span className="text-white font-bold text-lg mx-4">
                    ☀️ Only ₹5000/- Registration Subsidy Guaranteed
                </span>
                <span className="text-orange-200 font-bold text-lg mx-4">
                    Call Now: +91 9410297051
                </span>
                <span className="text-white font-bold text-lg mx-4">
                    ☀️ GSTIN: 09CJAPG9809C1ZB
                </span>
                <span className="text-white font-bold text-lg mx-4">
                    ☀️ Pradhan Mantri Surya Ghar Mukt Bijli Yojna - Get up to ₹1,08,000 Subsidy!
                </span>
                <span className="text-yellow-300 font-bold text-lg mx-4">
                    ☀️ Solar Panel Lagwaye, Bijli Bachaye!
                </span>
                <span className="text-white font-bold text-lg mx-4">
                    ☀️ Only ₹5000/- Registration Subsidy Guaranteed
                </span>
            </div>
        </div>
    );
}
