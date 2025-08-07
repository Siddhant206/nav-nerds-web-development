"use client";

import { typography } from "@/components/Ui/Fonts";
import { useState } from "react";
import { BsBuilding, BsCart, BsGear, BsBank, BsBook, BsAirplane } from "react-icons/bs";

const industries = [
    { title: "Construction", icon: <BsBuilding />, key: "construction" },
    { title: "E-Commerce", icon: <BsCart />, key: "ecommerce", highlight: true },
    { title: "Manufacturing", icon: <BsGear />, key: "manufacturing" },
    { title: "Finance", icon: <BsBank />, key: "finance" },
    { title: "Education", icon: <BsBook />, key: "education" },
    { title: "Travel", icon: <BsAirplane />, key: "travel" },
];

export default function IndustrySpecializations() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="max-w-7xl mx-auto bg-gray-50/60 border border-gray-200 mt-10 py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className={`${typography.subheading} font-semibold text-gray-800 text-left mb-10`}>
                    Industry Specializations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {industries.map(({ title, icon, highlight, key }) => (
                        <div
                            key={key}
                            onMouseEnter={() => setHovered(key)}
                            onMouseLeave={() => setHovered(null)}
                            className="rounded-xl border border-gray-400 text-black hover:text-white transition-all duration-400 ease-in-out py-14 px-6 shadow-sm bg-white hover:bg-[#22D0DC] scale-105"
                        >
                            <div className="flex items-center mb-4 gap-2  text-base md:text-lg font-semibold">
                                <span className="text-xl">{icon}</span>
                                {title}
                            </div>
                            <p className="text-sm leading-relaxed">
                                We build custom ERP systems with fully tailored functionality and integrations
                                for organizations of all sizes and industries.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
