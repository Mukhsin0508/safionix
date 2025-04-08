"use client"
import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import type CalApi from "@calcom/embed-react"; 

export default function Booking() {
  useEffect(() => {
    (async function () {
      const cal: any = await getCalApi({ namespace: "book.a.call" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#121213" },
          dark: { "cal-brand": "#FEFEFF" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="bg-[#121213]">
      <div className="flex flex-col items-center pt-10 justify-center">
        <button className="px-4 flex gap-2 justify-center mt-4 h-[40px] items-center">
          <span className="relative flex items-center justify-center w-3 h-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00be3fcc] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BE3F]"></span>
          </span>
          <span className="flex text-white items-center cursor-pointer">
            Booking for APR'25
          </span>
        </button>

        <h2 className="text-4xl max-w-[651px] text-center tracking-wide font-bold text-white mt-10">
          Turning 'Impossible' into your competitive advantage
        </h2>
        <p className="text-white text-center mt-5 max-w-[463px] tracking-wide text-base">
          Currently accepting new projects for April/May 2025—let’s discuss
          yours.
        </p>
      </div>

      <Cal
      className="mt-14"
        namespace="book.a.call"
        calLink="safionix.com/book.a.call"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "dark" }}
      />
    </div>
  );
}
