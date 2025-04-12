import React from 'react'
import RainbowButton from './ui/rainbow-button'
import Image from 'next/image'

export default function NewProjects() {
  return (
    <div className="w-full max-w-[1145px] bg-[#171D1B] flex flex-col md:flex-row mt-20 justify-between rounded-[40px] mx-auto overflow-hidden">
      
      <div className="w-full md:w-1/2 px-6 pt-10 md:px-12 md:pt-[15px] flex flex-col justify-center">
        
        <div className="flex justify-center md:justify-start">
          <button className="rounded-lg p-[6px] px-4 bg-white flex items-center gap-2 md:hidden">
            <span className="relative flex items-center justify-center w-3 h-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00be3fcc] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BE3F]"></span>
            </span>
            <span className="text-sm text-[#171D1B]">New projects</span>
          </button>
        </div>

        <div className="mt-10  md:mt-[0px] flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-white text-[32px] md:text-[40px] font-semibold tracking-wide">
            View more work
          </h2>
          <p className="text-[#8D8F8F] mt-4 text-base md:text-[16px] max-w-[400px]">
            And see how your project could look like soon.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-5 mt-8">
          <RainbowButton
            key="header-4"
            variant="light"
            className="group py-2.5 font-semibold w-full md:w-1/2 flex items-center justify-center gap-1.5"
          >
            See all case studies
            <Image
              className="size-3 -rotate-90 transform transition-transform duration-200 group-hover:translate-x-[50%]"
              src="/assets/chevron-right-dark.svg"
              alt="chevron right dark"
              width={20}
              height={12}
            />
          </RainbowButton>

          <RainbowButton
            key="header-3"
            className="py-2.5 font-semibold w-full md:w-1/2 flex items-center justify-center gap-1.5 text-dsgWhiteMain group"
          >
            See recent work
            <Image
              className="size-3 transform transition-transform duration-200 group-hover:translate-x-[50%]"
              src="/assets/chevron-right.svg"
              alt="chevron right"
              width={20}
              height={12}
            />
          </RainbowButton>
        </div>
      </div>

      <div className="w-full md:w-[481px] h-[300px] md:h-[480px] bg-[url('/assets/newProjects.png')] bg-cover bg-center relative rounded-b-[40px] md:rounded-3xl mt-10 md:mt-0">

        <div className="hidden md:flex justify-end p-4">
          <button className="rounded-lg p-[6px] px-4 bg-white flex justify-center items-center gap-1 h-[40px]">
            <span className="relative flex items-center justify-center w-3 h-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00be3fcc] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BE3F]"></span>
            </span>
            <span className="text-sm text-[#171D1B]">New Projects</span>
          </button>
        </div>
      </div>
    </div>
  );
}
