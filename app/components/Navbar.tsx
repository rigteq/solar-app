"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-full p-1 overflow-hidden shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Radhe Raj Enterprises"
                fill
                className="object-contain"
              />
            </div>
            <div className={`font-bold text-xl md:text-2xl tracking-tighter ${scrolled ? 'text-green-800' : 'text-green-900 drop-shadow-md'}`}>
              <span className="text-orange-500"> RADHE RAJ </span> ENTERPRISES
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${scrolled
                    ? "text-gray-900 hover:text-green-600"
                    : "text-gray-900 hover:text-white bg-white/50 hover:bg-green-600/80"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold shadow-md transform hover:scale-105 transition-all text-sm animate-pulse"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-green-600 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-xl border-t">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-900 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="w-full text-center block bg-orange-500 text-white px-5 py-3 rounded-lg font-bold mt-4"
            onClick={() => setIsOpen(false)}
          >
            Order / Enquiry Now
          </a>
        </div>
      </div>
    </nav>
  );
}
