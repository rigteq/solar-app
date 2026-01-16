import React from "react";
import Image from "next/image";

export default function Gallery() {
    const images = [
        { src: "/images/hero.png", alt: "Solar Home Installation" },
        { src: "/images/family.png", alt: "Happy Family with Solar" },
        { src: "/images/technician.png", alt: "Professional Installation" },
        { src: "/images/logo.png", alt: "Our Brand" },
    ];

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Work & Media
                    </h2>
                    <p className="text-xl text-gray-600">See how we are transforming homes in Gajraula.</p>
                </div>

                {/* Video Section */}
                <div className="mb-16">
                    <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/VhZh1xDwqV0"
                            title="PM Surya Ghar Yojana"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                    <p className="text-center mt-4 text-gray-500 font-medium">Watch: The Future of Energy with PM Surya Ghar Yojana</p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {images.map((img, idx) => (
                        <div key={idx} className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">{img.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
