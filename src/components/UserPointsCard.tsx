import { cn } from "@/lib/utils"
import Image from "next/image"

const UserPointsCard = ({className}:React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("p-4.5dashboard-box flex items-center gap-2.5", className)}>
      <div className="max-w-[54px]">
        <Image
          className="w-full"
          src="/assets/userPointEmblem.webp"
          width={180}
          height={180}
          alt="emblem"
        />
      </div>
      <div className="">
        <p className="font-medium text-color4 text-base leading-snug">
          On your account
        </p>
        <span className="mt-3 inline-block text-color5 text-sm leading-tight font-medium">
          5 points
        </span>
      </div>
    </div>
  )
}

export default UserPointsCard
