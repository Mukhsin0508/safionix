"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";

const faqData: FaqItem[] = [
  {
    question: "What happens if my project scope changes mid-way?",
    short: "We recognize that priorities may shift, particularly in dynamic industries. For fixed-scope projects, we provide a revised Statement of Work (SOW) to accommodate new requirements. For retainer clients, such adjustments can typically be integrated seamlessly into your ongoing engagement.",
    details: [
      "We'll communicate any changes immediately.",
      "New scope means updated cost/time but aligned with your goals.",
      "No surprise bills - everything discussed beforehand.",
    ],
  },
  {
    question: "Can you collaborate with our in-house team?",
    short: "While we operate exclusively online, our process seamlessly bridges offline needs. Through structured virtual meetings, we coordinate and execute offline tasks with the same precision as digital work - whether it's physical product design consultations, print material coordination, or field work guidance.",
    details: [
      "We adapt to your tools & workflows (Notion, Slack, etc).",
      "You can assign as many team members as needed.",
      "Collaboration is central to our process.",
    ],
  },
  {
    question: "Why not hire designers & developers full-time?",
    short: "Hiring full-time requires significant resources for recruitment, onboarding, and long-term commitments. With us, you get an experienced senior team that delivers immediately—no overhead, no strings attached. Scale up or pause anytime.",
    details: [
      "Scale up or down any time, no long-term commitment.",
      "Cost-effective compared to in-house salaries.",
      "Access to multi-disciplinary skills instantly.",
    ],
  },
  {
    question: "Safionix vs. other contractors",
    short: "Managing multiple contractors often means fragmented communication and misalignment. DesignMe provides an integrated team with a dedicated project lead, ensuring strategy-to-execution continuity. One team, one vision, zero headaches.",
    details: [
      "Clear communication and no hidden fees.",
      "Access to a wide range of skills.",
      "Proven track record with diverse projects.",
    ],
  },
  {
    question: "How do you charge?",
    short: "For product development & design, we focus on fixed-scope engagements. Projects (e.g., branding, websites, apps) start at $3K with a 70% deposit. You'll receive a transparent quote tailored to your needs.",
    details: [
      "Transparent pricing with no hidden fees.",
      "Options to choose retainer or pay-as-you-go.",
      "Pause and resume work when needed.",
    ],
  },
  {
    question: "What if I only need a small dev or design tasks?",
    short: "Need a minor website update or design tweak? While we focus on larger projects, we accommodate small tasks for retainer clients. Contact us to discuss your request—we’ll review it, align with your budget, and provide a tailored solution during our kickoff meeting.",
    details: [
      "No project is too small for us.",
      "Flexible billing for one-off tasks.",
      "Quick turnaround for smaller needs.",
    ],
  },
  {
    question: "How soon can you start?",
    short: "Work begins immediately upon receiving your 70% deposit. We guarantee project completion by the agreed deadline, with all revisions finalized before handover. ",
    details: [
      "Quick onboarding process.",
      "Availability to kick off immediately.",
      "We align with your timeline.",
    ],
  },
];

interface FaqItem {
  question: string;
  short: string;
  details: string[];
}

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-around  gap-10 md:gap-20 py-10 md:py-20 px-4">
      <div className="flex flex-col gap-4 w-full md:w-[300px]">
        <p className="text-xs md:text-sm text-[#606E80]">FAQS</p>
        <h2 className="font-bold text-2xl md:text-4xl leading-snug">
          Your questions, <br />
          <span className="text-[#606E80]">Answered.</span>
        </h2>
        <div className="w-full md:w-[248px] bg-[#DAE2EA] py-2 rounded-xl flex justify-center items-center gap-2">
          <Image
            width={20}
            height={20}
            src="/assets/tel.svg"
            alt="Phone"
            className="w-5 h-5 md:w-6 md:h-6"
          />
          <p className="text-sm font-medium text-center flex items-center gap-1 hover:cursor-pointer hover:gap-3 transition-all">
            Let&apos;s talk{" "}
            <span className="font-medium text-lg md:text-xl">
              <Image src={'/assets/qiyshiqverctor.png'} height={8} width={8} alt="qiychiq"/>
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-[600px] mt-6 md:mt-0">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-[#E5E7EB] py-3 md:py-4 cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-bold text-sm md:text-[16px] text-[#111] transition-colors hover:text-[#606E80]">
                {item.question}
              </p>
              <Plus
                className={`text-red-500 w-6 h-6 md:w-7 md:h-7 hover:rotate-180 hover:p-1 hover:bg-[#DAE2EA59] transition-transform duration-300 ${
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
              <div className="mt-3 md:mt-4">
                <p className="text-[#606E80] bg-[#fafafa] rounded-xl p-3 text-xs md:text-sm mb-2">
                  {item.short}
                </p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}