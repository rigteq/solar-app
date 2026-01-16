import React from "react";

export default function Features() {
    return (
        <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Solar?</h2>
                        <p className="text-lg md:text-xl text-orange-100 mb-8 leading-relaxed">
                            Electricity prices are rising. Solar is the only way to secure your energy future.
                            With the <strong>PM Surya Ghar Yojana</strong>, the government pays for a significant portion of your installation.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Guaranteed Government Subsidy up to ₹1,08,000",
                                "Lower your electricity bill by up to 90%",
                                "Environment friendly & Sustainable",
                                "Increase your property value",
                                "25 Years Performance Warranty"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                                    <span className="bg-white text-orange-600 rounded-full w-6 h-6 flex items-center justify-center font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                        <h3 className="text-2xl font-bold mb-4 text-center">Subsidy Slab</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/20 pb-2">
                                <span>1 kW System</span>
                                <span className="font-bold text-yellow-300">₹30,000 Subsidy</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/20 pb-2">
                                <span>2 kW System</span>
                                <span className="font-bold text-yellow-300">₹60,000 Subsidy</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/20 pb-2">
                                <span>3 kW System</span>
                                <span className="font-bold text-yellow-300">₹78,000 Subsidy</span>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-200">* Subsidy amounts subject to govt rules.</p>
                                <div className="mt-4 bg-white/20 rounded-lg p-3">
                                    <p className="font-bold text-xl">Only ₹5000/- Registration Subsidy Guaranteed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
