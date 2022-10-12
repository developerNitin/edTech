import HomeRightBar from "../../UI/dashbar/dashbar";
import { RiSearch2Line } from "react-icons/ri";
import { useState } from "react";

const data = [
  {
    id: "pending",
    heading: "Object-Oriented Programming in C++",
  },
  {
    id: "completed",
    heading: "Object-Oriented Programming in java",
  },
  {
    id: "completed",
    heading: "Object-Oriented Programming in java",
  },
];

const Dashboard = () => {
  const [toggleData, setToggleData] = useState("all");

  return (
    <div className="flex flex-1 h-[100vh] ">
      <div className="px-[40px] flex-1 max-w-[1200px] mx-auto overflow-y-scroll">
        <div className="flex mt-[40px] justify-between mb-[20px]">
          <h1 className="text-[26px]">Dashboard</h1>
          <div>
            <form className="flex h-[40px] border-[1px] border-black">
              <input className="w-[250px] border-r-0"></input>
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
            <h1 className="text-[40px] mb-[25px]"> Courses</h1>
          </div>
          <div className="mb-[25px]">
            <ul className="flex text-[18px] gap-[20px] ">
              <li>
                <button onClick={() => setToggleData("all")}>All</button>
              </li>
              <li>
                <button onClick={() => setToggleData("pending")}>
                  Pending
                </button>
              </li>
              <li>
                <button onClick={() => setToggleData("completed")}>
                  Completed
                </button>
              </li>
            </ul>
          </div>
          <div>
            {data.map((i, idx) =>
                [i.id, "all"].includes(toggleData) ? (
                <div
                  className="h-[180px] border-[1px] border-black mb-[20px] p-[30px]"
                  key={idx}
                >
                  <p>{i.heading}</p>
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
