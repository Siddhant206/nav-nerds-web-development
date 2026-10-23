"use client";

import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { H2, P } from "@/component/UI/typography";

const plans = [
  {
    title: "Starter Plan",
    badge: "Trial & Trust",
    description: "Low-risk starter engagement to experience our Business Central expertise firsthand.",
    features: [
      "30 Hours of Expert BC Services",
      "Customizations, Setup, or Bug Fixes",
      "Training & Functional Consulting",
      "Light API & App Integrations",
    ],
    cta: "Start Trial",
    popular: false,
  },
  {
    title: "Growth Plan",
    badge: "Scale & Streamline",
    description: "Full implementation and setup designed for growing mid-market businesses.",
    features: [
      "Full Financial & Inventory Setup",
      "Sales, Purchase & Warehouse Mapping",
      "CRM & eCommerce Integrations",
      "Post-Go-Live 30 Days Support",
    ],
    cta: "Start Scaling",
    popular: true,
  },
  {
    title: "Enterprise Plan",
    badge: "Optimize & Expand",
    description: "Advanced architecture, multi-entity setup, and dedicated hypercare support.",
    features: [
      "Multi-Company, Currency & Entities",
      "Manufacturing & Project Modules",
      "Power BI Dashboards & Reporting",
      "60 Days Dedicated Hypercare Support",
    ],
    cta: "Go Enterprise",
    popular: false,
  },
  {
    title: "HRMS Plan",
    badge: "People & Payroll",
    description: "Modern HRMS integrated directly with Microsoft Dynamics 365 Business Central.",
    features: [
      "Biometric Attendance & Leave Sync",
      "Automated Payroll & Statutory Compliance",
      "Custom Appraisal & Exit Workflows",
      "Direct BC General Ledger Sync",
    ],
    cta: "Simplify HR",
    popular: false,
  },
];

export default function Packages() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mr-auto text-left pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF8FF] border border-[#2DDAE6]/30 text-xs font-bold text-slate-800">
          <Sparkles className="w-3.5 h-3.5 text-[#2DDAE6]" />
          <span>Transparent Packages</span>
        </div>
        <H2 className="tracking-tight font-extrabold text-3xl sm:text-4xl text-slate-900">
          Our Implementation & Support Packages
        </H2>
        <P className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Predictable scopes tailored for every stage of your business growth—from low-risk trial packages to multi-entity enterprise rollouts.
        </P>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl bg-white p-6 border transition-all duration-300 flex flex-col justify-between ${
              plan.popular
                ? "border-[#2DDAE6] shadow-xl shadow-[#2DDAE6]/10 ring-2 ring-[#2DDAE6]/30 -translate-y-1"
                : "border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#2DDAE6] hover:-translate-y-1"
            }`}
            style={{
              boxShadow: plan.popular
                ? "0 12px 36px rgba(45, 218, 230, 0.15)"
                : "0 8px 24px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Top Popular Pill */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#2DDAE6] text-slate-950 font-extrabold text-[11px] shadow-sm uppercase tracking-wider">
                Most Popular
              </div>
            )}

            <div>
              {/* Badge */}
              <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#EEF8FF] text-[#2DDAE6] font-bold text-xs mb-3">
                {plan.badge}
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2">
                {plan.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {plan.description}
              </p>

              {/* Feature List */}
              <div className="space-y-3 pt-4 border-t border-slate-100 mb-6">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-left">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/pricing"
              className={`w-full text-center py-2.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                plan.popular
                  ? "bg-[#2DDAE6] text-slate-950 hover:bg-black hover:text-white shadow-md shadow-[#2DDAE6]/25"
                  : "bg-slate-900 text-white hover:bg-[#2DDAE6] hover:text-slate-950"
              }`}
            >
              <span>{plan.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
