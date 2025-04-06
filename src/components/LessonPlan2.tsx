import { Link } from "@/lib/i18n/routing"
import { cn } from "@/lib/utils"
import HeroVideoDialog from "./ui/hero-video-dialog"

const lessonsPlansData2 = {
  roadmap: {
    primaryTitle: "Basic knowledge of UX/UI design",
    lessons: [
      {
        title: "What is UX/UI? Figma upload and interface explanation",
        link: "#",
      },
      {
        title: "Getting to know Figma tools and plugins",
        link: "#",
      },
      {
        title: "1st design in Figma",
        link: "#",
      },
      {
        title: "1st design in Figma",
        link: "#",
      },
      {
        title: "1st design in Figma",
        link: "#",
      },
      {
        title: "1st design in Figma",
        link: "#",
      },
      {
        title: "1st design in Figma",
        link: "#",
      },
      {
        title: "1st design in Figma",
        link: "#",
      },
      {
        title: "1st design in Figma",
        link: "#",
      },
      {
        title: "1st design in Figma",
        link: "#",
      },
    ],
  },
  videoLesson: {
    primaryTitle: "Video lesson",
    videoSrc:
      "https://www.youtube.com/embed/wwo6Gdx3x7s?si=3fHIlv98PjdQJDgw&amp;controls=0",
    thumbnailSrc: "https://img.youtube.com/vi/wwo6Gdx3x7s/maxresdefault.jpg",
    thumbnailAlt: "Hero video",
  },
}

const LessonPlan2 = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "dashboard-box mt-6 p-4.5 flex flex-col gap-6",
        className
      )}
    >
      <div className="">
        <p className="text-base font-medium text-dsgBlackMain">
          {lessonsPlansData2.roadmap.primaryTitle}
        </p>
        <div className="px-6 mt-3.5 flex flex-col gap-3">
          {lessonsPlansData2.roadmap.lessons.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="flex items-center gap-1.5 text-icon-dashboard"
            >
              <div className="size-3.5">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5073 1.94088L1 11.5034M10.5073 1.94088C10.0133 1.44627 6.6856 1.49237 5.9821 1.50238M10.5073 1.94088C11.0013 2.4355 10.9552 5.76749 10.9452 6.4719"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-2.5 text-base font-medium text-dsgBlackMain">
          <div className="size-6 text-icon-dashboard">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11C2 7.70017 2 6.05025 3.02513 5.02513C4.05025 4 5.70017 4 9 4H10C13.2998 4 14.9497 4 15.9749 5.02513C17 6.05025 17 7.70017 17 11V13C17 16.2998 17 17.9497 15.9749 18.9749C14.9497 20 13.2998 20 10 20H9C5.70017 20 4.05025 20 3.02513 18.9749C2 17.9497 2 16.2998 2 13V11Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M17 8.90585L17.1259 8.80196C19.2417 7.05623 20.2996 6.18336 21.1498 6.60482C22 7.02628 22 8.42355 22 11.2181V12.7819C22 15.5765 22 16.9737 21.1498 17.3952C20.2996 17.8166 19.2417 16.9438 17.1259 15.198L17 15.0941"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          {lessonsPlansData2.videoLesson.primaryTitle}
        </div>
        <div className="mt-4 flex justify-center">
          <HeroVideoDialog
            className="block dark:hidden max-w-[638px]"
            animationStyle="top-in-bottom-out"
            videoSrc={lessonsPlansData2.videoLesson.videoSrc}
            thumbnailSrc={lessonsPlansData2.videoLesson.thumbnailSrc}
            thumbnailAlt={lessonsPlansData2.videoLesson.thumbnailAlt}
          />
        </div>
      </div>
    </div>
  )
}

export default LessonPlan2
