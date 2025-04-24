"use client"
import { DashboardPrimaryTitle, StarRating } from "@/components"
import { useTranslations } from "next-intl"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import { Button } from "@/components/ui/button"

const WriteReview = () => {
  const t = useTranslations("write-review")
  const carouselMockData = [
    {
      imgSrc: "/assets/writeReview 1.png",
    },
    {
      imgSrc: "/assets/writeReview 2.png",
    },
    {
      imgSrc: "/assets/writeReview 3.png",
    },
    {
      imgSrc: "/assets/writeReview 4.png",
    },
  ]
  return (
    <>
      <DashboardPrimaryTitle>{t("page-title")}</DashboardPrimaryTitle>
      <main className="mt-7.5 flex gap-6">
        <div className="max-w-[524px]">
          <div className="w-full">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }} 
              speed={800}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              className="rounded-xl"
            >
              {carouselMockData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Card
                    className={`aspect-[131/92] overflow-hidden rounded-xl`}
                  >
                    <Image
                      className="object-cover w-full h-full"
                      src={slide.imgSrc}
                      height={700}
                      width={500}
                      alt="carousel desc"
                    />
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-6 font-semibold text-icon-dashboard">
            <div className="flex items-center justify-between">
              <p>Total Reviews</p>
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
            </div>
            <div className="my-2 text-[32px]">9.16M</div>
            <p className="text-color5">Growth in reviews on this year</p>
          </div>
        </div>
        <div className="">
          <p className="text-icon-dashboard font-semibold">
            Dear friend, please share your reviews about the services with the
            other members
          </p>
          <StarRating className="mt-3" initialRating={0} />
          <textarea
            placeholder="We value your opinion and are glad to have you on our team..."
            className="mt-6 w-full h-[396px] rounded-xl border border-color2 p-4.5 bg-transparent placeholder:text-color5 placeholder:text-sm"
          ></textarea>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-icon-dashboard font-medium">
              Share your reviews
            </p>
            <div className="flex items-center gap-6 text-icon-dashboard">
              <div className="size-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M17.508 6.5H17.499"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="size-6">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6.5L8.91302 10.417C11.4616 11.861 12.5384 11.861 15.087 10.417L22 6.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.01577 13.9756C2.08114 17.0412 2.11383 18.5739 3.24496 19.7094C4.37608 20.8448 5.95033 20.8843 9.09883 20.9634C11.0393 21.0122 12.9607 21.0122 14.9012 20.9634C18.0497 20.8843 19.6239 20.8448 20.7551 19.7094C21.8862 18.5739 21.9189 17.0412 21.9842 13.9756C22.0053 12.9899 22.0053 12.0101 21.9842 11.0244C21.9189 7.95886 21.8862 6.42609 20.7551 5.29066C19.6239 4.15523 18.0497 4.11568 14.9012 4.03657C12.9607 3.98781 11.0393 3.98781 9.09882 4.03656C5.95033 4.11566 4.37608 4.15521 3.24495 5.29065C2.11382 6.42608 2.08114 7.95885 2.01576 11.0244C1.99474 12.0101 1.99475 12.9899 2.01577 13.9756Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Button className="px-20 py-2.5">
                <div className="">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.0477 3.55293C18.8697 1.20736 2.48648 6.9532 2.50001 9.051C2.51535 11.4299 8.89809 12.1617 10.6672 12.6581C11.7311 12.9565 12.016 13.2625 12.2613 14.3781C13.3723 19.4305 13.9301 21.9435 15.2014 21.9996C17.2278 22.0892 23.1733 5.842 21.0477 3.55293Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M11.5 13L15 9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>{" "}
                Send
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default WriteReview
