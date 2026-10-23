"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  Lock,
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
  Clock,
  Search,
  Bell,
  Settings,
  TrendingUp,
  CheckCircle2,
  BarChart3,
  Layers,
  Database,
  Cloud,
} from "lucide-react";

export default function Banner() {
  const trustStats = [
    {
      value: "10+",
      label: "Years ERP Practice",
      icon: <Clock className="w-4 h-4 text-[#2DDAE6]" />,
    },
    {
      value: "50+",
      label: "Cloud Deployments",
      icon: <Zap className="w-4 h-4 text-[#2DDAE6]" />,
    },
    {
      value: "99.9%",
      label: "Data Accuracy",
      icon: <ShieldCheck className="w-4 h-4 text-[#2DDAE6]" />,
    },
    {
      value: "24/7",
      label: "Dedicated SLA Support",
      icon: <Users className="w-4 h-4 text-[#2DDAE6]" />,
    },
  ];

  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-white/70 via-transparent to-transparent pt-8 pb-14 lg:py-16 px-4 sm:px-6 lg:px-8">
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
              <span className="text-[#2DDAE6]">· Enterprise ERP Practice</span>
            </span>
          </div>

          {/* Clean Enterprise Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-[2.15rem] xl:text-[2.35rem] font-bold tracking-tight text-slate-900 leading-[1.2] mb-3.5">
            Scale your enterprise with{" "}
            <span className="text-[#2DDAE6] block sm:inline">
              Microsoft Dynamics 365
            </span>
          </h1>

          {/* Natural Executive Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-lg font-normal">
            Enterprise-grade implementation, seamless cloud migrations, and custom AL engineering. Designed for high-growth mid-market enterprises by certified specialists.
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

        {/* Right Column (Expanded Big 7 Cols): Prominent Enterprise Business Central Dashboard Showcase */}
        <div className="lg:col-span-7 relative w-full flex items-center justify-center">
          {/* Top-Right Floating AI Pill Badge */}
          <div className="absolute -top-3.5 -right-2 z-20 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-xs font-bold text-slate-800 animate-in fade-in zoom-in duration-300">
            <Sparkles className="w-3.5 h-3.5 text-[#2DDAE6]" />
            <span>AI Copilot Active</span>
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

            {/* High-Contrast Interactive Business Central Role Center UI (16:9) */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-video bg-[#0B132B] text-slate-100 shadow-inner w-full flex flex-col p-3 sm:p-4 select-none">
              {/* Top Business Central App Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/90 text-xs shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#2DDAE6]/20 border border-[#2DDAE6]/40 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-[#2DDAE6]">BC</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-white leading-tight">Dynamics 365 Business Central</span>
                    <span className="text-[10px] text-slate-400">Enterprise Edition · Production</span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-3 text-slate-400 text-[11px]">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">
                    <Search className="w-3 h-3 text-slate-400" />
                    <span>Search (Alt+Q)</span>
                  </div>
                  <Bell className="w-3.5 h-3.5 text-slate-400 hover:text-white transition-colors" />
                  <Settings className="w-3.5 h-3.5 text-slate-400 hover:text-white transition-colors" />
                </div>
              </div>

              {/* BC Navigation Ribbon */}
              <div className="hidden sm:flex items-center gap-4 py-2 border-b border-slate-800/60 text-[11px] font-medium text-slate-300 shrink-0">
                <span className="text-[#2DDAE6] font-bold border-b border-[#2DDAE6] pb-0.5">Role Center</span>
                <span className="hover:text-white cursor-pointer">Finance</span>
                <span className="hover:text-white cursor-pointer">Sales & Orders</span>
                <span className="hover:text-white cursor-pointer">Purchasing</span>
                <span className="hover:text-white cursor-pointer">Warehouse & Supply</span>
                <span className="hover:text-white cursor-pointer">Power BI Reports</span>
              </div>

              {/* Copilot in Business Central AI Banner */}
              <div className="my-2 p-2 sm:p-2.5 rounded-lg bg-gradient-to-r from-[#1E293B] via-[#0F172A] to-[#1E293B] border border-cyan-500/30 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-[#2DDAE6]/20 text-[#2DDAE6] flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-200">
                    <strong className="text-[#2DDAE6]">Copilot in BC:</strong> Projected cash flow reconciled (+18.4%). Zero unposted ledger discrepancies.
                  </span>
                </div>
                <span className="hidden md:inline-flex text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  Optimal Health
                </span>
              </div>

              {/* Financial KPI Dashboard Cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 my-auto">
                <div className="p-2 sm:p-3 rounded-lg bg-slate-900/90 border border-slate-800/90 flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Open Sales Orders</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-base sm:text-xl font-bold text-white">142</span>
                    <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-0.5">
                      <TrendingUp className="w-2.5 h-2.5" /> +18.4%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                    <div className="bg-[#2DDAE6] h-full w-[78%]" />
                  </div>
                </div>

                <div className="p-2 sm:p-3 rounded-lg bg-slate-900/90 border border-slate-800/90 flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Overdue Invoices</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-base sm:text-xl font-bold text-emerald-400">$0.00</span>
                    <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Reconciled
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                    <div className="bg-emerald-400 h-full w-full" />
                  </div>
                </div>

                <div className="p-2 sm:p-3 rounded-lg bg-slate-900/90 border border-slate-800/90 flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Net Cash Flow</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-base sm:text-xl font-bold text-white">$1.85M</span>
                    <span className="text-[10px] font-semibold text-[#2DDAE6]">Healthy</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[85%]" />
                  </div>
                </div>
              </div>

              {/* Bottom Mini Analytics Bar */}
              <div className="pt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] text-slate-400 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Azure Cloud US-East · 99.9% SLA Active</span>
                </div>
                <div className="flex items-center gap-1 font-semibold text-slate-300">
                  <BarChart3 className="w-3 h-3 text-[#2DDAE6]" />
                  <span>Power BI Embedded Analytics Live</span>
                </div>
              </div>
            </div>

            {/* Bottom Status Ribbon Inside Frame */}
            <div className="flex items-center justify-between px-3 pt-2.5 text-xs font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-slate-700 font-semibold text-[11px]">
                  Enterprise Cloud ERP Active
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                Microsoft Dynamics 365 Cloud Platform
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

      {/* Enterprise Capabilities Strip: Heavyweight Corporate Trust */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto w-full mt-12 sm:mt-16 pt-8 border-t border-slate-200/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/70 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-[#EEF8FF] text-[#2DDAE6] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">ISO-Grade Security</span>
              <span className="text-[11px] text-slate-500">Role-based Azure governance</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/70 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-[#EEF8FF] text-[#2DDAE6] flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Custom AL Engineering</span>
              <span className="text-[11px] text-slate-500">Tailored ERP extensions</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/70 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-[#EEF8FF] text-[#2DDAE6] flex items-center justify-center shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Clean Data Extraction</span>
              <span className="text-[11px] text-slate-500">NAV & GP Cloud Migration</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/70 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-[#EEF8FF] text-[#2DDAE6] flex items-center justify-center shrink-0">
              <Cloud className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">24/7 Enterprise SLA</span>
              <span className="text-[11px] text-slate-500">Continuous health audits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
