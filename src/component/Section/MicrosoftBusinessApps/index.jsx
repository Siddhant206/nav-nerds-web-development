"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Check,
  ArrowRight,
  Cloud,
  Cpu,
  Smartphone,
  Layers,
  BarChart3,
  TrendingUp,
  ShieldAlert,
  Workflow,
  ShieldCheck,
  Database,
  MapPin,
  ShoppingCart,
  Factory,
  Receipt,
  Boxes,
  Sparkles,
  Link2,
  LineChart,
  Gauge,
  Zap,
  CloudLightning,
  Shuffle,
  PieChart,
  BarChart4,
  Lock,
  Headphones,
  Users,
  UserCheck,
  CheckCircle,
  BookOpen,
} from "lucide-react";

const businessAppsData = [
  {
    id: "business-central",
    name: "Business Central",
    tabIcon: "/menu-icons/dynamics-365-businesscentral.svg",
    heading: "Smart, AI-enabled ERP for SMBs",
    description:
      "Outperform smartly with the ERP trusted by 96% of Fortune 500 companies.",
    checklist: [
      "Enjoy more savings with low cost of ownership",
      "Boost efficiency with AI and automated workflows",
      "No more manual data entry or app-switching",
      "Increase revenue with precise cash flow forecasts",
      "Flexibility to manage your business from anywhere",
    ],
    features: [
      { label: "Cloud-Enabled Growth", icon: Cloud },
      { label: "AI-Powered Efficiency", icon: Cpu },
      { label: "Work on the Move", icon: Smartphone },
      { label: "Flexible Integration", icon: Layers },
      { label: "Intelligent Decision Making", icon: BarChart3 },
    ],
    ctaHref: "/contact-us",
    ctaLabel: "Get Started",
  },
  {
    id: "finance",
    name: "Finance",
    tabIcon: "/menu-icons/dynamics-365-finance.svg",
    heading: "Accurate financials, every time, on time",
    description: "Boost ROI, Cut Risks: Automate Financial Activities",
    checklist: [
      "Real-time financial analytics for informed decisions",
      "AI-driven insights for proactive risk management",
      "Streamline operations and improve cash flow with automation",
      "Stay compliant with ever-changing global financial regulations",
      "Get a unified financial view to make informed decisions",
    ],
    features: [
      { label: "Accurate financial forecasting", icon: TrendingUp },
      { label: "AI for risk predictions", icon: ShieldAlert },
      { label: "Automated financial workflows", icon: Workflow },
      { label: "Regulatory compliance tools", icon: ShieldCheck },
      { label: "Secure, unified data platform", icon: Database },
    ],
    ctaHref: "/contact-us",
    ctaLabel: "Get Started",
  },
  {
    id: "supply-chain",
    name: "Supply Chain",
    tabIcon: "/menu-icons/dynamics-365-supplychainmanagement.svg",
    heading: "Secure, smart and optimised Supply Chain",
    description:
      "Be disruption-ready, mitigate supply chain issues with Dynamics 365 SCM.",
    checklist: [
      "Boosted Performance with Intelligent Guidance",
      "Proactive Issue Detection for Quality Assurance",
      "Complete Visibility for Supply Chain Efficiency",
      "Resource Management for Optimal Material Use",
      "Maximized Equipment Effectiveness for Productivity",
    ],
    features: [
      { label: "Strategic Supply Chain Mapping", icon: MapPin },
      { label: "Efficient Procurement Solutions", icon: ShoppingCart },
      { label: "Streamlined Manufacturing Flow", icon: Factory },
      { label: "Effective Order & Pricing System", icon: Receipt },
      { label: "Optimized Warehouse & Fulfilment", icon: Boxes },
    ],
    ctaHref: "/contact-us",
    ctaLabel: "Get Started",
  },
  {
    id: "sales",
    name: "Sales",
    tabIcon: "/menu-icons/dynamics-365-sales.svg",
    heading: "Close deals faster and win more customers",
    description:
      "Leverage AI to simplify sales, convert leads fast and expand customer base.",
    checklist: [
      "Use Copilot to reduce mundane tasks",
      "Ease selling with intelligent customer insights",
      "Meet customer’s preferences with personalized interactions",
      "Filter the right customers with AI-based scoring and visualizations",
      "Integrated sales processes within the Microsoft Ecosystem",
    ],
    features: [
      { label: "AI-powered Sales Automation", icon: Sparkles },
      { label: "Integration with native Solutions", icon: Link2 },
      { label: "Data-driven sales strategies", icon: LineChart },
      { label: "Avail Real-time insights", icon: Gauge },
      { label: "Shorten sales cycle using AI", icon: Zap },
    ],
    ctaHref: "/contact-us",
    ctaLabel: "Get Started",
  },
  {
    id: "power-bi",
    name: "Power BI",
    tabIcon: "/menu-icons/power-bi.svg",
    heading: "Visualise Data, See Beyond the Numbers",
    description:
      "Transform data into actionable insight and make data driven decisions.",
    checklist: [
      "Enhanced decision making with real-time insights",
      "Improved operational efficiency with increased productivity",
      "Analyse customer behaviour for tailored experience",
      "Simplify data visualization and report generation",
      "Improves communication and enable team collaboration",
    ],
    features: [
      { label: "Cloud-based data connectivity", icon: CloudLightning },
      { label: "Data transformation and modelling", icon: Shuffle },
      { label: "Interactive reports and dashboards", icon: PieChart },
      { label: "Advanced data analytics", icon: BarChart4 },
      { label: "Fully secured data", icon: Lock },
    ],
    ctaHref: "/contact-us",
    ctaLabel: "Get Started",
  },
  {
    id: "customer-service",
    name: "Customer Service",
    tabIcon: "/menu-icons/dynamics-365-customer-service.svg",
    heading: "Empower agents to offer great customer experience",
    description:
      "Get advanced tools and real-time insights to build lasting customer relationships.",
    checklist: [
      "Advanced service delivery tracking and placements",
      "Deliver consistent support across multiple channels",
      "Personalize customer interactions through AI-Insights",
      "Improved innovation with real-time feedback and analysis",
      "Enable self-service options for faster issue resolution",
    ],
    features: [
      { label: "Seamless Support", icon: Headphones },
      { label: "Enhanced Customer Accessibility", icon: Users },
      { label: "AI-Driven Personalization", icon: UserCheck },
      { label: "Proactive Issue Resolution", icon: CheckCircle },
      { label: "Knowledge Management", icon: BookOpen },
    ],
    ctaHref: "/contact-us",
    ctaLabel: "Get Started",
  },
];

