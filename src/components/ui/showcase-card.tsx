"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Link } from "@/lib/i18n/routing"
import { useState } from "react"

export interface ShowcaseCardProps {
  item: {
    href: string
    imageSrc: string
    imageAlt: string
    title: string
    description: string
  }
}

const ShowcaseCard = ({ item }: ShowcaseCardProps) => {
  const { href, imageSrc, imageAlt, title, description } = item
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className={cn(
        "max-w-[402px] transition duration-200",
        isHovered && "-translate-y-5"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <div>
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="object-cover rounded-xl max-w-[402px] max-h-[290px]"
            loading="lazy"
            layout=""
            width={402}
            height={270}
          />
        </div>
        <div className="mt-3">
          <h3 className="flex items-center gap-3 text-xl font-medium ">
            {title}{" "}
            <Image
              className={cn(
                "size-3 transform transition-transform duration-200 -rotate-90 ",
                isHovered && "translate-x-[50%]"
              )}
              src="/assets/chevron-right-dark.svg"
              alt="chevron right icon"
              width={12}
              height={12}
            />
          </h3>
          <p className="mt-1 text-[#595959] text-sm">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default ShowcaseCard
