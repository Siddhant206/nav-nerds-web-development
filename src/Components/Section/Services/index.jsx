"use client";
import React from "react";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react"; 
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/components/lib/utils";
import Image from "next/image";
import { motion } from 'framer-motion';


export default function ServicesSection() {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className=" max-w-4xl mx-auto text-black py-10 space-y-4 text-center">
        <h1 className=" relative text-xl sm:text-2xl md:text-4xl  tracking-wide  font-semibold">Get The Best Solutions For Business Growth From Microsoft Dynamic 365
          <svg width="406" height="20" viewBox="0 0 606 33" fill="none" className="absolute lg:right-44 top-10 lg:top-18" >
            <path d="M2.02148 21.7915C2.77703 21.478 3.53257 21.1645 9.77725 20.6895C16.0219 20.2145 27.7328 19.5875 103.653 19.7348C179.574 19.882 319.349 20.8225 414.399 18.172C509.449 15.5215 555.537 9.2515 603.021 2.7915" strokeOpacity="0.8" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" stroke="#12C1CE" />
            <path d="M2.02148 30.7915C2.77703 30.478 3.53257 30.1645 9.77725 29.6895C16.0219 29.2145 27.7328 28.5875 103.653 28.7348C179.574 28.882 319.349 29.8225 414.399 27.172C509.449 24.5215 555.537 18.2515 603.022 11.7915" strokeOpacity="0.8" strokeWidth="4" strokeLinecap="round" stroke="#12C1CE" />

          </svg>

        </h1>
        <p className="text-sm md:text-xl">Automate your business, simplify operations, and redefine the way you deal with new opportunities using powerful Dynamics 365 solutions from the Nerds.</p>
      </div>

      <div className="max-w-2xl mr-auto text-black py-10 lg:pb-10 lg:pt-20 space-y-4 text-left">
        <h1 className="text-xl sm:text-2xl md:text-4xl  tracking-wide  font-semibold">Our Services </h1>
        <p className="text-sm md:text-xl">We offer professional ERP consulting services to help companies map their needs with ERP capabilities and select the best ERP vendor.</p>
      </div>

      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem] ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon} />
        ))}
      </BentoGrid>
    </section>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="relative overflow-clip rounded-lg flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">


      <Image
        src={"/Services/Implementation.png"}
        alt={"Implementation of Business Central Microsoft Dynamics 365"}
        fill
        priority
        className="object-cover"
      />
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="relative overflow-clip rounded-lg flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <Image
        src={"/Services/Integration.png"}
        alt={"BusinessCentral of Microsoft Dynamics 365"}
        width={200}
        height={200}
        className="object-cover size-full"
      />
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="relative overflow-clip rounded-lg flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2]  bg-dot-black/[0.2] flex-col space-y-2"
    >
      <Image
        src={"/Services/Support.png"}
        alt={"BusinessCentral of Microsoft Dynamics 365"}
        width={200}
        height={200}
        className="object-contain size-full"
      />
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="relative overflow-clip rounded-lg flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row ">
      <Image
        src={"/Services/Migration.png"}
        alt={"BusinessCentral of Microsoft Dynamics 365"}
        width={200}
        height={200}
        className="object-cover  size-full"
      />
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="relative overflow-clip rounded-lg  flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <Image
        src={"/Services/Training.png"}
        alt={"Training of Microsoft Dynamics 365"}
        width={200}
        height={200}
        className="object-contain  size-full"
      />
    </motion.div>
  );
};
const SkeletonSix = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="relative overflow-clip rounded-lg  flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <Image
        src={"/Services/Customization.png"}
        alt={"Customization of Microsoft Dynamics 365"}
        width={200}
        height={200}
        className="object-contain size-full"
      />
    </motion.div>
  );
};
const SkeletonSeven = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="relative overflow-clip rounded-lg  flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <Image
        src={"/Services/Dedicated-Resources.png"}
        alt={"Dedicated-Resources of Microsoft Dynamics 365"}
        width={200}
        height={200}
        className="object-contain size-full"
      />
    </motion.div>
  );
};
const SkeletonEight = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="relative overflow-clip rounded-lg  flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <Image
        src={"/Services/BusinessCentral.svg"}
        alt={"BusinessCentral of Microsoft Dynamics 365"}
        width={200}
        height={200}
        className="object-contain  size-full"
      />
    </motion.div>
  );
};
const items = [
  {
    title: "Implementation",
    description: (
      <span className="text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Integration",
    description: (
      <span className="text-sm">
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Support",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Migrating from Another ERP or CRM",
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Training",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Customization",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonSix />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dedicated Resources",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonSeven />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: " Business Central",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonEight />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
