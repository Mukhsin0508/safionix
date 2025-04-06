"use client"
import { useEffect, useState } from 'react';

interface TimeDisplayProps {
  hours: number
  minutes: number
  seconds: number
  stop?: boolean
}

export default function TimeDisplay({
  hours,
  minutes,
  seconds,
  stop = false
}: TimeDisplayProps) {
  const [time, setTime] = useState({ hours, minutes, seconds });

  // time countdown function
  useEffect(() => {
    if (stop) return;
    const countdown = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(countdown);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [stop]);

  // Pad numbers with leading zeros
  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="dashboard-box flex items-start justify-center gap-[26px] px-4.5 py-[25px] w-full">
      <div className="flex flex-col items-center gap-2">
        <span className="text-[32px] font-bold">{formatNumber(time.hours)}</span>
        <span className="text-color5 text-[12px]">hours</span>
      </div>
      <span className="text-[32px] font-bold">:</span>
      <div className="flex flex-col items-center gap-2">
        <span className="text-[32px] font-bold">{formatNumber(time.minutes)}</span>
        <span className="text-color5 text-[12px]">minute</span>
      </div>
      <span className="text-[32px] font-bold">:</span>
      <div className="flex flex-col items-center gap-2">
        <span className="text-[32px] font-bold ">{formatNumber(time.seconds)}</span>
        <span className="text-color5 text-[12px]">seconds</span>
      </div>
    </div>
  )
}
