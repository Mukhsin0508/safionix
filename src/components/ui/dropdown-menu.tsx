"use client"
import React, { useState, useRef, useEffect } from "react"

interface DropdownProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: "start" | "center" | "end"
  onOpenChange?: (isOpen: boolean) => void
}

export default function Dropdown({
  trigger,
  children,
  align = "center",
  onOpenChange,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    onOpenChange?.(open)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        handleOpenChange(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [handleOpenChange])

  useEffect(() => {
    if (isOpen && triggerRef.current && contentRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect()
      const contentRect = contentRef.current.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      // Calculate initial position based on alignment
      let leftPosition = 0
      switch (align) {
        case "start":
          leftPosition = 0
          break
        case "center":
          leftPosition = (triggerRect.width - contentRect.width) / 2
          break
        case "end":
          leftPosition = triggerRect.width - contentRect.width
          break
      }

      // Check horizontal boundaries
      const absoluteLeft = triggerRect.left + leftPosition
      const absoluteRight = absoluteLeft + contentRect.width

      if (absoluteRight > viewportWidth) {
        // Adjust if going off right edge
        leftPosition -= absoluteRight - viewportWidth + 8 // 8px padding
      }
      if (absoluteLeft < 0) {
        // Adjust if going off left edge
        leftPosition = -triggerRect.left + 8 // 8px padding
      }

      // Check vertical boundaries
      const bottomSpace = viewportHeight - triggerRect.bottom
      const topSpace = triggerRect.top

      // Apply positions
      contentRef.current.style.left = `${leftPosition}px`

      if (bottomSpace < contentRect.height && topSpace > contentRect.height) {
        // Position above if not enough space below but enough space above
        contentRef.current.style.bottom = "100%"
        contentRef.current.style.marginBottom = "0.5rem"
        contentRef.current.style.top = "auto"
        contentRef.current.style.marginTop = "0"
      } else {
        // Position below by default
        contentRef.current.style.top = "100%"
        contentRef.current.style.marginTop = "0.5rem"
        contentRef.current.style.bottom = "auto"
        contentRef.current.style.marginBottom = "0"
      }
    }
  }, [isOpen, align])

  return (
    <div className="relative inline-block text-right" ref={dropdownRef}>
      <div
        ref={triggerRef}
        onClick={() => handleOpenChange(!isOpen)}
        className="cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={contentRef}
          className="absolute z-10 mt-2 rounded-lg shadow-lg bg-color4 "
        >
          <div className="text-dsgWhiteMain" role="menu" aria-orientation="vertical">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
