"use client";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#ffffff",
  },
  bmBurgerBarsHover: {
    background: "#ffffff",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0px",
    right: "0px",
  },
  bmMenu: {
    padding: "1.8em",
    fontSize: "1.15em",
    background: "#F3F4F6",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    display: "flex",
    flexDirection: "column",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    top: "0px",
    left: "0px",
  },
};

type Props = {
  isOpen: boolean;
  close: any;
};

function BurgerMenu({ isOpen, close }: Props) {
  return (
    <Menu
      className=""
      right
      customBurgerIcon={false}
      onClose={() => close()}
      isOpen={isOpen}
      styles={styles}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
    >
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-5 flex-nowrap">
          <div className="flex flex-row items-center space-x-4 group flex-nowrap">
            <a
              onClick={() => close()}
              href="#main"
              id="home"
              className="block font-medium text-gray-500 transition-all cursor-pointer group-hover:text-primary-500 text-md menu-item"
            >
              Главная
            </a>
          </div>

          <div className="flex flex-row items-center space-x-4 group flex-nowrap">
            <a
              onClick={() => close()}
              href="#service"
              id="about"
              className="block font-medium text-gray-500 transition-all cursor-pointer group-hover:text-primary-500 text-md menu-item"
            >
              О нас
            </a>
          </div>

          <div className="flex flex-row items-center space-x-4 group flex-nowrap">
            <a
              onClick={() => close()}
              href="#review"
              className="block font-medium text-gray-500 transition-all cursor-pointer group-hover:text-primary-500 text-md menu-item--small"
            >
              Отзывы клиентов
            </a>
          </div>

          <div className="flex flex-row items-center space-x-4 group flex-nowrap">
            <a
              onClick={() => close()}
              href="#questions"
              className="block font-medium text-gray-500 transition-all cursor-pointer group-hover:text-primary-500 text-md menu-item--small"
            >
              Контакты
            </a>
          </div>
        </div>
      </div>
    </Menu>
  );
}

export default BurgerMenu;
