"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Lock,
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
  Clock,
} from "lucide-react";

export default function Banner() {
  const trustStats = [
    {
      value: "10+",
      label: "Years Experience",
      icon: <Clock className="w-4 h-4 text-[#2DDAE6]" />,
    },
    {
      value: "50+",
      label: "Cloud Deployments",
      icon: <Zap className="w-4 h-4 text-[#2DDAE6]" />,
    },
    {
      value: "100%",
      label: "Certified AL Engineers",
      icon: <ShieldCheck className="w-4 h-4 text-[#2DDAE6]" />,
    },
    {
      value: "24/7",
      label: "Dedicated Support",
      icon: <Users className="w-4 h-4 text-[#2DDAE6]" />,
    },
  ];

  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center overflow-hidden bg-gradient-to-b from-white/70 via-transparent to-transparent pt-8 pb-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      {/* Main 2-Column Split Content Container */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
        {/* Left Column (Shifted Left, Compact 5 Cols): Value Proposition & CTAs */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#1DCCD8]/40 shadow-xs mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DCCD8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DDAE6]" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">
              Microsoft Dynamics 365{" "}
              <span className="text-[#2DDAE6]">· Certified Specialists</span>
            </span>
          </div>

          {/* Clean Sentence-Case Headline */}
          <h1 className="text-xl sm:text-2xl lg:text-[1.95rem] xl:text-[2.15rem] font-semibold tracking-tight text-slate-900 leading-[1.22] mb-3.5">
            Get the best solutions for business growth with{" "}
            <span className="text-[#2DDAE6] block sm:inline">
              Microsoft Dynamics 365
            </span>
          </h1>

          {/* Natural Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-lg font-normal">
            Automate your workflows, simplify operations, and modernize your ERP
            with certified Dynamics 365 Business Central specialists from
            NavNerds.
          </p>

          {/* Dual High-Converting CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 w-full sm:w-auto">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#2DDAE6] hover:bg-black transition-all duration-300 shadow-md shadow-[#2DDAE6]/25 hover:scale-105 active:scale-95"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all duration-200 shadow-xs"
            >
              <span>Explore Packages</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Trust Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-slate-200/90 w-full">
            {trustStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-1.5 mb-1">
                  {stat.icon}
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {stat.value}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Expanded Big 7 Cols): Prominent Large Enterprise Video Showcase */}
        <div className="lg:col-span-7 relative w-full flex items-center justify-center">
          {/* Top-Right Floating AI Pill Badge */}
          <div className="absolute -top-3.5 -right-2 z-20 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-xs font-bold text-slate-800 animate-in fade-in zoom-in duration-300">
            <Sparkles className="w-3.5 h-3.5 text-[#2DDAE6]" />
            <span>AI Copilot Ready</span>
          </div>

          {/* Big Laptop / Browser Glass Container */}
          <div className="w-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(45,218,230,0.18)] hover:shadow-[0_30px_70px_rgba(45,218,230,0.28)] transition-all duration-300">
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between px-3.5 py-2 bg-slate-50 rounded-t-xl sm:rounded-t-2xl border-b border-slate-100 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
              </div>

              <div className="flex items-center gap-1.5 px-3.5 py-0.5 rounded-md bg-white border border-slate-200/80 text-[11px] font-mono text-slate-500">
                <Lock className="w-3 h-3 text-[#10B981]" />
                <span>businesscentral.dynamics.com</span>
              </div>

              <div className="w-8" />
            </div>

            {/* Big Video Player Display (16:9 Widescreen) */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-video bg-slate-950 shadow-inner w-full">
              <video
                src="/BannerVideo.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-[1.01]"
              />
            </div>

            {/* Bottom Status Ribbon Inside Frame */}
            <div className="flex items-center justify-between px-3 pt-2.5 text-xs font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-slate-700 font-semibold text-[11px]">
                  Enterprise Cloud ERP Active
                </span>
              </div>
              <span className="text-[11px] text-slate-400">
                Microsoft Solutions Partner
              </span>
            </div>
          </div>

          {/* Bottom-Left Floating Trust Badge */}
          <div className="absolute -bottom-3 -left-3 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-xs font-bold text-slate-800">
            <div className="w-5 h-5 rounded-md bg-[#EEF8FF] text-[#2DDAE6] flex items-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <span>Zero-Downtime Migration</span>
          </div>
        </div>
      </div>
    </section>
  );
}
