
import React from 'react'
import Image from "next/image";
import { ServiceCard } from '@/components/ui/serviceCard';
import { typography } from '@/components/ui/fonts';
import Link from 'next/link';



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

                    {/* Top Grid */}
                    <div className="grid md:grid-cols-3 gap-6 items-stretch">
                        {/* Left Text Blocks */}
                        <div className="flex flex-col gap-6">
                            {/* Card 1 */}
                            <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
                                <div className="w-14 min-w-14">
                                    <Image
                                        src="/icons/thinker.png" // replace with your actual icon
                                        alt="Seamless Communication"
                                        width={64}
                                        height={64}
                                        className="w-14 h-14 object-contain"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold mb-1">
                                        Seamless Communication & Faster Turnaround
                                    </h2>
                                    <p className="text-sm text-gray-700">
                                        With a dedicated consultant, you’ll experience streamlined communication, quicker decision-making, and faster execution.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
                                <div className="w-14 min-w-14">
                                    <Image
                                        src="/icons/thinker.png"
                                        alt="Greater Accountability"
                                        width={64}
                                        height={64}
                                        className="w-14 h-14 object-contain"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold mb-1">
                                        Greater Accountability & Flexibility
                                    </h2>
                                    <p className="text-sm text-gray-700">
                                        Our dedicated resource model gives you one point of contact, making scope adjustments and feedback seamless.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Image Card */}
                        <div className="col-span-2 bg-gradient-to-b from-[#def3ff] to-[#dffbfc] rounded-xl shadow-md p-6 md:p-10 flex flex-col justify-between">
                            <div className="w-full h-64 md:h-[300px] mb-4 relative rounded-xl overflow-hidden">
                                <Image
                                    src="/images/expert-banner.png" // replace with your actual image
                                    alt="Expertise"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                    Focused Expertise, Just for You
                                </h2>
                                <p className="text-sm text-gray-700">
                                    We offer dedicated resources who are trained on your Business Central or NAVISION environment, ensuring familiarity and long-term ROI.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Block */}
                    <div className="bg-[#F5F7FA] rounded-xl p-6 md:p-10 text-center max-w-4xl mx-auto shadow-sm">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            A True Extension of Your Team
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base">
                            We don’t just assign you a technician—we assign a partner who integrates with your team, understands your industry, and proactively identifies ways to optimize your system.
                        </p>
                    </div> 
            </section>
        </section>
    );
}

export default Page;