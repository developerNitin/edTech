import { Link } from "react-router-dom";
import { useState } from "react";
import {
  RiDashboardFill,
  RiVideoFill,
  RiChat1Fill,
  RiLoginBoxFill,
  RiBook2Fill,
  RiArrowDropRightLine,
} from "react-icons/ri";

export default function Navbar() {
  const navlinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <RiDashboardFill className="h-[22px] w-[22px] mr-[10px]" />,
    },
    {
      name: "Courses",
      link: "/courses",
      icon: <RiVideoFill className="h-[22px] w-[22px] mr-[10px]" />,
    },
    {
      name: "Practice",
      link: "/practice",
      icon: <RiBook2Fill className="h-[22px] w-[22px] mr-[10px]" />,
    },
    {
      name: "Chat",
      link: "/chat",
      icon: <RiChat1Fill className="h-[22px] w-[22px] mr-[10px]" />,
    },
  ];

  const [active, setActive] = useState(0);
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
        <div className="flex justify-end text-[30px] mt-[35px]">
          <button
            className={` bg-black rounded-[30px] p-[3px] cursor-pointer relative z-[100] ${
              miniNav ? "mr-[-15px]" : "mr-[-21px]"
            } `}
          >
            <RiArrowDropRightLine
              onClick={() => setMiniNav(!miniNav)}
              className={`fill-white w-[22px] h-[22px] ${
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
                className={`transition-animation flex h-[46px]  items-center font-medium text-[18px] ${
                  miniNav ? "pl-[70px]" : "pl-[20px] pr-[6px]"
                }`}
                to={i.link}
                style={
                  active === idx ? { borderRight: "3px solid black" } : { borderRight: "3px solid white" }
                }
                onClick={() => setActive(idx)}
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