export default function MicrosoftBusinessApps() {
  const [activeTabId, setActiveTabId] = useState("business-central");
  const activeTab =
    businessAppsData.find((item) => item.id === activeTabId) ||
    businessAppsData[0];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Microsoft Business Apps:{" "}
          <span className="text-[#2DDAE6]">New Age Solutions</span> to Drive
          Exponential Growth
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
          The world is changing, and so is technology! If you&apos;re struggling
          to thrive in a fast-paced market, don&apos;t worry. NavNerds will
          address your business challenges with Microsoft Business Apps.
        </p>
      </div>

      {/* 6 Tabs Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
        {businessAppsData.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`group flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-center ${
                isActive
                  ? "bg-gradient-to-br from-[#2E2856] via-[#3B336A] to-[#252048] text-white border-[#2E2856] shadow-xl shadow-indigo-950/20 -translate-y-1"
                  : "bg-white hover:bg-slate-50/80 border-slate-200/90 hover:border-slate-300 text-slate-800 shadow-2xs hover:shadow-sm"
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-2.5 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src={tab.tabIcon}
                  alt={tab.name}
                  width={44}
                  height={44}
                  className="w-10 h-10 object-contain drop-shadow-xs"
                />
              </div>
              <span
                className={`text-sm font-bold tracking-tight transition-colors ${
                  isActive ? "text-white" : "text-slate-800 group-hover:text-[#2DDAE6]"
                }`}
              >
                {tab.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="rounded-3xl bg-[#F8FAFC]/90 border border-slate-200/90 shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 sm:p-10 lg:p-12 transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Headings & Checklist */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              {activeTab.heading}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6">
              {activeTab.description}
            </p>

            <ul className="space-y-3.5 w-full">
              {activeTab.checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EEF8FF] text-[#2DDAE6] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Features List + Get Started Button */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
            <div className="space-y-4 mb-7">
              {activeTab.features.map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#EEF8FF] text-[#2DDAE6] flex items-center justify-center shrink-0 shadow-2xs">
                      <FeatIcon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-slate-800">
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <Link
              href={activeTab.ctaHref}
              className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#2DDAE6] hover:bg-black transition-all duration-300 shadow-md shadow-[#2DDAE6]/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{activeTab.ctaLabel}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
