import { DashboardPrimaryTitle } from "@/components"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User } from "lucide-react"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Link } from "@/lib/i18n/routing"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Classroom = () => {
  const t = useTranslations("classroom")

  return (
    <>
      <DashboardPrimaryTitle>{t("title")} / 2nd stream</DashboardPrimaryTitle>
      <main className="mt-7.5 max-w-[1305px]">
        <div className="bg-color3 h-screen max-h-[516px] w-full flex items-center flex-col gap-9 rounded-xl p-6 pt-4">
          <div className="rounded-b-[60px] flex gap-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="relative">
                <Avatar className="h-[60px] w-[60px] bg-slate-200">
                  <AvatarFallback className="bg-slate-200">
                    <User className="w-6 h-6 text-slate-500" />
                  </AvatarFallback>
                </Avatar>
                <div className="absolute w-7.5 flex items-center justify-center aspect-square h-7.5 -bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2  rounded-full bg-color2 text-xs text-dsgWhiteMain">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
          <div className="grid justify-between w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }, (_, i) => (
              <StudentCard key={i} />
            ))}
          </div>
        </div>
        <div className="mt-6 flex gap-6">
          <div className="relative flex flex-col bg-color3 rounded-xl p-4.5">
            <div className="flex items-center gap-2 text-icon-dashboard z-[1]">
              <div className="size-6 aspect-square">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 6.5L8 4.5L13.5 6.5L11 8V9.5C11 9.5 10.3333 9 8 9C5.66667 9 5 9.5 5 9.5V8L2.5 6.5ZM2.5 6.5V10.5"
                    stroke="#606E80"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 9V9.88889C11 11.6071 9.65685 13 8 13C6.34315 13 5 11.6071 5 9.88889V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.3182 11.5294C15.3182 11.5294 15.803 11.1765 17.5 11.1765C19.197 11.1765 19.6818 11.5294 19.6818 11.5294M15.3182 11.5294V10.5L13.5 9.5L17.5 8L21.5 9.5L19.6818 10.5V11.5294M15.3182 11.5294V11.8182C15.3182 13.0232 16.295 14 17.5 14C18.705 14 19.6818 13.0232 19.6818 11.8182V11.5294"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.38505 16.426C3.44187 16.9525 0.968909 18.0276 2.47511 19.3729C3.21087 20.03 4.03033 20.5 5.06058 20.5H10.9394C11.9697 20.5 12.7891 20.03 13.5249 19.3729C15.0311 18.0276 12.5581 16.9525 11.6149 16.426C9.40321 15.1913 6.59679 15.1913 4.38505 16.426Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 20.5H19.7048C20.4775 20.5 21.0921 20.124 21.6439 19.5983C22.7736 18.5221 20.9189 17.662 20.2115 17.2408C18.9362 16.4814 17.3972 16.3059 16 16.7141"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-medium line-clamp-1">
                3rd stream starts from 01.03.2025
              </p>
            </div>
            <p className="mt-2 text-sm leading-tight text-color5 line-clamp-2 z-[1]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
            <Button className="mt-4.5 self-end py-3 px-12 z-[1]">
              Submit application
            </Button>
            <div className="absolute bottom-0 left-[9%] w-[192px] h-[90px]">
              <Image
                className="w-full"
                src="/assets/classroom-img-1.png"
                width={192}
                height={91}
                alt="img"
              />
            </div>
            <div className="absolute top-0 right-0 w-[114px] h-[100px]">
              <Image
                className="w-full"
                src="/assets/classroom-img-2.png"
                width={114}
                height={99}
                alt="img"
              />
            </div>
          </div>
          <div className="relative flex flex-col bg-color3 rounded-xl p-4.5">
            <div className="flex items-center gap-2 text-icon-dashboard z-[1]">
              <div className="size-6 aspect-square">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 6.5L8 4.5L13.5 6.5L11 8V9.5C11 9.5 10.3333 9 8 9C5.66667 9 5 9.5 5 9.5V8L2.5 6.5ZM2.5 6.5V10.5"
                    stroke="#606E80"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 9V9.88889C11 11.6071 9.65685 13 8 13C6.34315 13 5 11.6071 5 9.88889V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.3182 11.5294C15.3182 11.5294 15.803 11.1765 17.5 11.1765C19.197 11.1765 19.6818 11.5294 19.6818 11.5294M15.3182 11.5294V10.5L13.5 9.5L17.5 8L21.5 9.5L19.6818 10.5V11.5294M15.3182 11.5294V11.8182C15.3182 13.0232 16.295 14 17.5 14C18.705 14 19.6818 13.0232 19.6818 11.8182V11.5294"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.38505 16.426C3.44187 16.9525 0.968909 18.0276 2.47511 19.3729C3.21087 20.03 4.03033 20.5 5.06058 20.5H10.9394C11.9697 20.5 12.7891 20.03 13.5249 19.3729C15.0311 18.0276 12.5581 16.9525 11.6149 16.426C9.40321 15.1913 6.59679 15.1913 4.38505 16.426Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 20.5H19.7048C20.4775 20.5 21.0921 20.124 21.6439 19.5983C22.7736 18.5221 20.9189 17.662 20.2115 17.2408C18.9362 16.4814 17.3972 16.3059 16 16.7141"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-medium line-clamp-1">
                3rd stream starts from 01.03.2025
              </p>
            </div>
            <p className="mt-2 text-sm leading-tight text-color5 line-clamp-2 z-[1]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
            <Button className="mt-4.5 self-end py-3 px-12 z-[1]">
              Submit application
            </Button>
            <div className="absolute top-0 right-0 w-[156px] h-[156px]">
              <Image
                className="w-full"
                src="/assets/classroom-img-3.png"
                width={156}
                height={156}
                alt="img"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Classroom

interface StudentCardProps {
  number?: number
  name?: string
  telegram?: string
  email?: string
}

function StudentCard({
  name = "Student name",
  telegram = "@tmestudent",
  email = "student@gmail.com",
}: StudentCardProps) {
  return (
    <Card className="bg-[#F1F2F5] rounded-lg shadow-none border-none">
      <CardContent className="p-4.5 pb-4">
        <div className="flex items-start gap-4.5">
          <Avatar className="h-[60px] w-[60px] bg-dsgGreyMain">
            <AvatarFallback className="bg-slate-200">
              <User className="w-6 h-6 text-icon-dashboard" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center gap-2">
            <CardTitle className="text-base font-medium leading-tight text-icon-dashboard">
              Student card
            </CardTitle>
            <p className="text-sm leading-tight text-color7">{name}</p>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <div className="leading-tight text-icon-dashboard">
            <Link href={"@tmestudent"} className="flex items-center gap-2">
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
              <span>{telegram}</span>
            </Link>
            <Link
              href="mailto:student@gmail.com"
              className="mt-2 flex items-center gap-2"
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
              <span>{email}</span>
            </Link>
          </div>
          <Link href="#" className="self-end text-xs leading-tight text-color7">
            Safionix.com
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
