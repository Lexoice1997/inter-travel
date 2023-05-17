"use client";

import React from "react";
import RecentlySwiper from "../RecentlySwiper";

function Recently() {
  return (
    <section className="sm:mt-24 mt-16">
      <h2 className="sm:text-5xl text-3xl text-center font-semibold">
        Recently Viewed Trips
      </h2>
      <p className="sm:text-2xl text-lg text-center font-semibold mt-8 text-gray-500">
        Some recent trip photos are shared in front of you
      </p>
      <div className="sm:mt-10 mt-6 flex justify-between sm:h-[650px] h-[620px]">
        <RecentlySwiper />
      </div>
    </section>
  );
}

export default Recently;
