import Image from 'next/image';
import React from 'react';
import { Bonafit } from '.';

type Props = {
  className?: string;
};

export const items = ["App design", "Dashboard design", "Figma", "UX/UI system"];

export default function SuccessStories({ className }: Props) {
  return (
    <div className={`cursorPointer ${className}`}>
      {/* Header */}
      <div className="flex justify-center items-center flex-col text-center">
        <p className="text-gray-500 text-[13px]">How we helped others succeed</p>
        <h2 className="text-3xl font-semibold mt-5">Our success stories</h2>
      </div>

      {/* Speaklish Card */}
      <a href="https://speaklish.uz"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="w-full max-w-[1145px] transition-all duration-500 ease-in-out mx-auto mt-10 rounded-3xl bg-[#FAFAFA] relative flex flex-col md:flex-row justify-center items-center hover:-translate-y-5 p-5 md:p-6 gap-6">

          {/* Image */}
          <div className="w-full md:w-[532px] h-[300px] md:h-[532px] bg-white flex rounded-2xl overflow-hidden relative">
            <Image
              src="/assets/case-studies/speaklish.png"
              alt="Speaklish case study"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-[532px] flex flex-col rounded-2xl">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <Image width={28} height={28} src="/assets/speaklishLogo.svg" alt="speaklish" />
              <p className="font-semibold text-2xl">Speaklish.co</p>
            </div>

            {/* Description */}
            <p className="mt-5 text-[18px] md:text-[24px]">
              Designed/admin dashboard and mini-app from concept to launch.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-5">
              <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">AI</p>
              <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">IELTS</p>
              <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">App</p>
              <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Dashboard</p>
            </div>

            {/* Line */}
            <div className="w-full h-[1px] bg-[#DAE2EA] mt-10 md:mt-[220px]" />

            {/* Dashboard Info */}
            <div className="hidden md:flex flex-col gap-1">
              <div className="flex gap-1 mt-5">
                <h2 className="text-2xl font-bold text-[#121213] tracking-wider">3 Dashboard / App</h2>
                <p className="text-[18px] text-[#606E80] tracking-wider">Designed</p>
              </div>

              {/* List */}
              <ul className="flex gap-8 mt-5 flex-wrap">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center text-[#606E80]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#7E00E1] mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </a>

      {/* Bonafit Card */}
      <a
        href="https://bonafit.uz"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Bonafit />
      </a>

      
    </div>
  );
}
