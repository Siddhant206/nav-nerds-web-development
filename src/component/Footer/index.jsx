"use client"

import React from 'react';
import Link from 'next/link';
import Image from "next/image"; 
import { H2, H3, H4, P } from '@/component/UI/typography';
// import { ContactSection } from '../temp'; 
// import { Button } from '../UI/button';

const AnimatedLink = ({ href, children, onClick }) => (
  <Link href={href} onClick={onClick} className="relative inline-block group">
    <span className="relative  ">{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"/>
  </Link>
);

function Footer() {
  // Company links, social links, seasons, difficulties arrays - Remain same
  const companyLinks = [
    { href: "/", text: "Home" },
    { href: "/pricing", text: "Pricing" },
    { href: "/about-us", text: "About Us" },
    { href: "/contact-us", text: "Contact Us" },
    { href: "/privacy-policy", text: "Privacy Policy" }, 
  ];

  const services = [
    "Support",
    "Training",
    "Migration",
    "Integration",
    "Customization", 
    "Implementation", 
    "Dedicated-Resources",
    "Website-Development",
  ];
  const industry = [
    "Travel",
    "Finance", 
    "Education",
    "E-Commerce", 
    "Construction",
    "Manufacturing", 
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/navnerds/ ",
      label: "LinkedIn",
      color: "hover:text-blue-700",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z",
    },
    {
      href: "https://www.instagram.com/navnerds01/ ",
      label: "Instagram",
      color: "hover:text-pink-600",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm4.846-10.354c0 .795.645 1.44 1.44 1.44s1.44-.645 1.44-1.44-.645-1.44-1.44-1.44-1.44.645-1.44 1.44z",
    },
    {
      href: "https://www.youtube.com/@NavNerds ",
      label: "Youtube",
      color: "hover:text-red-600",
      path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    },
  ];

  return (
    <footer
      role="contentinfo"
      className="bg-[url(/FooterBg.webp)] bg-cover bg-top bg-blend-d text-gray-800 min-h-fit max-lg:px-4"
    >
      {/* <ContactSection /> */}

      <div className="max-w-3xl mx-auto text-center space-y-4 pt-20">
        <H3 className="text-gray-800">
          Get In Touch
        </H3>
        <P className="text-sm sm:text-base lg:text-xl">
          Contact Us For your needs we have the best team and right minds to
          deliver projects end-to-end.
        </P>
        <Link
          href={"/contact-us"}
          className="px-6 py-3 md:px-12 md:py-2 rounded-3xl border border-gray-400   hover:text-white bg-white hover:bg-black text-black transition-colors duration-300 mt-4 md:mt-8"
        >
          Contact Us
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-28">
        {/* Company Section - Remain same */}
        <div>
          <H4 className="mb-4 text-gray-900">Company</H4>
          <nav aria-label="Company Links">
            <ul className="space-y-2">
              {companyLinks.map(({ href, text }) => (
                <li key={href}>
                  <AnimatedLink href={href}>{text}</AnimatedLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Services */}
        <div>
          <H4 className="mb-4 text-gray-900">Services</H4>
          <nav aria-label="Our Services">
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <AnimatedLink href={`/services/${service.toLocaleLowerCase()}`}>
                    {service}
                  </AnimatedLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Industry */}
        <div>
          <H4 className="mb-4 text-gray-900">Industry</H4>
          <nav aria-label="Industries We Serve">
            <ul className="space-y-2">
              {industry.map((industry) => (
                <li
                  key={industry}
                  className="group relative w-fit cursor-default"
                >
                  <span className="relative ">{industry}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact Section - Remain same */}
        <div>
          <H4 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</H4>
          <address className="not-italic space-y-2 text-sm sm:text-base">
            <P>
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+919068476495" className="hover:underline">
                +91 9068476495
              </a>
            </P>
            <P>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:info@navnerds.com" className="hover:underline">
                info@navnerds.com
              </a>
            </P>
          </address>

          <div>
            <H4 className="text-lg font-semibold mt-2 text-gray-800">Follow Us</H4>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map(({ href, label, color, path }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-gray-800 ${color} transition-colors duration-300`}
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-8"
                  >
                    <path d={path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Remain same */}
      <div className="py-5 text-center text-sm text-gray-800 border-t border-gray-300 pt-4 max-w-7xl mx-auto flex items-center justify-between">
        <P>
          &copy; {new Date().getFullYear()} <strong>NavNerds</strong>. All
          rights reserved.
        </P>
        <P>
          Designed and Maintained by{" "}
          <a
            href="http://neuera.in"
            target="_blank"
            className="font-bold text-lg lg:text-xl"
          >
            Neuera
          </a>
        </P>
      </div>
    </footer>
  );
}

export default Footer;