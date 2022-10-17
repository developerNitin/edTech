import Coursebar from "./ui/coursebar";
import Header from "../../UI/header/header";
import { useState } from "react";

const data = [
  {
    heading: "Learn Programming in C++",
    view: 10,
  },
  {
    heading: "Learn Programming in react",
    view: 100,
  },
  {
    heading: "Learn Programming in java",
    view: 50,
  },
];
const buttons = ["All", "Trending", "Popular"];

const Courses = ({ columns }) => {
  const [toggle, setToggle] = useState("All");
  const sortDate = (props) => {
    setToggle(props);
  };

  return (
    <div className="flex flex-1 h-[100vh]">
      <div className="px-[40px] flex-1 max-w-[1200px] mx-auto overflow-y-auto">
        <Header heading="Courses" />
        <div className="border-[1px] border-black p-[30px] flex items-center mb-[30px]">
          <div className="w-[50%]">
            <p className="text-[16px] leading-[25px] mb-[20px]">
              Find what fascinates you as you explore these Animation classes.
            </p>
            <button className="p-[10px] border border-black text-[16px] font-bold">
              Start for Free
            </button>
          </div>
        </div>
        <div className="pb-[50px]">
          <div className="mb-[25px]">
            <ul className="flex text-[18px] gap-[20px]">
              {buttons.map((i, idx) => (
                <li key={idx}>
                  <button
                    style={
                      i === toggle ? { color: "black" } : { color: "grey" }
                    }
                    onClick={() => sortDate(i)}
                  >
                    {i}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`grid  gap-[20px] ${
              columns ? "grid-cols-2" : "grid-cols-3"
            }`}
          >
            {data.map((i, idx) => (
              <div key={idx} className="border border-black">
                <div className="border-b-[1px] h-[200px] border-black"></div>
                <div className="p-[20px]">
                  <p className="text-[14px] mb-[10px] leading-[25px]">
                    Programming • Oct 12, 2022.
                  </p>
                  <p className="text-[20px] leading-[25px]">{i.heading}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Coursebar />
    </div>
  );
};
export default Courses;
