import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="relative w-10 h-10 bg-white rounded-full p-1">
                                <Image
                                    src="/images/logo.png"
                                    alt="Radhe Raj Enterprises"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-bold text-xl uppercase tracking-wider">Radhe Raj Enterprises</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Your trusted partner form Solar Energy Solutions in Gajraula. Authorized implementation partner for government solar schemes.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">FB</a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">IG</a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">TW</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-green-400 transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-green-400 transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-green-400 transition-colors">Services</a></li>
                            <li><a href="#gallery" className="hover:text-green-400 transition-colors">Gallery</a></li>
                            <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Contact Info</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1">📍</span>
                                <span>Radhe Raj Enterprises,<br />Gajraula, Uttar Pradesh</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-green-500">📞</span>
                                <a href="tel:+919410297051" className="hover:text-white">+91 9410297051</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-green-500">✉️</span>
                                <a href="mailto:ops@rigteq.com" className="hover:text-white">ops@rigteq.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-green-500">🆔</span>
                                <span>GSTIN: 09CJAPG9809C1ZB</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Radhe Raj Enterprises. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
