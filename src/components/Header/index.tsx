"use client";

import Image from "next/image";
import logo from "../../../public/logo_black_text.svg";
import BurgerMenu from "../BurgerMenu";
import React, { useState } from "react";

function Header() {
  const [sidebar, setSibeBar] = useState<boolean>(false);
  const [navbar, setNavbar] = useState(false);

  const disableScroll = () => {
  };
  const enableScroll = () => {
  };

  const chnagebackground = () => {

  };

  return (
    <header className="py-5 sm:py-8 flex justify-between items-center">
      <Image
        src={logo}
        alt="Logo"
        className="hover:cursor-pointer sm:w-[150px] sm:h-[150px] w-[120px] h-[120px]"
      />
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
        <BurgerMenu
          isOpen={sidebar}
          close={() => (setSibeBar(false), enableScroll())}
        />
        <ul className="sm:flex justify-between items-center lg:text-lg text-gray-600 md:text-base hidden">
          <li className="mr-8 hover:text-blue-500 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
            Explore
          </li>
          <li className="mr-8 hover:text-blue-500 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
            Top Cities
          </li>
          <li className="mr-8 hover:text-blue-500 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
            Blog
          </li>
          <li className="hover:text-blue-500 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
            Help
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
