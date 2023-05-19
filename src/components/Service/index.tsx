"use client";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.png";
import about3 from "@/assets/about-3.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function Service() {
  const t = useTranslations("Service");
  return (
    <section className="flex justify-between sm:flex-row flex-col-reverse  sm:mt-24 mt-16 items-center">
      <div className="sm:w-2/5 w-full sm:mr-24 mr-0 mt-8 sm:mt-0">
        <div className="flex justify-between sm:flex-row flex-col mb-4">
          <Image
            src={about1}
            alt="Picture of the author"
            className="sm:w-1/2 w-full h-[250px]  mr-4 rounded-xl"
          />
          <Image
            src={about2}
            alt="Picture of the author"
            className="sm:w-1/2 w-full h-[250px]  rounded-xl sm:mt-0 mt-6"
          />
        </div>
        <div className="sm:flex hidden justify-between">
          <Image
            src={about2}
            alt="Picture of the author"
            className="w-1/2 h-[250px]  mr-4 rounded-xl"
          />
          <Image
            src={about3}
            alt="Picture of the author"
            className="w-1/2 h-[250px]  rounded-xl"
          />
        </div>
      </div>
      <div className="sm:w-3/5 w-full">
        <h3 className="sm:text-5xl text-3xl font-semibold">{t("title")}</h3>
        <p className="font-md text-gray-500 mt-8">{t("description")}</p>
        {/* <div className="flex justify-between sm:w-1/2 m-auto sm:mt-10 mt-6">
          <div>
            <h3 className="text-blue-400 sm:text-4xl text-3xl font-semibold text-center">4.5k+</h3>
            <p className="mt-2 text-md">Our Explores</p>
          </div>
          <div>
            <h3 className="text-blue-400 sm:text-4xl text-3xl font-semibold text-center">15k+</h3>
            <p className="mt-2 text-md">Destinations</p>
          </div>
          <div>
            <h3 className="text-blue-400 sm:text-4xl text-3xl font-semibold text-center">35k+</h3>
            <p className="mt-2 text-md">Year Experience</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Service;
