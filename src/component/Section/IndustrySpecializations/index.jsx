"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

const industriesData = [
  {
    id: "distribution",
    title: "Distribution",
    badge: "Distribution",
    icon: "/industry/icon-distribution.png",
    illust: "/industry/illust-distribution.png",
    heading: "Streamline Your Distribution Operations at Scale",
    description:
      "Empowering distributors with connected systems to manage supply, demand, and profitability in one place.",
    checklist: [
      "Real-Time Inventory Visibility",
      "Smarter Demand & Supply Planning",
      "Automated Order & Procurement Workflows",
      "Actionable Financial & Sales Insights",
      "Stronger Partner & Customer Relationships",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    badge: "E-commerce",
    icon: "/industry/icon-ecommerce.png",
    illust: "/industry/illust-ecommerce.png",
    heading: "Scale Your Online Stores Confidently",
    description:
      "Delivering exceptional experiences to your buyers and sellers, all in one place.",
    checklist: [
      "Seamless Order Processing",
      "Smart Inventory Management",
      "Efficient Shipping Integration",
      "Automated Financial Insights",
      "Enhanced Customer Service",
    ],
  },
  {
    id: "education",
    title: "Education",
    badge: "Education",
    icon: "/industry/icon-education.png",
    illust: "/industry/illust-education.png",
    heading: "Automate Your Education System with Dynamics 365",
    description:
      "Manage staff, student & curriculum data with AI-powered ERP & CRM solution",
    checklist: [
      "Improved learning paths",
      "Automated admin tasks",
      "Student, Staff Management",
      "Alumni Relations & Fundraising",
      "Enhanced Stakeholder Collaboration",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    badge: "Manufacturing",
    icon: "/industry/icon-manufacturing.png",
    illust: "/industry/illust-manufacturing.png",
    heading: "Connect, Collaborate & Overcome Disruptions",
    description:
      "Modernise your supply chain for better visibility, planning, and efficiency",
    checklist: [
      "Minimise Unplanned Downtime",
      "Predictive Maintenance",
      "Demand Forecasting & Planning",
      "Smart Factory Solutions",
      "Supply Chain Visibility",
    ],
  },
  {
    id: "retail",
    title: "Retail",
    badge: "Retail",
    icon: "/industry/icon-retail.png",
    illust: "/industry/illust-retail.png",
    heading: "Deliver Unified Retail Experiences Across Channels",
    description:
      "Helping retailers connect stores, customers, and operations to drive growth and loyalty seamlessly.",
    checklist: [
      "Omnichannel Sales & Customer Engagement",
      "Intelligent Inventory & Replenishment",
      "Faster Billing & POS Integration",
      "Data-Driven Pricing & Promotions",
      "Personalized Customer Experiences",
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    badge: "Logistics",
    icon: "/industry/icon-logistics.png",
    illust: "/industry/illust-logistics.png",
    heading: "Optimize Logistics Operations with Intelligent Automation",
    description:
      "Enabling logistics businesses to improve visibility, efficiency, and delivery performance across the supply chain.",
    checklist: [
      "End-to-End Shipment Tracking",
      "Warehouse & Fleet Optimization",
      "Automated Routing & Scheduling",
      "Cost & Performance Analytics",
      "Improved Service Reliability & Compliance",
    ],
  },
];

export default function IndustrySpecializations() {
  const [activeTabId, setActiveTabId] = useState("distribution");
  const activeTab =
    industriesData.find((item) => item.id === activeTabId) || industriesData[0];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Your Industry?{" "}
          <span className="text-[#0094C6]">Our Expertise!</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
          NavNerds brings decades of profound industry expertise that merges ongoing industry insights with Microsoft technology to help you capitalise on your biggest opportunities. As a trusted Microsoft Dynamics 365 implementation partner, we deliver solutions customised for your business growth.
        </p>
      </div>

      {/* 6 Tabs Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
        {industriesData.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`group flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-center ${
                isActive
                  ? "bg-white border-[#0094C6] shadow-lg shadow-[#0094C6]/15 -translate-y-1 ring-2 ring-[#0094C6]/20"
                  : "bg-white/80 hover:bg-white border-slate-200/90 hover:border-slate-300 text-slate-700 hover:text-slate-900 shadow-2xs hover:shadow-sm"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2.5 transition-colors duration-200 ${
                  isActive
                    ? "bg-[#EEF8FF]"
                    : "bg-slate-50 group-hover:bg-[#EEF8FF]/60"
                }`}
              >
                <Image
                  src={tab.icon}
                  alt={tab.title}
                  width={32}
                  height={32}
                  className="w-7 h-7 object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <span
                className={`text-sm font-bold tracking-tight transition-colors ${
                  isActive ? "text-[#0094C6]" : "text-slate-800 group-hover:text-[#0094C6]"
                }`}
              >
                {tab.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 sm:p-10 lg:p-12 transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Graphic Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[420px] aspect-[414/465] flex items-center justify-center p-2">
              <Image
                key={activeTab.id}
                src={activeTab.illust}
                alt={activeTab.title}
                width={465}
                height={414}
                className="w-full h-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300 animate-in fade-in zoom-in-95 duration-200"
                priority
              />
            </div>
          </div>

          {/* Right Column: Tab Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
            {/* Small Badge */}
            <span className="px-3.5 py-1 rounded-md text-xs font-bold text-[#0094C6] bg-[#EEF8FF] border border-[#0094C6]/20 inline-block mb-3">
              {activeTab.badge}
            </span>

            {/* Main Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              {activeTab.heading}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {activeTab.description}
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-8 w-full">
              {activeTab.checklist.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EEF8FF] text-[#0094C6] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Link / Button */}
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#0094C6] hover:bg-black transition-all duration-300 shadow-md shadow-[#0094C6]/25 hover:scale-105 active:scale-95"
            >
              <span>Know more about solutions</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
