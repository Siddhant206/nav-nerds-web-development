
import React from 'react'
import Image from "next/image"; 
import Link from 'next/link';
import { generateMetadata } from '@/component/SEO/generateMetadata';
import { pagesMetadata } from '@/component/SEO/pages-metadata';

export const metadata = generateMetadata(pagesMetadata.integrationsMetadata);

function Page() {
    return (
        <section id="services" className="relative  text-black overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-[url(/Services/Integration/IntegrationBG.png)]  bg-cover bg-no-repeat  bg-center md:bg-bottom   flex items-center justify-center lg:py-14 max-lg:px-4  flex-col w-full text-black  overflow-hidden h-[50vh] md:h-[100dvh] " >
                {/* <div className='absolute inset-0 bg-black/30 ' /> */}
                <div className="md:pb-60 relative flex flex-col items-center justify-center w-fit">
                    <h1 className={`text-3xl md:text-xl lg:text-5xl font-semibold text-black max-w-2xl text-center`}>
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
                <div className='max-w-2xl mx-auto mb-10'>
                    <h2 className={`text-2xl xl:text-3xl 2xl:text-4xl text-center`}>
                        Powerful Integrations for Every Need</h2>
                    <p className={`xs:text-lg md:text-base lg:text-[17px]   3xl:text-xl text-center`}>
                        Discover how these integrations can streamline your operations, boost productivity,
                        and drive growth across your organization.
                    </p>
                </div>
                <div className='max-w-7xl mx-auto space-y-4'>
                    <div className='relative flex max-sm:flex-col items-center  justify-between gap-20 md:gap-6 bg-[#1FBAC4] p-6 overflow-clip' >
                        <div className='w-full md:w-[40%] flex flex-col items-center justify-center space-y-4'>
                            <div className=' text-white  space-y-2 '>
                                <h2 className="text-xl md:text-2xl font-bold text-center ">
                                    Document Sign Integration
                                </h2>
                                <p>Deliver real-time updates to your customers through WhatsApp order confirmations, invoice alerts, payment reminders, and more. This integration brings a familiar, instant messaging experience into your workflow, improving customer satisfaction and response rates.</p>
                            </div>
                            <div className='max-w-80'>
                                <Image
                                    src={"/Services/Integration/docusign.png"}
                                    alt={"Document Sign Integration"}
                                    width={200}
                                    height={200}
                                    className="w-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="absolute md:-rotate-[70deg] bg-white max-sm:top-[27.1rem] md:translate-x-[46%] h-4  md:h-6 w-full md:w-1/2" />
                        <div className="absolute md:-rotate-[70deg] bg-[#1BCAD6] max-sm:bottom-[24.5rem] md:translate-x-[50%] h-4 md:h-6 w-full md:w-1/2" />
                        <div className='w-full md:w-[40%]  flex flex-col items-center justify-center space-y-4'>
                            <div className='max-w- text-white  space-y-2 '>
                                <h2 className="text-xl md:text-2xl font-bold text-center ">
                                    Microsoft 365 Integration
                                </h2>
                                <p  >
                                    Work smarter with full integration between Business Central and Microsoft tools like Outlook, Excel, and Teams. Create invoices straight from emails, analyze real-time data in Excel, or collaborate on transactions in Teams. It’s all connected—boosting efficiency and reducing context-switching.

                                </p>
                            </div>
                            <div className='max-w-80'>
                                <Image
                                    src={"/Services/Integration/ms365.svg"}
                                    alt={"Document Sign Integration"}
                                    width={200}
                                    height={200}
                                    className="w-full object-contain"
                                />
                            </div>
                        </div>
                    </div >

                    <div className='relative flex max-sm:flex-col  items-center  justify-between gap-20 md:gap-6 bg-[#1FBAC4] p-6 overflow-clip' >
                        <div className='w-full md:w-[40%] flex flex-col items-center justify-center space-y-4'>
                            <div className=' text-white  space-y-2 '>
                                <h2 className="text-xl md:text-2xl font-bold text-center ">
                                    WooCommerce Integration
                                </h2>
                                <p>
                                    Sync your WooCommerce storefront with Business Central to automate order processing, inventory updates, and financial entries. Say goodbye to manual entry errors and hello to a unified system that keeps your e-commerce and accounting perfectly aligned.
                                </p>
                            </div>
                            <div className='max-w-80'>
                                <Image
                                    src={"/Services/Integration/wooCom.svg"}
                                    alt={"WooCommerce Integration"}
                                    width={200}
                                    height={200}
                                    className="w-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="absolute md:rotate-[70deg] bg-white max-sm:top-[23.2rem] md:translate-x-[46%] h-4  md:h-6 w-full md:w-1/2" />
                        <div className="absolute md:rotate-[70deg] bg-[#1BCAD6] max-sm:bottom-[24.5rem] md:translate-x-[50%] h-4 md:h-6 w-full md:w-1/2" />
                        <div className='w-full md:w-[40%]  flex flex-col items-center justify-center space-y-4'>
                            <div className='max-w- text-white  space-y-2 '>
                                <h2 className="text-xl md:text-2xl font-bold text-center ">
                                    WhatsApp  Integration
                                </h2>
                                <p  >
                                    Work smarter with full integration between Business Central and Microsoft tools like Outlook, Excel, and Teams. Create invoices straight from emails, analyze real-time data in Excel, or collaborate on transactions in Teams. It’s all connected—boosting efficiency and reducing context-switching.

                                </p>
                            </div>
                            <div className='max-w-80'>
                                <Image
                                    src={"/Services/Integration/whatsapp.svg"}
                                    alt={" WhatsApp Integration"}
                                    width={200}
                                    height={200}
                                    className="w-full object-contain"
                                />
                            </div>
                        </div>
                    </div >

                    <div className='relative flex max-sm:flex-col items-center  justify-between gap-20 md:gap-6 bg-[#1FBAC4] p-6 overflow-clip' >
                        <div className='w-full md:w-[40%] flex flex-col items-center justify-center space-y-4'>
                            <div className=' text-white  space-y-2 '>
                                <h2 className="text-xl md:text-2xl font-bold text-center ">
                                    PowerApps Integration
                                </h2>
                                <p>
                                    Build custom business apps that talk directly to your Business Central data—no coding required. Whether it’s a mobile app for your sales team or a quick form for inventory updates, PowerApps helps automate tasks and extend your system with agility and precision.

                                </p>
                            </div>
                            <div className='max-w-80'>
                                <Image
                                    src={"/Services/Integration/powerapps.svg"}
                                    alt={"PowerApps Integration"}
                                    width={200}
                                    height={200}
                                    className="w-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="absolute md:-rotate-[70deg] bg-white max-sm:top-[27.1rem] md:translate-x-[46%] h-4  md:h-6 w-full md:w-1/2" />
                        <div className="absolute md:-rotate-[70deg] bg-[#1BCAD6] max-sm:bottom-[24.5rem] md:translate-x-[50%] h-4 md:h-6 w-full md:w-1/2" />
                        <div className='w-full md:w-[40%]  flex flex-col items-center justify-center space-y-4'>
                            <div className='max-w- text-white  space-y-2 '>
                                <h2 className="text-xl md:text-2xl font-bold text-center ">
                                    Shopify Integration
                                </h2>
                                <p  >
                                    Connect your Shopify store with Business Central to automate order, inventory, and customer syncs. Stay on top of stock levels, avoid overselling, and get a real-time view of your financials—all from one place. It’s the ideal integration for scaling your e-commerce operations effortlessly.

                                </p>
                            </div>
                            <div className='max-w-80'>
                                <Image
                                    src={"/Services/Integration/shopify.svg"}
                                    alt={"Shopify Integration"}
                                    width={200}
                                    height={200}
                                    className="w-full object-contain"
                                />
                            </div>
                        </div>
                    </div >
                    <div className='max-w-4xl mx-auto  bg-[#1FBAC4] p-6 overflow-clip' >
                        <div className='w-full flex flex-col items-center justify-center space-y-4'>
                            <div className=' text-white  space-y-2 '>
                                <h2 className="text-xl md:text-2xl font-bold text-center ">
                                    SharePoint Integration
                                </h2>
                                <p>
                                    Deliver real-time updates to your customers through WhatsApp—order confirmations, invoice alerts, payment reminders, and more. This integration brings a familiar, instant messaging experience into your workflow, improving customer satisfaction and response rates.
                                </p>
                            </div>
                            <div className='max-w-96'>
                                <Image
                                    src={"/Services/Integration/sharepoint.svg"}
                                    alt={"SharePoint Integration"}
                                    width={200}
                                    height={200}
                                    className="w-full object-contain"
                                />
                            </div>
                        </div>

                    </div >
                </div>
            </section>
        </section>
    );
}

export default Page;
