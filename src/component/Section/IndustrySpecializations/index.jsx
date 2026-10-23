"use client";

import { BsBuilding, BsCart, BsGear, BsBank, BsBook, BsAirplane } from "react-icons/bs";

const industries = [
  {
    title: "CONSTRUCTION",
    icon: <BsBuilding />,
    text: "We deliver ERP solutions that streamline project management, resource allocation, and compliance - helping construction firms complete projects on time and within budget.",
    key: "construction",
  },
  {
    title: "E-COMMERCE",
    icon: <BsCart />,
    text: "Our ERP systems integrate with online stores, automate inventory, and optimize order fulfillment - enabling retailers to scale seamlessly and improve customer experience.",
    key: "ecommerce",
  },
  {
    title: "MANUFACTURING",
    icon: <BsGear />,
    text: "We provide ERP platforms that enhance production planning, quality control, and supply chain visibility - empowering manufacturers to operate more efficiently.",
    key: "manufacturing",
  },
  {
    title: "FINANCE",
    icon: <BsBank />,
    text: "Our ERP solutions support real-time reporting, compliance, and secure financial operations - helping financial organizations maintain accuracy and trust.",
    key: "finance",
  },
  {
    title: "EDUCATION",
    icon: <BsBook />,
    text: "We implement ERP systems that centralize student data, simplify administration, and improve collaboration across academic institutions.",
    key: "education",
  },
  {
    title: "TRAVEL",
    icon: <BsAirplane />,
    text: "Our ERP tools help travel businesses manage bookings, customer interactions, and partner integrations - delivering smooth operations and better client satisfaction.",
    key: "travel",
  },
];

export default function IndustrySpecializations() {
  return (
    <section className="max-w-7xl mx-auto py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-left mb-10 tracking-tight">
          Industry Specializations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {industries.map(({ title, icon, key, text }) => (
            <div
              key={key}
              className="rounded-2xl border border-slate-300/80 bg-white p-7 sm:p-8 shadow-xs hover:shadow-lg hover:border-[#1DCCD8] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start"
            >
              <div className="flex items-center mb-4 gap-2.5 font-bold text-slate-900">
                <span className="text-xl text-slate-800">{icon}</span>
                <h3 className="text-base font-extrabold tracking-wider uppercase">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
