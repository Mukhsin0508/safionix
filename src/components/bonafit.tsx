import Image from 'next/image';
import React from 'react';

const items = ["App", "Blender", "Figma", "Brand book"];

export default function Bonafit() {
  return (
    <div className="transition-all duration-500 ease-in-out hover:-translate-y-5 cursor-pointer">
      <div className="w-full max-w-[1145px] mx-auto mt-10 rounded-3xl bg-[#FAFAFA] relative flex flex-col md:flex-row justify-center items-center md:justify-between p-5 md:p-6 gap-6">

        <div className="w-full h-[300px] md:hidden bg-white rounded-2xl" />

        <div className="w-full md:w-[532px] flex flex-col rounded-2xl order-2 md:order-none px-2 md:px-0">
          <div className="flex items-center gap-3">
            <Image width={28} height={28} src="/assets/bonafitLogo.svg" alt="bonafit" />
            <p className="font-semibold text-2xl">Bonafit</p>
          </div>

          <p className="mt-5 text-[18px] md:text-[24px]">
            Integrated nutrition tracking, live coaching functionality, healthy meal plan & exercises!
          </p>

          <div className="flex flex-wrap gap-3 mt-5">
            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">3D Modeling</p>
            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">App</p>
            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Fitness</p>
            <p className="px-4 py-1 border tracking-wider text-[#606E80] rounded-2xl">Health</p>
          </div>

          <div className="hidden md:block">
            <div className="w-full h-[1px] bg-[#DAE2EA] mt-[220px]"></div>

            <div className="flex flex-col gap-1">
              <div className="flex gap-1 mt-5">
                <h2 className="text-2xl font-bold text-[#121213] tracking-wider">3D Model App / App</h2>
                <p className="flex text-[18px] text-[#606E80] tracking-wider items-end">Designed</p>
              </div>

              <ul className="flex flex-wrap gap-4 mt-5">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center text-[#606E80]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#7E00E1] mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden md:flex w-[532px] h-[532px] bg-white rounded-2xl" />
      </div>
    </div>
  );
}
