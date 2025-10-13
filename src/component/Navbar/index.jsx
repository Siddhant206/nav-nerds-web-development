"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    {
        label: "Services",
        children: [
            { label: "Support", href: "/services/support" },
            { label: "Training", href: "/services/training" },
            { label: "Migration", href: "/services/migration" },
            { label: "Integration", href: "/services/integration" },
            { label: "Customization", href: "/services/customization" },
            { label: "Implementation", href: "/services/implementation" },
            { label: "Dedicated Resources", href: "/services/dedicated-resources" },
            { label: "Website Development", href: "/services/website-development" },
        ],
    },
    { label: "Blogs", href: "/blogs" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact Us", href: "/contact-us" },
];

 function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState (null);
    const ref = useRef (null);

    // Click-outside to close menu
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsMobileMenuOpen(false);
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="sticky top-0 z-40 bg-[#1DCCD8]">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2 md:py-2">
                <Link href="/" className="w-fit">
                    <Image
                        src="/logoWhite.webp"
                        alt="Logo"
                        width={160}
                        height={50}
                        className="object-contain h-16"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-white font-semibold relative">
                    {navLinks.map((link) =>
                        link.children ? (
                            <li
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => setOpenDropdown(link.label)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <button
                                    className="hover:underline flex items-center gap-2"
                                    aria-haspopup="true"
                                    aria-expanded={openDropdown === link.label}
                                >
                                    {link.label}
                                    <svg
                                        className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : "rotate-0"
                                            }`}
                                        fill="white"
                                        viewBox="0 0 14 10"
                                    >
                                        <path d="M2.625 0L0 2.625L7 9.625L14 2.625L11.375 0L7 4.375L2.625 0Z" />
                                    </svg>
                                </button>
                                {openDropdown === link.label && (
                                    <ul className="absolute top-full  left-0 bg-white text-black  font-medium shadow-lg rounded-md w-52 overflow-clip z-20">
                                        {link.children.map((child) => (
                                            <li key={child.label}>
                                                <Link
                                                    href={child.href}
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li key={link.label}>
                                <Link href={link.href} className="hover:underline">
                                    {link.label}
                                </Link>
                            </li>
                        )
                    )}
                </ul>

                {/* Hamburger */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white z-50"
                    aria-label="Toggle mobile menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    ref={ref}
                    className="md:hidden absolute left-4 w-80 bg-white text-black shadow-md rounded-xl mx-3 my-2 p-4"
                >
                    <ul className="space-y-3">
                        {navLinks.map((link) =>
                            link.children ? (
                                <li key={link.label}>
                                    <button
                                        onClick={() =>
                                            setOpenDropdown(openDropdown === link.label ? null : link.label)
                                        }
                                        className="w-full flex justify-between items-center font-medium py-2"
                                    >
                                        {link.label}
                                        <svg
                                            className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 14 10"
                                        >
                                            <path d="M2.625 0L0 2.625L7 9.625L14 2.625L11.375 0L7 4.375L2.625 0Z" />
                                        </svg>
                                    </button>
                                    {openDropdown === link.label && (
                                        <ul className="ml-4 mt-2 space-y-2 text-sm">
                                            {link.children.map((child) => (
                                                <li key={child.label}>
                                                    <Link
                                                        href={child.href}
                                                        className="block py-1 hover:text-primary"
                                                        onClick={() => {
                                                            setIsMobileMenuOpen(false);
                                                            setOpenDropdown(null);
                                                        }}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ) : (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="block font-medium py-2 hover:text-primary"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar