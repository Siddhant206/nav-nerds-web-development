"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowRight,
  Sparkles,
  Truck,
  Cog,
  GraduationCap,
  ShoppingCart,
  Briefcase,
  Coffee,
  HeartPulse,
  ShoppingBag,
  Cpu,
  Pill,
  ShieldCheck,
  FlaskConical,
  CircuitBoard,
  Droplets,
  LayoutGrid,
  Store,
  Building2
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'solutions' | 'industries' | 'services' | null
  const [activeSolutionTab, setActiveSolutionTab] = useState("company-size");
  const [activeIndustryTab, setActiveIndustryTab] = useState("all-industries");
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

  // ==========================================
  // SOLUTIONS MEGA MENU DATA
  // ==========================================
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
        icon: "/menu-icons/store.png",
      },
      {
        title: "Small Business",
        desc: "Simplifying business for small, ambitious teams",
        href: "/contact-us",
        icon: "/menu-icons/storefront.png",
      },
      {
        title: "Mid Size",
        desc: "Powering growth for mid-sized businesses.",
        href: "/contact-us",
        icon: "/menu-icons/group-3535.png",
      },
      {
        title: "Enterprise",
        desc: "Advanced ERP solutions for large, global enterprises",
        href: "/contact-us",
        icon: "/menu-icons/factory.png",
      },
    ],
    "erp": [
      {
        title: "Business Central",
        desc: "All-in-one solution for all your business practices",
        href: "/services/implementation",
        icon: "/menu-icons/dynamics-365-businesscentral.svg",
      },
      {
        title: "Finance",
        desc: "Improve your finance practices",
        href: "/services/customization",
        icon: "/menu-icons/dynamics-365-finance.svg",
      },
      {
        title: "Supply Chain",
        desc: "Optimize operations and drive agile Supply Chain",
        href: "/services/integration",
        icon: "/menu-icons/dynamics-365-supplychainmanagement.svg",
      },
      {
        title: "Human Resource",
        desc: "Optimize Your Resource Utilization",
        href: "/services/dedicated-resources",
        icon: "/menu-icons/dynamics-365-HRM.svg",
      },
      {
        title: "Commerce",
        desc: "Unify Your Back-Office, In-Store, And Digital Experience",
        href: "/services/integration",
        icon: "/menu-icons/dynamics-365-commerce.svg",
      },
      {
        title: "Project Operations",
        desc: "Automate and streamline your projects",
        href: "/services/dedicated-resources",
        icon: "/menu-icons/dynamics-365-project-management.svg",
      },
    ],
    "crm": [
      {
        title: "Sales",
        desc: "Drive end-to-end sales practices",
        href: "/contact-us",
        icon: "/menu-icons/dynamics-365-sales.svg",
      },
      {
        title: "Marketing",
        desc: "Maximize ROI with integrated Marketing",
        href: "/contact-us",
        icon: "/menu-icons/dynamics-365-marketing.svg",
      },
      {
        title: "Field Service",
        desc: "Drive connected and collaborated field service",
        href: "/services/support",
        icon: "/menu-icons/dynamics-365-fieldservice.svg",
      },
      {
        title: "Customer Service",
        desc: "Drive omnichannel customer experience",
        href: "/services/support",
        icon: "/menu-icons/dynamics-365-customer-service.svg",
      },
      {
        title: "Customer Engagement",
        desc: "Transform Your Marketing Operations",
        href: "/contact-us",
        icon: "/menu-icons/dynamics-365-customer-engagement.svg",
      },
    ],
    "integrations": [
      {
        title: "Continia integration",
        desc: "Scan, analyse, and process documents with optimum quality",
        href: "/services/integration",
        icon: "/menu-icons/continia.png",
      },
      {
        title: "Insight Works",
        desc: "Optimise your inventory and distribution operations effortlessly",
        href: "/services/integration",
        icon: "/menu-icons/Insight_Work.png",
      },
      {
        title: "Sana Commerce",
        desc: "Avail a cloud e-commerce solution to supercharge your online store",
        href: "/services/integration",
        icon: "/menu-icons/Sana_Commerce.png",
      },
      {
        title: "Tasklet's Mobile WMS",
        desc: "Optimize warehouse operations, simplify inventory, boost profits",
        href: "/services/integration",
        icon: "/menu-icons/taskley-logo-im.png",
      },
      {
        title: "Continia OCR",
        desc: "Transform document management, streamline processing, manage easily",
        href: "/services/integration",
        icon: "/menu-icons/continia.png",
      },
      {
        title: "Continia Expense Management",
        desc: "Monitor corporate expenses, eliminate manual errors with Continia",
        href: "/services/integration",
        icon: "/menu-icons/continia.png",
      },
      {
        title: "Shopify Connector",
        desc: "Synchronize orders, inventory, and customers across platforms",
        href: "/services/integration",
        icon: "/menu-icons/shopify-integration-logo.svg",
      },
      {
        title: "Yavrio Integration",
        desc: "Connect banking data to ERP for automated workflows",
        href: "/services/integration",
        icon: "/menu-icons/image-541.png",
      },
    ],
    "data-ai": [
      {
        title: "Microsoft Fabric",
        desc: "Transform Data with Microsoft Fabric Solutions",
        href: "/services/integration",
        icon: "/menu-icons/microsoft-fabric.png",
      },
      {
        title: "Power BI",
        desc: "Create powerful visual insights, analytics",
        href: "/services/integration",
        icon: "/menu-icons/power-bi.svg",
      },
      {
        title: "D365 Copilot",
        desc: "AI-powered assistance to automate tasks and improve decisions",
        href: "/services/customization",
        icon: "/menu-icons/copilate-small.png",
      },
      {
        title: "Machine Learning / Azure",
        desc: "Build scalable enterprise-grade machine learning solutions",
        href: "/services/website-development",
        icon: "/menu-icons/machine-learning.svg",
      },
    ],
    "legacy-dynamics": [
      {
        title: "Dynamics NAV",
        desc: "A flexible ERP solution for SMBs",
        href: "/services/migration",
        icon: "/menu-icons/NAV.png",
      },
      {
        title: "Dynamics CRM",
        desc: "Increase Revenue and Customer Satisfaction",
        href: "/services/migration",
        icon: "/menu-icons/CRM.png",
      },
      {
        title: "Dynamics AX",
        desc: "The Most Complete, Agile And Powerful ERP",
        href: "/services/migration",
        icon: "/menu-icons/AX.png",
      },
      {
        title: "Dynamics GP",
        desc: "Accounting software designed for SMEs",
        href: "/services/migration",
        icon: "/menu-icons/GP.png",
      },
      {
        title: "Dynamics ERP",
        desc: "Streamline Entire Business Management with Ease",
        href: "/services/migration",
        icon: "/menu-icons/ERP.png",
      },
      {
        title: "Dynamics F&O",
        desc: "Accelerate your Finance and Inventory more Efficiently",
        href: "/services/migration",
        icon: "/menu-icons/F&Q.png",
      },
    ],
    "ai-intelligent-apps": [
      {
        title: "Power Apps",
        desc: "Build web & mobile apps with zero or minimal code",
        href: "/services/customization",
        icon: "/menu-icons/power-apps.svg",
      },
      {
        title: "Power Automate",
        desc: "Automate your processes to improve workflows",
        href: "/services/customization",
        icon: "/menu-icons/power-automate.svg",
      },
      {
        title: "Power Virtual Agents",
        desc: "Create powerful AI Bots to maximize productivity",
        href: "/services/customization",
        icon: "/menu-icons/virtual-agent.svg",
      },
    ],
  };

  // ==========================================
  // INDUSTRIES MEGA MENU DATA
  // ==========================================
  const industryTabs = [
    { id: "all-industries", label: "All Industries", icon: LayoutGrid },
    { id: "manufacturing", label: "Manufacturing", icon: Cog },
    { id: "retail-commerce", label: "Retail & Commerce", icon: Store },
    { id: "services-public", label: "Services & Public Sector", icon: Building2 },
  ];

  const industryContent = {
    "all-industries": {
      subtitle: "Dynamics 365 tailored to how your industry works",
      pillText: "Explore all industries →",
      pillHref: "/contact-us",
      items: [
        {
          title: "Distribution",
          desc: "Drive seamless supply flow with connected operations",
          href: "/contact-us",
          icon: Truck,
        },
        {
          title: "Manufacturing",
          desc: "Connect your people and operations to drive profitability",
          href: "/contact-us",
          icon: Cog,
        },
        {
          title: "Education",
          desc: "Effectively manage students and staff for overall growth",
          href: "/contact-us",
          icon: GraduationCap,
        },
        {
          title: "Ecommerce",
          desc: "Optimise E-commerce processes with real-time stocks",
          href: "/contact-us",
          icon: ShoppingCart,
        },
        {
          title: "Professional Services",
          desc: "Streamline administration processes leveraging automation",
          href: "/contact-us",
          icon: Briefcase,
        },
        {
          title: "Food & Beverages",
          desc: "Manage supply and inventory processes with real-time data",
          href: "/contact-us",
          icon: Coffee,
        },
        {
          title: "Healthcare",
          desc: "Track clinical operations while enhancing patient experience",
          href: "/contact-us",
          icon: HeartPulse,
        },
        {
          title: "Retail",
          desc: "Optimize retail operations with seamless user experience",
          href: "/contact-us",
          icon: ShoppingBag,
        },
      ],
    },
    "manufacturing": {
      subtitle: "Plan production, control costs and track every component",
      pillText: "Explore manufacturing →",
      pillHref: "/contact-us",
      items: [
        {
          title: "Discrete Manufacturing",
          desc: "BOMs, inventory and production in real time",
          href: "/contact-us",
          icon: Cpu,
        },
        {
          title: "Pharmaceutical",
          desc: "Batch control, quality and compliance",
          href: "/contact-us",
          icon: Pill,
        },
        {
          title: "Medical Device",
          desc: "Traceability and regulatory compliance",
          href: "/contact-us",
          icon: ShieldCheck,
        },
        {
          title: "Chemical",
          desc: "Recipes, batches and lot traceability",
          href: "/contact-us",
          icon: FlaskConical,
        },
        {
          title: "Electronics",
          desc: "Multi-level BOMs and serial tracking",
          href: "/contact-us",
          icon: CircuitBoard,
        },
        {
          title: "Process Manufacturing",
          desc: "Formulas, batches and recipes in Business Central",
          href: "/contact-us",
          icon: Droplets,
        },
      ],
    },
    "retail-commerce": {
      subtitle: "Unify stores, online sales and the back office",
      pillText: "Explore retail & commerce →",
      pillHref: "/contact-us",
      items: [
        {
          title: "Retail",
          desc: "Optimize retail operations with seamless user experience",
          href: "/contact-us",
          icon: ShoppingBag,
        },
        {
          title: "Ecommerce",
          desc: "Optimise E-commerce processes with real-time stocks",
          href: "/contact-us",
          icon: ShoppingCart,
        },
        {
          title: "Distribution",
          desc: "Drive seamless supply flow with connected operations",
          href: "/contact-us",
          icon: Truck,
        },
        {
          title: "Food & Beverages",
          desc: "Manage supply and inventory processes with real-time data",
          href: "/contact-us",
          icon: Coffee,
        },
      ],
    },
    "services-public": {
      subtitle: "Optimize resource delivery, compliance and client operations",
      pillText: "Explore services & public →",
      pillHref: "/contact-us",
      items: [
        {
          title: "Professional Services",
          desc: "Streamline administration processes leveraging automation",
          href: "/contact-us",
          icon: Briefcase,
        },
        {
          title: "Healthcare",
          desc: "Track clinical operations while enhancing patient experience",
          href: "/contact-us",
          icon: HeartPulse,
        },
        {
          title: "Education",
          desc: "Effectively manage students and staff for overall growth",
          href: "/contact-us",
          icon: GraduationCap,
        },
      ],
    },
  };

  // ==========================================
  // SERVICES MENU DATA
  // ==========================================
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
        {/* Far Left: NavNerds Logo + Divider + Microsoft Solutions Partner */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative overflow-hidden py-1">
              <Image
                src="/logoDark.webp"
                alt="NavNerds Logo"
                width={140}
                height={38}
                className="object-contain h-7 sm:h-8 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Vertical Divider */}
          <div className="h-6 w-px bg-slate-300/90 mx-3 sm:mx-3.5" />

          {/* Microsoft Solutions Partner Lockup */}
          <div className="flex items-center select-none shrink-0">
            <Image
              src="/microsoft-solutions-partner.svg"
              alt="Microsoft Solutions Partner"
              width={140}
              height={34}
              className="h-7 sm:h-8 w-auto object-contain"
              priority
            />
          </div>
        </div>

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

            {/* 2. INDUSTRIES MEGA MENU TRIGGER */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "industries" ? null : "industries")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  openDropdown === "industries"
                    ? "text-[#0094C6] bg-white shadow-xs font-bold"
                    : "text-slate-800 hover:text-[#0094C6] hover:bg-white/60"
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === "industries"}
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openDropdown === "industries" ? "rotate-180 text-[#0094C6]" : "text-slate-600"
                  }`}
                />
              </button>
            </div>

            {/* 3. SERVICES DROPDOWN */}
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

            {/* 4. PRICING */}
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

            {/* 5. BLOGS */}
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

            {/* 6. ABOUT US */}
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

      {/* ======================================================== */}
      {/* 1. SOLUTIONS MEGA MENU DROPDOWN */}
      {/* ======================================================== */}
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
              <div className="col-span-6 grid grid-cols-2 gap-x-6 gap-y-3.5 items-start content-start">
                {solutionContent[activeSolutionTab]?.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group p-2.5 rounded-xl border border-transparent hover:border-slate-200/80 hover:bg-slate-50/80 transition-all duration-150 flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 mt-0.5">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
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

              {/* Column 3: Right Sidebar (Essential Tool + AI Card) */}
              <div className="col-span-3 pl-4 border-l border-slate-100 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xs font-bold text-slate-800 tracking-tight uppercase mb-3">
                    Essential Tool
                  </h3>

                  {/* Card 1: Cost Estimator */}
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100/90 hover:border-slate-200 transition-colors">
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      Get Your ERP Cost Estimate
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
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

                {/* Card 2: Deep Indigo AI Card */}
                <Link
                  href="/contact-us"
                  className="group block p-4 rounded-2xl bg-gradient-to-br from-[#1E1B4B] via-[#2A2665] to-[#141235] text-white border border-indigo-900/40 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
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

      {/* ======================================================== */}
      {/* 2. INDUSTRIES MEGA MENU DROPDOWN (Dynamics Square UK Style) */}
      {/* ======================================================== */}
      {openDropdown === "industries" && (
        <div
          className="hidden md:block absolute top-full left-0 right-0 w-full pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-200"
          onMouseEnter={() => handleMouseEnter("industries")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_25px_60px_rgba(0,0,0,0.14)] p-6 lg:p-7 grid grid-cols-12 gap-6 items-stretch">
              {/* Column 1: Left Sidebar Tabs */}
              <div className="col-span-3 border-r border-slate-100 pr-4 space-y-1">
                <div className="mb-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    INDUSTRIES
                  </span>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                    Dynamics 365 built for the way your sector works
                  </p>
                </div>

                {industryTabs.map((tab) => {
                  const isActive = activeIndustryTab === tab.id;
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onMouseEnter={() => setActiveIndustryTab(tab.id)}
                      onClick={() => setActiveIndustryTab(tab.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm transition-all duration-150 flex items-center gap-2.5 ${
                        isActive
                          ? "bg-[#F1F5F9] text-slate-900 font-bold shadow-xs"
                          : "text-slate-700 font-medium hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <TabIcon className={`w-4 h-4 ${isActive ? "text-[#0094C6]" : "text-slate-400"}`} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Column 2: Right Main Area with Subtitle, 3-Column Grid, and Bottom Banner */}
              <div className="col-span-9 flex flex-col justify-between pl-2">
                <div>
                  {/* Header Row: Subtitle + Explore All Industries Pill Link */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                    <p className="text-xs font-semibold text-slate-600">
                      {industryContent[activeIndustryTab]?.subtitle}
                    </p>
                    <Link
                      href={industryContent[activeIndustryTab]?.pillHref || "/contact-us"}
                      className="text-xs font-semibold text-[#0094C6] hover:text-[#1DCCD8] px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-[#EEF8FF] border border-slate-200/80 transition-colors flex items-center gap-1.5"
                    >
                      <span>{industryContent[activeIndustryTab]?.pillText}</span>
                    </Link>
                  </div>

                  {/* 3-Column Grid of Industry Cards */}
                  <div className="grid grid-cols-3 gap-x-4 gap-y-3.5 items-start">
                    {industryContent[activeIndustryTab]?.items.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group p-2.5 rounded-xl border border-transparent hover:border-slate-200/80 hover:bg-slate-50/80 transition-all duration-150 flex items-start gap-3"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#EEF8FF] text-[#0094C6] group-hover:bg-[#0094C6] group-hover:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5 shadow-2xs">
                            <ItemIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
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
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Banner: Don't See Your Industry? */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100/90 flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-[#1DCCD8]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Don’t see your industry?
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        We’ve delivered Microsoft Dynamics across dozens of niche sectors. Tell us about yours.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/contact-us"
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0094C6] hover:bg-black transition-all duration-200 shrink-0 shadow-sm"
                  >
                    <span>Talk to an Expert →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MOBILE DRAWER MENU */}
      {/* ======================================================== */}
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

            {/* Mobile Industries Accordion */}
            <div className="border-b border-slate-200/80 pb-2">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === "industries" ? null : "industries")}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800"
              >
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "industries" ? "rotate-180 text-[#0094C6]" : ""}`} />
              </button>
              {openDropdown === "industries" && (
                <div className="pl-3 mt-1 space-y-3 border-l-2 border-[#1DCCD8]">
                  {industryTabs.map((tab) => (
                    <div key={tab.id} className="pt-1">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        {tab.label}
                      </p>
                      <div className="space-y-1.5 pl-2">
                        {industryContent[tab.id]?.items.slice(0, 3).map((item) => (
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
