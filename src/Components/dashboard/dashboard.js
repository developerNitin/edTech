import HomeRightBar from "./ui/dashbar";
import Header from "../../UI/header/header";
import { useState } from "react";

const data = [
  {
    status: "Pending",
    heading: "Object-Oriented Programming in C++",
  },
  {
    status: "Completed",
    heading: "Object-Oriented Programming in java",
  },
  {
    status: "Completed",
    heading: "Object-Oriented Programming in java",
  },
];

const buttons = ["All", "Pending", "Completed"];

const Dashboard = () => {
  const [toggle, setToggle] = useState("All");

  return (
    <div className="flex flex-1 h-[100vh]">
      <div className="px-[40px] flex-1 max-w-[1200px] mx-auto overflow-y-scroll">
        <Header heading="Dashboard" />
        <div className="border-[1px] border-black p-[30px] flex items-center mb-[30px]">
          <div className="w-[50%]">
            <h1 className="mb-[20px] text-[24px] font-medium">
              Hello, Angela!
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
              [i.status, "All"].includes(toggle) ? (
                <div
                  className="flex min-h-[180px] border-[1px] border-black mb-[20px]"
                  key={idx}
                >
                  <div className="border-[1px] w-[350px] border-r-black"></div>
                  <div className="p-[30px] flex flex-col justify-center">
                    <p className="text-[14px] mb-[20px]">
                      Programming • Oct 12, 2022.
                    </p>
                    <p className="text-[28px] leading-[35px]">{i.heading}</p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
      <HomeRightBar />
    </div>
  );
};
export default Dashboard;
