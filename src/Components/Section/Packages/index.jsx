"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    title: "Starter Plan",
    subtitle: "Trial & Trust",
    price: "499",
    planInfo: <svg width="40" height="19" viewBox="0 0 40 19" fill="none" className="absolute top-0 right-2">
      <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#1CCBD7" />
      <path d="M30 0L32.2451 6.90983H39.5106L33.6327 11.1803L35.8779 18.0902L30 13.8197L24.1221 18.0902L26.3673 11.1803L20.4894 6.90983H27.7549L30 0Z" fill="#1CCBD7" />
    </svg>

,
    image: "/Packages/Starter.jpg",
  },
  {
    title: "Growth Plan",
    subtitle: "Scale & Streamline",
    price: "60/hr",
    image: "/Packages/Growth.jpg",
  },
  {
    title: "Enterprise Plan",
    subtitle: "Optimize & Expand",
    price: "90/hr",
    image: "/Packages/Enterprise.jpg",
  },
  {
    title: "HRMS Plan",
    subtitle: "People & Payroll Simplified",
    price: "0.99/Employee",
    image: "/Packages/Hrms.jpg",
  },
];

export default function Packages() {
  const [hoveredIndex, setHoveredIndex] = useState (null);

  return (
    <section className="py-10 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-2xl mr-auto text-black pb-4 space-y-4 text-left">
          <h1 className="text-xl sm:text-2xl md:text-4xl  tracking-wide  font-semibold">Our  Packages </h1>
          <p className="text-sm md:text-xl">We offer comprehenshive pricing  for each business segments.</p>
        </div>


{/* Packages Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              // className={`rounded-xl bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden
              //   ${hoveredIndex === index ? "scale-[1.02] shadow-lg" : "hover:scale-[1.02]"}
              // `}
              className="relative max-w-80 h-80 md:h-96 "
            >
              <Image
                src={plan.image}
                alt={plan.title}
                width={400}
                height={300}
                className='object-cover rounded-lg'
              />
              <div className="absolute top-40 md:top-44 left-0 right-0 border h-36 bg-white rounded-3xl p-4 overflow-yscroll scrollbar-hide">

                <h4 className="font-bold  text-lg  text-gray-900">
                  {plan.title}
                </h4>
                <p className="font-bold md:text-lg text-center mb-5 text-gray-900">
                  -"{plan.subtitle}"</p>
                
                <div className="flex justify-center items-center ">
                  {/* <div>
                    {plan.price && (
                      <p className="font-bold text-black text-base">
                        ${plan.price.toLocaleString()}
                      </p>
                    )}
                  </div> */}
                  <Link
                    href={"/pricing"}
                    className='px-3 py-2 text-sm bg-gray-100 hover:bg-black text-black hover:text-white transition-colors duration-500 transform-fill rounded-full border border-gray-200'
                  >
                    Schedule a free demo now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
