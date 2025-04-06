import { BundleCard, DashboardPrimaryTitle } from "@/components"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import HeroVideoDialog from "@/components/ui/hero-video-dialog"
import { Link } from "@/lib/i18n/routing"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import Image from "next/image"

const BundlesMockData = [
  {
    videoSrc:
      "https://www.youtube.com/embed/wwo6Gdx3x7s?si=3fHIlv98PjdQJDgw&amp;controls=0",
    title: "Design Resources ($79)",
    description:
      "Access the best design resources I&apos;ve ever used. Includes curated links and detailed descriptions to your skills.",
    thumbnailSrc: "https://img.youtube.com/vi/wwo6Gdx3x7s/maxresdefault.jpg",
    thumbnailAlt: "Hero video",
  },
  {
    videoSrc: "",
    title: "Interview Skills: How to Talk About Yourself ($2)",
    description:
      "Learn how to navigate interviews and effectively present your design portfolio to potential employers.",
    thumbnailSrc: "",
    thumbnailAlt: "course video",
  },
  {
    videoSrc: "",
    title: "First 90 Days Roadmap ($79)",
    description:
      "Plan your first 90 days with my design database. Learn the essentials from scratch with a step-by-step process and resources like Figma, Photoshop, and Notion.",
    thumbnailSrc: "",
    thumbnailAlt: "course video",
  },
  {
    videoSrc: "",
    title: "UI Kit for Better Design ($99)",
    description:
      "A curated UI kit designed to enhance your creative projects, incorporating best practices from my 3 years of experience in web and app design.",
    thumbnailSrc: "",
    thumbnailAlt: "course video",
  },
  {
    videoSrc: "",
    title: "Notion Life Planner ($5)",
    description:
      "Organize and streamline your life with this customizable Notion template. Perfect for maintaining productivity and planning ahead.",
    thumbnailSrc: "",
    thumbnailAlt: "course video",
  },
  {
    videoSrc: "",
    title: "Working Resumes Template ($10)",
    description:
      "Get hired faster with my professional resume templates designed to make your application stand out.",
    thumbnailSrc: "",
    thumbnailAlt: "course video",
  },
  {
    videoSrc: "",
    title: "LinkedIn Branding Secrets ($79)",
    description:
      "Unlock strategies to enhance your professional presence on LinkedIn, drawing from my 3 years of experience in branding and networking.",
    thumbnailSrc: "",
    thumbnailAlt: "course video",
  },
  {
    videoSrc: "",
    title: "Private Community Access ($198)",
    description:
      "Join a private group to ask questions, get advice, and gain deep insights into growing as a UX designer.",
    thumbnailSrc: "",
    thumbnailAlt: "course video",
  },
  {
    videoSrc: "",
    title: "Introduction to FigJam ($2)",
    description:
      "An introduction to FigJam, guiding you through essential features and collaborative design strategies.",
    thumbnailSrc: "",
    thumbnailAlt: "course video",
  },
  {
    videoSrc: "",
    title: "The Stages of UX/UI Design ($2)",
    description:
      "A comprehensive overview of the stages involved in UX/UI design, perfect for beginners and professionals alike.",
    thumbnailSrc: "",
    thumbnailAlt: "course video",
  },
  {
    videoSrc: "",
    title: "Finance Teacher ($5)",
    description:
      "Learn essential finance skills and strategies to manage your finances effectively.",
    thumbnailSrc: "",
    thumbnailAlt: "course video",
  },
  {
    videoSrc: "",
    title: "Meal Tracker ($5)",
    description:
      "Stay on top of your nutrition with this simple meal tracking tool, perfect for maintaining a healthy lifestyle.",
    thumbnailSrc: "",
    thumbnailAlt: "course video",
  },
  {
    videoSrc: "",
    title: "Creating the Best Mobile App UI ($2)",
    description:
      "Discover best practices and innovative techniques for designing exceptional mobile app user interfaces.",
    thumbnailSrc: "",
    thumbnailAlt: "course video",
  },
  {
    videoSrc: "",
    title: "Essential Tools for UX/UI Designers 2026 ($2)",
    description:
      "A must-read for 2024, featuring ten essential tools and resources that every UX/UI designer should have in their toolkit.",
    thumbnailSrc: "",
    thumbnailAlt: "course video",
  },
]
const rightSidebar1 = {
  videoSrc: "",
  views: "12,163,726 views",
  link: "#",
  thumbnailSrc: "",
  thumbnailAlt: "",
}
const rightSidebar2 = {
  videoSrc: "",
  title: "Designer Mentorship Program ($299)",
  description:
    "Exclusive mentorship program with training videos, practical tasks, and skills development for tools like After Effects, Notion, and more.",
  thumbnailSrc: "",
  thumbnailAlt: "Hero video",
}

const Bundles = () => {
  const t = useTranslations("bundles")

  return (
    <>
      <DashboardPrimaryTitle>{t("title")}</DashboardPrimaryTitle>
      <main className="mt-7.5 max-w-[1305px] flex items-start gap-12">
        <div className="flex gap-x-6 gap-y-7.5 flex-wrap max-w-[844px] overflow-y-auto pb-11">
          {BundlesMockData.map((item, i) => (
            <BundleCard className="w-[48.5%]" key={i} item={item} />
          ))}
        </div>
        <div className="max-w-[410px] w-full sticky top-0 pb-16 h-[86dvh] overflow-y-auto scrollbarVariant1 pr-1">
          <div className="w-full">
            <div className="w-full max-w-[410px] rounded-xl aspect-[205/117]">
              {rightSidebar1.videoSrc ? (
                <HeroVideoDialog
                  className="block dark:hidden w-full shadow-none"
                  thumbnailClassName="shadow-none"
                  animationStyle="top-in-bottom-out"
                  videoSrc={rightSidebar1.videoSrc}
                  thumbnailSrc={rightSidebar1.thumbnailSrc || ""}
                  thumbnailAlt={rightSidebar1.thumbnailAlt}
                />
              ) : (
                <div className="w-full h-full bg-dsgGreyMain rounded-xl"></div>
              )}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm leading-tight text-icon-dashboard">
                12,163,726 views
              </span>
              <Link
                href="#"
                className="self-end text-sm leading-tight text-color7 flex items-center gap-2"
              >
                <div className="size-3">
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
                Safionix.com
              </Link>
            </div>
          </div>
          <RightSidebarCard2 className="mt-6" item={rightSidebar2} />
        </div>
      </main>
    </>
  )
}

export default Bundles

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
          <div className="w-full h-full bg-dsgGreyMain rounded-xl"></div>
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
          <span className="text-sm leading-tight text-icon-dashboard">
            9,163,726 stars
          </span>
        </div>
        <CardTitle className="mt-2.5 text-base font-semibold leading-tight line-clamp-1">
          {item.title}
        </CardTitle>
        <CardDescription className="text-sm leading-tight text-dsgBlackMain line-clamp-3">
          {item.description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
