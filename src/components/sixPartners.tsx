"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const data = [
  { name: "Tarteeb.uz" },
  { name: "Speaklish.co", img: "/assets/speaklishLogo.svg" },
  { name: "Bonafit", img: "/assets/bonafitLogo.svg" },
  { name: "KRI institute", img: "/assets/KriLogo.svg" },
  { name: "AHA", img: "/assets/AhaLogo.svg" },
  { name: "Innovaite.uz" },
];

export default function SixPartnersPage() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0); 

  const itemsPerPage = 2; 

  const handleClick = (name: string) => {
    setActiveItem(null);
    setTimeout(() => setActiveItem(name), 0);
  };

  const handleNext = () => {
    if (startIndex + itemsPerPage < data.length) {
      setStartIndex(startIndex + itemsPerPage);
      console.log("Next clicked, new startIndex:", startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
      console.log("Prev clicked, new startIndex:", startIndex - itemsPerPage);
    }
  };

  const visibleItems = data.slice(startIndex, startIndex + itemsPerPage);
  console.log("Visible items:", visibleItems);

  return (
    <div className="flex mt-10 justify-center">
      <div className="flex border-dashed border-2 border-gray-200 container items-center relative">
        {startIndex > 0 && (
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex md:hidden">
            <button
              className="bg-gray-100 rounded-full p-2 flex items-center justify-center"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
          </div>
        )}

        {data.map((item, index) => (
          <div
            key={index}
            className={`relative w-full flex justify-center border-dashed border-l-2 border-gray-200 px-3 py-4 md:py-6 items-center cursor-pointer text-lg ${
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
                className="mr-[5px] align-middle w-6 h-6 md:w-10 md:h-10"
              />
            )}
            <span className="text-lg md:text-2xl font-bold">{item.name}</span>
            {activeItem === item.name && <div className="item-underline" />}
          </div>
        ))}

        {startIndex + itemsPerPage < data.length && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex md:hidden">
            <button
              className="bg-gray-100 shadow-lg rounded-full p-2 flex items-center justify-center"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6  text-gray-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}