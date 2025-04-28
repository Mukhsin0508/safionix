"use client"
import { useTranslations } from "next-intl"
import { RainbowButton, Particles, SparklesText } from "@/components"
import { renderFormattedText } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const HomeHeader = () => {
  const t = useTranslations()

  const handleScroll = () => {
    const aboutSection = document.getElementById('booking');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  

  return (
    <header className="relative overflow-hidden pt-[180px] flex justify-center text-dsgBlackMain max-xl:pt-[70px]">
      <div className="max-w-[1000px] flex flex-col items-center gap-7.5 max-xl:max-w-[70%]">
        <h2 className="font-bold text-6xl text-center leading-snug max-xl:text-[44px]">
          Turning &apos;Impossible&apos; into your competitive{" "}
          <SparklesText
            className="inline-block rounded-2xl bg-color8 leading-none px-3 py-1"
            text="advantage"
          />
        </h2>
        <div className="max-w-[490px] text-center text-lg leading-snug">
          {renderFormattedText(t.raw("header-2"))}
        </div>
        <div className="w-full max-w-[520px] flex items-center gap-5 mt-5">
          <RainbowButton
           onClick={handleScroll}
            key="header-3"
            className="py-2.5 font-semibold w-1/2 flex items-center gap-1.5 text-dsgWhiteMain group"
          >
            {t("header-3")}
            <Image
              className="size-3 transform transition-transform duration-200 group-hover:translate-x-[50%]"
              src="/assets/chevron-right.svg"
              alt="chevron right"
              width={12}
              height={12}
            />
          </RainbowButton>
          <RainbowButton
            key="header-4"
            variant="light"
            className="grup py-2.5 font-semibold w-1/2 flex items-center gap-1.5"
          >
           <Link href={'become-pro'}> {t("header-4")}</Link>
            <Image
              className="size-3 -rotate-90 transform transition-transform duration-200 group-hover:translate-x-[50%]"
              src="/assets/chevron-right-dark.svg"
              alt="chevron right dark"
              width={12}
              height={12}
            />
          </RainbowButton>
        </div>
        <div className="flex gap-3 items-center mt-8 ">
          {["figma", "webflow", "adobe-after-effect", "blender", "vsCode"].map(
            (imgName) => (
              <Image
                key={imgName}
                className={"size-8"}
                src={`/assets/${imgName}.svg`}
                alt={imgName}
                width={32}
                height={32}
                loading="lazy"
              />
            )
          )}
        </div>
      </div>
      <Particles
        className="absolute inset-0 max-xl:hidden"
        quantity={120}
        ease={20}
        color={"#000000"}
        refresh
      />
    </header>
  )
}

export default HomeHeader
