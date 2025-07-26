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
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center  md:h-22 z-10 md:border-b border-gray-300">
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
                <Link href={"/"} className='w-fit'>
                    <Image
                        src={"/logoWhite.webp"}
                        alt={"logo of offbeattrek"}
                        width={200}
                        height={200}
                        priority
                        className='object-cover h-20 w-20'
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-white relative">
                    <li>
                        <Link href="/" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline">About Us</Link>
                    </li>

                    {/* --- JOURNEYS DROPDOWN --- */}
                    <li
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button
                            className="hover:underline focus:outline-none flex items-center gap-2"
                            aria-haspopup="true"
                            aria-expanded={isDropdownOpen}
                        >
                            Journeys
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
                                className="absolute left-0 top-full  w-48 bg-white text-black shadow-lg rounded-md overflow-hidden z-20 transition-all duration-300 ease-in-out opacity-100 translate-y-0 pointer-events-auto"
                                role="menu"
                            >
                                <li>
                                    <Link
                                        href="/treks"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Treks
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/walks-and-hikes"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Walks And Hikes
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/camping"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Camping
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/women"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Women
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <Link href="/blogs" className="hover:underline">Blogs</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:underline">Contact Us</Link>
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
                                href="/about"
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
                                Journeys
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
                                            href="/treks"
                                            className="block px-8 py-2 hover:bg-gray-200"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            Treks
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/walks-and-hikes"
                                            className="block px-8 py-2 hover:bg-gray-200"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            Walks And Hikes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/camping"
                                            className="block px-8 py-2 hover:bg-gray-200"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            Camping
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/women"
                                            className="block px-8 py-2 hover:bg-gray-200"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            Women Treks
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link
                                href="/blogs"
                                className="block px-6 py-3 hover:bg-gray-100 border-b border-gray-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
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