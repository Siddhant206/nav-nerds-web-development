
import React from 'react'
import Image from "next/image";
import { ServiceCard } from '@/components/Ui/serviceCard';
import { typography } from '@/components/Ui/fonts';
import Link from 'next/link';
import FeatureCard from '@/components/Ui/FeatureCard';


const features = [
    {
        id: 1,
        title: "Unify What's Broken",
        description: "No more scattered spreadsheets, manual processes, or duplicated work. One smart system, one source of truth — finally everything just connects."
    },
    {
        id: 2,
        title: "Automate the Chaos",
        description: "From lead capture to project delivery, we handle the chaos so you don't have to. From freelance to fulfillment, we design automation that feels like magic."
    },
    {
        id: 3,
        title: "Grow Without Barriers",
        description: "Scale isn't scary when your systems grow with you. Flexibility, scalability, and future-readiness built right in."
    },
    {
        id: 4,
        title: "Feel the Shift",
        description: "It's not just efficiency — it's a mindset shift when operations align, data flows, and decisions get sharper. It's not just better. It's business reborn."
    }
];
const TrendIcon = () => (
    <svg width="67" height="67" viewBox="0 0 67 67"
        fill="none"
        stroke="currentColor"
        strokeWidth="0"
        strokeLinecap="round"
        strokeLinejoin="round"
        className=" ">
        <g filter="url(#filter0_d_47_5752)">
            <rect x="2.70898" width="62.1544" height="62.1544" rx="31.0772" fill="white" />
            <path d="M27.9274 44.2293L30.0097 38.7742L30.8075 36.0239C31.0119 35.3195 30.0212 34.9273 29.688 35.5806L26.3833 41.3525C26.0381 41.9554 25.4049 42.3359 24.7106 42.3578L17.9757 42.5701C16.4494 42.6182 15.4344 41.007 16.1368 39.6511L24.4205 23.6603C25.1573 22.238 27.1837 22.2157 27.9516 23.6215L39.5163 44.7924C40.274 46.1795 42.2655 46.181 43.0253 44.7949L49.6321 32.7419L55.4282 19.9547C56.0283 18.6307 55.0602 17.129 53.6066 17.129H48.0237H41.5064C40.6059 17.129 39.8164 17.7309 39.5778 18.5992L36.7649 28.8387C36.5884 29.5202 37.5359 29.8859 37.863 29.2626L42.0935 21.2022C42.3773 20.6614 42.9378 20.3226 43.5486 20.3226H49.625C51.1088 20.3226 52.076 21.8815 51.4169 23.2109L43.3072 39.5688C42.5864 41.0227 40.5254 41.0581 39.755 39.6298L28.2173 18.2374C27.4647 16.842 25.4653 16.8352 24.7032 18.2255L18.1076 30.2581L12.1019 42.6435C11.4578 43.9718 12.4253 45.5161 13.9015 45.5161H26.0589C26.8883 45.5161 27.6317 45.0042 27.9274 44.2293Z" fill="black" />
        </g>
        <defs>
            <filter id="filter0_d_47_5752" x="0.708984" y="0" width="66.1543" height="66.1543" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_47_5752" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_47_5752" result="shape" />
            </filter>
        </defs>
    </svg>
);

function Page() {
    return (
        <section id="services" className="relative  text-black overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-white bg-[url(/CustomizationBG.png)]  bg-cover bg-no-repeat  bg-center md:bg-bottom   flex items-center justify-center lg:py-14 max-lg:px-4  flex-col w-full text-black  overflow-hidden h-[50vh] md:h-[100dvh] " >
                <div className='absolute inset-0 bg-black/30 ' />
                <div className="md:pb-60 relative flex flex-col items-center justify-center w-fit">
                    <h1 className={`${typography.heading} text-white max-w-xl text-center`}>
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