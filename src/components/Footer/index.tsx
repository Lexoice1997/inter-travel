import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo_black_text.svg";
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";

function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="flex justify-between sm:flex-row flex-col sm:mt-24 mt-16 pb-10">
      <div className="text-center sm:text-left">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="Logo"
          className="sm:w-[100px] sm:h-[100px] w-[150px] h-[150px] mx-auto sm:mx-0"
        />
        <p className="sm:mt-6 mt-0 text-gray-500">{t("rights")}</p>
        <h3 className="sm:mt-14 mt-8 font-semibold sm:text-5xl text-4xl">{t("follow")}</h3>
        <nav className="sm:mt-6 mt-4">
          <ul className="flex">
            <li className="mr-6">
              <a href="https://t.me/inter_travel_nukus" target="_blank">
                <Image
                  src={telegram}
                  alt="Picture of the author"
                  className="h-[25px] w-[25px] hover:cursor-pointer"
                />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <Image
                  src={instagram}
                  alt="Picture of the author"
                  className="h-[25px] w-[25px] hover:cursor-pointer"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-center sm:text-left">
        <h3 className="font-semibold sm:text-5xl text-4xl mt-6 sm:mt-0">{t("menu")}</h3>
        <nav className="mt-6">
          <ul className="text-gray-500 font-2xl">
            <li className="mt-4 hover:text-hoverGreen hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              <a href="#main">{t("menu0")}</a>
            </li>
            <li className="mt-4 hover:text-hoverGreen hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              <a href="#orders">{t("menu1")}</a>
            </li>
            <li className="mt-4 hover:text-hoverGreen hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              <a href="#cities">{t("menu2")}</a>
            </li>
            <li className="mt-4 hover:text-hoverGreen hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              <a href="#about">{t("menu3")}</a>
            </li>
            <li className="mt-4 hover:text-hoverGreen hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              <a href="#service">{t("menu4")}</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div>
        <h3 className="font-semibold sm:text-5xl text-4xl mt-6 sm:mt-0">
          Information
        </h3>
        <nav className="mt-6">
          <ul className="text-gray-500 font-2xl">
            <li className="mt-4 hover:text-[#66915A] hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Destination
            </li>
            <li className="mt-4 hover:text-[#66915A] hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              About Us
            </li>
            <li className="mt-4 hover:text-[#66915A] hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Things
            </li>
            <li className="mt-4 hover:text-[#66915A] hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Recently Trip
            </li>
            <li className="mt-4 hover:text-[#66915A] hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Best Sevice
            </li>
            <li className="mt-4 hover:text-[#66915A] hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Discount
            </li>
          </ul>
        </nav>
      </div> */}
      <div className="text-center sm:text-left">
        <h3 className="font-semibold sm:text-5xl text-4xl mt-6 sm:mt-0">{t("contact")}</h3>
        <nav className="mt-6">
          <ul className="text-gray-500 font-2xl">
            <li className="mt-4 hover:text-hoverGreen hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              <a href="tel:+998937773999">+998(93) 377-39-99</a>
            </li>
            <li className="mt-4 hover:text-hoverGreen hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              info@Travellian.com
            </li>
            <li className="mt-4 hover:text-hoverGreen hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              {t("address")}
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
