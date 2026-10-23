"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <section className="relative min-h-[90vh] flex flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#1b1535] via-[#241c47] to-[#1c1537] text-white pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      {/* 1. Subtle Concentric Radar Rings Behind Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/[0.04] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/[0.06] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-white/[0.08] pointer-events-none" />
      
      {/* Ambient center aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#9333ea]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full my-auto py-8">
        {/* Top Eyebrow */}
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-purple-200/90 uppercase mb-4">
          Trusted Microsoft Dynamics 365 & Business Central Partner
        </p>

        {/* Dynamics Square Style Bold Punchy Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-4xl mx-auto">
          When results count, <br />
          <span className="text-white">NavNerds delivers!</span>
        </h1>

        {/* Natural, Human Subheading */}
        <p className="text-sm sm:text-base md:text-lg text-purple-100/80 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          As a certified Microsoft Dynamics 365 partner, we empower businesses with future-ready cloud ERP solutions that deliver measurable impact. Dominate and thrive with AI-powered Business Central implementations, zero-downtime migrations, and expert custom AL engineering. With NavNerds, your success is powered by years of proven expertise—no matter the industry!
        </p>

        {/* Prominent Center CTA (Dynamics Square Coral/Sunset Glow) */}
        <div className="flex flex-col items-center justify-center gap-3">
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#FF5E62] to-[#FF453A] hover:from-[#ff6b6f] hover:to-[#ff554a] shadow-[0_10px_30px_rgba(255,94,98,0.4)] hover:shadow-[0_15px_40px_rgba(255,94,98,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <p className="text-xs text-purple-200/60 font-medium tracking-wide">
            Trusted by 50+ enterprise clients · No obligation · Rapid response
          </p>
        </div>

        {/* Left Floating Human Pill Badges (Desktop) */}
        <div className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col gap-4 pointer-events-none">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl animate-float">
            <div className="w-9 h-9 rounded-xl bg-purple-600/30 flex items-center justify-center text-purple-300">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[11px] text-purple-200/70 font-semibold uppercase">Excellence</p>
              <p className="text-xs font-bold text-white">Industry Leaders</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl ml-6">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[11px] text-purple-200/70 font-semibold uppercase">Cloud ERP</p>
              <p className="text-xs font-bold text-white">Empowering Growth</p>
            </div>
          </div>
        </div>

        {/* Right Floating Human Pill Badges (Desktop) */}
        <div className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 pointer-events-none">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl mr-6">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[11px] text-purple-200/70 font-semibold uppercase">Microsoft</p>
              <p className="text-xs font-bold text-white">Trusted Partner</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[11px] text-purple-200/70 font-semibold uppercase">Engineers</p>
              <p className="text-xs font-bold text-white">Proven Expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ecosystem & Client Proof Strip (Dynamics Square Style) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto pt-8 border-t border-white/10">
        <p className="text-center text-xs font-semibold text-purple-200/50 uppercase tracking-widest mb-4">
          Enterprise Cloud Ecosystem & Integration Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
          {ecosystemLogos.map((eco) => (
            <span
              key={eco.name}
              className="text-sm sm:text-base font-bold tracking-tight text-white/80 hover:text-white transition-colors"
            >
              {eco.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
