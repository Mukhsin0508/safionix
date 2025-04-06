import { Link } from "@/lib/i18n/routing"
import { cn } from "@/lib/utils"
import Image from "next/image"

const NewsCard = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("w-full relative", className)}>
      <div className="w-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 250 251"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="86%"
            height="86%"
            rx="12"
            transform="matrix(0.995149 -0.0983817 0.0968113 0.995303 0 19.9091)"
            fill="#E5E2F5"
          />
          <rect
            width="86%"
            height="86%"
            rx="12"
            transform="matrix(0.999985 -0.00547999 0.00539168 0.999985 14.3589 21.5568)"
            fill="#E5E2F5"
            filter="url(#complexShadow)"
          />
          <rect
            width="80%"
            height="80%"
            rx="12"
            transform="matrix(0.979312 -0.202355 0.199225 0.979954 6.94336 49.96)"
            fill="#E5E2F5"
            filter="url(#complexShadow)"
          />
          <defs>
            <filter
              id="complexShadow"
              x="-100%"
              y="-100%"
              width="400%"
              height="400%"
            >
              <feDropShadow
                dx="-3"
                dy="3"
                stdDeviation="8"
                floodColor="#9191911A"
              />
              <feDropShadow
                dx="-40"
                dy="46"
                stdDeviation="24"
                floodColor="#91919103"
              />
              <feDropShadow
                dx="-63"
                dy="72"
                stdDeviation="27"
                floodColor="#91919100"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="dashboard-box w-full h-full max-h-[205px] max-w-[204px] absolute top-7.5 left-[26px] flex flex-col">
        <div className="pt-3.5 pr-3.5 flex justify-end">
          <Image
            className="size-6"
            src="/assets/logotip.svg"
            alt="Logo"
            width={22}
            height={18}
          />
        </div>
        <div className="px-[15px] pb-[11px] flex flex-col justify-between flex-1">
          <p className="text-dsgBlackMain font-semibold text-xl leading-tight">
            Welcome to imgnrs family!!! 🎉
          </p>
          <Link
            className="text-color7 text-xs leading-tight self-end"
            href={"/"}
          >
            Safionix.com
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
