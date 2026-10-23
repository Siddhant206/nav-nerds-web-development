"use client";
import React from "react";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { H2, H3, P } from "@/component/UI/typography";
const MotionH2 = motion.create(H2);
const MotionH3 = motion.create(H3);
const MotionP = motion.create(P);

const services = [
  {
    id: 1,
    title: "Support",
    description: "24/7 technical support and managed services to keep your Microsoft solutions running smoothly.",
    link:"support",
    icon: "/Icons/Support.webm",
    bgColor: "bg-[#0094C6]",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "Implementation",
    description: "Professional deployment and configuration of Dynamics 365 and Microsoft 365 solutions.",
    link: "implementation",
    icon: "/Icons/Implementation.svg",
    bgColor: "bg-white",
    textColor: "text-black"
  },
  {
    id: 3,
    title: "Integration",
    description: "Connect Dynamics 365 and Microsoft 365 with your other business applications and platforms.",
    link: "integration", 
    icon: "/Icons/Integration.webm",
    bgColor: "bg-[#0094C6]",
    textColor: "text-white"
  },
  {
    id: 4,
    title: "Training",
    description: "We teach administrators and end-users how to maximize new system capabilities and improve productivity.",
    link: "training",
    icon: "/Icons/Training.webm",
    bgColor: "bg-white",
    textColor: "text-black"
  },
  {
    id: 5,
    title: "Customization",
    description: "We help you adapt the system to work your way. Drive efficiency, scalability, and seamless user adoption with our expert customization services.",
    link: "customization",
    icon: "/Icons/Customization.webm",
    bgColor: "bg-white",
    textColor: "text-black"
  },
  {
    id: 6,
    title: "Website Development",
    description: "We build modern, scalable web applications and enterprise portals tailored to your business needs.",
    link: "website-development",
    icon: "/Icons/Business-Central.svg",
    bgColor: "bg-[#0094C6]",
    textColor: "text-white"
  },
  {
    id: 7,
    title: "Dedicated Resources",
    description: "Skilled Microsoft consultants and developers available on-demand whenever or wherever you want to connect with us.",
    link: "dedicated-resources",
    icon: "/Icons/Dedicated-Resources.webm",
    bgColor: "bg-white",
    textColor: "text-gray-800"
  },
  {
    id: 8,
    title: "Migration",
    description: "Seamless setup and migration from ERPs & CRMs to Microsoft 365 tailored to your business needs.",
    link: "migration",
    icon: "/Icons/Migration.webm",
    bgColor: "bg-[#0094C6]",
    textColor: "text-white"
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
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const indicatorVariants = {
  hover: {
    width: "3rem",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
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

const svgVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.8,
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      opacity: { duration: 0.5 }
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
    <section className="py-10 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Services Header */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
        className="max-w-2xl mr-auto text-black py-10 lg:pb-10 lg:pt-20 space-y-4 text-left"
      >
        <MotionH2
          variants={textVariants}
          className="tracking-wide font-semibold"
        >
          Our Services
        </MotionH2>
        <MotionP
          variants={textVariants}
          className="text-gray-600"
        >
          We offer professional ERP consulting services to help companies map their needs with ERP capabilities and select the best ERP vendor.
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
            <Link  key={service.id}
              href={`/services/${service.link}`}>
            
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className={`
                ${service.bgColor} 
                rounded-2xl p-6 shadow-lg cursor-pointer group relative h-64 overflow-hidden
                backdrop-blur-sm border border-white/10
              `}
              style={{
                boxShadow: service.bgColor === 'bg-white'
                  ? '0 10px 40px rgba(0,0,0,0.1)'
                  : '0 10px 40px rgba(0,148,198,0.3)'
              }}
            >
              {/* Animated Background Decorations */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-full"
                initial={{ x: 40, y: -40, scale: 0 }}
                animate={{ x: 40, y: -40, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 90 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/15 to-white/5 rounded-full"
                initial={{ x: -32, y: 32, scale: 0 }}
                animate={{ x: -32, y: 32, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.7, type: "spring" }}
                whileHover={{ scale: 1.3, rotate: -90 }}
              />

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 2,
                  delay: index * 0.2 + 1,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                variants={hoverVariants}
                className="relative z-10 h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    variants={iconVariants}
                    className={`
                      w-12 h-12 rounded-xl flex items-center justify-center text-2xl
                      ${service.bgColor === 'bg-white'
                        ? 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-inner'
                        : 'bg-white/20 backdrop-blur-sm border border-white/20'
                      }
                    `}
                    whileHover={{
                      boxShadow: service.bgColor === 'bg-white'
                        ? "0 5px 20px rgba(0,0,0,0.1)"
                        : "0 5px 20px rgba(255,255,255,0.3)"
                    }}
                  >
                    <span>
                      {typeof service.icon === "string" && service.icon.startsWith("/Icons") ? (
                        service.icon.endsWith(".webm") ? (
                          <video
                            src={service.icon}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-16 w-auto object-contain"
                          />
                        ) : (
                          <Image
                            src={service.icon}
                            alt={`Our Microsoft 365 ${service.title} services`}
                            width={160}
                            height={50}
                            className="object-contain bg-transparent h-16"
                            priority
                          />
                        )
                      ) : (
                        <span className="text-3xl animate-pulse">{service.icon}</span>
                      )}
                    </span>
                  </motion.div>
                </div>

                <MotionH3
                  className={`${service.textColor}`}
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.title}
                </MotionH3>

                <MotionP
                  className={`flex-grow ${service.textColor === 'text-white' ? 'text-white/90' : 'text-gray-600'
                    }`}
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  {service.description}
                </MotionP>

                {/* Animated Hover Indicator */}
                <div className="mt-4 overflow-hidden">
                  <motion.div
                    className={`h-1 rounded-full ${service.textColor === 'text-white'
                        ? 'bg-gradient-to-r from-white/60 to-white/20'
                        : 'bg-gradient-to-r from-[#0094C6] to-[#12C1CE]'
                      }`}
                    initial={{ width: 0, opacity: 0 }}
                    variants={indicatorVariants}
                    whileHover="hover"
                  />
                </div>
              </motion.div>

              {/* Floating Particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 20}%`
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}