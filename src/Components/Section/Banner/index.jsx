
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
                    className="w-full h-full object-cover opacity-100 z-0"
                ></video>
            </div>
            <div className="relative flex flex-col items-center justify-center space-y-2 px-4 text-center  ">
                <h1 className="text-4xl lg:text-6xl font-semibold text-white">Welcome To NavNerds</h1>
                <p className="text-lg md:text-xl text-white">Your Complete Business  Solution Partner.</p>
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
    );
}