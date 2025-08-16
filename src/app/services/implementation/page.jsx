
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { ServiceCard } from '@/Components/ui/serviceCard'; 


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
        <section id="services" className="relative  text-black overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-white bg-[url(/ImplementationBG.webp)]  bg-contain bg-no-repeat  bg-center md:bg-bottom   flex items-center justify-center lg:py-14 max-lg:px-4  flex-col w-full text-black  overflow-hidden h-[50vh] md:h-[100dvh] " >
                <div className='absolute inset-0 bg-black/30 ' />
                <div className="md:pb-60 relative flex flex-col items-center justify-center w-fit">
                    <h1 className={`text-3xl md:text-xl lg:text-5xl font-semibold text-white max-w-xl text-center`}>
                        Implementation Services with Navnerds
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

                <h1 className={`text-2xl xl:text-3xl 2xl:text-4xl  text-black text-center mb-2`}>Scaling Efficently? </h1>
                <p className={`max-w-4xl xs:text-lg md:text-base lg:text-[17px]   3xl:text-xl max-sm:px-2 sm:px-4 lg:px-0 text-center font-semibold mx-auto mb-14`}>
                    When growth kicks in, so do operational challenges. Our Business Central implementation simplifies what’s becoming too complex automating workflows, enhancing customer visibility, and giving your teams the tools to move faster. We keep your systems lean while your business goes big.
                </p>
                <ServiceCard
                    title="Starting fresh? "
                    description="You deserve a solution built for today’s speed and tomorrow’s scale. At Navnerds, we help first-time ERP adopters launch with confidence. With Business Central, you’ll gain a future-ready system that adapts as you grow without overwhelming complexity. Start smart. Start strong.
"
                    imageSrc="/Implementation/StartingFresh.png"
                    imageAlt="Starting fresh illustration"
                    bgColor="bg-[#36E3EE]"
                    imagePosition="right"
                />

                <ServiceCard
                    title="Stuck with Legacy Systems?"
                    description="If your current ERP feels like a burden instead of a solution, it’s time to move forward. Outdated platforms slow down innovation, create silos, and risk compliance. With Navnerds and Business Central, you get a modern, connected, cloud-based system that empowers your business with real-time data and security you can trust. "
                    imageSrc="/Implementation/Frustration.png"
                    imageAlt="Stuck with Legacy Systems illustration"
                    bgColor="bg-white"
                    textColor="text-black"
                    imagePosition="left"
                />

                <ServiceCard
                    title="Upgrade To Business Central"
                    description="You’ve outgrown your old system and that’s a good thing. Whether it’s poor integrations, slow performance, or scattered data, we help you transition smoothly to Business Central. Our migration process is clean, strategic, and tailored to your needs no disruption, just evolution."
                    imageSrc="/Implementation/upgradingBusinessCentral.png"
                    imageAlt="Social Media Marketing illustration"
                    bgColor="bg-[#36E3EE]"
                    imagePosition="right"
                />


                <section className="max-w-7xl mx-auto bg-white mt-14 py-14 px-8">
                    {/* Header */}
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className={`text-2xl xl:text-3xl 2xl:text-4xl text-gray-900 leading-tight`}>
                            What Happens When You Implement with Navnerds
                        </h2>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="relative p-12 sm:p-5 md:p-6 z-[1] rounded-xl bg-white  "
                            >
                                {/* Background SVG */}
                                <svg
                                    width="274"
                                    height="256"
                                    viewBox="0 0 274 256"
                                    fill="none"
                                    className="absolute inset-0 w-full h-full -z-10"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path
                                        d="M19.7041 0.5H188.003C198.641 0.500059 207.207 8.55025 207.207 18.4102V39.4004C207.207 49.8755 216.285 58.3105 227.411 58.3105H254.296C264.725 58.3105 273.16 66.0458 273.489 75.6387V237.59C273.489 247.45 264.924 255.5 254.285 255.5H19.7041C9.06549 255.5 0.5 247.45 0.5 237.59V18.4102C0.5 8.55021 9.06549 0.5 19.7041 0.5Z"
                                        fill="none"
                                        stroke="#DDDDDD"
                                    />
                                </svg>

                                {/* Icon */}
                                <div className="mb-3">
                                    <TrendIcon className="w-8 h-8 text-[#1CCBD7]" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 leading-snug">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </section>


            </section>
        </section>
    );
}

export default Page;