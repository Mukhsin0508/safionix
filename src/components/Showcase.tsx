import { cn } from "@/lib/utils"
import showcaseData from "../../public/data/showcase.json"
import { Marquee, ShowcaseCard } from "@/components"
import { useTranslations } from "next-intl"

const Showcase = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const t = useTranslations()
  return (
    <div className={cn("container", className)}>
      <div className="text-center text-dsgBlackMain flex flex-col gap-7.5">
        <h4 className="text-5xl font-bold max-xl:text-4xl">
          {t("showcase-header-title")}
        </h4>
        <p className="text-lg">{t("showcase-header-subtitle")}</p>
      </div>
      <div className="relative">
        <Marquee pauseOnHover className="pt-10 [--duration:60s] [--gap:24px]">
          {showcaseData.showcaseData.map((item, i) => (
            <ShowcaseCard key={i} item={item} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 max-w-64 w-1/5 bg-gradient-to-r from-[#FCFCFC] pointer-events-none dark:from-background"></div>
        <div className="absolute inset-y-0 right-0 max-w-64 w-1/5 bg-gradient-to-l from-[#FCFCFC] pointer-events-none dark:from-background"></div>
      </div>
    </div>
  )
}

export default Showcase
