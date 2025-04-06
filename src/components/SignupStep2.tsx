"use client"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp"
import { Button } from "./ui/button"
import { MouseEvent } from "react"

interface SignupStep2Props {
  goToNextStep: (e: MouseEvent<HTMLButtonElement>) => void
}

const SignupStep2 = ({ goToNextStep }: SignupStep2Props) => {
  return (
    <div className="px-16">
      <h6 className="mt-7.5 text-center text-2xl font-bold text-dsgBlackMain">
        Verify your email
      </h6>
      <p className="mt-4.5 text-center text-icon-dashboard font-medium text-sm">
        We sent a code to{" "}
        <span className="text-dsgBlackMain">amelie@gmail.com</span>
      </p>
      <div className="mt-6">
        <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
          <InputOTPGroup className="w-full h-24 gap-5">
            <InputOTPSlot className="w-full h-full text-2xl" index={0} />
            <InputOTPSlot className="w-full h-full text-2xl" index={1} />
            <InputOTPSlot className="w-full h-full text-2xl" index={2} />
            <InputOTPSlot className="w-full h-full text-2xl" index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <p className="mt-6 text-xs font-medium text-center text-icon-dashboard">
        Didn’t get a code?{" "}
        <button className="text-dsgBlackMain underline underline-offset-[1.5px]">
          Click to resend
        </button>
      </p>
      <Button
        onClick={goToNextStep}
        className="mt-6 py-3.5 w-full h-auto rounded-xl"
        variant="tertiary"
      >
        Continue
      </Button>
    </div>
  )
}

export default SignupStep2
