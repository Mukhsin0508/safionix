"use client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "@/lib/i18n/routing"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import { useState, MouseEvent } from "react"

type PasswordVisibility = {
  password1: boolean
  password2: boolean
}

interface SignupStep1Props {
  goToNextStep: (e: MouseEvent<HTMLButtonElement>) => void
}

const SignupStep1 = ({ goToNextStep }: SignupStep1Props) => {
  const [showPassword, setShowPassword] = useState<PasswordVisibility>({
    password1: false,
    password2: false,
  })

  const togglePasswordVisibility = (name: string) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [name as keyof PasswordVisibility]:
        !prevState[name as keyof PasswordVisibility],
    }))
  }

  return (
    <div>
      <h6 className="mt-7.5 text-center text-2xl font-bold text-dsgBlackMain">
        Welcome to Safionix👋🏻
      </h6>
      <form className="mt-8 px-16 flex flex-col gap-4.5">
        <div className="flex justify-between gap-6">
          <Label className="w-1/2">
            <p className="text-color4 font-semibold text-[15px]">Full name</p>
            <Input
              className="mt-1.5 bg-transparent placeholder:text-color5"
              placeholder="e.g Safionix"
            />
          </Label>
          <Label className="w-1/2">
            <p className="text-color4 font-semibold text-[15px]">
              Social Media account
            </p>
            <Input
              className="mt-1.5 bg-transparent placeholder:text-color5"
              placeholder="e.g Safionix"
            />
          </Label>
        </div>
        <Label>
          <p className="text-color4 font-semibold text-[15px]">Email</p>
          {/* <div className="flex items-center gap-2">
              <div className="mt-1 size-5 text-icon-dashboard">
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
            </div> */}
          <Input
            className="mt-1.5 bg-transparent placeholder:text-color5"
            placeholder="e.g Safionix@gmail.com"
          />
        </Label>

        <Label htmlFor="signup-pass1" className="text-[15px] leading-tight">
          <p className="font-semibold text-color4">Create password</p>
          <p className="mt-2 text-color5 font-normal text-[15px]">
            At least 6 characters with letter
          </p>
          <div className="relative mt-1.5">
            <Input
              id="signup-pass1"
              type={showPassword.password1 ? "text" : "password"}
              placeholder="Type here"
              className="bg-transparent placeholder:text-color5"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("password1")}
              className="absolute w-8 h-8 right-1 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-md bg-[#5A616D14] text-icon-dashboard hover:text-color5"
              aria-label={
                showPassword.password1 ? "Hide password" : "Show password"
              }
            >
              {showPassword.password1 ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </Label>
        <Label htmlFor="signup-pass2" className="text-[15px] leading-tight">
          <p className="text-color4">Repeat password</p>
          <div className="relative mt-1.5">
            <Input
              id="signup-pass2"
              type={showPassword.password2 ? "text" : "password"}
              placeholder="Type here"
              className="bg-transparent placeholder:text-color5"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("password2")}
              className="absolute w-8 h-8 right-1 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-md bg-[#5A616D14] text-icon-dashboard hover:text-color5"
              aria-label={
                showPassword.password2 ? "Hide password" : "Show password"
              }
            >
              {showPassword.password2 ? (
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
        <Button
          onClick={goToNextStep}
          className="py-3.5 h-auto rounded-xl"
          variant="tertiary"
        >
          Continue
        </Button>
        <div className="mt-1.5 text-center text-icon-dashboard font-medium text-xs">
          Already have an account?
          <Link
            href="/auth/login"
            className="ml-2 text-dsgBlackMain underline underline-offset-[1.5px]"
          >
            Sign in
          </Link>
        </div>
      </form>
      <div className="mt-6 flex items-center gap-3 font-semibold">
        <div className="w-full border-t border-dsgGreyMain" />
        <p className="text-xs text-icon-dashboard">Or</p>
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
  )
}

export default SignupStep1
