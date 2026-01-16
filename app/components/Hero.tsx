import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center py-20 md:py-32 overflow-visible">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Solar Panel Home"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
                    Pradhan Mantri <span className="text-green-400">Surya Ghar</span>
                    <br />
                    <span className="text-yellow-400">Muft Bijli Yojana</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium drop-shadow-md max-w-3xl mx-auto leading-relaxed">
                    Brighten your home with the power of the Sun. Get the maximum subsidy in Gajraula through <strong>Radhe Raj Enterprises</strong>.
                    <br />
                    <span className="text-yellow-300 font-bold mt-6 block text-2xl md:text-5xl bg-white/10 p-4 md:p-6 rounded-2xl backdrop-blur-md border border-white/20 shadow-inner">
                        Subsidy: ₹1,08,000/-
                    </span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-10">
                    <a
                        href="#contact"
                        className="w-full sm:w-auto group bg-green-600 hover:bg-green-700 text-white text-lg md:text-xl font-bold px-8 md:px-10 py-4 md:py-5 rounded-full shadow-[0_0_30px_rgba(22,163,74,0.4)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 ring-4 ring-white/10"
                    >
                        <svg className="w-6 h-6 md:w-7 md:h-7 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        Book Site Visit
                    </a>
                    <a
                        href="tel:+919410297051"
                        className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-lg md:text-xl font-bold px-8 md:px-10 py-4 md:py-5 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 border border-white/30"
                    >
                        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        Contact Advisor
                    </a>
                </div>
            </div>
        </div>
    );
}
