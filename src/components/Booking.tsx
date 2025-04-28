"use client";
import React, { useState } from "react";
import Cal from "@calcom/embed-react";

function BookCall() {
  return (
    <div className="w-full lg:w-[60%] ">
      <Cal
        namespace="book.a.call"
        calLink="safionix.com/book.a.call"
        // style={{ width: "100%", height: "700px", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "dark" }}
      />
    </div>
  );
}

function RequestQuote() {
  return (
    <div className="w-full lg:w-[60%] ">
      <Cal
        namespace="request.a.quote"
        calLink="safionix.com/request.a.quote"
        // style={{ width: "100%", height: "700px", overflow: "auto" }}
      />
    </div>
  );
}

export default function Booking() {
  const [activeTab, setActiveTab] = useState("book");

  return (
    <div id="booking" className="bg-[#121213] min-h-screen px-4 lg:px-10">
      <div className="flex flex-col items-center pt-10">
        <button className="px-4 flex gap-2 justify-center mt-4 h-[40px] items-center">
          <span className="relative flex items-center justify-center w-3 h-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00be3fcc] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BE3F]"></span>
          </span>
          <span className="flex text-white items-center cursor-pointer">
            Booking for APR&#39;25
          </span>
        </button>
        <h2 className="text-4xl max-w-[651px] text-center tracking-wide font-bold text-white mt-10">
  Turning &#39;Impossible&#39; into your competitive advantage
</h2>
<p className="text-white text-center mt-5 max-w-[463px] tracking-wide text-base">
  Currently accepting new projects for April/May 2025—let&#39;s discuss yours.
</p>

      </div>

      <div className="flex w-full max-w-4xl mt-10 mx-auto">
        <button
          onClick={() => setActiveTab("quote")}
          className={`flex-1 py-4 text-center text-white rounded-tl-[12px] font-semibold ${
            activeTab === "quote" ? "bg-black" : "bg-[#232324]"
          }`}
        >
          REQUEST A QUOTE
        </button>
        <button
          onClick={() => setActiveTab("book")}
          className={`flex-1 py-4 text-center text-white rounded-tr-[12px] font-semibold ${
            activeTab === "book" ? "bg-black" : "bg-[#232324]"
          }`}
        >
          BOOK A CALL
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center  ">
        {activeTab === "book" ? <BookCall /> : <RequestQuote />}
      </div>

    </div>
  );
}
