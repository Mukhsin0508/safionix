"use client"
import { JSX, useState } from "react"
import { Star, StarHalf } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  totalStars?: number
  initialRating?: number
  onChange?: (rating: number) => void
  readOnly?: boolean
  size?: number
  activeColor?: string
  inactiveColor?: string
  allowHalf?: boolean
  className?: string
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  initialRating = 0,
  onChange,
  readOnly = false,
  size = 24,
  activeColor = "text-color9",
  inactiveColor = "text-[#F3EEE1]",
  allowHalf = false,
  className,
}) => {
  const [rating, setRating] = useState<number>(initialRating)
  const [hoverRating, setHoverRating] = useState<number>(0)

  const handleClick = (index: number): void => {
    if (readOnly) return
    const newRating =
      allowHalf && index === Math.ceil(rating) && rating % 1 !== 0
        ? Math.floor(rating)
        : index
    setRating(newRating)
    if (onChange) onChange(newRating)
  }

  const handleMouseMove = (
    e: React.MouseEvent<HTMLSpanElement>,
    index: number
  ): void => {
    if (readOnly) return

    if (allowHalf) {
      const rect = e.currentTarget.getBoundingClientRect()
      const halfPoint = (rect.right - rect.left) / 2
      const isHalf = e.clientX - rect.left < halfPoint
      setHoverRating(isHalf ? index - 0.5 : index)
    } else {
      setHoverRating(index)
    }
  }

  const handleMouseLeave = (): void => {
    if (readOnly) return
    setHoverRating(0)
  }

  const renderStar = (index: number): JSX.Element => {
    const displayRating = hoverRating || rating
    const filled = index <= displayRating
    const halfFilled =
      allowHalf && index === Math.ceil(displayRating) && displayRating % 1 !== 0

    const starProps = {
      size,
      className: `transition-all duration-200 ${
        filled ? activeColor : inactiveColor
      } ${!readOnly && "cursor-pointer"}`,
      fill: filled ? "currentColor" : "none",
      strokeWidth: 1.5,
    }

    const star = halfFilled ? (
      <StarHalf {...starProps} />
    ) : (
      <Star {...starProps} />
    )

    return (
      <span
        key={index}
        className="relative"
        onClick={() => handleClick(index)}
        onMouseMove={(e) => handleMouseMove(e, index)}
        onMouseLeave={handleMouseLeave}
      >
        {star}
      </span>
    )
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(totalStars)].map((_, i) => renderStar(i + 1))}
      {/* {!readOnly && (
        <span className="ml-2 text-sm text-gray-500">
          {hoverRating || rating || "Not rated"}
        </span>
      )} */}
    </div>
  )
}

export default StarRating
