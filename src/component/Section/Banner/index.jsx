"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  Factory,
  Building2,
  ShoppingCart,
  Coins
} from "lucide-react";
import { motion } from "framer-motion";

export default function Banner() {
  const trustPillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00838f]" />,
      title: "100% Dynamics 365 Focus",
      desc: "Specialized exclusively in Microsoft Business Central & legacy NAV systems."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#00838f]" />,
      title: "Zero-Downtime Migration",
      desc: "Guaranteed data integrity and continuous operations from NAV to cloud BC."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#00838f]" />,
      title: "Certified AL Engineers",
      desc: "In-house Microsoft certified developers building custom, scalable extensions."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#00838f]" />,
      title: "< 15-Min Critical SLA",
      desc: "24/7 dedicated enterprise support, proactive monitoring, and rapid triage."
    }
  ];

  const industries = [
    { label: "Manufacturing", icon: <Factory className="w-3.5 h-3.5 text-[#00838f]" /> },
    { label: "Wholesale Distribution", icon: <Building2 className="w-3.5 h-3.5 text-[#00838f]" /> },
    { label: "E-Commerce & Retail", icon: <ShoppingCart className="w-3.5 h-3.5 text-[#00838f]" /> },
    { label: "Financial Services", icon: <Coins className="w-3.5 h-3.5 text-[#00838f]" /> },
  ];

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#e5f5f6] via-[#f4fafb] to-white pt-10 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Soft Business Central Radial Ambient Glow (No sci-fi grid) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#00838f]/10 via-[#b2e9ed]/20 to-transparent blur-[120px] pointer-events-none" />

      {/* 1. Official Microsoft Partner Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#00838f]/30 backdrop-blur-md shadow-sm mb-6 hover:border-[#00838f] transition-colors"
      >
        <span className="flex h-2.5 w-2.5 rounded-full bg-[#00838f] animate-pulse" />
        <span className="text-xs sm:text-sm font-semibold text-slate-800">
          Microsoft Dynamics 365 <span className="text-[#00838f]">· Business Central Certified Partner</span>
        </span>
      </motion.div>

      {/* 2. Authority Headline & Copy (Optimized to never overflow) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 text-center max-w-4xl mx-auto w-full"
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.16] mb-6">
          Scale Your Operations on{" "}
          <span className="text-[#00838f] block sm:inline">
            Microsoft Dynamics 365 Business Central
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Frictionless cloud implementations, zero-downtime NAV-to-BC migrations, and 24/7 dedicated enterprise support delivered by certified ERP specialists.
        </p>

        {/* Industry Focus Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 text-xs sm:text-sm text-slate-600">
          <span className="text-slate-500 font-semibold">Specialized in:</span>
          {industries.map((ind) => (
            <span
              key={ind.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 shadow-xs font-medium"
            >
              {ind.icon}
              {ind.label}
            </span>
          ))}
        </div>

        {/* Dual High-Converting CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/contact-us"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#00838f] hover:bg-[#006f7a] transition-all duration-300 shadow-md shadow-[#00838f]/25 hover:shadow-lg hover:shadow-[#00838f]/35 hover:scale-105 active:scale-95"
          >
            <span>Book Free BC Assessment</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all duration-300 shadow-xs hover:scale-105"
          >
            <span>Request Custom Enterprise Quote</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </Link>
        </div>
      </motion.div>

      {/* 3. Enterprise Trust Pillars (Crisp Microsoft White Cards) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#00838f]/50 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#e5f5f6] border border-[#b2e9ed] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-[#00838f] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 4. Verified Metrics Counter Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 pt-8 border-t border-slate-200 text-center w-full"
      >
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">10+</p>
          <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Years Microsoft Experience</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#00838f]">50+</p>
          <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Enterprise Deployments</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">99.8%</p>
          <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Client Retention Rate</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#00838f]">24/7</p>
          <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Dedicated Support Team</p>
        </div>
      </motion.div>
    </section>
  );
}
