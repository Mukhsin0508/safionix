import {
  DashboardPrimaryTitle,
  LessonsPlan,
  NewsCard,
  ProfileForm,
  TimeDisplay,
  UserPointsCard,
  UserProgressTimeline,
} from "@/components"
import { Link } from "@/lib/i18n/routing"
import { useTranslations } from "next-intl"

const MyRoom = () => {
  const t = useTranslations("my-room")

  return (
    <>
      <DashboardPrimaryTitle>{t("title")}</DashboardPrimaryTitle>
      <main className="mt-7.5 flex gap-[24px]">
        <div className="max-w-[287px] flex flex-col gap-6">
          <TimeDisplay hours={23} minutes={28} seconds={55} />
          <Link
            className="dashboard-box flex items-center gap-2 text-sm px-4.5 py-[17px] text-icon-dashboard "
            href="mailto:support24@safionix.com"
          >
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
            Business email
          </Link>
          <Link
            className="dashboard-box flex items-center gap-2 text-sm px-4.5 py-[17px] text-icon-dashboard "
            href="https://t.me/idesign_ux_ui"
          >
            <div className="size-6">
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
            </div>
            Telegram chanel
          </Link>
          <ProfileForm className="" />
        </div>
        <div className="w-full max-w-[722px]">
          <UserProgressTimeline completedMonths={1} />
          <LessonsPlan className="max-h-[592px] overflow-auto scrollbarVariant1" />
        </div>
        <div className="w-full max-w-[248px] flex flex-col gap-6">
          <NewsCard className="" />
          <UserPointsCard className="mt-1.5" />
          <div className="dashboard-box w-full h-full"></div>
        </div>
      </main>
    </>
  )
}

export default MyRoom
