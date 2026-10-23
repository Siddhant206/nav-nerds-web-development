"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Users, TrendingUp, Award } from "lucide-react";

export default function Banner() {
  const ecosystemLogos = [
    { name: "Dynamics 365", label: "Microsoft Dynamics 365" },
    { name: "Business Central", label: "D365 Business Central" },
    { name: "Power BI", label: "Power BI Analytics" },
    { name: "Azure Cloud", label: "Microsoft Azure" },
    { name: "Shopify Sync", label: "Shopify ERP Connect" },
  ];

  return (
    <section className="relative min-h-[88vh] flex flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#061824] via-[#0a2335] to-[#05131e] text-white pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      {/* 1. Concentric Radial Curves (NavNerds Business Central Teal Tint) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-[#1DCCD8]/[0.05] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#1DCCD8]/[0.08] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-[#1DCCD8]/[0.12] pointer-events-none" />
      
      {/* Ambient Business Central Teal Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#1DCCD8]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full my-auto py-6">
        {/* Top Eyebrow */}
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#1DCCD8] uppercase mb-4">
          Trusted Microsoft Dynamics 365 & Business Central Partner
        </p>

        {/* High-Contrast Bold Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-4xl mx-auto">
          When results count, <br />
          <span className="text-white">NavNerds delivers!</span>
        </h1>

        {/* Natural, High-Contrast Subheading */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          As a certified Microsoft Dynamics 365 partner, we empower businesses with future-ready cloud ERP solutions that deliver measurable impact. Dominate and thrive with AI-powered Business Central implementations, zero-downtime migrations, and expert custom AL engineering. With NavNerds, your success is powered by years of proven expertise—no matter the industry!
        </p>

        {/* Center CTA in NavNerds Signature Brand Cyan */}
        <div className="flex flex-col items-center justify-center gap-3">
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-2.5 px-9 sm:px-11 py-4 rounded-full text-base font-bold text-slate-950 bg-gradient-to-r from-[#1DCCD8] via-cyan-300 to-[#1DCCD8] bg-[length:200%_auto] hover:bg-right shadow-[0_10px_30px_rgba(29,204,216,0.4)] hover:shadow-[0_15px_40px_rgba(29,204,216,0.65)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <p className="text-xs text-slate-400 font-medium tracking-wide">
            Trusted by 50+ enterprise clients · No obligation · Rapid response
          </p>
        </div>

        {/* Left Floating Badges (Desktop) */}
        <div className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col gap-4 pointer-events-none">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-xl">
            <div className="w-9 h-9 rounded-xl bg-[#1DCCD8]/15 flex items-center justify-center text-[#1DCCD8]">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[11px] text-slate-400 font-semibold uppercase">Excellence</p>
              <p className="text-xs font-bold text-white">Industry Leaders</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-xl ml-6">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[11px] text-slate-400 font-semibold uppercase">Cloud ERP</p>
              <p className="text-xs font-bold text-white">Empowering Growth</p>
            </div>
          </div>
        </div>

        {/* Right Floating Badges (Desktop) */}
        <div className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 pointer-events-none">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-xl mr-6">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[11px] text-slate-400 font-semibold uppercase">Microsoft</p>
              <p className="text-xs font-bold text-white">Trusted Partner</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-xl">
            <div className="w-9 h-9 rounded-xl bg-[#1DCCD8]/15 flex items-center justify-center text-[#1DCCD8]">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[11px] text-slate-400 font-semibold uppercase">Engineers</p>
              <p className="text-xs font-bold text-white">Proven Expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ecosystem & Client Proof Strip */}
      <div className="relative z-10 w-full max-w-5xl mx-auto pt-8 border-t border-white/10">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
          Enterprise Cloud Ecosystem & Integration Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
          {ecosystemLogos.map((eco) => (
            <span
              key={eco.name}
              className="text-sm sm:text-base font-bold tracking-tight text-white/90 hover:text-[#1DCCD8] transition-colors"
            >
              {eco.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
