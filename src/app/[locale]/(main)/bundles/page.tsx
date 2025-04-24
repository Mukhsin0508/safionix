import {   Booking, BundleCard, OfferBlock } from '@/components'
import React from 'react'
import { BundlesMockData, rightSidebar2 } from '../../(dashboard)/dash/page'
import Image from 'next/image'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import HeroVideoDialog from '@/components/ui/hero-video-dialog'
import { cn } from '@/lib/utils'

export default function page() {
  return (
    <div>
       <OfferBlock/>
       <main className="mt-7.5 max-w-[1305px] mx-auto flex items-start gap-12">
               <div className="flex gap-x-6 gap-y-7.5 flex-wrap max-w-[844px] overflow-y-auto pb-11">
                 {BundlesMockData.map((item, i) => (
                   <BundleCard className="w-[48.5%]" key={i} item={item} />
                 ))}
               </div>
               <div className="max-w-[410px] w-full sticky top-0 pb-16 h-[86dvh] overflow-y-auto scrollbarVariant1 pr-1">
                 
                 <RightSidebarCard2 className='' item={rightSidebar2} />
               </div>
             </main>
        <Booking/>
    </div>
  ) 
}
interface RightSidebarCard2Types extends React.HTMLAttributes<HTMLDivElement> {
  item: {
    videoSrc?: string
    title: string
    description: string
    thumbnailSrc?: string
    thumbnailAlt?: string
  }
}

 function RightSidebarCard2({ item, className }: RightSidebarCard2Types) {
  return (
    <Card
      className={cn("w-full shadow-none border-none bg-transparent", className)}
    >
      <div className="rounded-xl aspect-[205/117]">
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
          <div className="w-[330px] h-[440px] bg-dsgGreyMain rounded-xl"></div>
        )}
      </div>
      <CardHeader className="p-0 mt-4.5 gap-2 text-dsgBlackMain">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Image
              src="/assets/yellow-star.svg"
              width={24}
              height={24}
              alt="yellow star"
            />
            <Image
              src="/assets/yellow-star.svg"
              width={24}
              height={24}
              alt="yellow star"
            />
            <Image
              src="/assets/yellow-star.svg"
              width={24}
              height={24}
              alt="yellow star"
            />
            <Image
              src="/assets/yellow-star.svg"
              width={24}
              height={24}
              alt="yellow star"
            />
            <Image
              src="/assets/yellow-star.svg"
              width={24}
              height={24}
              alt="yellow star"
            />
          </div>
          <span className="text-sm mr-20 leading-tight text-icon-dashboard">
            9,163,726 stars
          </span>
        </div>
        <CardTitle className="mt-2.5 text-base font-semibold leading-tight line-clamp-1">
          {item.title}
        </CardTitle>
        <CardDescription className="text-sm w-[330px] leading-tight text-dsgBlackMain line-clamp-3">
          {item.description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}