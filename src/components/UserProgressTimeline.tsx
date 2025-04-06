import { cn } from "@/lib/utils"

interface UserProgressTimelineProps
  extends React.HTMLAttributes<HTMLDivElement> {
  completedMonths: number
}

const UserProgressTimeline = ({
  className,
  completedMonths,
}: UserProgressTimelineProps) => {
  const monthsProgressData = [
    { percentage: "20", step: 1 },
    { line: true, step: 1 },
    { percentage: "40", step: 2 },
    { line: true, step: 2 },
    { percentage: "60", step: 3 },
    { line: true, step: 3 },
    { percentage: "80", step: 4 },
    { line: true, step: 4 },
    { percentage: "100", step: 5 },
  ]
  return (
    <div
      className={cn(
        "w-full dashboard-box px-4.5 pb-[13px] pt-[15px] h-full max-h-[121px]",
        className
      )}
    >
      <div className="text-base font-medium text-center text-dsgBinafshaSecondary ">
        Completed {completedMonths}/5 months
      </div>
      <div className="flex justify-between mt-4.5 ">
        {monthsProgressData.map((item, index) => (
          <div
            className={cn(item.line ? "w-[19%] flex items-start pt-3" : "")}
            key={index}
          >
            <div
              className={cn(
                "flex-col items-center gap-2 ",
                item.line ? "hidden" : "flex"
              )}
            >
              <div
                className={cn(
                  "aspect-square w-6 h-6 rounded-full border z-[1] bg-color3",
                  item.step < completedMonths + 1
                    ? "border-color7"
                    : "border-icon-dashboard"
                )}
              ></div>
              <div
                className={cn(
                  "text-sm font-medium",
                  item.step < completedMonths + 1
                    ? "text-color2"
                    : "text-color5"
                )}
              >
                {item.percentage}%
              </div>
            </div>
            <div
              className={cn(
                "border w-full rounded-full",
                item.step < completedMonths
                  ? "border-color7"
                  : "border-icon-dashboard",
                item.line ? "inline-block" : "hidden"
              )}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserProgressTimeline

{
  /* <div className="flex flex-col gap-2 mt-4.5">
        <div className="relative flex items-center justify-between pr-[6px]">
          <div className="absolute z-0 w-[98%] left-0 border border-icon-dashboard"></div>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={cn(
                "aspect-square w-6 h-6 rounded-full border z-[1] bg-color3 ring-[3px] ring-color3",
                index < completedMonths
                  ? "border-color7"
                  : "border-icon-dashboard"
              )}
            ></div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          {[20, 40, 60, 80, 100].map((percentage, index) => (
            <div
              key={index}
              className={cn(
                "text-sm font-medium",
                index < completedMonths ? "text-color7" : "text-color5"
              )}
            >
              {percentage}%
            </div>
          ))}
        </div>
      </div> */
}
