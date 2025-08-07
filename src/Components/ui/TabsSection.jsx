"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Technical", "Functional", "Licensing", "Navision"];

const tabContent = {
  Technical: {
    heading: "Technical Support for Business Central, PowerApps & Navision",
    description:
      "Our technical team ensures your Microsoft ecosystem runs like clockwork. From resolving system crashes, fixing sync failures, or handling complex customizations in AL or C/AL, we've got you covered. Need to integrate with Shopify, third-party CRMs, or internal APIs? We architect and implement scalable, secure solutions tailored to your business. We also optimize performance, manage upgrades, and troubleshoot deployment issues across environments.",
    grid: Array(6).fill("Sandbox/live environment management"),
  },
  Functional: {
    heading: "Functional Consulting & Advisory",
    description:
      "Our functional experts help you align system features with business objectives. We configure modules, set up workflows, and guide user adoption for maximum impact.",
    grid: Array(4).fill("Process mapping & automation"),
  },
  Licensing: {
    heading: "Licensing Optimization & Audit Support",
    description:
      "We analyze your license usage and recommend cost-effective plans. Get help with renewals, transitions to CSP, and avoiding over-licensing or compliance risks.",
    grid: Array(4).fill("License advisory & renewal planning"),
  },
  Navision: {
    heading: "Navision Legacy System Support",
    description:
      "Still on NAV? We offer support, customization, and data migration strategies to help you extend the life of your NAV system or transition to Business Central smoothly.",
    grid: Array(6).fill("C/AL customization & hotfixes"),
  },
};

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("Technical");

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md relative z-10">
      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeTab === tab
                ? "bg-black text-white shadow-md"
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
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            {tabContent[activeTab].heading}
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-6 text-center max-w-3xl mx-auto">
            {tabContent[activeTab].description}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tabContent[activeTab].grid.map((item, index) => (
              <div
                key={index}
                className="bg-gray-200 text-center text-sm font-medium p-4 rounded-md shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabsSection;
