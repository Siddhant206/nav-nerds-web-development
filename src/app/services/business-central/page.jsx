
import React from 'react' 
import { ServiceCard } from '@/Components/ui/serviceCard'; 


function Page() {
    return (
        <section id="services" className="relative  text-black overflow-hidden ">
            {/* Hero Section */}
            <section className="relative bg-white bg-[url(/ImplementationBG.webp)]  bg-contain bg-no-repeat bg-center md:bg-bottom  flex items-center justify-center lg:py-14 flex-col w-full text-black  overflow-hidden h-[50vh] md:h-[100dvh] max-lg:px-4 " >
                <div className='absolute inset-0 bg-black/30 ' />
                <div className="relative flex flex-col w-fit ">
                    <h1 className={`text-3xl md:text-xl lg:text-5xl font-extrabold md:font-bold text-white max-w-xl text-center`}>
                        Business Central Training with Navnerds
                    </h1>
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