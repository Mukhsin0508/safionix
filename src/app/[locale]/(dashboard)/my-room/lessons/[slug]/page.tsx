import {
  DashboardPrimaryTitle,
  HomeworkCheckForm,
  LessonPlan2,
  NewsCard,
  TimeDisplay,
  UserPointsCard,
  UserProgressTimeline,
} from "@/components"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslations } from "next-intl"

const Lessons = () => {
  const t1 = useTranslations("my-room")
  const t2 = useTranslations("my-room.lessons")

  return (
    <div>
      <DashboardPrimaryTitle>
        {t1("title")} / {t2("title")}
      </DashboardPrimaryTitle>
      <main className="flex gap-[24px] mt-7.5">
        <div className="max-w-[287px] flex flex-col gap-6">
          <TimeDisplay hours={23} minutes={28} seconds={55} />
          <Accordion type="multiple">
            <AccordionItem
              value="item-1"
              className="border-none dashboard-box "
            >
              <AccordionTrigger className="p-4.5 text-icon-dashboard text-sm leading-snug font-medium gap-2">
                <div className="w-6 h-6">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.50586 5.44531H16.0059C16.8343 5.44531 17.5059 6.11688 17.5059 6.94531V8.44531"
                      stroke="#606E80"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.0059 18.4453L14.1488 16.4453M14.1488 16.4453L12.5983 12.8277C12.4992 12.5962 12.2653 12.4453 12.0059 12.4453C11.7465 12.4453 11.5126 12.5962 11.4135 12.8277L9.863 16.4453M14.1488 16.4453H9.863M9.863 16.4453L9.00586 18.4453"
                      stroke="#606E80"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.497 2.5L6.30767 2.50002C5.81071 2.50002 5.30241 2.57294 4.9007 2.86782C3.62698 3.80279 2.64539 5.88801 4.62764 7.7706C5.18421 8.2992 5.96217 8.49082 6.72692 8.49082H18.2835C19.077 8.49082 20.5 8.60439 20.5 11.0273V18.4812C20.5 20.7007 18.7103 22.5 16.5026 22.5H7.47246C5.26886 22.5 3.66619 20.9426 3.53959 18.5713L3.5061 5.66638"
                      stroke="#606E80"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                Important informations
              </AccordionTrigger>
              <AccordionContent className="px-4.5 text-color5 text-xs leading-tight text-pretty scrollbarVariant1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-none dashboard-box mt-4.5"
            >
              <AccordionTrigger className="p-4.5 text-icon-dashboard text-sm leading-snug font-medium gap-2">
                <div className="w-6 h-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 13.229C10.1416 13.4609 10.3097 13.6804 10.5042 13.8828C11.7117 15.1395 13.5522 15.336 14.9576 14.4722C15.218 14.3121 15.4634 14.1157 15.6872 13.8828L18.9266 10.5114C20.3578 9.02184 20.3578 6.60676 18.9266 5.11718C17.4953 3.6276 15.1748 3.62761 13.7435 5.11718L13.03 5.85978"
                      stroke="#606E80"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10.9703 18.14L10.2565 18.8828C8.82526 20.3724 6.50471 20.3724 5.07345 18.8828C3.64218 17.3932 3.64218 14.9782 5.07345 13.4886L8.31287 10.1172C9.74413 8.62761 12.0647 8.6276 13.4959 10.1172C13.6904 10.3195 13.8584 10.539 14 10.7708"
                      stroke="#606E80"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                Necessary links
              </AccordionTrigger>

              <AccordionContent className="px-4.5 text-color5 text-xs leading-tight text-pretty scrollbarVariant1">
                <ul className="flex flex-col gap-4">
                  <li className="text-sm font-medium leading-tight text-color2">
                    https://www.figma.com/
                  </li>
                  <li className="text-sm font-medium leading-tight text-color2">
                    https://www.figma.com/downloads/
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full max-w-[722px]">
          <UserProgressTimeline completedMonths={0} />
          <LessonPlan2 className="max-h-[592px] overflow-auto scrollbarVariant1" />
        </div>
        <div className="w-full max-w-[248px] flex flex-col gap-6">
          <NewsCard className="" />
          <UserPointsCard className="mt-1.5" />
          <HomeworkCheckForm />
        </div>
      </main>
    </div>
  )
}

export default Lessons
