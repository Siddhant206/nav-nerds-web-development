
import React from 'react'
import Image from "next/image"; 
import { typography } from '@/components/ui/fonts';
import Link from 'next/link';
 

function Page() {
    return (
        <section id="services" className="relative  text-black overflow-hidden">
            {/* Hero Section */} 
            <section className="relative bg-white bg-[url(/Services/Dedicated-Resources/dedicatedResourcesBG.jpg)]  bg-cover bg-no-repeat  bg-center md:bg-bottom   flex items-center justify-center lg:py-14 max-lg:px-4  flex-col w-full text-black  overflow-hidden h-[50vh] md:h-[100dvh] " >
                <div className='absolute inset-0 bg-black/30 ' />
                <div className="md:pb-60 relative flex flex-col items-center justify-center w-fit">
                    <h1 className={`${typography.heading} text-white max-w-xl text-center`}>
                        Dedicated Resources
                        for your Business
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
                    {/* Top Grid */} 
                    <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-between">
                        {/* Left Cards Stack */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            {/* Card 1 */}
                            <article className="flex-1 bg-white rounded-xl shadow-md flex max-sm:flex-col items-center gap-4 overflow-clip">
                                <div className="w-full md:w-1/2">
                                    <Image
                                        src="/Services/Dedicated-Resources/Seamless-Communication.svg"
                                        alt="Seamless Communication"
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="w-full md:w-2/3 p-4 md:p-6">
                                    <h2 className="text-lg md:text-xl font-semibold mb-1">
                                        Seamless Communication & Faster Turnaround
                                    </h2>
                                    <p className="text-sm text-gray-700">
                                        With a dedicated consultant, you’ll experience streamlined communication, quicker decision-making, and faster execution.
                                    </p>
                                </div>
                            </article>

                            {/* Card 2 */}
                            <article className="flex-1 bg-white rounded-xl shadow-md flex max-sm:flex-col items-center gap-4 overflow-clip">
                                <div className="w-full md:w-1/3">
                                    <Image
                                        src="/Services/Dedicated-Resources/Accountability.jpg"
                                        alt="Greater Accountability"
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-contain md:object-cover rounded-md"
                                    />
                                </div>
                                <div className="w-full md:w-2/3 p-4 md:p-6">
                                    <h2 className="text-lg md:text-xl font-semibold mb-1">
                                        Greater Accountability & Flexibility
                                    </h2>
                                    <p className="text-sm text-gray-700">
                                        Our dedicated resource model gives you one point of contact, making scope adjustments and feedback seamless.
                                    </p>
                                </div>
                            </article>
                        </div>

                        {/* Right Tall Card */}
                        <article className="w-full lg:w-1/2 flex flex-col rounded-2xl shadow-md overflow-hidden relative">
                            <div className="relative w-full aspect-square">
                                <Image
                                    src="/Services/Dedicated-Resources/Focused-Expertise.jpg"
                                    alt="Focused Expertise"
                                    fill
                                    className="object-cover"
                                />
                            </div>  
                            <div className="absolute bottom-0 w-full p-4 md:p-6  bg-gradient-to-t from-black to-100%">
                                <h2 className="text-xl md:text-3xl font-bold text-white mb-3">
                                    Focused Expertise, Just for You
                                </h2>
                                <p className="text-white text-sm md:text-base md:font-semibold">
                                    We offer dedicated resources to ensure your Business Central or Navision project receives undivided attention and continuity from start to finish. Our experts work exclusively on your implementation, customization, support, or upgrade becoming fully immersed in your business processes and goals. This allows for deeper understanding, stronger collaboration, and better long-term results.
                                </p>
                            </div>
                        </article>
                    </div>
 
                    {/* Bottom Block */}
                    <div className="relative rounded-xl overflow-hidden text-center max-w-4xl mx-auto shadow-md">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 bg-black/80">
                            <Image
                                src="/Services/Dedicated-Resources/Team-Extension.jpg"
                                alt="Team Collaboration"
                                fill
                                className="object-cover opacity-80"
                             />
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-10 px-6 py-10 md:px-10 md:py-16">
                            <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold text-white mb-4">
                                A True Extension of Your Team
                            </h2>
                            <p className="text-sm md:text-base text-white max-w-2xl mx-auto">
                                We don’t just assign you a technician we assign a partner who integrates with your team, understands your industry, and proactively identifies ways to optimize your system. With direct access to development, testing, and advisory expertise, you can count on a seamless experience and stronger results, every step of the way.
                            </p>
                        </div>
                    </div>
  


                </div>
            </section>
        </section>
    );
}

export default Page;