"use client"

import React from 'react';
import Link from 'next/link';
import Image from "next/image"; 

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
    { href: "/about-us", text: "About Us" },
    { href: "/pricing", text: "Pricing" },
    { href: "/privacy-policy", text: "Privacy Policy" }, 
  ];

  const services = [
    "Implementation", 
    "Integration",
     "Customization", 
    "Dedicated Resources", 
    "Business Central", 
    "Support",
     "Migration "];
  const industry = ["Construction", "E-Commerce", "Manufacturing", "Finance", "Education","Travel",];

  const socialLinks = [
    { href: "https://www.linkedin.com/company/navnerds/ ", label: "LinkedIn", color: "hover:text-blue-700", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z" },
     ];

  return (
    <footer role="contentinfo" className="bg-[url(/FooterBg.webp)] bg-cover bg-top bg-blend-d text-gray-800 min-h-fit max-lg:px-4">
    <div className='max-w-3xl mx-auto text-center space-y-4 pt-20'>
      <h3 className='text-xl sm:text-2xl lg:text-4xl font-bold'>Get In Touch</h3>
        <p className='text-sm sm:text-base lg:text-xl'>Contact Us For your needs we have the best team and right minds to deliver projects end-to-end.</p>
        <Link
          href={"/contact-us"}
          className="px-6 py-3 md:px-12 md:py-2 rounded-3xl border border-gray-400   hover:text-white bg-white hover:bg-black text-black transition-colors duration-300 mt-4 md:mt-8"
        >
          Contact Us
        </Link>
    </div>
    
    
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-28">

        {/* Company Section - Remain same */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
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
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <nav aria-label="Our Services">
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <AnimatedLink href={`/services/${encodeURIComponent(service.toLowerCase().replace(/\s+/g, ''))}`}>
                    {service}
                  </AnimatedLink>
                </li>
              ))}

            </ul>
          </nav>
        </div>

        {/* Industry */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Industry</h2>
          <nav aria-label="Industries We Serve">
            <ul className="space-y-2">
              {industry.map((industry) => (
                <li key={industry} className="group relative w-fit cursor-default">
                  <span className="relative ">{industry}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"></span>
                </li>
              ))}

            </ul>
          </nav>
        </div>

        {/* Contact Section - Remain same */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <address className="not-italic space-y-2">
            <p><span className="font-medium">Phone:</span> <a href="tel:+919068476495" className="hover:underline">+91 9068476495</a></p>
            <p><span className="font-medium">Email:</span> <a href="mailto:info@navnerds.com" className="hover:underline">info@navnerds.com</a></p>
          </address>

          <div>
            <h2 className="text-lg font-semibold mt-2">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map(({ href, label, color, path }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`text-gray-800 ${color} transition-colors duration-300`}>
                  <svg width={label === "Instagram" ? "30" : "24"} height={label === "Instagram" ? "30" : "24"} fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Remain same */}
      <div className="py-5 text-center text-sm text-gray-800 border-t border-gray-300 pt-4">
        <p>
          &copy; {new Date().getFullYear()} <strong>NavNerds</strong>. All rights reserved.  
        </p>
      </div>
    </footer>
  );
}

export default Footer;