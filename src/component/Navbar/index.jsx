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
      if (window.scrollY > 10) {
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
    <header
      className={`sticky top-0 z-50 w-full bg-[#EEF8FF] transition-all duration-300 ${
        isScrolled ? "shadow-sm border-b border-slate-200/80" : "border-b border-slate-200/40"
      }`}
    >
      {/* Full width container spanning edge-to-edge */}
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
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      pathname.startsWith("/services") || isServicesOpen
                        ? "text-[#0094C6] bg-white shadow-xs font-bold"
                        : "text-slate-800 hover:text-[#0094C6] hover:bg-white/60"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180 text-[#0094C6]" : "text-slate-600"
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
                    <div className="absolute top-full right-0 pt-2 w-80 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-2">
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
                  className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    pathname === link.href
                      ? "text-[#0094C6] bg-white font-bold shadow-xs"
                      : "text-slate-800 hover:text-[#0094C6] hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Let's Connect CTA Button (Signature Cyan #1DCCD8 on #EEF8FF) */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#1DCCD8] hover:bg-black transition-all duration-300 shadow-md shadow-[#1DCCD8]/25 hover:scale-105 active:scale-95"
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
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="border-b border-slate-200/80 pb-2">
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800"
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180 text-[#0094C6]" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <div className="pl-3 mt-1 space-y-1 border-l-2 border-[#1DCCD8]">
                      {link.children.map((child) => (
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
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block py-2 text-base font-semibold border-b border-slate-200/80 ${
                    pathname === link.href ? "text-[#0094C6] font-bold" : "text-slate-800 hover:text-[#0094C6]"
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
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#1DCCD8] hover:bg-black shadow-md"
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
