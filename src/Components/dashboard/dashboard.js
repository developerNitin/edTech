import HomeRightBar from "../../UI/dashbar/dashbar";
import { RiSearch2Line } from "react-icons/ri";
import { useState } from "react";

const data = [
  {
    button: "Pending",
    heading: "Object-Oriented Programming in C++",
  },
  {
    button: "Completed",
    heading: "Object-Oriented Programming in java",
  },
  {
    button: "Completed",
    heading: "Object-Oriented Programming in java",
  },
];

const buttons = ["All", "Pending", "Completed"];

const Dashboard = () => {
  const [toggle, setToggle] = useState("All");

  return (
    <div className="flex flex-1 h-[100vh] ">
      <div className="px-[40px] flex-1 max-w-[1200px] mx-auto overflow-y-auto">
        <div className="flex mt-[40px] justify-between mb-[20px]">
          <h1 className="text-[26px]">Dashboard</h1>
          <div>
            <form className="flex h-[40px]">
              <input className="px-[15px] w-[230px] border-[1px] border-black"></input>
              <button className="w-[40px] bg-black">
                <RiSearch2Line className="mx-auto my-auto fill-white" />
              </button>
            </form>
          </div>
        </div>
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
          <div>
            <h1 className="text-[40px] mb-[25px]">Courses</h1>
          </div>
          <div className="mb-[25px]">
            <ul className="flex text-[18px] gap-[20px]">
              {buttons.map((i, idx) => (
                <li key={idx}>
                  <button
                    style={
                      i === toggle ? { color: "black" } : { color: "grey" }
                    }
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
              [i.button, "All"].includes(toggle) ? (
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
