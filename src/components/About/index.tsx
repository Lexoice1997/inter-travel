"use client";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.png";
import about3 from "@/assets/about-3.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Title from "../Title/Title";

function About() {
  const t = useTranslations("About");
  return (
    <section className="sm:mt-24 mt-16">
      <Title title={t("title")}/>
      <p className="sm:text-2xl text-lg text-center font-semibold mt-8 text-gray-500">
        {t("description")}
      </p>
      <div className="flex justify-between sm:mt-14 mt-8">
        <Image
          src={about1}
          alt="Picture of the author"
          className="sm:w-1/3 w-full object-cover sm:h-[500px] h-[350px] bg-gray-600 sm:mr-6 mr-0 rounded-xl"
        />
        <Image
          src={about2}
          alt="Picture of the author"
          className="sm:w-1/3 h-[500px] object-cover bg-gray-600 mr-6 rounded-xl hidden sm:block"
        />
        <Image
          src={about3}
          alt="Picture of the author"
          className="sm:w-1/3 h-[500px] object-cover bg-gray-600 rounded-xl hidden sm:block"
        />
      </div>
      <p className="text-gray-500 text-center sm:w-1/3 w-full m-auto sm:mt-10 sm:text-lg mt-4 text-md">
        {t("info")}
      </p>
      {/* <div className="flex justify-between sm:w-1/2 m-auto sm:mt-10 mt-6">
        <div>
          <h3 className="text-[#4D6D44] sm:text-4xl text-3xl font-semibold text-center">4.5k+</h3>
          <p className="mt-2 text-md">Our Explores</p>
        </div>
        <div>
          <h3 className="text-[#4D6D44] sm:text-4xl text-3xl font-semibold text-center">15k+</h3>
          <p className="mt-2 text-md">Destinations</p>
        </div>
        <div>
          <h3 className="text-[#4D6D44] sm:text-4xl text-3xl font-semibold text-center">35k+</h3>
          <p className="mt-2 text-md">Year Experience</p>
        </div>
      </div> */}
    </section>
  );
}

export default About;
