"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface ProfileFormProps extends React.HTMLAttributes<HTMLDivElement> {
  contentClassName?: string
}

export default function ProfileForm({
  className,
  contentClassName,
}: ProfileFormProps) {
  const [avatar, setAvatar] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatar(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Card className={cn("w-full dashboard-box border-none", className)}>
      <CardContent className={cn("p-4.5", contentClassName)}>
        <form className="flex flex-col gap-3.5">
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <Avatar className="w-[70px] h-[70px] flex items-center justify-center border border-color2">
                <AvatarImage src={avatar ?? ""} />
                <AvatarFallback className="size-8 text-dsgGreyMain">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 31 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4375 8.33331C22.4375 12.1648 19.3315 15.2708 15.5 15.2708C11.6685 15.2708 8.5625 12.1648 8.5625 8.33331C8.5625 4.50184 11.6685 1.39581 15.5 1.39581C19.3315 1.39581 22.4375 4.50184 22.4375 8.33331Z"
                      stroke="currentColor"
                      strokeWidth="2.3125"
                    />
                    <path
                      d="M7.14042 22.555C4.95932 23.8537 -0.759398 26.5055 2.72369 29.8239C4.42515 31.4449 6.32013 32.6042 8.7026 32.6042H22.2974C24.6799 32.6042 26.5749 31.4449 28.2763 29.8239C31.7593 26.5055 26.0407 23.8537 23.8595 22.555C18.7449 19.5094 12.2551 19.5094 7.14042 22.555Z"
                      stroke="currentColor"
                      strokeWidth="2.3125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AvatarFallback>
              </Avatar>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="avatar-upload"
              />
              <Label
                htmlFor="avatar-upload"
                className="absolute inset-0 flex items-center justify-center bg-color4/70 text-white text-xs opacity-0 hover:opacity-100 transition-opacity rounded-full cursor-pointer"
              ></Label>
            </div>
            <p className="text-xs text-color5 max-w-[60%] text-center leading-tight">
              Upload your picture and enrich your profile
            </p>
          </div>

          <div className="">
            <Label
              className="text-icon-dashboard text-sm font-semibold"
              htmlFor="fullName"
            >
              Full name
            </Label>
            <Input
              id="fullName"
              placeholder="e.g Safronix"
              className="mt-1 text-xs"
            />
          </div>
          <div className="">
            <Label
              className="text-icon-dashboard text-sm font-semibold"
              htmlFor="telegram"
            >
              Your telegram
            </Label>
            <Input
              id="telegram"
              placeholder="@/design_ux_ui..."
              className="mt-1 text-xs"
            />
          </div>
          <div className="">
            <Label
              className="text-icon-dashboard text-sm font-semibold"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="support@safronix.com"
              className="mt-1 text-xs"
            />
          </div>

          <Button type="submit" className="w-full">
            Save changes
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
