"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";

interface FaqItem {
    question: string;
    short: string;
    details: string[];
}

export default function PricingPage() {
    const faqData: FaqItem[] = [
        {
            question: "What happens if my project scope changes mid-way?",
            short: "We are flexible! We'll discuss the new scope and update the timelines & costs accordingly.",
            details: [
                "We'll communicate any changes immediately.",
                "New scope means updated cost/time but aligned with your goals.",
                "No surprise bills - everything discussed beforehand.",
            ],
        },
        {
            question: "Can you collaborate with our in-house team?",
            short: "Absolutely. We're experienced in integrating seamlessly with in-house teams.",
            details: [
                "We adapt to your tools & workflows (Notion, Slack, etc).",
                "You can assign as many team members as needed.",
                "Collaboration is central to our process.",
            ],
        },
        {
            question: "Why not hire designers & developers full-time?",
            short: "Hiring full-time is great, but we offer flexibility and a broader skill set on-demand.",
            details: [
                "Scale up or down any time, no long-term commitment.",
                "Cost-effective compared to in-house salaries.",
                "Access to multi-disciplinary skills instantly.",
            ],
        },
        {
            question: "Safionix vs. other contractors",
            short: "We stand out with our transparency, flexibility, and multi-disciplinary expertise.",
            details: [
                "Clear communication and no hidden fees.",
                "Access to a wide range of skills.",
                "Proven track record with diverse projects.",
            ],
        },
        {
            question: "How do you charge?",
            short: "We offer both fixed-price and hourly billing models depending on your needs.",
            details: [
                "Transparent pricing with no hidden fees.",
                "Options to choose retainer or pay-as-you-go.",
                "Pause and resume work when needed.",
            ],
        },
        {
            question: "What if I only need a small dev or design tasks?",
            short: "We handle projects of all sizes, from small tasks to large-scale development.",
            details: [
                "No project is too small for us.",
                "Flexible billing for one-off tasks.",
                "Quick turnaround for smaller needs.",
            ],
        },
        {
            question: "How soon can you start?",
            short: "We can start as soon as you're ready, often within a few days.",
            details: [
                "Quick onboarding process.",
                "Availability to kick off immediately.",
                "We align with your timeline.",
            ],
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex justify-center items-start w-full max-w-[1044px] mx-auto gap-20 py-20 px-4">
            <div className="flex flex-col gap-4 w-[300px]">
                <p className="text-sm text-[#606E80]">FAQS</p>
                <h2 className="font-bold text-4xl leading-snug">
                    Your questions, <br />
                    <span className="text-[#606E80]">Answered.</span>
                </h2>
                <div className="w-[248px] bg-[#DAE2EA] py-2 rounded-xl flex justify-center items-center gap-2">
                    <Image width={24} height={24} src="/assets/tel.svg" alt="Phone" className="w-6 h-6" />
                    <p className="text-sm font-medium text-center flex items-center gap-1 hover:cursor-pointer hover:gap-3 transition-all">
                        Let&apos;s talk{" "}
                        <span className="font-medium text-xl">{">"}</span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-[600px]">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border-b border-[#E5E7EB] py-4 cursor-pointer"
                        onClick={() => toggleIndex(index)}
                    >
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-[16px] text-[#111] transition-colors hover:text-[#606E80]">
                                {item.question}
                            </p>
                            <Plus
                                className={`text-red-500 w-5 h-5 transition-transform duration-300 ${
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
                                            <Image
                                                width={16}
                                                height={16}
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
            </div>
        </div>
    );
}
