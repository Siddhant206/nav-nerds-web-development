
import React from 'react'
import Image from "next/image";
import { ServiceCard } from '@/components/ui/serviceCard';
import { typography } from '@/components/ui/fonts';
import Link from 'next/link';

const services = [
    {
        title: "Code Conversion – Modernizing Your Customizations",
        description:
            "The first and most crucial step in your migration from Navision (NAV) to Business Central is converting legacy C/AL code to the modern AL language. This includes transforming customizations, reports, and forms into extensions that are compatible with Business Central’s extension-based architecture. We carefully assess your existing custom codebase, eliminate obsolete modifications, and refactor what’s necessary—ensuring a clean, future-ready code structure that’s easier to maintain and upgrade.",
        icon: <></>,
        color: "from-cyan-500/10 to-cyan-300/10",
    },
    {
        title: "Data Migration to Business Central On-Premises",
        description:
            "Once the code is modernized, we move on to migrating your historical and active data from Navision to the latest compatible version of Business Central On-Premises. This includes master data (customers, vendors, items), open transactions (sales, purchases), and ledger entries. We validate and map fields to align with BC’s data structure, ensuring accuracy, consistency, and compliance. Data integrity checks and reconciliation steps are also performed before final cutover.",
        icon: <></>,
        color: "from-cyan-500/10 to-cyan-300/10",
    },
    {
        title: "Pre-Migration Assessment and Planning",
        description:
            "Every successful migration starts with proper analysis. Our team conducts a thorough system review—analyzing your NAV version, customizations, data size, integrations, and reporting requirements. Based on this assessment, we define a roadmap with timelines, risks, testing strategies, and a phased transition plan. This ensures transparency, minimal disruption, and a clearly defined migration scope tailored to your business needs.",
        icon: <></>,
        color: "from-cyan-500/10 to-cyan-300/10",
    },
    {
        title: "Environment Setup and Technical Readiness",
        description:
            "We establish your Business Central environments (on-prem and/or cloud) with proper configurations, security policies, extensions, and integrations. Whether it’s a hybrid setup or fully SaaS, we make sure each environment is optimized for performance and aligned with Microsoft’s best practices. Sandbox environments are used for safe testing and validations before going live.",
        icon: <></>,
        color: "from-cyan-500/10 to-cyan-300/10",
    },
    {
        title: "Testing and Validation",
        description:
            "Before migrating live data, we perform trial migrations to test both code and data in the target BC environment. This includes functional testing, integration checks, and user acceptance testing (UAT). We engage key users from your team to verify transactions, workflows, reports, and document layouts, ensuring that your processes remain seamless and effective in the new system.",
        icon: <></>,
        color: "from-cyan-500/10 to-cyan-300/10",
    },
    {
        title: "Training and User Enablement",
        description:
            "Moving to Business Central introduces a modern UI, new features, and cloud capabilities. We provide hands-on training and onboarding sessions to ensure your teams are confident and productive from day one. From finance to warehouse staff, we tailor the training sessions according to roles—covering navigation, process changes, and reporting tools.",
        icon: <></>,
        color: "from-cyan-500/10 to-cyan-300/10",
    },
    {
        title: "Migration from On-Premises to Business Central SaaS (Cloud)",
        description:
            "Once your system is stable on Business Central On-Prem, the next leap is moving to the cloud. We facilitate a smooth transition from on-prem to Business Central SaaS, helping you unlock benefits like automatic updates, Azure hosting, scalability, and integrations with Power Platform and Microsoft 365. We migrate your extensions, data, and settings to the cloud using Microsoft's cloud migration tools and our proven methodology.",
        icon: <></>,
        color: "from-cyan-500/10 to-cyan-300/10",
    },
    {
        title: "Go-Live, Support, and Post-Migration Optimization",
        description:
            "The final go-live step is carefully executed with minimal downtime. Our team provides hypercare support post-go-live to address any last-minute issues, performance tuning, and user feedback. We also review your workflows for further optimization, helping you take full advantage of Business Central’s latest features, analytics, and automation tools.",
        icon: <></>,
        color: "from-cyan-500/10 to-cyan-300/10",
    },
];



function Page() {
    return (
        <section id="services" className="relative  text-black overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-[url(/Services/Integration/IntegrationBG.png)]  bg-cover bg-no-repeat  bg-center md:bg-bottom   flex items-center justify-center lg:py-14 max-lg:px-4  flex-col w-full text-black  overflow-hidden h-[50vh] md:h-[100dvh] " >
                {/* <div className='absolute inset-0 bg-black/30 ' /> */}
                <div className="md:pb-60 relative flex flex-col items-center justify-center w-fit">
                    <h1 className={`${typography.heading} text-black max-w-2xl text-center`}>
                        Transform Your Business
                        with Seamless Integrations
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

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <article
                            key={index}
                            className={`rounded-xl p-6  backdrop-blur-sm border border-gray-200 bg-gradient-to-br ${service.color}  bg-white/10 shadow-md transition-all duration-300 hover:scale-[1.02]`}
                        >
                            <div className="flex flex-col items-start justify-center gap-4 mb-4">
                               
                                    {service.icon}
                                
                                <h3 className="text-md font-semibold text-gray-900 leading-tight">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-sm text-gray-800">{service.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Page;