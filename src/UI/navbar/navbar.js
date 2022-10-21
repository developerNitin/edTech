import { Link, useHref } from "react-router-dom";
import React from "react";
import {
  RiDashboardFill as DashboardIcon,
  RiVideoFill as VideoIcon,
  RiChat1Fill as ChatIcon,
  RiLoginBoxFill as LoginIcon,
  RiBook2Fill as BookIcon,
  RiArrowDropRightLine as DropRightIcon,
  RiAccountCircleFill as AccountIcon,
} from "react-icons/ri";

const Icon = ({ e }) =>
  React.cloneElement(e, { className: "h-[22px] w-[22px] mr-[10px]" });

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
    <div className="border-r-[1px]">
      <div
        className={`overflow-y-hidden h-screen pb-[10px] flex flex-col ${
          miniNav && "w-[280px]"
        }`}
      >
        <div
          className={`transition-animation h-[155px] pt-[18px] ${
            miniNav ? "pl-[50px]" : "pl-[20px] pr-[6px]"
          }`}
        >
          <Link to="/">
            <figure className="text-[22px]">{miniNav ? "edTech" : "ed"}</figure>
          </Link>
          <div className="flex justify-end text-[30px] mt-[25px]">
            <button
              className={`bg-black shadow-inner shadow-[#232323] rounded-[30px] p-[1px] cursor-pointer absolute z-[100] ${
                miniNav ? "mr-[-15px]" : "mr-[-21px]"
              } `}
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
                    className={`transition-animation flex h-[50px]  items-center font-medium text-[18px] ${
                      miniNav ? "pl-[50px] pr-[30px]" : "pl-[20px] pr-[6px]"
                    }`}
                    to={i.href}
                    style={
                      path === i.href
                        ? { borderRight: "3px solid black" }
                        : { borderRight: "3px solid transparent" }
                    }
                  >
                    <figure>{i.icon}</figure>
                    {miniNav && <span>{i.name}</span>}
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
              miniNav ? "pl-[50px]" : "pl-[20px] pr-[6px]"
            }`}
          >
            <figure>
              <LoginIcon className="h-[22px] w-[22px] mr-[10px]" />
            </figure>
            {miniNav && <span>Log out</span>}
          </Link>
        </div>
      </div>
    </div>
  );
}
