import { DashboardNav, DashboardSidebar } from "@/components"
import { Metadata } from "next"

export const metadata: Metadata = {
  icons: {
    icon: "/assets/favicon.svg",
  },
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-dashboard-gradient h-screen flex flex-col overflow-hidden">
      <DashboardNav />
      <div className="flex flex-1 overflow-auto">
        <DashboardSidebar />
        <main className="flex-1 overflow-y-auto pb-7.5">{children}</main>
      </div>
    </div>
  )
}

export default layout
