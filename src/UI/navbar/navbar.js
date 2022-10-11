import { Link, useHref } from "react-router-dom";
import { useState } from "react";
import {
  RiDashboardFill,
  RiVideoFill,
  RiChat1Fill,
  RiLoginBoxFill,
  RiBook2Fill,
  RiArrowDropRightLine,
} from "react-icons/ri";

const navlinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <RiDashboardFill className="h-[22px] w-[22px] mr-[10px]" />,
  },
  {
    name: "Courses",
    href: "/courses",
    icon: <RiVideoFill className="h-[22px] w-[22px] mr-[10px]" />,
  },
  {
    name: "Practice",
    href: "/practice",
    icon: <RiBook2Fill className="h-[22px] w-[22px] mr-[10px]" />,
  },
  {
    name: "Chat",
    href: "/chat",
    icon: <RiChat1Fill className="h-[22px] w-[22px] mr-[10px]" />,
  },
];

export default function Navbar() {
  let path = useHref();
  const [miniNav, setMiniNav] = useState(false);

  return (
    <div
      className={`h-screen flex flex-col pb-[10px] border-r-[1px] border-black ${
        miniNav && "w-[320px]"
      }`}
    >
      <div
        className={`transition-animation h-[155px] pt-[30px] ${
          miniNav ? "pl-[70px]" : "pl-[20px] pr-[6px]"
        }`}
      >
        <figure className="text-[22px]">{miniNav ? "EdTech" : "Ed"}</figure>
        <div className="flex justify-end text-[30px] mt-[45px]">
          <button
            className={`bg-black rounded-[30px] p-[3px] cursor-pointer relative z-[100] ${
              miniNav ? "mr-[-15px]" : "mr-[-21px]"
            } `}
          >
            <RiArrowDropRightLine
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
          {navlinks.map((i, idx) => (
            <li key={idx}>
              <Link
                className={`transition-animation flex h-[50px]  items-center font-medium text-[18px] ${
                  miniNav ? "pl-[70px]" : "pl-[20px] pr-[6px]"
                }`}
                to={i.href}
                style={
                  path === i.href
                    ? { borderRight: "3px solid black" }
                    : { borderRight: "3px solid white" }
                }
              >
                <figure>{i.icon}</figure>
                {miniNav && <span>{i.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-0 mt-auto">
        <Link
          to="/login"
          className={`transition-animation flex h-[46px] items-center font-medium text-[18px] ${
            miniNav ? "pl-[70px]" : "pl-[20px] pr-[6px]"
          }`}
        >
          <figure>
            <RiLoginBoxFill className="h-[22px] w-[22px] mr-[10px]" />
          </figure>
          {miniNav && <span>Log in</span>}
        </Link>
      </div>
    </div>
  );
}
