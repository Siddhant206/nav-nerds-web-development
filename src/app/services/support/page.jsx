"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { typography } from '@/components/Ui/fonts';
import Link from 'next/link';


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


const TabsSection = () => {
    const [activeTab, setActiveTab] = useState("Technical");

    return (
        <section id="services" className="relative  text-black overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-white bg-[url(/Services/Dedicated-Resources/dedicatedResourcesBG.jpg)]  bg-cover bg-no-repeat  bg-center md:bg-bottom   flex items-center justify-center lg:py-14 max-lg:px-4  flex-col w-full text-black  overflow-hidden h-[50vh] md:h-[100dvh] " >
                <div className='absolute inset-0 bg-black/30 ' />
                <div className="md:pb-60 relative flex flex-col items-center justify-center w-fit">
                    <h1 className={`${typography.heading} text-white max-w-xl text-center`}>
                        Support Services
                        for your Business
                    </h1>
                    <Link
                        href={"/contact-us"}
                        className="w-fit flex items-center justify-center gap-4 px-6 py-3 md:px-10 md:py-2 rounded-3xl border border-gray-200  text-white bg-[#4ED0DB] hover:bg-black hover:text-white transition-colors duration-300 mt-4 md:mt-8"
                    >
                        Contact Us
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"  >
                            <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V8V7ZM15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM1 8V9H15V8V7H1V8Z" fill="white" />
                        </svg>

                    </Link>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-[url(/HomePageBg.webp)]  bg-cover bg-no-repeat bg-top w-full  py-10  10">

                <div className="max-w-6xl mx-auto md:p-6 bg-white rounded-xl shadow-md border border-gray-300 relative z-10">
                    {/* Tabs */}
                    <div className="max-sm:flex-wrap p-1 md:p-2 w-fit mx-auto bg-gray-100 sm:rounded-2xl flex items-center justify-center gap-1 md:gap-6 mb-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === tab
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
                            <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
                                {tabContent[activeTab].heading}
                            </h2>
                            <p className="text-gray-700 text-sm md:text-base mb-6 text-center max-w-3xl mx-auto">
                                {tabContent[activeTab].description}
                            </p>

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

export default TabsSection;
