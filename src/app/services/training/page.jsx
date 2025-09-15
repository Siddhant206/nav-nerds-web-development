
import React from 'react'
import { ServiceCard } from '@/components/UI/serviceCard';
import Link from 'next/link';


function Page() {
    return (
        <section id="services" className="relative  text-black overflow-hidden ">
            {/* Hero Section */}
            <section className="relative bg-white bg-[url(/ImplementationBG.webp)]  bg-contain bg-no-repeat bg-center md:bg-bottom  flex items-center justify-center lg:py-14 flex-col w-full text-black  overflow-hidden h-[50vh] md:h-[100dvh] max-lg:px-4 " >
                <div className='absolute inset-0 bg-black/30 ' />
                <div className="md:pb-60 relative flex flex-col items-center justify-center w-fit">
                    <h1 className={`text-3xl md:text-xl lg:text-5xl font-extrabold md:font-bold text-black max-w-xl text-center`}>
                        Training with Navnerds
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
            <section className="bg-[url(/HomePageBg.webp)]  bg-cover bg-no-repeat bg-top w-full py-10 ">

                <h1 className={`text-2xl xl:text-3xl 2xl:text-4xl text-black text-center mb2-2`}>New to Business Central?</h1>
                <p className={`max-w-4xl xs:text-lg md:text-base lg:text-[17px]   3xl:text-xl max-sm:px-2 sm:px-4 lg:px-0 text-center font-semibold mx-auto mb-8 md:mb-14`}>
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