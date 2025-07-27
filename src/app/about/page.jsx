"use client"
import { h2Text } from '@/Components/Styles'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image';
import FAQ from '@/Components/FAQ'; 

export default function Page() {
    const videoRef = useRef()
    const [isPaused, setIsPaused] = useState(true);  // initial state: paused

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePlay = () => setIsPaused(false);
        const handlePause = () => setIsPaused(true);

        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
        };
    }, [])
    // Header and main sections remain same - only optimized the posts mapping
    return (
        <section className='min-h-96 text-black'>
            {/* Header section remains same */}
            <header className="relative h-[50dvh] flex items-center justify-center overflow-clip">
                <div className="absolute inset-0">
                    <Image src="/BG/BlogsBg.webp" alt="People Walking on the mountains" fill priority className="object-cover h-96 lg:h-full" />
                </div>
                <div className="relative max-w-fit mx-auto text-white">
                    <h1 className={`${h2Text} w-fit`}>About Offbeat Treks</h1>
                </div>
            </header>

            {/* Main content remains same */}
            <main className="bg-[url(/HomePageBg.webp)] bg-cover bg-center min-h-screen pb-20">
                <section className='text-black max-w-6xl mx-auto space-y-10 max-sm:pb-10 md:py-20 px-4'>
                    <div className='flex flex-col gap-2 items-center justify-center pt-5'>
                        <h2 className={`${h2Text}`}>About Us</h2>
                        {/* <p>Favorite destinations based on customer reviews</p> */}
                    </div>
                    <article className='max-w-[50rem] mx-auto space-y-4 text-center'>
                        <p>Offbeat Treks offers unique trekking experiences that help people learn, grow and connect with nature. Our treks are carefully planned and tailored for adventure enthusiasts and anyone looking for something beyond the usual. </p>
                        <p>Our team comprises of experts with over decades of experience in the same field. Over the past years, we've taken countless individuals on treks that inspire them to take on another challenging journey with us.
                        </p>
                       </article>
                    <div className='relative'>
                        <video ref={videoRef} src="/BannerVideo.mp4" className='md:w-5xl   h-1/3 mx-auto rounded-xl border-none '> </video>
                        <button onClick={() => {
                            const video = videoRef.current;
                            if (!video) return;
                            if (video.paused) {
                                video.play();
                            } else {
                                video.pause();
                            }
                        }}
                            className='text-5xl absolute -bottom-10 left-[40%]  md:left-[45%] cursor-pointer rounded-full bg-[#EDF3F8] p-3'>
                            {isPaused ? (
                                <svg width="50" height="50" viewBox="0 0 62 62" fill="none">
                                    <path d="M30.6582 0C13.7195 0 0 13.7195 0 30.6582C0 47.5969 13.7195 61.3164 30.6582 61.3164C47.5969 61.3164 61.3164 47.5969 61.3164 30.6582C61.3164 13.7195 47.5969 0 30.6582 0ZM22.9937 15.3291L45.9873 30.6582L22.9937 45.9873V15.3291Z" fill="#9E9E9E" />
                                </svg>
                            ) : (
                                <svg width="50" height="50" viewBox="0 0 58 58" fill="none">
                                    <path d="M28.75 0C12.8714 0 0 12.8714 0 28.75C0 44.6286 12.8714 57.5 28.75 57.5C44.6286 57.5 57.5 44.6286 57.5 28.75C57.5 12.8714 44.6286 0 28.75 0ZM25.875 40.25H20.125V17.25H25.875V40.25ZM37.375 40.25H31.625V17.25H37.375V40.25Z" fill="#9E9E9E" />
                                </svg>
                            )}


                        </button>
                    </div>
                </section>
             
            <FAQ/>
                {/* <VotingSystem/> */}
            </main>
        </section>
    )
}