"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Database,
  TrendingUp,
  ShoppingCart,
  ShieldCheck,
  BarChart3,
  Layers,
  Bot,
  Zap,
  Building2,
  Users,
  Coins,
  Truck,
  Briefcase,
  Headphones,
  CreditCard,
  Cpu,
  FileText,
  RefreshCw,
  Award
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'solutions' | 'services' | null
  const [activeSolutionTab, setActiveSolutionTab] = useState("company-size");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const mobileRef = useRef(null);

  // Solutions Mega Menu Data (Exact Dynamics Square Structure with NavNerds Colors)
  const solutionTabs = [
    { id: "company-size", label: "Company By Size" },
    { id: "erp", label: "AI-Powered ERP" },
    { id: "crm", label: "AI-Powered CRM" },
    { id: "integrations", label: "Integrations" },
    { id: "data-ai", label: "Data & AI Solutions" },
    { id: "legacy-dynamics", label: "Legacy Dynamics" },
  ];

  const solutionContent = {
    "company-size": [
      {
        title: "Startup",
        desc: "Smart, agile ERP setups to kickstart your growth with zero bloat.",
        href: "/contact-us",
        icon: <Zap className="w-5 h-5 text-[#0094C6]" />,
      },
      {
        title: "Small Business",
        desc: "Simplifying operations and financial workflows for ambitious teams.",
        href: "/contact-us",
        icon: <Coins className="w-5 h-5 text-[#0094C6]" />,
      },
      {
        title: "Mid Size",
        desc: "Powering rapid expansion, supply chain agility, and multi-entity control.",
        href: "/contact-us",
        icon: <Users className="w-5 h-5 text-[#0094C6]" />,
      },
      {
        title: "Enterprise",
        desc: "Advanced global ERP solutions with high-volume performance and 24/7 SLAs.",
        href: "/contact-us",
        icon: <Building2 className="w-5 h-5 text-[#0094C6]" />,
      },
    ],
    "erp": [
      {
        title: "Business Central",
        desc: "All-in-one cloud ERP solution for modern enterprise management.",
        href: "/services/implementation",
        icon: <Database className="w-5 h-5 text-[#0094C6]" />,
      },
      {
        title: "Finance & Accounting",
        desc: "Improve financial visibility, automated ledger, and compliance.",
        href: "/services/customization",
        icon: <Coins className="w-5 h-5 text-[#0094C6]" />,
      },
      {
        title: "Supply Chain & Warehousing",
        desc: "Optimize inventory control, purchase planning, and logistics.",
        href: "/services/integration",
        icon: <Truck className="w-5 h-5 text-[#0094C6]" />,
      },
      {
        title: "Project Operations",
        desc: "Automate, track, and streamline billable professional services.",
        href: "/services/dedicated-resources",
        icon: <Briefcase className="w-5 h-5 text-[#0094C6]" />,
      },
    ],
    "crm": [
      {
        title: "Dynamics 365 Sales",
        desc: "Accelerate pipeline velocity and drive end-to-end sales practices.",
        href: "/contact-us",
        icon: <TrendingUp className="w-5 h-5 text-[#0094C6]" />,
      },
      {
        title: "Customer Service",
        desc: "Deliver personalized, collaborative, omnichannel customer support.",
        href: "/services/support",
        icon: <Headphones className="w-5 h-5 text-[#0094C6]" />,
      },
    ],
    "integrations": [
      {
        title: "Shopify & eCommerce Connector",
        desc: "Synchronize orders, real-time inventory, and customer databases.",
        href: "/services/integration",
        icon: <ShoppingCart className="w-5 h-5 text-[#0094C6]" />,
      },
      {
        title: "Banking & Payment Feeds",
        desc: "Direct bank sync, automated reconciliation, and payment gateways.",
        href: "/services/integration",
        icon: <CreditCard className="w-5 h-5 text-[#0094C6]" />,
      },
      {
        title: "Power Apps & Automation",
        desc: "Custom low-code business workflows connecting legacy tools.",
        href: "/services/customization",
        icon: <Cpu className="w-5 h-5 text-[#0094C6]" />,
      },
      {
        title: "OCR Document Management",
        desc: "Intelligent document scanning, approvals, and automated entry.",
        href: "/services/integration",
        icon: <FileText className="w-5 h-5 text-[#0094C6]" />,
      },
    ],
    "data-ai": [
      {
        title: "D365 Copilot AI",
        desc: "AI-powered assistance to automate manual tasks and accelerate decisions.",
        href: "/services/customization",
        icon: <Sparkles className="w-5 h-5 text-[#0094C6]" />,
      },
      {
        title: "Power BI Visual Analytics",
        desc: "Create executive dashboards and real-time business intelligence reports.",
        href: "/services/integration",
        icon: <BarChart3 className="w-5 h-5 text-[#0094C6]" />,
      },
      {
        title: "Microsoft Fabric",
        desc: "Transform and unify all enterprise data with Microsoft Fabric solutions.",
        href: "/services/integration",
        icon: <Layers className="w-5 h-5 text-[#0094C6]" />,
      },
      {
        title: "Azure AI & Automation",
        desc: "Build scalable enterprise-grade predictive and automation pipelines.",
        href: "/services/website-development",
        icon: <Bot className="w-5 h-5 text-[#0094C6]" />,
      },
    ],
    "legacy-dynamics": [
      {
        title: "NAV to BC Cloud Upgrade",
        desc: "Seamless, zero-downtime migration from Dynamics NAV 2013-2018.",
        href: "/services/migration",
        icon: <RefreshCw className="w-5 h-5 text-[#0094C6]" />,
      },
      {
        title: "AX to Cloud Modernization",
        desc: "Modernize legacy Axapta platforms to Microsoft Dynamics 365.",
        href: "/services/migration",
        icon: <ShieldCheck className="w-5 h-5 text-[#0094C6]" />,
      },
    ],
  };

  // Services Menu Data
  const servicesList = [
    { label: "Support", href: "/services/support", desc: "24/7 Managed Dynamics Support" },
    { label: "Training", href: "/services/training", desc: "User & Admin Productivity Training" },
    { label: "Migration", href: "/services/migration", desc: "Seamless Cloud ERP Migration" },
    { label: "Integration", href: "/services/integration", desc: "Connect CRM, eCommerce & Apps" },
    { label: "Customization", href: "/services/customization", desc: "Tailored AL Modules & Features" },
    { label: "Implementation", href: "/services/implementation", desc: "End-to-End D365 Setup" },
    { label: "Dedicated Resources", href: "/services/dedicated-resources", desc: "On-demand Expert Developers" },
    { label: "Website Development", href: "/services/website-development", desc: "Modern Scalable Web Portals" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target) && !e.target.closest("#hamburger-btn")) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#EEF8FF] transition-all duration-300 ${
        isScrolled ? "shadow-sm border-b border-slate-200/80" : "border-b border-slate-200/40"
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between" ref={dropdownRef}>
        {/* Far Left: NavNerds Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative overflow-hidden py-1">
            <Image
              src="/logoDark.webp"
              alt="NavNerds Logo"
              width={160}
              height={46}
              className="object-contain h-10 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Far Right Group: Navigation Menu Links + Let's Connect Button */}
        <div className="flex items-center gap-4 lg:gap-8">
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* 1. SOLUTIONS MEGA MENU (Dynamics Square Style) */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("solutions")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "solutions" ? null : "solutions")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  openDropdown === "solutions"
                    ? "text-[#0094C6] bg-white shadow-xs font-bold"
                    : "text-slate-800 hover:text-[#0094C6] hover:bg-white/60"
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === "solutions"}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openDropdown === "solutions" ? "rotate-180 text-[#0094C6]" : "text-slate-600"
                  }`}
                />
              </button>

              {/* DYNAMICS SQUARE STYLE MEGA MENU DROPDOWN */}
              {openDropdown === "solutions" && (
                <div className="absolute top-full -right-32 lg:-right-24 pt-3 w-[920px] max-w-[95vw] animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_25px_60px_rgba(0,0,0,0.18)] p-6 grid grid-cols-12 gap-6">
                    {/* Left Tabs Column */}
                    <div className="col-span-3 border-r border-slate-100 pr-3 space-y-1">
                      {solutionTabs.map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onMouseEnter={() => setActiveSolutionTab(tab.id)}
                          onClick={() => setActiveSolutionTab(tab.id)}
                          className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                            activeSolutionTab === tab.id
                              ? "bg-[#EEF8FF] text-[#0094C6] border-l-4 border-[#1DCCD8] shadow-xs"
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                          }`}
                        >
                          <span>{tab.label}</span>
                          {activeSolutionTab === tab.id && (
                            <ChevronRight className="w-3.5 h-3.5 text-[#1DCCD8]" />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Middle Dynamic Solution Cards (2 Columns) */}
                    <div className="col-span-6 grid grid-cols-2 gap-3.5 items-start">
                      {solutionContent[activeSolutionTab]?.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group p-3 rounded-xl border border-slate-100 hover:border-[#1DCCD8]/40 hover:bg-[#EEF8FF]/50 transition-all duration-200 flex flex-col justify-between h-full"
                        >
                          <div>
                            <div className="w-9 h-9 rounded-lg bg-[#EEF8FF] border border-[#1DCCD8]/20 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                              {item.icon}
                            </div>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0094C6] transition-colors mb-1">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-slate-500 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Right Promo Sidebar (Exact Dynamics Square Essential Tools) */}
                    <div className="col-span-3 pl-3 border-l border-slate-100 flex flex-col justify-between space-y-3">
                      {/* Tool 1: Cost Estimate Card */}
                      <div className="p-3.5 rounded-xl bg-[#EEF8FF] border border-[#1DCCD8]/30">
                        <span className="text-[10px] font-bold text-[#0094C6] uppercase tracking-wider block mb-1">
                          Essential Tool
                        </span>
                        <h5 className="text-xs font-bold text-slate-900 mb-1">
                          Get Your ERP Estimate
                        </h5>
                        <p className="text-[11px] text-slate-500 mb-2">
                          Quick, free, and tailored to your scope.
                        </p>
                        <Link
                          href="/contact-us"
                          className="text-xs font-bold text-[#0094C6] hover:text-black inline-flex items-center gap-1 group"
                        >
                          <span>Check Now</span>
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>

                      {/* Tool 2: Partner Authority Card */}
                      <div className="p-3.5 rounded-xl bg-slate-900 text-white flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#1DCCD8]/20 flex items-center justify-center text-[#1DCCD8] shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold">Microsoft Certified</p>
                          <p className="text-[10px] text-slate-400">Direct BC Engineering Team</p>
                        </div>
                      </div>

                      {/* Tool 3: AI Copilot Card */}
                      <Link
                        href="/contact-us"
                        className="group p-3 rounded-xl bg-gradient-to-br from-[#061824] to-[#0a2f47] text-white flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#1DCCD8]" />
                          <span className="text-xs font-bold">AI in Dynamics 365</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-[#1DCCD8] group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  pathname.startsWith("/services") || openDropdown === "services"
                    ? "text-[#0094C6] bg-white shadow-xs font-bold"
                    : "text-slate-800 hover:text-[#0094C6] hover:bg-white/60"
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === "services"}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openDropdown === "services" ? "rotate-180 text-[#0094C6]" : "text-slate-600"
                  }`}
                />
              </button>

              {openDropdown === "services" && (
                <div className="absolute top-full right-0 pt-2 w-80 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-2">
                    <div className="px-3 py-2 border-b border-slate-100 mb-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#0094C6]">
                        Our Core Services
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      {servicesList.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="group flex flex-col px-3 py-2 rounded-xl transition-all hover:bg-slate-50"
                        >
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-[#0094C6] transition-colors flex items-center justify-between">
                            {child.label}
                            <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0094C6]" />
                          </span>
                          <span className="text-[11px] text-slate-500 group-hover:text-slate-600">
                            {child.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. PRICING */}
            <Link
              href="/pricing"
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                pathname === "/pricing"
                  ? "text-[#0094C6] bg-white font-bold shadow-xs"
                  : "text-slate-800 hover:text-[#0094C6] hover:bg-white/60"
              }`}
            >
              Pricing
            </Link>

            {/* 4. BLOGS */}
            <Link
              href="/blogs"
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                pathname === "/blogs"
                  ? "text-[#0094C6] bg-white font-bold shadow-xs"
                  : "text-slate-800 hover:text-[#0094C6] hover:bg-white/60"
              }`}
            >
              Blogs
            </Link>

            {/* 5. ABOUT US */}
            <Link
              href="/about-us"
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                pathname === "/about-us"
                  ? "text-[#0094C6] bg-white font-bold shadow-xs"
                  : "text-slate-800 hover:text-[#0094C6] hover:bg-white/60"
              }`}
            >
              About Us
            </Link>
          </nav>

          {/* Let's Connect CTA Button */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#1DCCD8] hover:bg-black transition-all duration-300 shadow-md shadow-[#1DCCD8]/25 hover:scale-105 active:scale-95"
            >
              <span>Let’s Connect</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Hamburger Button for Mobile */}
          <button
            id="hamburger-btn"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-800 hover:bg-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileRef}
          className="md:hidden w-full bg-[#EEF8FF] border-t border-slate-200 shadow-2xl px-6 py-4 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="space-y-1">
            {/* Mobile Services */}
            <div className="border-b border-slate-200/80 pb-2">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "services" ? "rotate-180 text-[#0094C6]" : ""}`} />
              </button>
              {openDropdown === "services" && (
                <div className="pl-3 mt-1 space-y-1 border-l-2 border-[#1DCCD8]">
                  {servicesList.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block py-1.5 text-sm text-slate-600 hover:text-[#0094C6] font-medium transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/pricing" className="block py-2 text-base font-semibold border-b border-slate-200/80 text-slate-800">
              Pricing
            </Link>
            <Link href="/blogs" className="block py-2 text-base font-semibold border-b border-slate-200/80 text-slate-800">
              Blogs
            </Link>
            <Link href="/about-us" className="block py-2 text-base font-semibold border-b border-slate-200/80 text-slate-800">
              About Us
            </Link>
          </div>

          <div className="pt-4">
            <Link
              href="/contact-us"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#1DCCD8] hover:bg-black shadow-md"
            >
              <span>Let’s Connect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
