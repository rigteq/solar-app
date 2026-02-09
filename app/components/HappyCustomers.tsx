"use client";

import React from "react";
import Image from "next/image";

export default function HappyCustomers() {
    // Generate array of 18 images
    const images = Array.from({ length: 18 }, (_, i) => ({
        src: `/images/image-${i + 1}.jpeg`,
        alt: `Happy Solar Customer ${i + 1}`,
        location: "Uttar Pradesh"
    }));

    // Split images into three rows for visual variety
    const row1Images = images.slice(0, 6);
    const row2Images = images.slice(6, 12);
    const row3Images = images.slice(12, 18);

    return (
        <section className="relative py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16 relative z-10">
                    <div className="inline-block mb-4">
                        <span className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-bold rounded-full shadow-lg">
                            ⭐ 10,000+ Satisfied Customers
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-green-800 via-emerald-700 to-teal-800 bg-clip-text text-transparent mb-6 leading-tight">
                        Our Happy Customers
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
                        Join thousands of families powering their homes with clean, renewable solar energy
                    </p>
                </div>

                {/* Infinite Scrolling Carousel - Row 1 (Left to Right) */}
                <div className="mb-6 group/carousel">
                    <div className="relative overflow-hidden py-4">
                        <div className="flex gap-6 animate-scroll-right group-hover/carousel:pause-animation">
                            {/* Duplicate images 3 times for seamless loop */}
                            {[...row1Images, ...row1Images, ...row1Images].map((img, idx) => (
                                <div
                                    key={idx}
                                    className="relative flex-shrink-0 w-64 sm:w-72 md:w-80 group/card"
                                >
                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-3xl">
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                            sizes="320px"
                                        />
                                        {/* Premium Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500">
                                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                    <span className="text-green-300 text-sm font-bold uppercase tracking-wider">
                                                        Verified Installation
                                                    </span>
                                                </div>
                                                <h3 className="text-white font-bold text-xl mb-1">
                                                    {img.location}
                                                </h3>
                                                <p className="text-gray-300 text-sm">
                                                    Solar Installation Complete
                                                </p>
                                            </div>
                                        </div>
                                        {/* Corner Badge */}
                                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                            <span className="text-green-700 text-xs font-bold">✓ Verified</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Infinite Scrolling Carousel - Row 2 (Right to Left - Faster) */}
                <div className="mb-6 group/carousel">
                    <div className="relative overflow-hidden py-4">
                        <div className="flex gap-6 animate-scroll-left-fast group-hover/carousel:pause-animation">
                            {/* Duplicate images 3 times for seamless loop */}
                            {[...row2Images, ...row2Images, ...row2Images].map((img, idx) => (
                                <div
                                    key={idx}
                                    className="relative flex-shrink-0 w-64 sm:w-72 md:w-80 group/card"
                                >
                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-3xl">
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                            sizes="320px"
                                        />
                                        {/* Premium Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500">
                                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                                    <span className="text-emerald-300 text-sm font-bold uppercase tracking-wider">
                                                        Verified Installation
                                                    </span>
                                                </div>
                                                <h3 className="text-white font-bold text-xl mb-1">
                                                    {img.location}
                                                </h3>
                                                <p className="text-gray-300 text-sm">
                                                    Solar Installation Complete
                                                </p>
                                            </div>
                                        </div>
                                        {/* Corner Badge */}
                                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                            <span className="text-emerald-700 text-xs font-bold">✓ Verified</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Infinite Scrolling Carousel - Row 3 (Left to Right - Slowest) */}
                <div className="group/carousel">
                    <div className="relative overflow-hidden py-4">
                        <div className="flex gap-6 animate-scroll-right-slow group-hover/carousel:pause-animation">
                            {/* Duplicate images 3 times for seamless loop */}
                            {[...row3Images, ...row3Images, ...row3Images].map((img, idx) => (
                                <div
                                    key={idx}
                                    className="relative flex-shrink-0 w-64 sm:w-72 md:w-80 group/card"
                                >
                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-3xl">
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                            sizes="320px"
                                        />
                                        {/* Premium Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500">
                                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                                                    <span className="text-teal-300 text-sm font-bold uppercase tracking-wider">
                                                        Verified Installation
                                                    </span>
                                                </div>
                                                <h3 className="text-white font-bold text-xl mb-1">
                                                    {img.location}
                                                </h3>
                                                <p className="text-gray-300 text-sm">
                                                    Solar Installation Complete
                                                </p>
                                            </div>
                                        </div>
                                        {/* Corner Badge */}
                                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                            <span className="text-teal-700 text-xs font-bold">✓ Verified</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Hover Instructions */}
                <div className="text-center mt-12 relative z-10">
                    <p className="text-sm text-gray-500 font-medium mb-8 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Hover over any image to pause and explore
                    </p>

                    {/* CTA Button */}
                    <div className="inline-block relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                        <a
                            href="#contact"
                            className="relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-orange-700 hover:to-orange-800 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 group"
                        >
                            <span>Get Your Solar System Today</span>
                            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes scroll-right {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                @keyframes scroll-left-fast {
                    0% {
                        transform: translateX(-33.333%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                @keyframes scroll-right-slow {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                .animate-scroll-right {
                    animation: scroll-right 40s linear infinite;
                }

                .animate-scroll-left-fast {
                    animation: scroll-left-fast 35s linear infinite;
                }

                .animate-scroll-right-slow {
                    animation: scroll-right-slow 50s linear infinite;
                }

                .pause-animation {
                    animation-play-state: paused !important;
                }

                .shadow-3xl {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
                }
            `}</style>
        </section>
    );
}
