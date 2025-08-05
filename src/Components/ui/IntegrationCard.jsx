'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'; 
import { cn } from '../lib/utils';

 

export const IntegrationCard = ({
  title,
  description,
  imageSrc,
  iconSrc,
  direction = 'left',
  arrow = true,
}) => {
  const isLeft = direction === 'left';

  return (
    <div className="relative bg-[#00B9D3] text-white rounded-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-center md:justify-between p-6 md:p-10 gap-6 md:gap-12">
        {/* Left Side (image or icon) */}
        {isLeft && (
          <div className="flex-shrink-0 w-full md:w-1/3">
            <Image
              src={imageSrc}
              alt={title}
              width={200}
              height={200}
              className="w-full object-contain"
            />
          </div>
        )}

        {/* Center Text */}
        <div className="flex flex-col items-start w-full md:w-1/2">
          <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
          <p className="text-sm md:text-base text-white/90">{description}</p>
        </div>

        {/* Right Side (icon) */}
        {!isLeft && (
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
            <Image
              src={imageSrc}
              alt={title}
              width={200}
              height={200}
              className="w-full object-contain"
            />
          </div>
        )}
      </div>

      {/* Animated Arrow Between Logos */}
      {arrow && (
        <motion.svg
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          viewBox="0 0 100 20"
          className={cn(
            'absolute hidden md:block w-24 h-10 z-10',
            isLeft ? 'right-[35%] top-[50%]' : 'left-[35%] top-[50%]'
          )}
        >
          <motion.path
            d="M0 10 Q50 0, 100 10"
            fill="transparent"
            stroke="#fff"
            strokeWidth="2"
          />
          <motion.circle
            cx="100"
            cy="10"
            r="2"
            fill="#fff"
            animate={{ r: [2, 4, 2] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.svg>
      )}
    </div>
  );
};
