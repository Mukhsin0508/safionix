"use client"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from "@/lib/i18n/routing"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  return (
    <div className="flex items-stretch w-full">
      <div className="w-1/2 h-[900px] bg-[#D9D9D9]"></div>
      <div className="px-16 pt-7.5 pb-14.5 flex-1 bg-color3 flex flex-col overflow-hidden">
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/assets/logo.svg"
            width={5.1}
            height={34}
            alt="safionix logo"
          />
          <h4 className="text-2xl font-bold text-dsgBinafshaSecondary">
            Safionix
          </h4>
        </div>
        <div>
          <h6 className="mt-7.5 text-center text-2xl font-bold text-dsgBlackMain">
            Log in
          </h6>
          <form className="mt-8 px-16 flex flex-col gap-4.5">
            <Label>
              <p className="text-color4 font-semibold text-[15px]">Email</p>
              <Input
                className="mt-1.5 bg-transparent placeholder:text-color5"
                placeholder="e.g Safionix@gmail.com"
              />
            </Label>

            <Label htmlFor="signup-pass1" className="text-[15px] leading-tight">
              <p className="font-semibold text-color4">Password</p>
              <p className="mt-2 text-color5 font-normal text-[15px]">
                At least 6 characters with letter
              </p>
              <div className="relative mt-1.5">
                <Input
                  id="signup-pass1"
                  type={showPassword ? "text" : "password"}
                  placeholder="Type here"
                  className="bg-transparent placeholder:text-color5"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute w-8 h-8 right-1 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-md bg-[#5A616D14] text-icon-dashboard hover:text-color5"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </Label>

            <Label className="flex items-center gap-2">
              <Checkbox className="w-4.5 h-4.5 border-[1.5px]" />
              <p className="text-sm font-medium text-icon-dashboard">
                I agree with{" "}
                <a className="text-dsgBlue" href="#">
                  Terms
                </a>{" "}
                and{" "}
                <a className="text-dsgBlue" href="#">
                  Conditions
                </a>
              </p>
            </Label>
            <Button className="py-3.5 h-auto rounded-xl" variant="tertiary">
              Continue
            </Button>
            <div className="mt-1.5 text-center text-icon-dashboard font-medium text-xs">
              Don’t have an account?
              <Link
                href="/auth/signup"
                className="ml-2 text-dsgBlackMain underline underline-offset-[1.5px]"
              >
                Sign up
              </Link>
            </div>
          </form>
          <div className="mt-6 flex items-center gap-3 font-semibold">
            <div className="w-full border-t border-dsgGreyMain" />
            <p className="text-xs text-nowrap text-icon-dashboard">
              Or Log in with
            </p>
            <div className="w-full border-t border-dsgGreyMain" />
          </div>
          <div className="mt-6">
            <Button className="w-full gap-6 bg-[#EEF1F4] rounded-xl h-auto py-3 text-dsgBlackMain font-semibold hover:bg-[#dde0e2]">
              <Image
                className="w-6 h-6 aspect-square"
                src="/assets/Google Logo.svg"
                width={24}
                height={24}
                alt="google logo"
              />
              Sign Up with Google
            </Button>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between font-semibold">
          <Link href="/" className="flex items-center gap-3 text-color4">
            <Image
              className="w-3 rotate-90"
              src="/assets/chevron-right-dark.svg"
              width={5}
              height={10}
              alt="left strike"
            />
            Back to home
          </Link>
          <Link href="/auth/signup" className=" text-dsgBlackMain">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
