import React from "react";
import { Link } from "react-router-dom";

import { RiLogoutBoxFill as LogoutIcon } from "react-icons/ri";

const Icon = ({ e }) =>
  React.cloneElement(e, { className: "h-[22px] w-[22px]" });

const Navbar = (props) => {
  return (
    <div className="flex fixed w-full z-10 bg-white items-center h-[60px] px-[30px] border-b-[1px]">
      <ul className="flex items-center w-full">
        <li className="">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="ml-[20px] pl-[20px] border-l-[1px] border-black">
          <h1 className="text-[18px]">{props.heading}</h1>
        </li>
        <li className="mr-0 ml-auto">
          <Link to="/">
            {/* <Icon e={<LogoutIcon/>} /> */}
            <span className="border px-[15px] py-[5px] border-black">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
