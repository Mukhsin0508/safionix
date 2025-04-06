import { CursorDiv, Navbar } from "@/components"
import ScrollProgress from "@/components/ui/scroll-progress"
import { Metadata } from "next"

export const metadata: Metadata = {
  icons: {
    icon: "/assets/favicon.svg",
  },
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-[100vw]">
      <ScrollProgress />
      <CursorDiv />
      <Navbar />
      {children}
      <footer className="mt-[70vh]">footer</footer>
    </div>
  )
}

export default layout
