"use client";

import Link from "next/link";
import React from "react";

function Main() {
  return (
    <section className="flex flex-col lg:justify-between lg:flex-row">
      <div className="mr-4">
        <h1 className="text-[50px] font-semibold lg:leading-normal lg:text-[80px] leading-none">
          You can give us a tour to Remember forever!
        </h1>
        <p className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere dicta delectus
          modi nobis molestiae beatae soluta cupiditate qui accusamus tempora ratione fugiat, ullam
          reprehenderit aliquid corporis nisi quisquam. Quas, mollitia quisquam, quis nulla nam
          minus corporis impedit illum beatae ab voluptate perspiciatis exercitationem alias
          expedita dolorem? Quaerat, voluptatem? Animi?
        </p>
      </div>
      <div className="flex justify-between sm:mt-16 mt-10">
        <div className="sm:mr-2 mr-6 sm:block hidden">
          <div className="bg-gray-600 sm:h-[250px] sm:w-[250px] h-[150px] w-[150px] sm:mb-2 mb-4 rounded-xl"></div>
          <div className="bg-gray-600 sm:h-[250px] sm:w-[250px] h-[150px] w-[150px] rounded-xl"></div>
        </div>
        <div className="bg-gray-600 sm:h-[510px] sm:w-[350px] h-[316px] w-full rounded-xl"></div>
      </div>
      <Link href="/" locale="en">
        <h2>English</h2>
      </Link>
      <Link href="/" locale="ru">
        <h2>Russian</h2>
      </Link>
    </section>
  );
}

export default Main;
