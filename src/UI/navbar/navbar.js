import { Link, useHref } from "react-router-dom";
import React, { useState } from "react";
import {
  RiDashboardFill as DashboardIcon,
  RiVideoFill as VideoIcon,
  RiChat1Fill as ChatIcon,
  RiLoginBoxFill as LoginIcon,
  RiBook2Fill as BookIcon,
  RiArrowDropRightLine as DoropRightIcon,
  RiAccountCircleFill as AccountIcon,
} from "react-icons/ri";

const Icon = ({ e }) => (
  <>{React.cloneElement(e, { className: "h-[22px] w-[22px] mr-[10px]" })}</>
);

const navlinks = [
  {
    name: "Dashboard",
    icon: <Icon e={<DashboardIcon />} />,
  },
  {
    name: "Courses",
    icon: <Icon e={<VideoIcon />} />,
  },
  {
    name: "Practice",
    icon: <Icon e={<BookIcon />} />,
  },
  {
    name: "Chat",
    icon: <Icon e={<ChatIcon />} />,
  },
  {
    name: "Account",
    icon: <Icon e={<AccountIcon />} />,
  },
];

export default function Navbar() {
  let path = useHref();
  const [miniNav, setMiniNav] = useState(false);

  return (
    <div
      className={`h-screen flex flex-col pb-[10px] border-r-[1px] border-black ${
        miniNav && "w-[280px]"
      }`}
    >
      <div
        className={`transition-animation h-[155px] pt-[30px] ${
          miniNav ? "pl-[50px]" : "pl-[20px] pr-[6px]"
        }`}
      >
        <Link to="/">
          <figure className="text-[22px]">{miniNav ? "EdTech" : "Ed"}</figure>
        </Link>
        <div className="flex justify-end text-[30px] mt-[45px]">
          <button
            className={`bg-black rounded-[30px] p-[3px] cursor-pointer relative z-[100] ${
              miniNav ? "mr-[-15px]" : "mr-[-21px]"
            } `}
          >
            <DoropRightIcon
              onClick={() => setMiniNav(!miniNav)}
              className={`transition ease-linear delay-[.2s] fill-white w-[22px] h-[22px] ${
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
                  to={i.name}
                  style={
                    path === "/" + i.name
                      ? { borderRight: "3px solid black" }
                      : { borderRight: "3px solid white" }
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
  );
}
