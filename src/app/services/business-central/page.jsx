
import React from 'react'
import Image from "next/image";
import { ServiceCard } from '@/Components/ui/serviceCard';
import { typography } from '@/Components/ui/Fonts';


const features = [
    {
        id: 1,
        title: "Unify What's Broken",
        description: "No more scattered spreadsheets, manual processes, or duplicated work. One smart system, one source of truth finally everything just connects."
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
        description: "It's not just efficiency it's a mindset shift when operations align, data flows, and decisions get sharper. It's not just better. It's business reborn."
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
        <section id="services" className="relative  text-black overflow-hidden ">
            {/* Hero Section */}
            <section className="relative bg-white bg-[url(/ImplementationBG.webp)]  bg-contain bg-no-repeat bg-center md:bg-bottom  flex items-center justify-center lg:py-14 flex-col w-full text-black  overflow-hidden h-[50vh] md:h-[100dvh] max-lg:px-4 " >
                <div className='absolute inset-0 bg-black/30 ' />
                <div className="relative flex flex-col w-fit ">
                    <h1 className={`${typography.heading} text-white max-w-xl text-center`}>
                        Business Central Training with Navnerds
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-[url(/HomePageBg.webp)]  bg-cover bg-no-repeat bg-top w-full py-10 ">

                <h1 className={`${typography.subheading} text-black text-center mb2-2`}>New to Business Central?</h1>
                <p className={`max-w-4xl ${typography.paragraph} max-sm:px-2 sm:px-4 lg:px-0 text-center font-semibold mx-auto mb-8 md:mb-14`}>
                    Don’t worry we start right from where you are now. </p>
                <ServiceCard
                    title="Business Central Basics"
                    description="If you're stepping into Business Central for the first time, our foundation training gives you clarity, not confusion. Learn navigation, finance basics, sales, and inventory all in real-world terms. No jargon. Just results."
                    imageSrc="/Services/BusinessCentral.svg"
                    imageAlt="Illustration showing basic Business Central interface and modules"
                    bgColor="bg-[#36E3EE]"
                    imagePosition="right"
                />

                <ServiceCard
                    title="Functional Deep-Dive"
                    description="From daily tasks to full control. For teams managing operations finance, purchasing, sales, warehousing we teach you how to run smoother, faster, and more accurately. Think clean dashboards, quick approvals, and error-free reporting."
                    imageSrc="/Services/BusinessCentral/functional-deep-dive.png"
                    imageAlt="Teams managing operations with Business Central dashboard visuals"
                    bgColor="bg-white"
                    textColor="text-black"
                    imagePosition="left"
                />

                <ServiceCard
                    title="For Developers & Tech Consultants"
                    description="Build better. Customize with confidence. AL coding, extensions, APIs our technical training is hands-on, code-first, and project-driven. Perfect for those looking to build apps, tweak systems, or develop new modules inside Business Central."
                    imageSrc="/Services/BusinessCentral/dev-training.png"
                    imageAlt="Developer writing AL code for Business Central customization"
                    bgColor="bg-[#36E3EE]"
                    imagePosition="right"
                />

                <ServiceCard
                    title="From Legacy to Modern"
                    description="Train your team to migrate like pros. Moving from NAV or other ERP systems? We guide your users through Business Central’s modern UI, new features, and best practices so they’re not just using it, they’re owning it."
                    imageSrc="/Services/BusinessCentral/legacy-to-modern.png"
                    imageAlt="ERP migration process from legacy NAV system to Business Central"
                    bgColor="bg-white"
                    textColor="text-black"
                    imagePosition="left"
                />

                <ServiceCard
                    title="Power BI Integration"
                    description="We provide expert training to enhance your Business Central with modern Microsoft tools. Dive deep into Power BI and unlock powerful, interactive data visualizations. Learn how to build custom apps with Power Apps—no coding required. Automate routine tasks and streamline operations. Turn scattered data into clear, actionable business insights."
                    imageSrc="/Services/BusinessCentral/power-bi-integration.png"
                    imageAlt="Business Central dashboard with Power BI charts and analytics"
                    bgColor="bg-[#36E3EE]"
                    imagePosition="right"
                />

            </section>
        </section>
    );
}

export default Page;