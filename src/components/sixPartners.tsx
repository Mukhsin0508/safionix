"use client";
import Image from "next/image";
import React, { useState } from "react";
const data = [
    {
        name: "Tarteeb.uz",
    },
    {
        name: "Speaklish.co",
        img: "/assets/speaklishLogo.svg",
    },
    {
        name: "Bonafit",
        img: "/assets/bonafitLogo.svg",
    },
    {
        name: "KRI institute",
        img: "/assets/KriLogo.svg",
    },
    {
        name: "AHA",
        img: "/assets/AhaLogo.svg",
    },
    {
        name: "Innovaite.uz",
    },
];
export default function sixPartersPage() {
    const [activeItem, setActiveItem] = useState(null);

   

    const handleClick = (name: any) => {
        setActiveItem(null);
        setTimeout(() => setActiveItem(name), 0);
    };

    return (
        <div className="flex mt-10 justify-center">
            <div className="flex  border-dashed border-2 border-gray-200   container   items-center">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full  flex justify-center border-dashed border-l-2  border-gray-200   px-3 py-6  items-center cursor-pointer text-lg"
                        onClick={() => handleClick(item.name)}
                    >
                        {item.img && (
                            <Image
                                width={40}
                                height={40}
                                src={item.img}
                                alt={item.name}
                                className=" mr-[5px] align-middle"
                            />
                        )}
                        <span className="text-2xl font-bold">{item.name}</span>
                        {activeItem === item.name && (
                            <div className="item-underline" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
