import { cn } from "@/lib/utils"

interface DPTProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const DashboardPrimaryTitle = ({ children, className }: DPTProps) => {
  return (
    <div className={cn("text-dsgBlackMain font-semibold text-2xl leading-tight", className)}>
      {children}
    </div>
  )
}

export default DashboardPrimaryTitle
