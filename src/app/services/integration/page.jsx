import React from 'react'
import Image from "next/image";  
import { ServiceCard } from '@/Components/ui/serviceCard';
const services = [
    {
        icon: "/icons/ui-ux-design.svg", // was brandDevLogo3.svg
        title: "Website UI/UX",
        bgColor: "bg-blue-50",
    },
    {
        icon: "/icons/conference-books.svg", // was brandDevLogo4.svg
        title: "Conference Books",
        bgColor: "bg-white",
    },
    {
        icon: "/icons/product-presentation.svg", // was brandDevLogo5.svg
        title: "Product Presentation",
        bgColor: "bg-amber-50",
    },
    {
        icon: "/icons/social-media-building.svg", // was brandDevLogo6.svg
        title: "Social media page building",
        bgColor: "bg-white",
    },
    {
        icon: "/icons/explainer-video.svg", // was brandDevLogo7.svg
        title: "Explainer video",
        bgColor: "bg-orange-50",
    },
    {
        icon: "/icons/prototyping.svg", // was brandDevLogo8.svg
        title: "Prototyping",
        bgColor: "bg-green-50",
    },
    {
        icon: "/icons/concept-designing.svg", // was brandDevLogo9.svg
        title: "Concept based designing",
        bgColor: "bg-purple-50",
    },
    {
        icon: "/icons/content-creation.svg", // was brandDevLogo10.svg
        title: "Content creation",
        bgColor: "bg-white",
    },
    {
        icon: "/icons/artworks.svg", // was brandDevLogo11.svg
        title: "Artworks",
        bgColor: "bg-blue-50",
    },
    {
        icon: "/icons/flyers-brochures.svg", // was brandDevLogo12.svg
        title: "Flyers, Brochures & Standees",
        bgColor: "bg-yellow-50",
    },
];

const services1 = [
    {
        icon: "/icons/seo.svg",
        title: "SEO",
    },
    {
        icon: "/icons/smm.svg",
        title: "SMM",
    },
    {
        icon: "/icons/sem.svg",
        title: "SEM",
    },
    {
        icon: "/icons/email-marketing.svg",
        title: "E-Mail Marketing",
    },
    {
        icon: "/icons/ppc.svg",
        title: "PPC",
    },
    {
        icon: "/icons/ui-ux-design.svg",
        title: "UI & UX Designing",
    },
    {
        icon: "/icons/web-development.svg",
        title: "Website Development",
    },
];


