"use client"
import { SignupStep1, SignupStep2, SignupStep3 } from "@/components"
import { Link } from "@/lib/i18n/routing"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState, MouseEvent } from "react"

const SignupPage = () => {
  const [step, setStep] = useState(1)
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }
  const [slideDirection, setSlideDirection] = useState(1)

  const goToNextStep = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSlideDirection(1)
    handleNext()
  }

  const slideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    }),
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

        <AnimatePresence mode="wait" custom={slideDirection}>
          {step === 1 ? (
            <motion.div
              key="step1"
              custom={slideDirection}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <SignupStep1 goToNextStep={goToNextStep} />
            </motion.div>
          ) : step === 2 ? (
            <motion.div
              key="step2"
              custom={slideDirection}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <SignupStep2 goToNextStep={goToNextStep} />
            </motion.div>
          ) : (
            <motion.div
              key="step3"
              custom={slideDirection}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <SignupStep3 />
            </motion.div>
          )}
        </AnimatePresence>

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
          <Link href="/auth/login" className=" text-dsgBlackMain">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
