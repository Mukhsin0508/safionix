import { useEffect, useState, useRef } from "react"

interface IntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  root?: Element | null
}

interface IntersectionObserverEntry {
  isIntersecting: boolean
  intersectionRatio: number
  target: Element
}

export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  {
    threshold = 0,
    rootMargin = "0px",
    root = null,
  }: IntersectionObserverOptions = {}
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element || observer.current) return

    observer.current = new IntersectionObserver(
      ([entry]) => {
        setEntry({
          isIntersecting: entry.isIntersecting,
          intersectionRatio: entry.intersectionRatio,
          target: entry.target,
        })
      },
      { threshold, rootMargin, root }
    )

    observer.current.observe(element)

    return () => {
      if (observer.current) {
        observer.current.disconnect()
        observer.current = null
      }
    }
  }, [elementRef, threshold, rootMargin, root])

  return {
    isIntersecting: entry?.isIntersecting ?? false,
    intersectionRatio: entry?.intersectionRatio ?? 0,
    entry,
  }
}
