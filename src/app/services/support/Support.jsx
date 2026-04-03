"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { H1, H2, H3, P } from "@/component/UI/typography";
const MotionH2 = motion.create(H2);
const MotionP = motion.create(P);

const tabs = ["Technical", "Functional", "Licensing", "Navision"];

const tabContent = {
  Technical: {
    heading: "Technical Support for Business Central, PowerApps & Navision",
    description:
      "Our technical team ensures your Microsoft ecosystem runs like clockwork. From resolving system crashes, fixing sync failures, or handling complex customizations in AL or C/AL, we’ve got you covered. Need to integrate with Shopify, third-party CRMs, or internal APIs? We architect and implement scalable, secure solutions tailored to your business. We also optimize performance, manage upgrades, and troubleshoot deployment issues across environments.",
    grid: [
      "Custom AL/CAL development",
      "API and extension integration",
      "System troubleshooting and performance tuning",
      "Upgrade assistance and version migration",
      "Data repair and reconciliation",
      "Sandbox/live environment management",
    ],
  },
  Functional: {
    heading: "Functional Support That Translates Features into Results",
    description:
      "Software is only as powerful as the processes it enables. Our functional consultants work with your finance, operations, sales, and inventory teams to simplify complexity. Whether it’s configuring approval workflows, designing reports, setting up dimension structures, or tailoring role centers, we ensure your teams use Business Central and PowerApps efficiently—and with confidence.",
    grid: [
      "Business process mapping and system setup",
      "Finance, sales, and inventory configuration",
      "Workflow and approval setup",
      "Reporting (standard and custom layouts)",
      "Data import/export assistance",
      "End-user training and documentation",
    ],
  },
  Licensing: {
    heading: "Licensing Support That Makes Financial Sense",
    description:
      "We help you demystify Microsoft licensing—so you only pay for what you truly need. Whether you’re onboarding new users, migrating from NAV to Business Central, or expanding your Power Platform usage, we’ll help you choose the right license mix, keep up with Microsoft’s changing policies, and avoid unnecessary costs.",
    grid: [
      "Business Central and Power Platform licensing advisory",
      "Dynamics NAV to Business Central transition planning",
      "User access rights and permissions design",
      "License optimization and renewal management",
      "CSP (Cloud Solution Provider) support",
    ],
  },
  Navision: {
    heading: "Legacy NAV (Navision) Upgrade & Migration Services",
    description:
      "Still running your business on NAV? We provide end-to-end upgrade paths to Business Central (on-prem or cloud). From pre-upgrade assessments to historical data migration, customization redesign, and user re-training—we deliver a smooth transition with no operational disruptions.",
    grid: [
      "NAV version upgrade assessment",
      "Data and customization migration",
      "Process reengineering for modern workflows",
      "Cloud migration and hybrid setup",
      "User re-onboarding and change management",
    ],
  },
  Support: {
    heading: "Ongoing Support & Training",
    description:
      "We don’t just solve issues—we empower your teams. With flexible support models, proactive monitoring, and tailored training, we become your long-term partner in making the most of your Microsoft investment.",
    grid: [
      "Monthly and annual support contracts",
      "Remote and onsite support options",
      "Proactive system health checks",
      "Custom training sessions for teams",
      "Release updates & feature enablement",
    ],
  },
};

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState("Technical");

  return (
    <section id="services" className="relative  text-black overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-[url('/Services/Support/SupportBG.webp')] bg-cover bg-no-repeat bg-center 
        flex flex-col items-center justify-center overflow-hidden 
        h-[60vh] md:h-screen text-white"
      >
        {/* main headline box */}
        <div className="relative z-10 mt-10 md:mt-0 text-center px-6">
          <div className="bg-white text-[#22b8cf] rounded-3xl px-8 py-6 md:px-14 md:py-8 shadow-lg max-w-3xl mx-auto">
            <H1 className="leading-tight text-[#22b8cf]">
              Support Services
              <br />
              for your Business
            </H1>

            <P className="text-right text-black  w-full mt-3 italic font-medium">
              Always on. Always reliable.
            </P>
          </div>
        </div>
        {/* CTA Button */}
        <Link
          href="/contact-us"
          className="relative z-10 mt-10 inline-flex items-center gap-3 px-8 py-3 bg-[#4ED0DB] text-black 
          rounded-full hover:bg-black hover:text-white transition shadow-md"
        >
          Contact Us
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V8V7ZM15.7071 8.70711C16.0976 8.31658 
               16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 
               7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 
               13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 
               15.4616 9.34315 15.0711L15.7071 8.70711ZM1 8V9H15V8V7H1V8Z"
              fill="white"
            />
          </svg>
        </Link>
      </section>

      {/* Content Section */}
      <section className="bg-[url(/HomePageBg.webp)]  bg-cover bg-no-repeat bg-top w-full  py-10  10">
        {/* Service Cards */}
        <div className="relative z-10 mx-auto mb-10 md:mb-20 md:-mt-40 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl px-4 w-full">
          {/* 24/7 IT Support */}
          <div className="bg-white text-black rounded-3xl h-64 p-4 shadow-md flex flex-col items-center text-center">
            <Image
              src="/Services/Support/it-support.webp"
              width={150}
              height={150}
              alt="IT Support"
            />
            <H3 className="mt-3">24/7 IT Support</H3>
            <P className="mt-1">
              24/7 IT Support tailored to needs ensuring maximum uptime.
            </P>
          </div>

          {/* Cloud Solution */}
          <div className="bg-white text-black rounded-3xl h-64 p-4 shadow-md flex flex-col items-center text-center">
            <Image
              src="/Services/Support/cloud.webp"
              width={150}
              height={150}
              alt="Cloud Solution"
            />
            <H3 className="mt-3">Cloud Solution</H3>
            <P className="mt-1">
              Cloud Solutions seasoned & tailored for maximum uptime delivery.
            </P>
          </div>

          {/* Technical Consultant */}
          <div className="bg-white text-black rounded-3xl h-64 p-4 shadow-md flex flex-col items-center text-center">
            <Image
              src="/Services/Support/consultant-1.webp"
              width={150}
              height={150}
              alt="Technical Consultant"
            />
            <H3 className="mt-3">Technical Consultant</H3>
            <P className="mt-1">
              Technical Consulting, IT Marketing & Support for your platform.
            </P>
          </div>
        </div>
        <div className="max-w-6xl mx-auto md:p-6 bg-white rounded-xl shadow-md border border-gray-300 relative z-10">
          {/* Tabs */}
          <div className="max-sm:flex-wrap p-1 md:p-2 w-fit mx-auto bg-gray-100 sm:rounded-2xl flex items-center justify-center gap-1 md:gap-6 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#4ED0DB] text-white shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-2 md:p-6 "
            >
              <MotionH2 className="text-center mb-4">
                {tabContent[activeTab].heading}
              </MotionH2>
              <MotionP className="text-gray-700 text-center max-w-3xl mx-auto mb-6">
                {tabContent[activeTab].description}
              </MotionP>

              {/* Grid */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {tabContent[activeTab].grid.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 text-center text-sm max-sm:w-80 font-medium p-4 md:p-8 rounded-md shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </section>
  );
};

export default SupportPage;
