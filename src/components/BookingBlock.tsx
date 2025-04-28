"use client"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { format, toZonedTime } from "date-fns-tz"

const BookingBlock = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  const handleScroll = () => {
    const aboutSection = document.getElementById('booking');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 2000)

    return () => clearInterval(timer)
  }, [])
  return (
    <div
      className={cn(
        "px-[120px] border-y border-dsgGreyMain max-xl:px-[100px]",
        className
      )}
    >
      <div className="px-10 py-5 relative flex items-center justify-between border-x border-dsgGreyMain max-xl:px-6">
        <p className="text-xs text-color5 ">
          Uzbekistan |{" "}
          {format(currentTime, "h:mm a 'GMT' x", {
            timeZone: "Asia/Tashkent",
          })}
        </p>
        <div className="flex items-center gap-2">
          <span className="relative flex items-center justify-center w-3 h-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00be3fcc] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BE3F]"></span>
          </span>
          <p onClick={() => handleScroll()} className="text-xs font-semibold text-[#595959]">
            Booking for 2025
          </p>
        </div>
        <p className="text-xs text-color5">
          <UserLocalTime />
        </p>
        <Circle position="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
        <Circle position="right-0 top-0 translate-x-1/2 -translate-y-1/2" />
        <Circle position="right-0 bottom-0 translate-x-1/2 translate-y-1/2" />
        <Circle position="left-0 bottom-0 -translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  )
}

export default BookingBlock

function UserLocalTime() {
  const [timeString, setTimeString] = useState<string>("")
  const [cityName, setCityName] = useState<string>("Local")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const zonedDate = toZonedTime(now, timeZone)

      // Format the time string
      const formatted = format(zonedDate, "h:mm aa")

      // Get the city name from the timezone
      const city = timeZone.split("/").pop()?.replace(/_/g, " ") || "Local"

      setTimeString(formatted)
      setCityName(city)
    }

    updateTime() // Initial update
    const intervalId = setInterval(updateTime, 60000)
    return () => clearInterval(intervalId) // Cleanup on unmount
  }, [])

  return (
    <>
      {cityName} | {timeString}
    </>
  )
}
const Circle = ({ position }: { position: string }) => (
  <div
    className={`w-1.5 h-1.5 bg-[#595959] rounded-[50%] absolute ${position} ring-[2px] ring-white`}
  ></div>
)
