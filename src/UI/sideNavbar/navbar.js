import { Link, useHref } from "react-router-dom";
import React from "react";
import {
  RiDashboardFill as DashboardIcon,
  RiVideoFill as VideoIcon,
  RiChat1Fill as ChatIcon,
  RiLoginBoxFill as LoginIcon,
  RiBook2Fill as BookIcon,
  RiLogoutBoxFill as LogoutIcon,
  RiArrowDropRightLine as DropRightIcon,
  RiAccountCircleFill as AccountIcon,
} from "react-icons/ri";

const Icon = ({ e }) =>
  React.cloneElement(e, { className: "h-[22px] w-[22px]" });

const navlinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <Icon e={<DashboardIcon />} />,
  },
  {
    name: "Courses",
    href: "/courses",
    icon: <Icon e={<VideoIcon />} />,
  },
  {
    name: "Practice",
    href: "/practice",
    icon: <Icon e={<BookIcon />} />,
  },
  {
    name: "Chat",
    href: "/chat",
    icon: <Icon e={<ChatIcon />} />,
  },
  {
    name: "Account",
    href: "/account",
    icon: <Icon e={<AccountIcon />} />,
  },
];

export default function Navbar({ miniNav, setMiniNav }) {
  let path = useHref();

  return (
    <div
      className={`border-r-[1px]  ${miniNav ? "w-[280px]" : "w-[70px]"}
        `}
    >
      <div
        className={`fixed overflow-y-hidden h-screen pb-[10px] flex flex-col ${
          miniNav ? "w-[280px]" : "w-[70px]"
        }`}
      >
        <div
          className={`transition-animation h-[155px] pt-[20px] ${
            miniNav ? "pl-[50px]" : ""
          }`}
        >
          <Link to="/">
            <figure className={`text-[22px] ${!miniNav && "text-center"} `}>
              {miniNav ? "edTech" : "ed"}
            </figure>
          </Link>
          <div className="flex justify-end text-[30px] mt-[25px]">
            <button
              className={`bg-black fixed shadow-inner shadow-[#232323] rounded-[30px] p-[1px] cursor-pointer z-[100] mr-[-13px] 
              }`}
            >
              <DropRightIcon
                onClick={() => setMiniNav(!miniNav)}
                className={`transition  ease-linear delay-[.2s] fill-white  w-[25px] h-[25px] ${
                  miniNav && "rotate-180"
                }`}
              />
            </button>
          </div>
        </div>
        <div>
          <ul>
            {navlinks.map((i, idx) => {
              return (
                <li key={idx}>
                  <Link
                    className={`transition-animation border-r-[3px] w-full flex h-[50px] items-center font-medium text-[18px] ${[
                      miniNav ? "pl-[50px] pr-[30px]" : "flex justify-center",
                    ]} ${
                      path === i.href ? "border-black" : "border-[transparent]"
                    }`}
                    to={i.href}
                  >
                    <figure className="">{i.icon}</figure>
                    {miniNav && <span className="ml-[10px]">{i.name}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-0 mt-auto">
          <Link
            to="/logout"
            className={`transition-animation flex h-[46px] items-center font-medium text-[18px] ${
              miniNav ? "pl-[50px]" : "flex justify-center"
            }`}
          >
            <figure>
              <LogoutIcon className="h-[22px] w-[22px]" />
            </figure>
            {miniNav && <span className="ml-[10px]">Log out</span>}
          </Link>
        </div>
      </div>
    </div>
  );
}
