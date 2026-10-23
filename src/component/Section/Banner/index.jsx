"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, CheckCircle2, Clock, ChevronRight } from "lucide-react";

export default function Banner() {
  const trustPillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#0094C6]" />,
      title: "100% Dynamics 365 Focus",
      desc: "Specialized exclusively in Microsoft Business Central & legacy NAV systems."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#0094C6]" />,
      title: "Zero-Downtime Migration",
      desc: "Guaranteed data integrity and business continuity from NAV to cloud BC."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#0094C6]" />,
      title: "Certified AL Engineers",
      desc: "In-house Microsoft certified developers building custom, scalable extensions."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#0094C6]" />,
      title: "24/7 Dedicated Support",
      desc: "Rapid SLA response, proactive monitoring, and expert troubleshooting."
    }
  ];

  return (
    <section className="relative min-h-[82vh] flex flex-col items-center justify-center overflow-hidden bg-[#EEF8FF] text-gray-900 pt-10 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Zero color shades / Zero fuzzy blur blobs - 100% Flat & Clean #EEF8FF */}

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full my-auto">
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1DCCD8]/40 shadow-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-[#1DCCD8]" />
          <span className="text-xs sm:text-sm font-semibold text-gray-800">
            Microsoft Dynamics 365 <span className="text-[#0094C6]">· Certified Partner</span>
          </span>
        </div>

        {/* Clean, Crisp Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.16] mb-6 max-w-4xl mx-auto">
          Get The Best Solutions For Business Growth From{" "}
          <span className="text-[#0094C6] block sm:inline">
            Microsoft Dynamics 365
          </span>
        </h1>

        {/* Natural Subtitle */}
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Automate your business, simplify operations, and modernize your ERP with certified Dynamics 365 Business Central specialists from the Nerds.
        </p>

        {/* Dual High-Converting CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-bold text-white bg-[#1DCCD8] hover:bg-black transition-colors duration-300 shadow-md shadow-[#1DCCD8]/25"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-gray-800 bg-white hover:bg-slate-50 border border-gray-300 transition-colors duration-300 shadow-xs"
          >
            <span>Request Custom Quote</span>
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </Link>
        </div>

        {/* Clean 4-Pillar Trust Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left w-full max-w-5xl mx-auto">
          {trustPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#1DCCD8] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EEF8FF] border border-[#1DCCD8]/30 flex items-center justify-center mb-3">
                {pillar.icon}
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                {pillar.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
