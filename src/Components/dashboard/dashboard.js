import HomeRightBar from "./dashbar/dashbar";
import Header from "../../UI/header/header";
import { useState } from "react";
import { Link } from "react-router-dom";

const buttons = ["All", "Pending", "Completed"];

const Dashboard = ({ data }) => {
  const [toggle, setToggle] = useState("All");

  return (
    <div className="flex flex-1 ">
      <div className="px-[40px] flex min-h-screen flex-1 max-w-[1600px] mx-auto pr-[440px]">
        <div className="w-full">
          <Header heading="Dashboard" />
          <div className="border-[1px] border-black p-[30px] flex items-center mb-[30px]">
            <div className="w-[50%]">
              <h1 className="mb-[20px] text-[24px] font-medium">
                Wecome Back, Angela!
              </h1>
              <p className="text-[16px] leading-[25px]">
                Learn anytime, anywhere. Boost your skills with flexible, online
                courses.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[40px] mb-[25px]">Courses</h1>
            <div className="mb-[25px]">
              <ul className="flex text-[18px] gap-[20px]">
                {buttons.map((i, idx) => (
                  <li key={idx}>
                    <button
                      className={i !== toggle ? "color-[gray]" : "underline"}
                      onClick={() => setToggle(i)}
                    >
                      {i}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {data.map((i, idx) =>
                [i.status, "All"].includes(toggle) && i.isEnrolled ? (
                  <div
                    className="flex border-[1px] border-black mb-[20px]"
                    key={idx}
                  >
                    <div className="border-[1px] w-[300px] border-r-black"></div>
                    <div className="p-[30px] w-[70%] flex flex-col justify-center">
                      <p className="text-[14px] mb-[20px]">
                        Programming • {i.owner} • Oct 12, 2022.
                      </p>
                      <Link
                        to={
                          "/" +
                          i.owner +
                          "/" +
                          i.heading.toLowerCase().replaceAll(" ", "-") +
                          "/learn"
                        }
                        className="text-[28px] leading-[35px] hover:underline"
                      >
                        {i.heading}
                      </Link>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
        <HomeRightBar />
      </div>
    </div>
  );
};
export default Dashboard;
