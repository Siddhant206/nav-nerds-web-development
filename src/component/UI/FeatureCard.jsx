"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { H2, P } from "@/component/UI/typography";

const FeatureCard = ({ title, description, imageUrl, imageAlt = "", imageLeft = false, }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={`flex flex-col md:flex-row ${imageLeft ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between gap-6 border border-gray-200 rounded-2xl bg-white max-sm:flex-col-reverse md:h-[30rem] shadow-md overflow-hidden`}
        >
            {/* Left Content */}
            <div className="md:w-[60%] w-full p-8">
                <H2 className="text-gray-800 mb-3">{title}</H2>
                <P className="text-gray-600 font-semibold ">{description}</P>
            </div>

            {/* Right Image */}
            <div className="md:w-fit w-full h-full">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
        </motion.div>
    );
};

export default FeatureCard;
