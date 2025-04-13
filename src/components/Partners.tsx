import Image from "next/image";
import React from "react";
import { SixPartners } from ".";

export default function Partners() {
  return (
    <div className="mt-[110px] px-4">
      <div className="flex justify-center items-center flex-col">
        <p className="text-gray-500 text-xs md:text-[13px]">Testimonials</p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-3 md:mt-5">
          Hear it from our partners
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-around mt-10 md:mt-16 gap-5 md:gap-7">
        <div className="flex flex-col w-full md:w-auto">
          <h2 className="text-xl md:text-2xl font-semibold mt-8 md:mt-[120px]">
            Tarteeb.uz
          </h2>
          <p className="w-full md:w-[540px] h-auto md:h-[100px] mt-4 md:mt-8 text-sm md:text-base">
            Safionix has{" "}
            <span className="font-semibold">
              provided our startup with significant leverage.
            </span>{" "}
            Their work is{" "}
            <span className="font-semibold">exceptionally professional,</span>{" "}
            and they are{" "}
            <span className="font-semibold">always attentive to our needs,</span>{" "}
            taking the time to understand our briefs and offer valuable
            direction.
          </p>

          <div className="flex gap-2 md:gap-2 mt-6 md:mt-12">
            <Image
              src={"/assets/image-10.webp"}
              width={40}
              height={40}
              alt="Elbek"
              className="w-10 h-10 md:w-[50px] md:h-[50px] rounded-full"
            />
            <div>
              <h3 className="font-semibold text-base md:text-lg">
                Elbek Normurodov
              </h3>
              <p className="text-[#252727] text-xs md:text-sm">
                Microsoft MVP .NET Expert
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <Image
            width={588}
            height={500}
            alt="video"
            src={"/assets/video.png"}
            className="w-full md:w-[588px] h-auto md:h-[500px] object-contain"
          />
        </div>
      </div>

      <SixPartners />
    </div>
  );
}