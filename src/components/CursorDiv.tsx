"use client"
import { useEffect } from "react"

const CursorDiv = () => {
  useEffect(() => {
    const cursorText = document.getElementById("cursorText")

    if (cursorText) {
      const handleMouseMove = (event: MouseEvent) => {
        let x = event.pageX
        const y = event.pageY

        // Boundary checks
        const cursorWidth = cursorText.offsetWidth
        const windowWidth = document.documentElement.clientWidth - 24

        if (x + cursorWidth > windowWidth) {
          x = windowWidth - cursorWidth
        }
        cursorText.style.left = `${x}px`
        cursorText.style.top = `${y + 20}px`
      }
      document.addEventListener("mousemove", handleMouseMove)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div
      // className="cursor-text"
      // id="cursorText"
      // style={{
      //   zIndex: "9999",
      //   position: "absolute",
      //   top: "0",
      //   left: "0",
      //   transform: "translate(25%, 25%)",
      //   pointerEvents: "none",
      //   background: "#7E00E1",
      //   color: "#fff",
      //   padding: "5px 25px",
      //   borderRadius: "3px",
      //   transition: "none",
      // }}
    >
      {/* You */}
    </div>
  )
}

export default CursorDiv
