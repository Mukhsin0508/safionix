"use client"
import { renderFormattedText } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { FaStar } from "react-icons/fa6"

interface AvatarProps {
  avatars: {
    src: string
    alt: string
    comment: string
    author: string
  }[]
  size?: number
  overlap?: number
}

export default function OverlappingAvatars({
  avatars,
  size = 50,
  overlap = 8,
}: AvatarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [clickedIndex, setClickedIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setClickedIndex(null)
        setHoveredIndex(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [clickedIndex, hoveredIndex])

  const handleAvatarClick = (index: number) => {
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index))
    setHoveredIndex(index)
  }
  const handleAvatarHover = (index: number | null) => {
    if (clickedIndex === null) {
      setHoveredIndex(index)
    }
  }
  const getZIndex = (index: number) => {
    if (clickedIndex === index) return avatars.length + 2 // Clicked avatar gets highest z-index
    if (hoveredIndex === index) return avatars.length + 1 // Hovered avatar gets second highest z-index
    return avatars.length - index // Other avatars maintain their default stacking order
  }

  return (
    <div className="relative" ref={containerRef}>
      <div className="flex" style={{ marginLeft: overlap }}>
        {avatars.map((avatar, index) => (
          <div
            key={avatar.src}
            className="relative hover:z-40"
            style={{
              zIndex: getZIndex(index),
            }}
            onMouseEnter={() => handleAvatarHover(index)}
            onMouseLeave={() => handleAvatarHover(null)}
            onClick={() => handleAvatarClick(index)}
          >
            <div
              className="overflow-hidden transition-all duration-300 ring-2 ring-dsgWhiteMain rounded-full hover:scale-[1.2]"
              style={{
                width: size,
                height: size,
                marginLeft: -overlap,
                transform: clickedIndex === index ? "scale(1.2)" : "",
              }}
            >
              <Image
                src={avatar.src}
                alt={avatar.alt}
                width={size*2.5}
                height={size*2.5}
                className="object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 hover:opacity-100"
                style={{
                  backgroundColor: "#D6FF8399",
                  opacity: clickedIndex === index ? 1 : "",
                }}
              />
            </div>
            {(hoveredIndex === index || clickedIndex === index) && (
              <div
                className="mt-2 py-3 px-6 absolute flex flex-col gap-4 left-1/2 transform -translate-x-1/2 bg-white border border-dsgGreyMain rounded-lg shadow-[0px_0px_24px_0px_#8C8C8C3D]"
                style={{
                  width: "max-content",
                  maxWidth: "332px",
                  zIndex: avatars.length + 2,
                }}
              >
                <div className="flex gap-1 text-xl text-color9">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-lg leading-normal text-color4">
                  {renderFormattedText(avatar.comment)}
                </p>
                <p className="text-color5 text-sm leading-snug">
                  {avatar.author}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
