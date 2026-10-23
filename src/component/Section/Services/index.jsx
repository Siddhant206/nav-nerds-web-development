"use client";
import React from "react";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";
import { H2, H3, P } from "@/component/UI/typography";
const MotionH2 = motion.create(H2);
const MotionH3 = motion.create(H3);
const MotionP = motion.create(P);

const services = [
  {
    id: 1,
    title: "Support & SLA Care",
    description: "24/7 technical troubleshooting, proactive system health audits, and guaranteed SLA support for Microsoft Dynamics 365.",
    link: "support",
    icon: "/Icons/Support.webm",
  },
  {
    id: 2,
    title: "Cloud Implementation",
    description: "End-to-end architecture deployment, functional configuration, and user onboarding for Dynamics 365 Business Central.",
    link: "implementation",
    icon: "/Icons/Implementation.svg",
  },
  {
    id: 3,
    title: "Ecosystem Integration",
    description: "Seamless API & middleware integration connecting Business Central with CRM, Shopify, Power Platform, and enterprise tools.",
    link: "integration", 
    icon: "/Icons/Integration.webm",
  },
  {
    id: 4,
    title: "Corporate Training",
    description: "Hands-on role-based training programs empowering administrators and functional teams to maximize ERP ROI.",
    link: "training",
    icon: "/Icons/Training.webm",
  },
  {
    id: 5,
    title: "Custom AL Engineering",
    description: "Tailored AL extensions, custom report designs, and automated business workflows adapted to your proprietary processes.",
    link: "customization",
    icon: "/Icons/Customization.webm",
  },
  {
    id: 6,
    title: "Enterprise Web Portals",
    description: "High-performance customer, vendor, and employee self-service portals integrated directly with your Business Central data.",
    link: "website-development",
    icon: "/Icons/Business-Central.svg",
  },
  {
    id: 7,
    title: "Dedicated Specialists",
    description: "Direct on-demand access to certified senior Microsoft AL developers, functional architects, and project leads.",
    link: "dedicated-resources",
    icon: "/Icons/Dedicated-Resources.webm",
  },
  {
    id: 8,
    title: "Zero-Downtime Migration",
    description: "Risk-free data migration from legacy NAV, GP, QuickBooks, or on-premise servers to modern Business Central Cloud.",
    link: "migration",
    icon: "/Icons/Migration.webm",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5
    }
  }
};

const hoverVariants = {
  hover: {
    y: -4,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const iconVariants = {
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true });

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Services Header */}
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        variants={textVariants}
        className="max-w-3xl mr-auto text-black pb-8 pt-4 space-y-3 text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF8FF] border border-[#2DDAE6]/30 text-xs font-bold text-slate-800">
          <span>Enterprise Services Catalog</span>
        </div>
        <MotionH2
          variants={textVariants}
          className="tracking-tight font-extrabold text-3xl sm:text-4xl text-slate-900"
        >
          End-to-End Microsoft Dynamics 365 Services
        </MotionH2>
        <MotionP
          variants={textVariants}
          className="text-slate-600 text-sm sm:text-base leading-relaxed"
        >
          From initial architecture and zero-downtime migrations to custom AL development and 24/7 SLA support, our certified team ensures your ERP operates at peak performance.
        </MotionP>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto" ref={servicesRef}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isServicesInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
        >
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.link}`}
              className="h-full block group"
            >
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl cursor-pointer relative h-full flex flex-col justify-between border border-slate-200/90 hover:border-[#2DDAE6] transition-all duration-300"
                style={{
                  boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
                }}
              >
                {/* Top Row: Icon + Service Index Number */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      variants={iconVariants}
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#EEF8FF] border border-cyan-100 shadow-xs"
                    >
                      {typeof service.icon === "string" && service.icon.startsWith("/Icons") ? (
                        service.icon.endsWith(".webm") ? (
                          <video
                            src={service.icon}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-9 w-9 object-contain"
                          />
                        ) : (
                          <Image
                            src={service.icon}
                            alt={service.title}
                            width={36}
                            height={36}
                            className="object-contain h-8 w-8"
                          />
                        )
                      ) : (
                        <span className="text-xl">{service.icon}</span>
                      )}
                    </motion.div>

                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#2DDAE6] transition-colors">
                      {`0${service.id} //`}
                    </span>
                  </div>

                  <MotionH3
                    className="text-slate-900 font-bold text-lg mb-2 group-hover:text-[#2DDAE6] transition-colors tracking-tight"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.title}
                  </MotionH3>

                  <MotionP
                    className="text-slate-600 text-sm leading-relaxed"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
                  >
                    {service.description}
                  </MotionP>
                </div>

                {/* Bottom Row: Link Indicator Arrow */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#2DDAE6] transition-colors">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
