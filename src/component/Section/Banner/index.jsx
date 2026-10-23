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
  Sparkles,
  Building2,
  Factory,
  ShoppingCart,
  Coins
} from "lucide-react";
import { motion } from "framer-motion";

export default function Banner() {
  const trustPillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#1DCCD8]" />,
      title: "100% Dynamics 365 Focus",
      desc: "Specialized exclusively in Microsoft Business Central & legacy NAV systems."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#1DCCD8]" />,
      title: "Zero-Downtime Migration",
      desc: "Guaranteed data integrity and business continuity from NAV to cloud BC."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#1DCCD8]" />,
      title: "Certified AL Engineers",
      desc: "In-house Microsoft certified developers building custom, scalable extensions."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#1DCCD8]" />,
      title: "< 15-Min Critical SLA",
      desc: "24/7 dedicated enterprise support, proactive maintenance, and rapid triage."
    }
  ];

  const industries = [
    { label: "Manufacturing", icon: <Factory className="w-3.5 h-3.5" /> },
    { label: "Wholesale Distribution", icon: <Building2 className="w-3.5 h-3.5" /> },
    { label: "E-Commerce & Retail", icon: <ShoppingCart className="w-3.5 h-3.5" /> },
    { label: "Financial Services", icon: <Coins className="w-3.5 h-3.5" /> },
  ];

  return (
    <section className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden bg-[#030712] pt-14 pb-20 px-4 sm:px-6 lg:px-8">
      {/* 1. Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#1DCCD8]/20 via-[#0094C6]/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[300px] h-[250px] bg-[#1DCCD8]/10 blur-[120px] pointer-events-none" />
      
      {/* 2. Razor-Sharp Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 3. Official Partner Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md shadow-[0_0_20px_rgba(29,204,216,0.15)] mb-6 hover:border-[#1DCCD8]/50 transition-colors"
      >
        <span className="flex h-2 w-2 rounded-full bg-[#1DCCD8] animate-pulse" />
        <span className="text-xs sm:text-sm font-medium text-slate-300">
          Microsoft Dynamics 365 <span className="text-[#1DCCD8] font-semibold">· Business Central Certified Partner</span>
        </span>
      </motion.div>

      {/* 4. Enterprise Authority Headline & Copy */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
          <span className="text-white">Scale Your Operations on </span>
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-cyan-100 to-[#1DCCD8] bg-clip-text text-transparent">
            Microsoft Dynamics 365 Business Central
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Frictionless cloud implementations, zero-downtime NAV-to-BC migrations, and 24/7 dedicated enterprise support delivered by certified ERP specialists.
        </p>

        {/* Industry Vertical Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 text-xs sm:text-sm text-slate-400">
          <span className="text-slate-500 font-medium">Specialized in:</span>
          {industries.map((ind) => (
            <span
              key={ind.label}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-300"
            >
              <span className="text-[#1DCCD8]">{ind.icon}</span>
              {ind.label}
            </span>
          ))}
        </div>

        {/* Dual High-Converting Enterprise CTAs (NO $499) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/contact-us"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#1DCCD8] via-cyan-300 to-[#1DCCD8] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_25px_rgba(29,204,216,0.5)] hover:shadow-[0_0_35px_rgba(29,204,216,0.8)] hover:scale-105 active:scale-95"
          >
            <span>Book Free BC Assessment</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
          >
            <span>Request Custom Enterprise Quote</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>
      </motion.div>

      {/* 5. Enterprise Trust Bar (Proof-First Strip) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-3 rounded-2xl bg-slate-950/75 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {trustPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#1DCCD8]/30 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1DCCD8]/10 border border-[#1DCCD8]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-[#1DCCD8] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 6. Live Verified Metric Counters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 pt-8 border-t border-white/10 text-center w-full"
      >
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">10+</p>
          <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Years Microsoft Experience</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#1DCCD8]">50+</p>
          <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Enterprise Deployments</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">99.8%</p>
          <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Client Retention Rate</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#1DCCD8]">24/7</p>
          <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Dedicated Support Team</p>
        </div>
      </motion.div>
    </section>
  );
}
