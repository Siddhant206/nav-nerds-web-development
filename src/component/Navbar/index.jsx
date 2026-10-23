"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowRight,
  Sparkles
} from "lucide-react";
import {
  BCIcon,
  FinanceIcon,
  SupplyChainIcon,
  HumanResourceIcon,
  CommerceIcon,
  ProjectOpsIcon,
  SalesIcon,
  MarketingIcon,
  FieldServiceIcon,
  CustomerServiceIcon,
  CustomerEngagementIcon,
  StartupIcon,
  SmallBusinessIcon,
  MidSizeIcon,
  EnterpriseIcon,
  ContiniaIcon,
  InsightWorksIcon,
  SanaIcon,
  TaskletIcon,
  ShopifyIcon,
  YavrioIcon,
  FabricIcon,
  PowerBIIcon,
  CopilotIcon,
  AzureAIIcon,
  DynamicsNAVIcon,
  DynamicsCRMIcon,
  DynamicsAXIcon,
  DynamicsGPIcon,
  DynamicsERPIcon,
  DynamicsFOIcon,
  PowerAppsIcon,
  PowerAutomateIcon,
  PowerVirtualAgentsIcon
} from "./DynamicsIcons";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'solutions' | 'services' | null
  const [activeSolutionTab, setActiveSolutionTab] = useState("company-size");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const mobileRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  // Solutions Mega Menu Data (Exact Dynamics Square UK Architecture with authentic Microsoft stickers)
  const solutionTabs = [
    { id: "company-size", label: "Company By Size" },
    { id: "erp", label: "AI-Powered ERP" },
    { id: "crm", label: "AI-Powered CRM" },
    { id: "integrations", label: "Integrations" },
    { id: "data-ai", label: "Data & AI Solutions" },
    { id: "legacy-dynamics", label: "Legacy Dynamics" },
    { id: "ai-intelligent-apps", label: "AI-Intelligent Apps" },
  ];

  const solutionContent = {
    "company-size": [
      {
        title: "Startup",
        desc: "Smart ERP solutions to kickstart your growth",
        href: "/contact-us",
        icon: <StartupIcon />,
      },
      {
        title: "Small Business",
        desc: "Simplifying business for small, ambitious teams",
        href: "/contact-us",
        icon: <SmallBusinessIcon />,
      },
      {
        title: "Mid Size",
        desc: "Powering growth for mid-sized businesses.",
        href: "/contact-us",
        icon: <MidSizeIcon />,
      },
      {
        title: "Enterprise",
        desc: "Advanced ERP solutions for large, global enterprises",
        href: "/contact-us",
        icon: <EnterpriseIcon />,
      },
    ],
    "erp": [
      {
        title: "Business Central",
        desc: "All-in-one solution for all your business practices",
        href: "/services/implementation",
        icon: <BCIcon />,
      },
      {
        title: "Finance",
        desc: "Improve your finance practices",
        href: "/services/customization",
        icon: <FinanceIcon />,
      },
      {
        title: "Supply Chain",
        desc: "Optimize operations and drive agile Supply Chain",
        href: "/services/integration",
        icon: <SupplyChainIcon />,
      },
      {
        title: "Human Resource",
        desc: "Optimize Your Resource Utilization",
        href: "/services/dedicated-resources",
        icon: <HumanResourceIcon />,
      },
      {
        title: "Commerce",
        desc: "Unify Your Back-Office, In-Store, And Digital Experience",
        href: "/services/integration",
        icon: <CommerceIcon />,
      },
      {
        title: "Project Operations",
        desc: "Automate and streamline your projects",
        href: "/services/dedicated-resources",
        icon: <ProjectOpsIcon />,
      },
    ],
    "crm": [
      {
        title: "Sales",
        desc: "Drive end-to-end sales practices",
        href: "/contact-us",
        icon: <SalesIcon />,
      },
      {
        title: "Marketing",
        desc: "Maximize ROI with integrated Marketing",
        href: "/contact-us",
        icon: <MarketingIcon />,
      },
      {
        title: "Field Service",
        desc: "Drive connected and collaborated field service",
        href: "/services/support",
        icon: <FieldServiceIcon />,
      },
      {
        title: "Customer Service",
        desc: "Drive omnichannel customer experience",
        href: "/services/support",
        icon: <CustomerServiceIcon />,
      },
      {
        title: "Customer Engagement",
        desc: "Transform Your Marketing Operations",
        href: "/contact-us",
        icon: <CustomerEngagementIcon />,
      },
    ],
    "integrations": [
      {
        title: "Continia integration",
        desc: "Scan, analyse, and process documents with optimum quality",
        href: "/services/integration",
        icon: <ContiniaIcon />,
      },
      {
        title: "Insight Works",
        desc: "Optimise your inventory and distribution operations effortlessly",
        href: "/services/integration",
        icon: <InsightWorksIcon />,
      },
      {
        title: "Sana Commerce",
        desc: "Avail a cloud e-commerce solution to supercharge your online store",
        href: "/services/integration",
        icon: <SanaIcon />,
      },
      {
        title: "Tasklet's Mobile WMS",
        desc: "Optimize warehouse operations, simplify inventory, boost profits",
        href: "/services/integration",
        icon: <TaskletIcon />,
      },
      {
        title: "Continia OCR",
        desc: "Transform document management, streamline processing, manage easily",
        href: "/services/integration",
        icon: <ContiniaIcon />,
      },
      {
        title: "Continia Expense Management",
        desc: "Monitor corporate expenses, eliminate manual errors with Continia",
        href: "/services/integration",
        icon: <ContiniaIcon />,
      },
      {
        title: "Shopify Connector",
        desc: "Synchronize orders, inventory, and customers across platforms",
        href: "/services/integration",
        icon: <ShopifyIcon />,
      },
      {
        title: "Yavrio Integration",
        desc: "Connect banking data to ERP for automated workflows",
        href: "/services/integration",
        icon: <YavrioIcon />,
      },
    ],
    "data-ai": [
      {
        title: "Microsoft Fabric",
        desc: "Transform Data with Microsoft Fabric Solutions",
        href: "/services/integration",
        icon: <FabricIcon />,
      },
      {
        title: "Power BI",
        desc: "Create powerful visual insights, analytics",
        href: "/services/integration",
        icon: <PowerBIIcon />,
      },
      {
        title: "D365 Copilot",
        desc: "AI-powered assistance to automate tasks and improve decisions",
        href: "/services/customization",
        icon: <CopilotIcon />,
      },
      {
        title: "Machine Learning / Azure",
        desc: "Build scalable enterprise-grade machine learning solutions",
        href: "/services/website-development",
        icon: <AzureAIIcon />,
      },
    ],
    "legacy-dynamics": [
      {
        title: "Dynamics NAV",
        desc: "A flexible ERP solution for SMBs",
        href: "/services/migration",
        icon: <DynamicsNAVIcon />,
      },
      {
        title: "Dynamics CRM",
        desc: "Increase Revenue and Customer Satisfaction",
        href: "/services/migration",
        icon: <DynamicsCRMIcon />,
      },
      {
        title: "Dynamics AX",
        desc: "The Most Complete, Agile And Powerful ERP",
        href: "/services/migration",
        icon: <DynamicsAXIcon />,
      },
      {
        title: "Dynamics GP",
        desc: "Accounting software designed for SMEs",
        href: "/services/migration",
        icon: <DynamicsGPIcon />,
      },
      {
        title: "Dynamics ERP",
        desc: "Streamline Entire Business Management with Ease",
        href: "/services/migration",
        icon: <DynamicsERPIcon />,
      },
      {
        title: "Dynamics F&O",
        desc: "Accelerate your Finance and Inventory more Efficiently",
        href: "/services/migration",
        icon: <DynamicsFOIcon />,
      },
    ],
    "ai-intelligent-apps": [
      {
        title: "Power Apps",
        desc: "Build web & mobile apps with zero or minimal code",
        href: "/services/customization",
        icon: <PowerAppsIcon />,
      },
      {
        title: "Power Automate",
        desc: "Automate your processes to improve workflows",
        href: "/services/customization",
        icon: <PowerAutomateIcon />,
      },
      {
        title: "Power Virtual Agents",
        desc: "Create powerful AI Bots to maximize productivity",
        href: "/services/customization",
        icon: <PowerVirtualAgentsIcon />,
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
      ref={dropdownRef}
      className={`sticky top-0 z-50 w-full bg-[#EEF8FF] transition-all duration-300 ${
        isScrolled ? "shadow-sm border-b border-slate-200/80" : "border-b border-slate-200/40"
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between">
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
            {/* 1. SOLUTIONS MEGA MENU TRIGGER */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
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
            </div>

            {/* 2. SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
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
                <div
                  className="absolute top-full right-0 pt-2 w-80 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
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
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0094C6]" />
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

      {/* DYNAMICS SQUARE UK ARCHITECTURE FULL-WIDTH ENTERPRISE MEGA MENU */}
      {openDropdown === "solutions" && (
        <div
          className="hidden md:block absolute top-full left-0 right-0 w-full pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-200"
          onMouseEnter={() => handleMouseEnter("solutions")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_25px_60px_rgba(0,0,0,0.14)] p-6 lg:p-7 grid grid-cols-12 gap-6 items-stretch">
              {/* Column 1: Clean Left Sidebar Tabs */}
              <div className="col-span-3 border-r border-slate-100 pr-4 space-y-1">
                {solutionTabs.map((tab) => {
                  const isActive = activeSolutionTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onMouseEnter={() => setActiveSolutionTab(tab.id)}
                      onClick={() => setActiveSolutionTab(tab.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all duration-150 ${
                        isActive
                          ? "bg-[#F1F5F9] text-slate-900 font-bold shadow-xs"
                          : "text-slate-700 font-medium hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Column 2: Middle 2-Column Horizontal Solutions Grid */}
              <div className="col-span-6 grid grid-cols-2 gap-x-6 gap-y-3 items-start content-start">
                {solutionContent[activeSolutionTab]?.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group p-2.5 rounded-xl border border-transparent hover:border-slate-200/80 hover:bg-slate-50/80 transition-all duration-150 flex items-start gap-3.5"
                  >
                    <div className="shrink-0 transition-transform duration-200 group-hover:scale-105 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0094C6] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-snug line-clamp-2 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Column 3: Right Sidebar (Essential Tool + Forbes Council + AI Card) */}
              <div className="col-span-3 pl-4 border-l border-slate-100 flex flex-col justify-between space-y-3.5">
                <div>
                  <h3 className="text-xs font-bold text-slate-800 tracking-tight uppercase mb-2.5">
                    Essential Tool
                  </h3>

                  {/* Card 1: Cost Estimator */}
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      Get Your ERP Cost Estimate
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">
                      Quick, free, and tailored to your business.
                    </p>
                    <Link
                      href="/contact-us"
                      className="text-xs font-bold text-[#0094C6] hover:text-[#1DCCD8] inline-flex items-center gap-1.5 transition-colors group"
                    >
                      <span>Check Now</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Card 2: Forbes Official Member Executive Authority */}
                <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-800 bg-[#12141A] transition-transform duration-200 hover:scale-[1.02]">
                  <Image
                    src="/forbes-card.webp"
                    alt="Forbes Technology Council Official Member 2025"
                    width={320}
                    height={94}
                    className="w-full h-auto object-contain block"
                  />
                </div>

                {/* Card 3: Deep Indigo AI Card */}
                <Link
                  href="/contact-us"
                  className="group block p-4 rounded-2xl bg-gradient-to-br from-[#1E1B4B] via-[#2A2665] to-[#141235] text-white border border-indigo-900/40 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                      <span>AI in Dynamics 365</span>
                    </div>
                    <span className="text-xs text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-bold">
                      ↗
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    See how AI in Dynamics 365 improves processes with insights and automation.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileRef}
          className="md:hidden w-full bg-[#EEF8FF] border-t border-slate-200 shadow-2xl px-6 py-4 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="space-y-1">
            {/* Mobile Solutions Accordion */}
            <div className="border-b border-slate-200/80 pb-2">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "solutions" ? null : "solutions")}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "solutions" ? "rotate-180 text-[#0094C6]" : ""}`} />
              </button>
              {openDropdown === "solutions" && (
                <div className="pl-3 mt-1 space-y-3 border-l-2 border-[#1DCCD8]">
                  {solutionTabs.map((tab) => (
                    <div key={tab.id} className="pt-1">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        {tab.label}
                      </p>
                      <div className="space-y-1.5 pl-2">
                        {solutionContent[tab.id]?.slice(0, 3).map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block text-sm text-slate-700 hover:text-[#0094C6] font-medium"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Services Accordion */}
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
