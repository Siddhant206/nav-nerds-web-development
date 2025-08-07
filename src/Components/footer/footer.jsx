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
    { href: "/terms", text: "Terms and Conditions" }
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
    { href: "https://www.facebook.com/people/Offbeat-Treks/61576611342708/", label: "Facebook", color: "hover:text-blue-600", path: "M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" },
    // { href: "https://linkedin.com/", label: "LinkedIn", color: "hover:text-blue-700", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z" },
    // { href: "https://twitter.com/", label: "Twitter", color: "hover:text-blue-400", path: "M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.634A9.936 9.936 0 0 0 24 4.557z" },
    { href: "https://www.instagram.com/offbeat.treks/", label: "Instagram", color: "hover:text-pink-500", path: "M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" }
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
            <p><span className="font-medium">Phone:</span> <a href="tel:+911234567890" className="hover:underline">+91 1234567890</a></p>
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