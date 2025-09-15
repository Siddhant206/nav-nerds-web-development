
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import FeatureCard from '@/component/UI/FeatureCard';

function Page() {
    return (
        <section id="services" className="relative  text-black overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-white bg-[url(/CustomizationBG.png)]  bg-cover bg-no-repeat  bg-center md:bg-bottom   flex items-center justify-center lg:py-14 max-lg:px-4  flex-col w-full text-black  overflow-hidden h-[50vh] md:h-[100dvh] " >
                <div className='absolute inset-0 bg-black/40 ' />
                <div className="md:pb-60 relative flex flex-col items-center justify-center w-fit">
                    <h1 className={`text-3xl md:text-xl lg:text-5xl font-semibold text-black   max-w-xl text-center`}>
                        Needs Customization for Your Business
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


                <div className='max-w-7xl mx-auto space-y-5 px-2'>
                    <FeatureCard
                        title="Customization"
                        description="From adding simple fields and automating approval workflows to building entirely new modules, our customization services are designed to enhance your existing ERP without compromising performance or upgrade compatibility. Using both C/AL for older NAV versions and modern AL extensions in Business Central, we customize your solution for maximum flexibility and long-term maintainability. We also offer interface improvements to enhance user experience, making everyday tasks faster, clearer, and more intuitive."
                        imageUrl="/Services/Customization/Customization.png"
                        imageAlt="Customization of Business Central"
                        imageLeft={false}
                    />
                    <FeatureCard
                        title="Smart Automation & Integration"
                        description="We go beyond surface-level changes. Our solutions include deep functional customizations like automated invoice generation, custom sales and purchase logic, approval hierarchies, industry-specific reports, and more. Need to connect your ERP with Shopify, WhatsApp, a payment gateway, or your in-house application? We handle seamless integrations with third-party systems via APIs and OData, making your Business Central or NAV the central hub of your digital ecosystem. With Power Platform tools like PowerApps and Power Automate, we also help you extend your ERP into mobile apps and automated workflows."
                        imageUrl="/Services/Customization/Automation.svg"
                        imageAlt="Smart Automation & Integration of Business Central"
                        imageLeft={true}
                    />
                    <FeatureCard
                        title="Upgrade-Safe and Future-Ready"
                        description="All our Business Central customizations are built using Microsoft’s recommended extension model, ensuring your custom features remain safe during system upgrades and updates. For NAV clients, we help modernize legacy customizations and prepare you for a smooth transition to Business Central when the time is right. Whether you're on NAV 2009, NAV 2018, or already on BC SaaS, our services are designed with scalability, performance, and future-readiness in mind."
                        imageUrl="/Services/Customization/UpgradeSafe.jpg"
                        imageAlt="Upgrade-Safe and Future-Ready for Business Central"
                        imageLeft={false}
                    />
                    <FeatureCard
                        title="Why Choose Us?"
                        description="With years of real-world experience, certified consultants, and a business-first approach, we’re not just coders—we’re your strategic ERP partner. We listen, analyze, and deliver solutions that are robust, compliant, and tailored to generate real ROI. If you want an ERP that works exactly the way your business runs, talk to us—we’ll customize it, streamline it, and make it work smarter for you."
                        imageUrl="/Services/Customization/WhyUs.png"
                        imageAlt="Why Choose Navnerd for Business Central"
                        imageLeft={true}
                    />

                </div>
            </section>
        </section>
    );
}

export default Page;