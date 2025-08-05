
import React from 'react'
import Image from "next/image";
import { ServiceCard } from '@/components/ui/serviceCard';
import { typography } from '@/components/ui/fonts';
import Link from 'next/link';
import { IntegrationCard } from '@/components/ui/IntegrationCard';

const INTEGRATIONS = [
    {
        title: 'Document Sign Integration',
        description:
            'Deliver real-time updates to your customers through WhatsApp—order confirmations, invoice alerts...',
        imageSrc: '/icons/doc-sign.png',
        iconSrc: '/icons/nav-logo.png',
        direction: 'left',
    },
    {
        title: 'Microsoft 365 Integration',
        description:
            'Work smarter with full integration between Business Central and Microsoft tools like Outlook...',
        imageSrc: '/icons/microsoft365.png',
        iconSrc: '/icons/nav-logo.png',
        direction: 'right',
    },
    // Add more integrations...
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


                <div className='max-w-7xl mx-auto space-y-5'>
                    <div className='relative flex items-center justify-between gap-6 bg-[#1FBAC4] p-6'>
                        <div className='w-1/3'>
                            <div>
                                <h2>Document Sign Integration</h2>
                                <p>Deliver real-time updates to your customers through WhatsApp—order confirmations, invoice alerts, payment reminders, and more. This integration brings a familiar, instant messaging experience into your workflow, improving customer satisfaction and response rates.</p>
                            </div>
                            <div>
                                <Image
                                    src={"/Services/Integration/docusign.png"}
                                    alt={"Document Sign Integration"}
                                    width={200}
                                    height={200}
                                    className="w-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="absolute" />
                        <div className='w-1/3'>
                            <div>
                                <h2>Document Sign Integration</h2>
                                <p>Deliver real-time updates to your customers through WhatsApp—order confirmations, invoice alerts, payment reminders, and more. This integration brings a familiar, instant messaging experience into your workflow, improving customer satisfaction and response rates.</p>
                            </div>
                            <div>
                                <Image
                                    src={"/Services/Integration/docusign.png"}
                                    alt={"Document Sign Integration"}
                                    width={200}
                                    height={200}
                                    className="w-full object-contain"
                                />
                            </div>
                        </div>
                   </div>

                    <IntegrationCard
                        title="Customization"
                        description="From adding simple fields and automating approval workflows to building entirely new modules, our customization services are designed to enhance your existing ERP without compromising performance or upgrade compatibility. Using both C/AL for older NAV versions and modern AL extensions in Business Central, we customize your solution for maximum flexibility and long-term maintainability. We also offer interface improvements to enhance user experience, making everyday tasks faster, clearer, and more intuitive."
                        imageUrl="/Services/Customization/Customization.png"
                        imageAlt="Customization of Business Central"
                        imageLeft={false}
                    />


                </div>
            </section>
        </section>
    );
}

export default Page;