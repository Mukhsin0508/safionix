import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface HomeworkCheckFormProps extends React.HTMLAttributes<HTMLDivElement> {
  contentClassName?: string
}

export default function HomeworkCheckForm({
  className,
  contentClassName,
}: HomeworkCheckFormProps) {
  return (
    <Card
      className={cn("w-full dashboard-box border-none shadow-none", className)}
    >
      <CardContent className={cn("p-4.5", contentClassName)}>
        <form className="flex flex-col gap-4.5">
          <div className="flex items-center gap-2 text-sm font-medium leading-tight text-icon-dashboard">
            <div className="w-6 h-6">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 20.5C13.5 20.5 14.5 20.5 15.5 22.5C15.5 22.5 18.6765 17.5 21.5 16.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 16.5H11M7 11.5H15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6.5 4C4.9442 4.04667 4.01661 4.21984 3.37477 4.86227C2.49609 5.74177 2.49609 7.1573 2.49609 9.98836V16.4944C2.49609 19.3255 2.49609 20.741 3.37477 21.6205C4.25345 22.5 5.66767 22.5 8.49609 22.5H10.9961M15.4922 4C17.048 4.04667 17.9756 4.21984 18.6174 4.86228C19.4961 5.74177 19.4961 7.1573 19.4961 9.98836V14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6.49609 4.25C6.49609 3.2835 7.2796 2.5 8.24609 2.5H13.7461C14.7126 2.5 15.4961 3.2835 15.4961 4.25C15.4961 5.2165 14.7126 6 13.7461 6H8.24609C7.2796 6 6.49609 5.2165 6.49609 4.25Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            Homework check
          </div>
          <div className="">
            <Label
              className="text-sm font-semibold text-icon-dashboard"
              htmlFor="figmaFileLink"
            >
              Figma file link
            </Label>
            <Input
              id="figmaFileLink"
              placeholder="https://www.figma.com/design"
              className="mt-1 text-xs"
            />
          </div>
          <div className="">
            <Label
              className="text-sm font-semibold text-icon-dashboard"
              htmlFor="additionalLink"
            >
              Additional link
            </Label>
            <Input
              id="additionalLink"
              placeholder="https://"
              className="mt-1 text-xs border-dashed"
            />
          </div>
          <Button type="submit" className="w-full">
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
