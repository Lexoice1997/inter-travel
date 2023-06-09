"use client";

import { manrope } from "@/pages";
import { useTranslations } from "next-intl";
import React from "react";

function Main() {
  const t = useTranslations("Main");
  const scrollDown = () => {
    const orderForm = document.querySelector("#order-form")!;
    orderForm.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col lg:justify-between lg:flex-row">
      <div className="lg:mr-4 lg:mt-24 mt-20 lg:w-1/2 w-full ">
        <h1 className="text-[50px] text-greenColor font-semibold lg:text-6xl leading-none text-center lg:text-left">
          {t("title")}
        </h1>
        <p className={`mt-4 text-center lg:text-left ${manrope.className}`}>{t("description")}</p>
        <div className="flex justify-center lg:justify-start">
          <button
            className={`bg-greenColor text-white mt-4 p-4 text-lg rounded-lg hover:bg-hoverGreen hover:cursor-pointer hover:transition-all transition ease-in-out delay-150 ${manrope.className}`}
            onClick={scrollDown}
          >
            {t("button")}
          </button>
        </div>

        <button className="scroll-down" onClick={scrollDown}>
          <span className="scroll-mouse">
            <span className="scroll-wheel" />
          </span>
        </button>
      </div>
      {/* <div className="flex justify-between sm:mt-16 mt-10">
        <div className="sm:mr-2 mr-6 sm:block hidden">
          <div className="bg-gray-600 sm:h-[250px] sm:w-[250px] h-[150px] w-[150px] sm:mb-2 mb-4 rounded-xl"></div>
          <div className="bg-gray-600 sm:h-[250px] sm:w-[250px] h-[150px] w-[150px] rounded-xl"></div>
        </div>
        <div className="bg-gray-600 sm:h-[510px] sm:w-[350px] h-[316px] w-full rounded-xl"></div>
      </div> */}
      {/* <Link href="/" locale="en">
        <h2>English</h2>
      </Link>
      <Link href="/" locale="ru">
        <h2>Russian</h2>
      </Link> */}
    </section>
  );
}

export default Main;
