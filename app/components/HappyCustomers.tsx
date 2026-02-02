import React from "react";
import Image from "next/image";

export default function HappyCustomers() {
    // Generate array of 18 images
    const images = Array.from({ length: 18 }, (_, i) => ({
        src: `/images/image-${i + 1}.jpeg`,
        alt: `Happy Solar Customer ${i + 1}`,
        location: "Uttar Pradesh" // Placeholder, can be more specific if we map exact images to locations
    }));

    return (
        <section className="py-20 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-green-800 mb-4">
                        Our Happy Customers
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">
                        Join thousands of families saving money with solar
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/5] bg-gray-200"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.location}
                                </span>
                                <span className="text-green-300 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    Verified Installation
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#contact" className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl">
                        Get Your Solar System Today
                    </a>
                </div>
            </div>
        </section>
    );
}
