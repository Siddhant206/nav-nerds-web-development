// app/pricing/page.tsx
"use client";

import Link from "next/link";

export default function PricingPage() {
    const plans = [
        {
            title: "Trust & Trial Package",
            price: "$499",
            desc: "30 Hours of Expert BC Services. Use hours however you need: customizations, bug fixes, training, reports, integrations.",
            features: [
                "30 Hours of Expert BC Services",
                "Customizations, Setup, or Bug Fixes",
                "Training or Consulting",
                "Reports or Workflows",
                "Light Integrations",
            ],
            cta: "Try for $499",
        },
        {
            title: "Growth Plan",
            // price: "$60/hr",
            desc: "Ideal for growing businesses. Full implementation + 30-day support.",
            features: [
                "Full Financial & Inventory Setup",
                "Sales, Purchase, Warehouse Mapping",
                "System Integrations (CRM, eCommerce)",
                "Customization & Reports",
                "Post-Go-Live 30 Days Support",
            ],
            cta: "Start Scaling",
        },
        {
            title: "Enterprise Plan",
            // price: "$90/hr",
            desc: "Built for scale. Advanced modules, analytics & hyperscare.",
            features: [
                "Multi-Company, Currency, Language",
                "Manufacturing, Project, Service Modules",
                "Approval Workflows & DMS",
                "Power BI Dashboards",
                "60 Days Hyperscare Support",
            ],
            cta: "Go Enterprise",
        },
        {
            title: "HRMS Plan",
            // price: "$0.99/Employee",
            desc: "Smart HRMS with BC integration. Payroll, attendance & analytics.",
            features: [
                "Biometric & Attendance Management",
                "Payroll Automation & Compliance",
                "Custom Workflows (Appraisal, Exit, etc.)",
                "Reports: Cost Centers, Headcount",
                "Seamless BC Payroll Sync",
            ],
            cta: "Simplify HR",
        },
    ];

    return (
        <main className="bg-[url(/HomePageBg.webp)]  bg-cover bg-no-repeat bg-top text-gray-800 font-sans">
            {/* HERO */}
            <header className="max-w-4xl mx-auto pt-40 px-6 text-center ">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl mb-4">
                    At Navnerds, we understand that trusting a new team takes time—so we’ve created a Trust & Trial Package to let you experience our expertise in{" "}
                    <span className="text-blue-600 font-semibold">Microsoft Dynamics 365 Business Central</span> without long-term commitments.
                </p>  
            </header>

            {/* PRICING CARDS */}
            <section className="py-10 px-6 ">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">ERP Made Easy</h2>
                    <p className="text-sm text-gray-500">Powered by Navnerds</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="flex flex-col hover:bg-white   dura justify-between border border-gray-400 ease-in-out duration-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <div> <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                                <div className="text-2xl font-bold text-blue-700 mb-2">{plan.price}</div>
                                <p className="text-sm text-gray-600 mb-4">{plan.desc}</p>
                                <ul className="text-sm text-gray-700 list-disc list-inside mb-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                </div>
                            <Link href={"/contact-us"} className="w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
 
        </main>
    );
}
