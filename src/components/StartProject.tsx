"use client";
import React, { useState } from "react";
import { Plus, ArrowUpRight, ArrowDownRight } from "lucide-react";
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
            "Pause and resume work for up to 60 days"
        ],
    },
    {
        question: "One-time projects",
        short: "Crystal-clear scope,timeline, and delivarables.Prices starting at $10k.",
        details: [
            "50% upfront, 50% on design approval,25 % on delivery",
            "Clearly defined scope with a detailed SOW document",
            "Bulletproof milestone-based delivery(4-12 eeks)",
            "A-Z project management by DesignMe",
            "Dedicated design (and/or development) team",
            "Industry-specific expertise(AI,SaaS,Tech)",
        ],
    },

];
export default function StartPage() {
    

    const [openIndex, setOpenIndex] = useState(null);
    const [isHovered, setIsHovered] = useState(false); 

    const toggleIndex = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex jusrify-center items-start  w-full max-w-[1044px] mx-auto gap-20 py-20 px-4">
            <div className="flex flex-col justify-between h-[678px]">
                <div className="flex flex-col gap-4 w-[384px]">
                    <p className="text-sm text-[#606E80]">Pricing</p>
                    <h2 className="font-bold text-4xl leading-snug">
                        <span className="text-[#606E80]">We keep it</span>{" "}
                        simple <br />
                        and flexible.
                    </h2>
                </div>
                <div className="flex flex-col gap-4 w-[384px]">
                    <div className="flex gap-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Image
                                key={index}
                                width={6}
                                height={6}
                                src="/assets/star.svg"
                                alt="star"
                                className="w-6 h-6"
                            />
                        ))}
                    </div>
                    <p>
                        Their work helped us increase the{" "}
                        <span className="font-bold text-sm">
                            engagement rate by 25%,
                        </span>{" "}
                        boost{" "}
                        <span className="font-bold text-sm">
                            user conversion rate by 11%,
                        </span>{" "}
                        and{" "}
                        <span className="font-bold text-sm">
                            reduce bounce rate by 20%.
                        </span>
                    </p>
                    <p>
                        Our main "Get Demo" page had a{" "}
                        <span className="font-bold text-sm">
                            30% higher CR,
                        </span>{" "}
                        "Pricing" page increased{" "}
                        <span className="font-bold text-sm">by 15% CR,</span>{" "}
                        and our main "Homepage" had a CR increase of{" "}
                        <span className="font-bold text-sm">+3.9%.</span>
                    </p>
                    <div className="flex gap-4">
                        <Image
                        width={100} height={100}
                            src="/assets/jon.png"
                            alt="image"
                            className="w-11 mt-2 h-11"
                        />
                        <div className="">
                            <h3 className="font-semibold text-lg">
                                Jonathan Donado
                            </h3>
                            <p className="text-sm">PMO based in California</p>

                            </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-[600px] mt-10">
                <div className="flex flex-col gap-4 w-[437px]">
                    <p className="text-xl font-bold tracking-wide">
                        Choose between monthly product retainers <br />
                        and one-time fixed projects.
                    </p>
                </div>
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border-b border-[#E5E7EB] mt-10 py-4 cursor-pointer"
                        onClick={() => toggleIndex(index)}
                    >
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-[16px] text-[#111] transition-colors hover:text-[#606E80]">
                                {item.question}
                            </p>
                            <Plus
                                className={`text-red-500  w-8 h-8 transition-transform duration-300 ${
                                    openIndex === index ? "rotate-45" : ""
                                }`}
                            />
                        </div>
                        <div
                            style={{
                                overflow: "hidden",
                                transition:
                                    "max-height 500ms ease-in-out, opacity 500ms ease-in-out",
                                maxHeight: openIndex === index ? "24rem" : "0",
                                opacity: openIndex === index ? 1 : 0,
                            }}
                        >
                            <div className="mt-4">
                                <p className="text-[#606E80] text-sm mb-2">
                                    {item.short}
                                </p>
                                <ul className="text-sm text-[#111] space-y-2">
                                    {item.details.map((point, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2"
                                        >
                                            <Image width={4} height={4}
                                                src="/assets/check.svg"
                                                alt="Check"
                                                className="mt-1 w-4 h-4"
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
                    className="w-[166px] relative group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="relative overflow-hidden">
                        <p className="flex items-center gap-2 w-full font-bold text-sm py-2">
                            Start a new projects
                            <span className="relative inline-block">
                                <ArrowUpRight
                                    className={`absolute  top-[-10px]  transition-all  duration-300 transform ${
                                        isHovered
                                            ? "translate-y-[-10px]   opacity-0"
                                            : "translate-y-0 rotate-0 opacity-100"
                                    }`}
                                />
                                <ArrowDownRight

                className={`absolute z-50  top-[-12px]   text-red-500 transition-all duration-300 transform ${
                    isHovered
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[10px] opacity-0"
                }`}
                />
                </span>
                </p>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-300 group-hover:h-[4px] group-hover:bg-red-500 group-hover:-translate-y-[4px] origin-top" />
                </div>
        </div>
                </div>
 </div>
);
}