function DigitalMarketing() {
    return (
        <section id="services" className="relative text-black overflow-hidden">
            {/* Hero Section */}
            <section className=" bg-[url(/digitalMarketingBgMobile.png)] md:bg-[url(/digitalMarketingBg.png)]  bg-contain 2xl:bg-cover bg-top bg-no-repeat flex items-center justify-center lg:py-14 flex-col w-full text-black relative overflow-hidden min-h-36  lg:min-h-72 2xl:min-h-[17rem] 3xl:min-h-96  " >
                <div className="relative flex flex-col w-fit z-10">
                    <h1 className={`${typography.heading}`}>
                        Our Services
                    </h1>


                    <div className="w-fit items-center flex text-xl font-bold mx-auto ">
                        <a href="/" className=" ">
                            Home
                        </a>
                        <svg   width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                            </svg>
                        <span className=" ">Digital Marketing</span>
                    </div>
                </div>
                
            </section>

            {/* Content Section */}
            <section className="w-full  py-10    z-10">
                {/* <Dots /> */}
                <h1 className={`${typography.heading}  text-center mb-4`}>Digital Marketing </h1>
                <p className={`max-w-5xl ${typography.paragraph} max-sm:px-2 sm:px-4 lg:px-0 text-justify font-semibold mx-auto mb-14`}>
                    Digital marketing is not just about being seen — it’s about being found by the right audience, at the right time, with the right message. We specialize in crafting end-to-end digital marketing solutions that help businesses build visibility, drive engagement, and deliver measurable results.
                </p>
                <ServiceCard
                    title="Search Engine Optimization (SEO)"
                    description="At Offbeat Pixels, we don’t just market—we create digital marketing success stories. 
Whether you want to rank higher on search engines, having targeted lead generation, attract customers with paid ads boosting your ranking or present your product online, we’ve got it all covered!
"
                    imageSrc="/images/SEO-DM.png"
                    imageAlt="SEO concept illustration"
                    bgColor="bg-white"
                    imagePosition="left"
                />

                <ServiceCard
                    title="Online Reputation Management (ORM)"
                    description="We believe that your reputation is your greatest asset, hence, we monitor, manage, and improve your digital image, ensuring that your customers never miss the facts. With Digital PR, we create a strong and positive buzz around your brand and ensure that no negative review or missed customer interaction can impact your brand. "
                    imageSrc="/images/ORM-DM.png"
                    imageAlt="Online Reputation Management illustration"
                    bgColor="bg-[#1a4e68]"
                    textColor="text-white"
                    imagePosition="right"
                />

                <ServiceCard
                    title="Social Media Marketing (SMM)"
                    description="We make strategies to make your brand stand out and grow. Our Social Media Marketing services include both organic and paid promotions strategies to ensure your brand stays relevant and reaches the right audience by building engaging campaigns and communities. With Meta Campaigns we create impactful and result-driven ads that communicate the right message to your customers."
                    imageSrc="/images/SMM-DM.png"
                    imageAlt="Social Media Marketing illustration"
                    bgColor="bg-white"
                    imagePosition="left"
                />

                <ServiceCard
                    title="Brand Collaterals"
                    description="A brand is not your logo; it is not your punchline or even the colours that you use – it is just a reflection of the promise that you make to your customer. In short - 'A brand is a promise that has been made to the customer'. Creating a brand is as important as selling a product, at Offbeat Pixels we understand that the overlapping roles of marketing & branding can get overwhelming for a business owner. Leave it to us. Your product needs more of your attention."
                    imageSrc="/images/BRAND-DM.png"
                    imageAlt="Brand Collaterals illustration"
                    bgColor="bg-[#1a4e68]"
                    textColor="text-white"
                    imagePosition="right"
                />
                <ServiceCard
                    title="Content Creation Marketing"
                    description="Whether it’s a compelling brand story, a promotional video, or an attractive graphic, we create content that connects and engages with your customers. With video marketing, we bring your brand to life through immersive storytelling, while our photography & video production ensures that every post is visually striking and conversion-driven."
                    imageSrc="/images/CCM-DM.png"
                    imageAlt="Content Creation Marketing illustration"
                    bgColor="bg-white"
                    imagePosition="left"
                />
                <ServiceCard
                    title=" Web Development"
                    description="Our focus is to design websites with purpose, ensuring that from the very first scroll, your audience immediately understands who you are, what you do, and why it matters. It should be aligned with your Go-To-Market (GTM) strategy, showcasing your unique value proposition, ensuring every element aligns with your brand’s promise and making sure your audience can find you through SEO optimized content with the right keywords."
                    imageSrc="/images/WEB-DM.png"
                    imageAlt="Web Development illustration"
                    bgColor="bg-[#1a4e68]"
                    textColor="text-white"
                    imagePosition="right"
                />
                <ServiceCard
                    title="Performance marketing"
                    description={
                        <div>
                            <p className="mb-4">
                                Performance marketing is the art & science of showing up in front of the right person at the right time and process of running profitable campaigns to grow a business.
                                It is not only paid marketing and we really don’t want to burden you with the business thinking involved in it along with problem solving, paid advertising, analytics, value props, conversion optimization, attribution, copy writing technology, content assets, UX & UI and some more. We offer the following services: -

                            </p>

                            <div className="flex flex-wrap max-w-[25rem] 2xl:w-[30rem] gap-2">
                                {[
                                    "SEO",
                                    "SMM",
                                    "SEM",
                                    "PPC",
                                    "E-Mail Marketing",
                                    "UI UX Designing",
                                    "Website Development",
                                ].map((service, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-sm 2xl:text-base rounded-xl bg-gray-100 text-[#215773] font-medium shadow-sm"
                                    >
                                        <span className="text-black text-lg ">•</span> {service}
                                    </span>
                                ))}
                            </div>
                        </div>
                    }
                    imageSrc="/images/PM-DM.png"
                    imageAlt="Performance marketing illustration"
                    bgColor="bg-white"
                    imagePosition="left"
                />

            </section>
        </section>
    );
}

export default DigitalMarketing;