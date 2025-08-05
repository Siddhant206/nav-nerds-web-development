"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        // <nav className="absolute top-0 left-0  w-full flex justify-between items-center  md:h-22 z-10 md:border-b border-gray-300">
        <nav className="sticky top-0 left-0 bg-[#1DCCD8] w-full flex justify-between items-center  md:h-22 z-10 ">
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
                <Link href={"/"} className='w-fit'>
                    <Image
                        src={"/logoWhite.webp"}
                        alt={"logo of offbeattrek"}
                        width={400}
                        height={200}
                        priority
                        className='object-contain h-20 w-60'
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-semibold text-base text-white relative">
                    <li>
                        <Link href="/" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link href="/about-us" className="hover:underline">About Us</Link>
                    </li>

                    {/* --- SERVICES DROPDOWN --- */}
                    <li
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button
                            className="hover:underline focus:outline-none  flex items-center gap-2"
                            aria-haspopup="true"
                            aria-expanded={isDropdownOpen}
                        >
                            Services
                            <svg
                                width="14"
                                height="10"
                                viewBox="0 0 14 10"
                                fill="none"
                                className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                            >
                                <path d="M2.625 0L0 2.625L7 9.625L14 2.625L11.375 0L7 4.375L2.625 0Z" fill="white" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <ul
                                className="absolute left-0 top-full  font-medium w-48 bg-white text-black shadow-lg rounded-md overflow-hidden z-20 transition-all duration-300 ease-in-out opacity-100 translate-y-0 pointer-events-auto"
                                role="menu"
                            > <li>
                                    <Link
                                        href="/services/business-central"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Business Central
                                    </Link>
                                </li>
                              
                               
                                <li>
                                    <Link
                                        href="/services/implementation"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Implementation
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/integration"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Integration
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/customization"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Customization
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/migration"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Migration
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <Link href="/pricing" className="hover:underline">Pricing</Link>
                    </li>
                    <li>
                        <Link href="/contact-us" className="hover:underline">Contact Us</Link>
                    </li>
                </ul>

                {/* Hamburger Button */}
                <button

                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div ref={ref} className="absolute top-full left-0 w-[95%] bg-white shadow-lg  mx-2 rounded-2xl md:hidden z-50">
                    <ul className="flex flex-col text-black">
                        <li>
                            <Link
                                href="/"
                                className="block px-6 py-3 hover:bg-gray-100 border-b border-gray-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about-us"
                                className="block px-6 py-3 hover:bg-gray-100 border-b border-gray-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About Us
                            </Link>
                        </li>

                        {/* Mobile Journeys Section */}
                        <li className="border-b border-gray-200">
                            <button
                                className="w-full text-left px-6 py-3 hover:bg-gray-100 flex items-center justify-between"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                Services
                                <svg
                                    width="14"
                                    height="10"
                                    viewBox="0 0 14 10"
                                    fill="none"
                                    className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                                >
                                    <path d="M2.625 0L0 2.625L7 9.625L14 2.625L11.375 0L7 4.375L2.625 0Z" fill="currentColor" />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <ul className="bg-gray-50">
                                  
                                    <li>
                                        <Link
                                            href="/services/business-central"
                                            className="block px-8 py-2 hover:bg-gray-200"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            Business Central
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/implementation"
                                            className="block px-8 py-2 hover:bg-gray-200"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            implementation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/customization"
                                            className="block px-8 py-2 hover:bg-gray-200"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            Customization
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/support"
                                            className="block px-8 py-2 hover:bg-gray-200"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            Support
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link
                                href="/pricing"
                                className="block px-6 py-3 hover:bg-gray-100 border-b border-gray-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact-us"
                                className="block px-6 py-3 hover:bg-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;