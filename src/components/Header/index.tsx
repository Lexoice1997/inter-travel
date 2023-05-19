"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import type { ReactTabsFunctionComponent, TabProps } from "react-tabs";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import logo from "../../../public/logo_black_text.svg";
import BurgerMenu from "../BurgerMenu";

function Header() {
  const [sidebar, setSibeBar] = useState<boolean>(false);
  const [navbar, setNavbar] = useState(false);
  const t = useTranslations("Header");

  const disableScroll = () => {};
  const enableScroll = () => {};

  return (
    <header className="flex justify-between items-center">
      <Image
        src={logo}
        alt="Logo"
        className="hover:cursor-pointer sm:w-[150px] sm:h-[150px] w-[120px] h-[120px]"
      />
      <Tabs>
        <TabList>
          <Tab>
            <Link href="/" locale="en">
              Eng
            </Link>
          </Tab>
          <Tab>
            <Link href="/" locale="uz">
              Uzb
            </Link>
          </Tab>
          <Tab>
            <Link href="/" locale="ru">
              Rus
            </Link>
          </Tab>
        </TabList>
      </Tabs>
      <nav>
        <button
          onClick={() => (setSibeBar(true), disableScroll())}
          className={
            " !bg-transparent !text-primary-900 !p-2 rounded-md hover:bg-transparent sm:hidden block"
          }
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <BurgerMenu isOpen={sidebar} close={() => (setSibeBar(false), enableScroll())} />
        <ul className="sm:flex justify-between items-center lg:text-lg text-white md:text-base hidden">
          <li className="mr-8 hover:text-blue-500 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
            {t("menu0")}
          </li>
          <li className="mr-8 hover:text-blue-500 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
            {t("menu1")}
          </li>
          <li className="mr-8 hover:text-blue-500 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
            {t("menu2")}
          </li>
          <li className="mr-8 hover:text-blue-500 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
            {t("menu3")}
          </li>
          <li className="mr-8 hover:text-blue-500 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
            {t("menu4")}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
