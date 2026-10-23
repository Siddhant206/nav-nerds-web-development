"use client";


import { useState } from "react";
import { BsBuilding, BsCart, BsGear, BsBank, BsBook, BsAirplane } from "react-icons/bs";
import { H2, H3, P } from "@/component/UI/typography";
 

const industries = [
    { title: "Construction", icon: <BsBuilding />, text:"We deliver ERP solutions that streamline project management, resource allocation, and compliance - helping construction firms complete projects on time and within budget.", key: "construction" },
    { title: "E-Commerce", icon: <BsCart />, text:"Our ERP systems integrate with online stores, automate inventory, and optimize order fulfillment - enabling retailers to scale seamlessly and improve customer experience.", key: "ecommerce", highlight: true },
    { title: "Manufacturing", icon: <BsGear />, text:"We provide ERP platforms that enhance production planning, quality control, and supply chain visibility - empowering manufacturers to operate more efficiently.", key: "manufacturing" },
    { title: "Finance", icon: <BsBank />, text:"Our ERP solutions support real-time reporting, compliance, and secure financial operations - helping financial organizations maintain accuracy and trust.",  key: "finance" },
    { title: "Education", icon: <BsBook />, text:"We implement ERP systems that centralize student data, simplify administration, and improve collaboration across academic institutions.",  key: "education" },
    { title: "Travel", icon: <BsAirplane />, text:"Our ERP tools help travel businesses manage bookings, customer interactions, and partner integrations - delivering smooth operations and better client satisfaction.", key: "travel" },
];

export default function IndustrySpecializations() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="max-w-7xl mx-auto bg-gray-50/60 border border-gray-200  py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <H2 className="text-gray-800 text-left mb-10">
                    Industry Specializations
                </H2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {industries.map(({ title, icon, highlight, key, text }) => (
                        <div
                            key={key}
                            onMouseEnter={() => setHovered(key)}
                            onMouseLeave={() => setHovered(null)}
                            className="rounded-xl border border-gray-400 text-black hover:text-white transition-all duration-300 ease-in-out py-14 px-6 shadow-sm bg-white hover:bg-[#1DCCD8] scale-105"
                        >
                            <div className="flex items-center mb-4 gap-2 font-semibold">
                                <span className="text-xl">{icon}</span>
                                <H3 as="span" className="text-inherit uppercase tracking-widest">{title}</H3>
                            </div>
                            <P className="text-sm leading-relaxed">
                                {text}
                            </P>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
