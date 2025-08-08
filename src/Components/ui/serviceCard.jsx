"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { typography } from '@/Components/ui/Fonts';


export function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  bgColor = "bg-white",
  textColor = "text-gray-800",
  imagePosition,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.section
      ref={ref}
      className={`${bgColor} ${textColor} max-sm:py-10 px-6 relative overflow-hidden `}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div
        className={`flex flex-col-reverse ${imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 max-w-6xl 2xl:max-w-7xl mx-auto`}
      >
        <motion.div className="md:w-[50%]" variants={itemVariants}>
          <h2
            className={`${typography.subheading}  font-bold mb-4 ${textColor === "text-white" ? "!text-white" : "!text-black"
              }`}
          >
            {title}
          </h2>

          <div className={`${typography.paragraph}  leading-relaxed ${textColor}`}>{description}</div>
        </motion.div>

        <motion.div className="w-full md:w-[50%] h-full flex justify-center" variants={itemVariants}>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
