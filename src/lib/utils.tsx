import { WordRotate } from "@/components"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const renderFormattedText = (text: string): React.ReactNode => {
  const boldRegex = /<bold>([\s\S]*?)<\/bold>/g
  const hlRegex = /<hl>([\s\S]*?)<\/hl>/g
  const wordRotateRegex = /<wordrotate words='(.*?)'>/g

  const renderBold = (content: string, index: number): React.ReactNode => {
    return (
      <span key={`bold-${index}`} className="font-bold">
        {renderFormattedText(content)}
      </span>
    )
  }

  const renderHighlight = (content: string, index: number): React.ReactNode => {
    return (
      <span
        key={`highlight-${index}`}
        className="bg-gradient-to-r from-color8 to-color8 bg-[length:100%_88%] bg-[position:52%_52%] bg-no-repeat"
      >
        {renderFormattedText(content)}
      </span>
    )
  }

  const renderWordRotate = (
    content: string,
    index: number
  ): React.ReactNode => {
    const words = content.split(",").map((word) => word.trim())
    return <WordRotate key={`wordrotate-${index}`} words={words} />
  }

  let result: React.ReactNode[] = [text]

  const applyFormatting = (
    regex: RegExp,
    renderer: (content: string, index: number) => React.ReactNode
  ) => {
    result = result.flatMap((part, partIndex) => {
      if (typeof part !== "string") return part
      const segments = part.split(regex)
      return segments.map((segment, index) => {
        if (index % 2 === 1) {
          return renderer(segment, partIndex + index)
        }
        return segment
      })
    })
  }

  // Apply bold formatting
  applyFormatting(boldRegex, renderBold)

  // Apply highlight formatting
  applyFormatting(hlRegex, renderHighlight)

  // Apply word rotate formatting
  applyFormatting(wordRotateRegex, renderWordRotate)

  return result
}
