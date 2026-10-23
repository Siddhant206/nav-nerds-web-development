"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Support", href: "/services/support", desc: "24/7 Managed Dynamics Support" },
      { label: "Training", href: "/services/training", desc: "User & Admin Productivity Training" },
      { label: "Migration", href: "/services/migration", desc: "Seamless Cloud ERP Migration" },
      { label: "Integration", href: "/services/integration", desc: "Connect CRM, eCommerce & Apps" },
      { label: "Customization", href: "/services/customization", desc: "Tailored AL Modules & Features" },
      { label: "Implementation", href: "/services/implementation", desc: "End-to-End D365 Setup" },
      { label: "Dedicated Resources", href: "/services/dedicated-resources", desc: "On-demand Expert Developers" },
      { label: "Website Development", href: "/services/website-development", desc: "Modern Scalable Web Portals" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
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
    setIsServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 pt-3 pb-2 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          isScrolled
            ? "bg-[#1DCCD8] shadow-[0_10px_25px_rgba(29,204,216,0.35)] border border-white/40"
            : "bg-[#1DCCD8] shadow-[0_6px_20px_rgba(29,204,216,0.25)] border border-white/30"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative overflow-hidden py-1">
            <Image
              src="/logoWhite.webp"
              alt="NavNerds Logo"
              width={150}
              height={44}
              className="object-contain h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    pathname.startsWith("/services") || isServicesOpen
                      ? "text-slate-950 bg-white/30 shadow-xs"
                      : "text-white hover:text-slate-950 hover:bg-white/20"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                >
                  <span>{link.label}</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180 text-slate-950" : "text-white"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Services Dropdown Card */}
                {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-80 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="rounded-2xl bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-2">
                      <div className="px-3 py-2 border-b border-slate-100 mb-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#0094C6]">
                          Enterprise Solutions
                        </p>
                      </div>
                      <div className="space-y-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="group flex flex-col px-3 py-2 rounded-xl transition-all hover:bg-slate-50"
                          >
                            <span className="text-sm font-semibold text-slate-800 group-hover:text-[#0094C6] transition-colors flex items-center justify-between">
                              {child.label}
                              <svg
                                className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0094C6]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
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
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  pathname === link.href
                    ? "text-slate-950 bg-white/30 font-bold shadow-xs"
                    : "text-white hover:text-slate-950 hover:bg-white/20"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right CTA Button (High-Contrast Slate/Black against #1DCCD8) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact-us"
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-white bg-slate-950 hover:bg-black transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
          >
            <span>Let’s Connect</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          id="hamburger-btn"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-white hover:bg-white/20 transition-colors"
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

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileRef}
          className="md:hidden mt-2 rounded-2xl bg-[#1DCCD8] border border-white/40 shadow-2xl p-4 text-white animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="border-b border-white/20 pb-2">
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between py-2 text-base font-semibold text-white"
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180 text-slate-950" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <div className="pl-3 mt-1 space-y-1 border-l-2 border-white/40">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-1.5 text-sm text-white/90 hover:text-slate-950 font-medium transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block py-2 text-base font-semibold border-b border-white/20 ${
                    pathname === link.href ? "text-slate-950 font-bold" : "text-white hover:text-slate-950"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="pt-4">
            <Link
              href="/contact-us"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-slate-950 hover:bg-black shadow-md"
            >
              <span>Let’s Connect</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
