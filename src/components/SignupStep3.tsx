"use client"
import { Button } from "./ui/button"
import HeroVideoDialog from "./ui/hero-video-dialog"
import { useRouter } from "@/lib/i18n/routing"

const mockVideoData = {
  videoSrc:
    "https://www.youtube.com/embed/wwo6Gdx3x7s?si=3fHIlv98PjdQJDgw&amp;controls=0",
  thumbnailSrc: "https://img.youtube.com/vi/wwo6Gdx3x7s/maxresdefault.jpg",
  thumbnailAlt: "Hero video",
}

const SignupStep3 = () => {
  const router = useRouter()

  const goToLogin = () => {
    router.push("/auth/login")
  }

  return (
    <div className="flex flex-col items-center">
      <h6 className="mt-7.5 text-center text-2xl font-bold text-dsgBlackMain">
        Welcome to Safionix👋🏻
      </h6>
      <p className="mt-4.5 text-center text-icon-dashboard font-medium text-sm">
        IMGNRS CLUBOUSE
      </p>
      <div className="my-6 max-w-[560px] aspect-[62/35]">
        <HeroVideoDialog
          className="block w-full shadow-none dark:hidden"
          thumbnailClassName="shadow-none"
          animationStyle="top-in-bottom-out"
          videoSrc={mockVideoData.videoSrc}
          thumbnailSrc={mockVideoData.thumbnailSrc || ""}
          thumbnailAlt={mockVideoData.thumbnailAlt}
        />
      </div>
      <div className="px-16 mt-6 flex justify-center w-full">
        <Button
          onClick={goToLogin}
          className=" py-3.5 w-full h-auto rounded-xl"
          variant="tertiary"
        >
          Finish up
        </Button>
      </div>
    </div>
  )
}

export default SignupStep3
