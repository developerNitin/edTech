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
      icon: <RiDashboardFill />,
    },
    { name: "Courses", link: "/courses", icon: <RiVideoFill /> },
    { name: "Practice", link: "/practice", icon: <RiBook2Fill /> },
    { name: "Chat", link: "/chat", icon: <RiChat1Fill /> },
  ];

  const [active, setActive] = useState(0);
  const [miniNav, setMiniNav] = useState(true);

  return (
    <div
      className={`h-screen flex  flex-col pb-[10px] border-r-[1px] border-black ${
        miniNav && "w-[320px]"
      }`}
    >
      <div
        className={` h-[20vh] pt-[50px] ${
          miniNav ? "pl-[70px]" : "pl-[20px] pr-[6px]"
        }`}
      >
        <figure className="text-[22px]">{miniNav ? "EdTech" : "Ed"}</figure>
        <div className="flex justify-end text-[30px] mt-[20px]">
          <button
            className={`bg-black rounded-[30px] p-[3px] cursor-pointer relative z-[100] ${
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
      <div className="">
        <ul>
          {navlinks.map((i, idx) => (
            <li key={idx}>
              <Link
                className={`flex h-[46px]  items-center font-medium text-[18px] ${
                  miniNav ? "pl-[70px]" : "pl-[20px] pr-[6px]"
                }`}
                to={i.link}
                style={
                  active === idx ? { borderRight: "3px solid black" } : null
                }
                onClick={() => setActive(idx)}
              >
                <figure className="svg">{i.icon}</figure>
                {miniNav && <span>{i.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-0 mt-auto">
        <Link
          to="/login"
          className={`flex h-[46px] items-center font-medium text-[18px] ${
            miniNav ? "pl-[70px]" : "pl-[20px] pr-[6px]"
          }`}
        >
          <figure className="svg">
            <RiLoginBoxFill />
          </figure>
          {miniNav && <span>Log in</span>}
        </Link>
      </div>
    </div>
  );
}
