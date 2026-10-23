"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  Zap, 
  Database, 
  Cloud,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";

export default function Banner() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden bg-[#030712] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      {/* 1. Ambient Linear-Style Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#1DCCD8]/20 via-[#0094C6]/10 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[350px] h-[250px] bg-[#1DCCD8]/10 blur-[100px] pointer-events-none" />
      
      {/* 2. Razor-Sharp Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 3. Resend-Style Glowing Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/15 backdrop-blur-md shadow-[0_0_20px_rgba(29,204,216,0.15)] mb-6 hover:border-[#1DCCD8]/50 transition-colors"
      >
        <span className="flex h-2 w-2 rounded-full bg-[#1DCCD8] animate-pulse" />
        <span className="text-xs sm:text-sm font-medium text-slate-300">
          Microsoft Dynamics 365 <span className="text-[#1DCCD8] font-semibold">· Business Central Specialists</span>
        </span>
      </motion.div>

      {/* 4. Linear-Style Metallic Typography */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
          <span className="text-white">Business Central, engineered for </span>
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-cyan-100 to-[#1DCCD8] bg-clip-text text-transparent">
            modern enterprise speed.
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Eliminate legacy ERP chaos. We architect, migrate, and customize high-performance Dynamics 365 solutions with zero-downtime execution.
        </p>

        {/* Dual High-Converting Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/contact-us"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#1DCCD8] via-cyan-300 to-[#1DCCD8] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_25px_rgba(29,204,216,0.5)] hover:shadow-[0_0_35px_rgba(29,204,216,0.8)] hover:scale-105 active:scale-95"
          >
            <span>Book Free 30-Min Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
          >
            <span>View $499 Trial Package</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>
      </motion.div>

      {/* 5. The 3D Business Central Cockpit (Product Stage) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-full max-w-5xl mx-auto [perspective:1400px]"
      >
        {/* Floating Node Left (Migration) */}
        <div className="hidden lg:flex absolute -top-8 -left-8 z-30 items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60 hover:scale-105 transition-transform duration-300">
          <div className="w-8 h-8 rounded-lg bg-[#1DCCD8]/10 flex items-center justify-center text-[#1DCCD8]">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Cloud Migration</p>
            <p className="text-xs font-semibold text-white">NAV 2018 <span className="text-[#1DCCD8]">➔</span> BC Cloud (0% Downtime)</p>
          </div>
        </div>

        {/* Floating Node Right (Integration) */}
        <div className="hidden lg:flex absolute -bottom-6 -right-6 z-30 items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60 hover:scale-105 transition-transform duration-300">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Real-Time Sync</p>
            <p className="text-xs font-semibold text-white">Power BI + Shopify + Banking</p>
          </div>
        </div>

        {/* Main Cockpit Window */}
        <div className="relative rounded-2xl bg-slate-950/80 backdrop-blur-2xl border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500 hover:border-white/20">
          {/* Top Window Bar */}
          <div className="px-5 py-3.5 bg-slate-900/60 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline">
                Dynamics 365 Business Central · Role Center
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                99.99% Cloud Health
              </span>
            </div>
          </div>

          {/* Business Central Dashboard Content */}
          <div className="p-5 sm:p-7 space-y-6">
            {/* Top Cue Metric Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#1DCCD8]/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-400">Open Sales Orders</span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">+18.4%</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-white">$1,428,950</p>
                <p className="text-[11px] text-slate-500 mt-1">Real-time ledger posted</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#1DCCD8]/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-400">Cash Flow Forecast</span>
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded">Synced</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-white">$3,892,100</p>
                <p className="text-[11px] text-slate-500 mt-1">Direct Bank Sync · Automated</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#1DCCD8]/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-400">AL Custom Extension</span>
                  <span className="text-xs font-semibold text-[#1DCCD8] bg-[#1DCCD8]/10 px-1.5 py-0.5 rounded">v2.4 Active</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-white">0 Bugs / 0 Lag</p>
                <p className="text-[11px] text-slate-500 mt-1">Engineered by NavNerds Devs</p>
              </div>
            </div>

            {/* Micro Copilot AI & Extension Banner */}
            <div className="rounded-xl bg-gradient-to-r from-slate-900/90 to-slate-900/40 border border-white/10 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-[#1DCCD8] flex items-center justify-center text-slate-950 font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Copilot for Business Central Ready</p>
                  <p className="text-[11px] text-slate-400">AI-driven bank reconciliation, sales predictions, and auto invoice dispatch.</p>
                </div>
              </div>

              <span className="text-xs font-mono text-[#1DCCD8] bg-[#1DCCD8]/10 px-3 py-1 rounded-full border border-[#1DCCD8]/20 shrink-0">
                ✔ Ready for Deployment
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 6. Live Trust Metric Counter Ribbon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20 pt-10 border-t border-white/10 text-center w-full"
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
