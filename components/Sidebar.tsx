import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

import {
  AiOutlineSwap as ISwap,
  AiOutlineHome as IDashboard,
  AiOutlineMenu as IMenu,
} from "react-icons/ai";

import {
  BsCreditCard as ICreditCard,
  BsImage as IImage,
  BsImageAlt as IImageAlt,
  BsNewspaper as INews,
  BsWallet as IWallet,
  BsCoin as ICoin,
} from "react-icons/bs";
import { clickOutsideRef } from "../helpers";

import Logo from "./Logo";

const Sidebar = () => {
  const [links, setLinks] = useState([
    {
      active: true,
      display: "Dashboard",
      icon: <IDashboard className="text-md mr-3 text-inherit" />,
    },
    {
      active: false,
      display: "Transactions",
      icon: <ICreditCard className="text-md mr-3 text-inherit" />,
    },
    {
      active: false,
      display: "Balances",
      icon: <IWallet className="text-md mr-3 text-inherit" />,
    },
    {
      active: false,
      display: "Coins",
      icon: <ICoin className="text-md mr-3 text-inherit" />,
    },
    {
      active: false,
      display: "Swap Tokens",
      icon: <ISwap className="text-md mr-3 text-inherit" />,
    },
    {
      active: false,
      display: "Mint NFT",
      icon: <IImageAlt className="text-md mr-3 text-inherit" />,
    },
    {
      active: false,
      display: "NFTs",
      icon: <IImage className="text-md mr-2 text-inherit" />,
    },
    {
      active: false,
      display: "News",
      icon: <INews className="text-md mr-3 text-inherit" />,
    },
  ]);
  const router = useRouter();
  const redirectLink = (text: string, id: number) => {
    setLinks(() => {
      return links.map((link, index) => {
        if (index === id) {
          link.active = true;
          return link;
        }
        link.active = false;
        return link;
      });
    });
    if (text === "Dashboard") {
      router.push("/dashboard");
      return;
    }
    router.push(`/dashboard/${text.replace(" ", "-").toLowerCase()}`);
  };
  const menuToggle = useRef(null);
  const menuContent = useRef(null);
  clickOutsideRef(menuContent, menuToggle);
  return (
    <>
      <div className="w-[270px] sticky h-full min-h-screen px-6 py-4 border-r-[1.5px] border-r-[#f0f0f0] hidden sm:flex flex-col">
        <div className="ml-3">
          <Logo />
        </div>
        <div className="mt-10 flex flex-col">
          {links.map((item, index) => (
            <p
              key={index}
              className={`
                    py-2 px-4 cursor-pointer flex flex-row items-center rounded-xl ${
                      item.active ? "dashboard-link-active bg-grad" : ""
                    } transition-colors duration-100 hover:text-sky-600
                    `}
              onClick={() => redirectLink(item.display, index)}
            >
              {item.icon}
              <span className="text-inherit">{item.display}</span>
            </p>
          ))}
        </div>
      </div>
      <div
        className={`fixed h-screen border-[1.5px] border-r-[#f0f0f0] transition-all bg-white z-20 menu-responsive`}
        ref={menuContent}
      >
        <div className="ml-3">
          <Logo />
        </div>
        <div className="mt-10 flex flex-col">
          {links.map((item, index) => (
            <p
              key={index}
              className={`
                    py-2 px-4 cursor-pointer flex flex-row rounded-xl ${
                      item.active ? "dashboard-link-active bg-grad" : ""
                    } transition-colors duration-100 hover:text-sky-600
                    `}
              onClick={() => redirectLink(item.display, index)}
            >
              {item.icon}
              <span className="text-inherit">{item.display}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="absolute top-3 right-3 h-fit" ref={menuToggle}>
        <IMenu className="text-2xl sm:hidden text-slate-800 cursor-pointer z-30" />
      </div>
    </>
  );
};

export default Sidebar;
