import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                            AUTHORIZED PARTNER
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            About <span className="text-green-600">Radhe Raj Enterprises</span>
                        </h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            We are a premier solar energy solutions provider based in <strong>Gajraula</strong>, dedicated to empowering homes and businesses with clean, renewable energy. Under the visionary leadership of <strong>Hemandra Gautam</strong>, we have been successfully implementing the <strong>Pradhan Mantri Surya Ghar Mukt Bijli Yojna</strong>.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed italic border-l-4 border-orange-500 pl-4 bg-orange-50 py-4 rounded-r-xl">
                            "Our mission is simple: <strong>Solar Panel Lagwaye, Bijli Bachaye</strong>. We ensure that every customer gets the maximum benefit of government subsidies, with guaranteed quality and professional installation."
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-2xl text-center transform hover:scale-105 transition-all">
                                <h4 className="font-bold text-3xl text-green-700">100+</h4>
                                <p className="text-gray-600 font-medium">Successful Installations</p>
                            </div>
                            <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-2xl text-center transform hover:scale-105 transition-all">
                                <h4 className="font-bold text-3xl text-orange-600">₹1.08L</h4>
                                <p className="text-gray-600 font-medium">Max Govt Subsidy</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
                                <Image
                                    src="https://media.assettype.com/freepressjournal/2025-10-31/9l42sqkj/Copy-of-Queen-Of-All-Mayhem-2025-10-31T235420.950.jpg"
                                    alt="PM Narendra Modi Solar Mission"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                                    <span className="text-white font-bold text-sm">National Vision: PM Modi</span>
                                </div>
                            </div>
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
                                <Image
                                    src="https://www.energetica-india.net/images/noticias/7yTMiGKtCn73SZ3tdLiv9bkbdlCI05l6s5GQARC565LUw5x8ci65IV.jpg"
                                    alt="CM Yogi Adityanath UP Solar"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                                    <span className="text-white font-bold text-sm">UP State Mission: CM Yogi</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 bg-green-50 p-6 rounded-2xl border border-green-100">
                            <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
                                Subsidy Guaranteed Information
                            </h4>
                            <p className="text-green-700 text-sm">
                                We ensure seamless processing of your subsidy application under PM Surya Ghar Muft Bijli Yojana. Join 100+ happy families in Gajraula today!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
