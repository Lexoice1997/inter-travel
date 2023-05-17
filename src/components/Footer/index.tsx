import Image from "next/image";
import logo from "../../../public/logo_black_text.svg";
import React from "react";

function Footer() {
  return (
    <footer className="flex justify-between sm:flex-row flex-col sm:mt-24 mt-16 pb-10">
      <div>
        <Image
          src={logo}
          width={100}
          height={100}
          alt="Logo"
          className="sm:w-[100px] sm:h-[100px] w-[150px] h-[150px]"
        />
        <p className="sm:mt-6 mt-0 text-gray-500">
          Continue Travellian 2023 all rights reserved.
        </p>
        <h3 className="sm:mt-14 mt-8 font-semibold sm:text-5xl text-4xl">
          Follow Us On
        </h3>
        <nav className="sm:mt-6 mt-4">
          <ul className="flex justify-between">
            <li>instagram</li>
            <li>telegram</li>
            <li>facebook</li>
          </ul>
        </nav>
      </div>
      <div>
        <h3 className="font-semibold sm:text-5xl text-4xl mt-6 sm:mt-0">
          Menu
        </h3>
        <nav className="mt-6">
          <ul className="text-gray-500 font-2xl">
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Home
            </li>
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Explore
            </li>
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Blog
            </li>
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Cities
            </li>
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Help
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h3 className="font-semibold sm:text-5xl text-4xl mt-6 sm:mt-0">
          Information
        </h3>
        <nav className="mt-6">
          <ul className="text-gray-500 font-2xl">
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Destination
            </li>
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              About Us
            </li>
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Things
            </li>
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Recently Trip
            </li>
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Best Sevice
            </li>
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Discount
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h3 className="font-semibold sm:text-5xl text-4xl mt-6 sm:mt-0">
          Contact
        </h3>
        <nav className="mt-6">
          <ul className="text-gray-500 font-2xl">
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              +123 456 789
            </li>
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              Explore
            </li>
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              info@Travellian.com
            </li>
            <li className="mt-4 hover:text-blue-700 hover:cursor-pointer hover:transition-all transition ease-in-out delay-150">
              1245, New Yorkm USA
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
