"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

interface AnimatedSubscribeButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref"> {
  subscribeStatus?: boolean;
  changeChild?: React.ReactNode; // optional: subscribed holati uchun
  className?: string;
}

export const AnimatedSubscribeButton = React.forwardRef<
  HTMLButtonElement,
  AnimatedSubscribeButtonProps
>(
  (
    { subscribeStatus = false, changeChild, onClick, className, children, ...props },
    ref,
  ) => {
    const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative flex h-10 w-full items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-primary-foreground",
          className,
        )}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          // Agar changeChild mavjud bo'lsa, holatni o'zgartiramiz
          if (changeChild) {
            setIsSubscribed((prev) => !prev);
          }
          onClick?.(e);
        }}
        {...props}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={isSubscribed && changeChild ? "subscribed" : "initial"}
            className="absolute flex h-full w-full items-center justify-center font-semibold"
            initial={{ y: isSubscribed ? -20 : 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: isSubscribed ? 20 : -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {isSubscribed && changeChild ? changeChild : children}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    );
  },
);

AnimatedSubscribeButton.displayName = "AnimatedSubscribeButton";
