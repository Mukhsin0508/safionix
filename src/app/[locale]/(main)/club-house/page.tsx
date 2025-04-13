import { OfferBlock, Partners, Pricing, StartProject } from "@/components"
import EarnPoints from "@/components/CH-EarnPoint"
import PricingSection from "@/components/CH-PricingSection"
import CHWork from "@/components/CH-Work"
import { BorderBeam } from "@/components/magicui/border-beam"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const ClubHouse = () => {
  return (
    <div className="">
      <OfferBlock />
      <header className="pb-[8%] relative flex items-end justify-center h-[120dvh] max-h-[756px]">
        <Image
          className="w-full h-full absolute top-0 left-0 object-cover z-[0]"
          src="/assets/clubhouse-header.jpg"
          alt="house in the middle of the pasture"
          width={1440}
          height={756}
        />
        <div className="max-w-[825px] text-dsgWhiteMain z-[1] relative flex flex-col gap-7.5 items-center text-center">
          <h2 className="font-bold text-[32px]">WELCOME TO THE CLUBHOUSE</h2>
          <p className="text-lg font-medium">
            An exclusive community designed just for our members — earn points
            every time you shop with us for extra perks and discounts!
          </p>
          <div className="mt-5 w-full max-w-[516px] flex items-center gap-5">
            <Button className="relative w-full group" variant="secondary">
              Join the CLUB
              <Image
                className="size-3 transform -rotate-90 transition-transform duration-200 group-hover:translate-x-[50%]"
                src="/assets/chevron-right-dark.svg"
                alt="chevron right"
                width={12}
                height={12}
              />
              <BorderBeam parentClassname="border-2" duration={8} size={50} />
            </Button>
            <Button className="w-full group" variant="ghost">
              Log in
              <Image
                className="size-3 transform transition-transform duration-200 group-hover:translate-x-[50%]"
                src="/assets/chevron-right.svg"
                alt="chevron right"
                width={12}
                height={12}
              />
            </Button>
          </div>
        </div>
      </header>
      <CHWork/>
      <EarnPoints/>
      <PricingSection/>
      <div className="container mx-auto px-4">
               <StartProject/>
                <Partners/>
                <Pricing/>
              </div>
    </div>
  )
}

export default ClubHouse
