"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const partners = [
  {
    id: 1,
    name: "Tarteeb.uz",
    video: "/assets/xa.mp4",
    description:
      "Safionix has provided our startup with significant leverage. Their work is exceptionally professional, and they are always attentive to our needs, taking the time to understand our briefs and offer valuable direction.",
    person: {
      name: "Elbek Normurodov",
      title: "Microsoft MVP .NET Expert",
      profileImage: "/assets/image-10.webp",
    },
  },
  {
    id: 2,
    name: "Speaklish.co",
    img: "/assets/speaklishLogo.svg",
    video: "/assets/xa.mp4",
    description:
      "Working with Safionix has been incredible. They delivered a dashboard in 2 weeks & a mobile app design in 1 week. Their commitment to excellence truly sets them apart.",
    person: {
      name: "Bobirjon Mardonov",
      title: "CTO Speaklish.uz",
      profileImage: "/assets/image-7.webp",
    },
  },
  {
    id: 3,
    name: "Bonafit",
    video: "/assets/xa.mp4",
    img: "/assets/bonafitLogo.svg" ,
    description:
      "I loved the logo and app design! 💕 The creativity made it unique! 🔥 Thanks for the great work—I’ll recommend you!",
    person: {
      name: "Rukhsora",
      title: "Vice-Rector Influencer",
      profileImage: "/assets/image-8.webp",
    },
  },
  {
    id: 4,
    name: "KRI institute",
    video: "/assets/xa.mp4",
    img: "/assets/KriLogo.svg" ,
    description:
      "Safionix didn’t just build a website—they crafted a digital identity for KRI University. A+ collaboration!",
    person: {
      name: "KRI Institute",
      title: "krinstitut.com",
      profileImage: "/assets/KriLogo.svg",
    },
  },
  {
    id: 5,
    name: "AHA",
    video: "/assets/xa.mp4",
    img: "/assets/AhaLogo.svg" ,
    description:
      "Safionix nailed our Aha Research website! Lightning-fast, mobile-perfect, and stunningly intuitive.",
    person: {
      name: "AHA team",
      title: "AHA research team",
      profileImage: "/assets/AhaLogo.svg",
    },
  },
  {
    id: 6,
    name: "Innovaite.uz",
    video: "/assets/xa.mp4",
    description:
      "When we first saw our new website by Safionix, it took our breath away. 45% more inquiries prove good design means business.",
    person: {
      name: "Innovaite",
      title: "https://innovaite.uz/",
      profileImage: "/assets/innovative.png",
    },
  },
];

export default function SixPartnersPage() {
  const [activeItem, setActiveItem] = useState<string>("Tarteeb.uz");
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = 2;
  const visibleItems = partners.slice(startIndex, startIndex + itemsPerPage);
  const activePartner = partners.find((p) => p.name === activeItem);

  const handleClick = (name: string) => {
    setActiveItem(name);
  };

  const handleNext = () => {
    if (startIndex + itemsPerPage < partners.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div className="mt-[110px] px-4">
      <div className="flex justify-center items-center flex-col">
        <p className="text-gray-500 text-xs md:text-[13px]">Testimonials</p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-3 md:mt-5">
          Hear it from our partners
        </h2>
      </div>

      

      {/* ACTIVE PARTNER SECTION */}
      {activePartner && (
        <div className="flex flex-col md:flex-row justify-around mt-10 md:mt-16 gap-5 md:gap-20">
          <div className="flex flex-col w-full md:w-auto">
            <h2 className="text-xl md:text-2xl font-semibold mt-8 md:mt-[120px]">
              {activePartner.name}
            </h2>
            <p className="w-full md:w-[540px] h-auto mt-4 md:mt-8 text-sm md:text-base">
              {activePartner.description}
            </p>

            <div className="flex gap-2 md:gap-2 mt-6 md:mt-12">
              <Image
                src={activePartner.person.profileImage}
                width={40}
                height={40}
                alt={activePartner.person.name}
                className="w-10 h-10 md:w-[50px] md:h-[50px] rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  {activePartner.person.name}
                </h3>
                <p className="text-[#252727] text-xs md:text-sm">
                  {activePartner.person.title}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <video
              src={activePartner.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full md:w-[588px] h-auto md:h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      )}

      {/* SELECTOR BUTTONS */}
      <div className="flex mt-10 container justify-center">
        <div className="flex border-dashed border-2 border-gray-200 container items-center relative overflow-hidden">
          {startIndex > 0 && (
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex md:hidden">
              <button
                className="bg-gray-100 rounded-full p-2"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          )}

          {partners.map((item, index) => (
            <div
              key={index}
              className={`w-full flex justify-center bg-[#fafafa] border-dashed border-l-2 border-gray-200 px-1 md:px-0 py-4 md:py-6 items-center cursor-pointer ${
                visibleItems.includes(item) ? "flex md:flex" : "hidden md:flex"
              }`}
              onClick={() => handleClick(item.name)}
            >
                {item.img && (
                    <Image
                      width={30}
                      height={30}
                      src={item.img}
                      alt={item.name}
                      className="mr-[5px] w-6 h-6 md:w-10 md:h-10 object-contain rounded-full"
                    />
                  )}

              <span
                className={`text-lg md:text-2xl font-bold ${
                  activeItem === item.name ? "" : ""
                }`}
              >
                {item.name}
              </span>
            </div>
          ))}

          {startIndex + itemsPerPage < partners.length && (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex md:hidden">
              <button
                className="bg-gray-100 shadow-lg rounded-full p-2"
                onClick={handleNext}
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
