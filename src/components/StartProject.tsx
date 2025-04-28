"use client";
import React, { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const faqData = [
  {
    question: "Design + no-code retainers",
    short: "For tech companies in need of ongoing support. Starting at $3k.",
    details: [
      "Daily design support with dedicated designers + project manager",
      "Predictable costs - no surprise bills, scale up or down anytime",
      "Quick turnarounds keep your project moving fast",
      "Seamless collaboration with Notion + Slack integration",
      "Assign as many stakeholders as you need",
      "Pause and resume work for up to 60 days",
    ],
  },
  {
    question: "One-time projects",
    short:
      "Crystal-clear scope, timeline, and deliverables. Prices starting at $10k.",
    details: [
      "50% upfront, 50% on design approval, 25% on delivery",
      "Clearly defined scope with a detailed SOW document",
      "Bulletproof milestone-based delivery (4-12 weeks)",
      "A-Z project management by DesignMe",
      "Dedicated design (and/or development) team",
      "Industry-specific expertise (AI, SaaS, Tech)",
    ],
  },
];

export default function StartPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start  gap-10 md:gap-32 py-10 md:py-20 px-4">
      <div className="flex flex-col justify-between w-full md:w-[384px] gap-10 md:h-[678px]">
        <div className="flex flex-col gap-2 md:gap-4 w-full">
          <p className="text-xs md:text-sm text-[#606E80]">Pricing</p>
          <h2 className="font-bold text-2xl md:text-4xl leading-snug">
            <span className="text-[#606E80]">We keep it</span> simple <br />
            and flexible.
          </h2>
        </div>

        <div className="flex flex-col gap-4 w-full group relative">
          <div className="absolute -top-18 md:-top-12 -rotate-3 opacity-0 group-hover:opacity-100 transition-opacity  duration-300 z-10">
            <button className="relative bg-black ml-3.5  text-white px-1  md:px-1 py-1 md:py-1  rounded-xl shadow-md font-semibold text-xs md:text-base flex items-center">
             <a href="https://www.goldenheritagepublishing.com"> See website {'->'}</a>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 md:border-l-8 border-r-6 md:border-r-8 border-t-6 md:border-t-8 border-l-transparent border-r-transparent border-t-black"></span>
            </button>
          </div>

          <div className="flex gap-1 md:gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                width={4}
                height={4}
                src="/assets/star.svg"
                alt="star"
                className="w-4 h-4 md:w-6 md:h-6"
              />
            ))}
          </div>

          <p className="text-sm md:text-base">
            Their work helped us increase the{" "}
            <span className="font-bold text-xs md:text-sm">
              engagement rate by 25%,
            </span>{" "}
            boost{" "}
            <span className="font-bold text-xs md:text-sm">
              user conversion rate by 11%,
            </span>{" "}
            and{" "}
            <span className="font-bold text-xs md:text-sm">
              reduce bounce rate by 20%.
            </span>
          </p>
          <p className="text-sm md:text-base">
            Our main &quot;Get Demo&quot; page had a{" "}
            <span className="font-bold text-xs md:text-sm">30% higher CR,</span>{" "}
            &quot;Pricing&quot; page increased{" "}
            <span className="font-bold text-xs md:text-sm">by 15% CR,</span>{" "}
            and our main &quot;Homepage&quot; had a CR increase of{" "}
            <span className="font-bold text-xs md:text-sm">+3.9%.</span>
          </p>

          <div className="flex gap-3 md:gap-4 items-center">
            <div className="relative w-9 h-9 md:w-11 md:h-11">
              <Image
                width={100}
                height={100}
                src="/assets/jon.png"
                alt="image"
                className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-lg">
                Jonathan Donado
              </h3>
              <p className="text-xs md:text-sm">PMO based in California</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-[600px] mt-6 md:mt-10">
        <div className="flex flex-col gap-2 md:gap-4 w-full md:w-[444px]">
          <p className="text-lg md:text-xl font-bold tracking-wide">
            Choose between <span className="underline decoration-[#7e00e1] decoration-2 underline-offset-4">monthly product retainers </span><br />
            and <span className="underline decoration-[#7e00e1] decoration-2 underline-offset-4">one-time fixed projects.</span>
          </p>
        </div>
       
        {faqData.map((item, index) => (
  <div
    key={index}
    className="border-b border-[#E5E7EB] mt-6 md:mt-10 py-3 md:py-4 cursor-pointer"
    onClick={() => toggleIndex(index)}
  >
    {index === 0 && (
      <p className="text-xs md:text-sm mb-3 text-[#606E80]">How we work</p>
    )}
    <div className="flex justify-between items-center">
      <p className="font-bold text-sm md:text-[16px] text-[#111] transition-colors hover:text-[#606E80]">
        {item.question}
      </p>
      <Plus
        className={`text-red-500 w-6 hover:p-1 hover:bg-[#DAE2EA59] hover:rotate-180 h-6 md:w-8 md:h-8 transition-transform duration-300 ${
          openIndex === index ? "rotate-45" : ""
        }`}
      />
    </div>

    <div
      style={{
        height: "1px",
        backgroundColor: "#dae2ea",
        marginTop: "4px",
        opacity: openIndex === index ? 1 : 0,
        transition: "opacity 300ms ease-in-out",
      }}
    ></div>

    <div
      style={{
        overflow: "hidden",
        transition: "max-height 500ms ease-in-out, opacity 500ms ease-in-out",
        maxHeight: openIndex === index ? "24rem" : "0",
        opacity: openIndex === index ? 1 : 0,
      }}
    >
      <div className="mt-3 md:mt-4">
        <p className="text-[#606E80] text-xs md:text-sm mb-2">
          {item.short}
        </p>
        <ul className="text-xs md:text-base text-[#111] space-y-2">
          {item.details.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <Image
                width={3}
                height={3}
                src="/assets/check.svg"
                alt="Check"
                className="mt-1 w-3 h-3 md:w-4 md:h-4"
              />
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
))}



        <div
          className="w-[166px] relative group mt-6 md:mt-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative overflow-hidden">
            <p className="flex items-center gap-2 w-full font-bold text-sm py-2">
              Start a new project
              <span className="relative inline-block">
  <ArrowUpRight
    className={`absolute top-[-10px] transition-all duration-300 transform ${
      isHovered
        ? "translate-y-[-10px] opacity-0"
        : "translate-y-0 rotate-0 opacity-100"
    }`}
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ef4444" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`absolute z-50  top-[-14px] transition-all duration-300 transform ${
      isHovered
        ? "translate-y-0 opacity-100" 
        : "translate-y-[10px] opacity-0"
    }`}
  >
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
</span>
            </p>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-300 group-hover:h-[4px] group-hover:bg-red-500 group-hover:-translate-y-[4px] origin-top" />
          </div>
        </div>
      </div>
    </div>
  );
}