"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const partners = [
  {
    id: 1,
    name: "Tarteeb.uz",
    video: "/assets/partners/xa.mp4",
    video_length: "00:00:19",
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
    video_length: "00:01:48",
    video: "/assets/partners/speaklish.mp4",
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
    video: "/assets/partners/bonafit.mp4",
    video_length: "00:00:58",
    img: "/assets/bonafitLogo.svg" ,
    description:
      "I loved the logo and app design! 💕 The creativity made it unique! 🔥 Thanks for the great work—I'll recommend you!",
    person: {
      name: "Rukhsora",
      title: "Vice-Rector Influencer",
      profileImage: "/assets/image-8.webp",
    },
  },
  {
    id: 4,
    name: "KRI institute",
    video: "/assets/partners/kri.mp4",
    video_length: "00:00:10",
    img: "/assets/KriLogo.svg" ,
    description:
      "Safionix didn't just build a website—they crafted a digital identity for KRI University. A+ collaboration!",
    person: {
      name: "KRI Institute",
      title: "krinstitut.com",
      profileImage: "/assets/KriLogo.svg",
    },
  },
  {
    id: 5,
    name: "AHA",
    video: "/assets/partners/AHA.mp4",
    video_length: "00:00:10",
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
    video: "/assets/partners/Innovaite.mp4",
    video_length: "00:00:10",
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
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);
  
  const itemsPerPage = 2;
  const visibleItems = partners.slice(startIndex, startIndex + itemsPerPage);
  const activePartner = partners.find((p) => p.name === activeItem);
  const activeIndex = partners.findIndex((p) => p.name === activeItem);

  const handleClick = (name: string) => {
    if (name === activeItem || isLoadingVideo) return;
    
    setIsLoadingVideo(true);
    setActiveItem(name);
    setProgress(0);
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

  // Move to next partner when video ends
  const handleVideoEnded = () => {
    const nextIndex = (activeIndex + 1) % partners.length;
    
    setIsLoadingVideo(true);
    setActiveItem(partners[nextIndex].name);
    
    // If next partner is not visible, adjust startIndex
    if (nextIndex < startIndex || nextIndex >= startIndex + itemsPerPage) {
      setStartIndex(Math.floor(nextIndex / itemsPerPage) * itemsPerPage);
    }
    
    setProgress(0);
  };

  // Handle video loaded data event
  const handleLoadedData = () => {
    setIsLoadingVideo(false);
    
    if (videoRef.current) {
      videoRef.current.play()
        .catch(e => console.log("Video play failed:", e));
    }
  };

  // Update progress while video is playing
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    
    if (videoRef.current && !isLoadingVideo) {
      intervalId = setInterval(() => {
        if (videoRef.current) {
          const duration = videoRef.current.duration;
          const currentTime = videoRef.current.currentTime;
          const progressPercentage = (currentTime / duration) * 100;
          setProgress(progressPercentage);
        }
      }, 50);
    }
    
    return () => {
      clearInterval(intervalId);
    };
  }, [activeItem, isLoadingVideo]);

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
              key={activePartner.name} // Add key to force re-render when source changes
              ref={videoRef}
              src={activePartner.video}
              muted
              playsInline
              className="w-full md:w-[588px] h-auto md:h-[500px] object-cover rounded-lg"
              onEnded={handleVideoEnded}
              onLoadedData={handleLoadedData}
              onError={(e) => {
                console.error("Video error:", e);
                setIsLoadingVideo(false);
              }}
            />
          </div>
        </div>
      )}

      {/* SELECTOR BUTTONS WITH PROGRESS INDICATOR */}
      <div className="flex mt-10 container justify-center">
        <div className="flex border-dashed border-2 border-gray-200 container items-center relative overflow-hidden">
          {startIndex > 0 && (
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex md:hidden">
              <button
                className="bg-gray-100 rounded-full p-2"
                onClick={handlePrev}
                disabled={isLoadingVideo}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          )}

          {partners.map((item, index) => (
            <div
              key={index}
              className={`w-full flex flex-col justify-center ${
                activeItem === item.name ? "bg-white" : " bg-gray-100"
              } border-dashed border-l-2 border-gray-200 px-1 md:px-0 py-4 md:py-6 items-center cursor-pointer relative ${
                visibleItems.includes(item) ? "flex md:flex" : "hidden md:flex"
              } ${isLoadingVideo && activeItem !== item.name ? "opacity-50 pointer-events-none" : ""}`}
              onClick={() => handleClick(item.name)}
            >
              <div className="flex items-center justify-center">
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
                  className="text-lg py-1  md:text-2xl font-bold text-black"
                >
                  {item.name}
                </span>
              </div>
              
              {activeItem === item.name && (
                <div className="absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-100 ease-linear w-full"
                     style={{ width: `${progress}%` }}>
                </div>
              )}
            </div>
          ))}

          {startIndex + itemsPerPage < partners.length && (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex md:hidden">
              <button
                className="bg-white shadow-lg rounded-full "
                onClick={handleNext}
                disabled={isLoadingVideo}
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