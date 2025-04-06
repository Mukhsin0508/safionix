import { Metadata } from "next"

export const metadata: Metadata = {
  icons: {
    icon: "/assets/favicon.svg",
  },
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="container ">{children}</div>
}

export default layout
