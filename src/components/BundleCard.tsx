import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import HeroVideoDialog from "./ui/hero-video-dialog"
import { cn } from "@/lib/utils"

interface BundleCardTypes extends React.HTMLAttributes<HTMLDivElement> {
  item: {
    videoSrc?: string
    title: string
    description: string
    thumbnailSrc?: string
    thumbnailAlt?: string
  }
}

export default function BundleCard({ item, className }: BundleCardTypes) {
  return (
    <Card
      className={cn(
        "max-w-[410px] w-full shadow-none border-none bg-transparent",
        className
      )}
    >
      <div className="w-full h-[234px] max-w-[410px] rounded-xl">
        {item.videoSrc ? (
          <HeroVideoDialog
            className="block dark:hidden w-full shadow-none"
            thumbnailClassName="shadow-none"
            animationStyle="top-in-bottom-out"
            videoSrc={item.videoSrc}
            thumbnailSrc={item.thumbnailSrc || ""}
            thumbnailAlt={item.thumbnailAlt}
          />
        ) : (
          <div className="w-full h-full bg-dsgGreyMain rounded-xl"></div>
        )}
      </div>
      <CardHeader className="p-0 mt-4.5 gap-2 text-dsgBlackMain">
        <CardTitle className="text-base font-semibold leading-tight line-clamp-1">
          {item.title}
        </CardTitle>
        <CardDescription className="text-sm leading-tight text-dsgBlackMain line-clamp-3">
          {item.description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
