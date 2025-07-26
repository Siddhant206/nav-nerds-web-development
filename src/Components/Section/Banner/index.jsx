import { h1Text } from "@/Components/Styles";
import Image from "next/image";
import Link from 'next/link';

export default function Banner() {
    return (
        <section className="relative h-[50vh] md:h-[100dvh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <video
                    src="/BannerVideo.mp4"
                    alt="Image of Camping Mountain"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-50 z-0"
                ></video>
            </div>
            <div className="relative flex flex-col items-center justify-center space-y-2 px-4 text-center  ">
                <h1 className={`${h1Text} text-white`}>NavNerds</h1>
                <p className="text-lg md:text-xl text-white">Your Complete Business  Solution Partner.</p>
                <Link
                    href={"/treks"}
                    className="px-6 py-3 md:px-4 md:py-2 rounded-3xl border border-gray-200 bg-transparent text-white hover:bg-white hover:text-black transition-colors duration-300 mt-4 md:mt-8"
                >
                    Upcoming Treks
                </Link>
            </div>
        </section>
    );
}