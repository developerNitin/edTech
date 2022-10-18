import Coursebar from "./ui/coursebar";
import Header from "../../UI/header/header";
import { useState } from "react";

const data = [
  {
    Trending: 10,
    Rating: 2,
    Newest: 10,
    topic: "C++",
    level: "Beginner",
    heading: "Learn Programming in C++",
  },
  {
    Trending: 100,
    Rating: 10,
    Newest: 5,
    topic: "React",
    level: "Intermediate",
    heading: "Lern Programming in react",
  },
  {
    Trending: 50,
    Rating: 20,
    Newest: 20,
    topic: "Java",
    level: "Expert",
    heading: "Lrn Programming in java",
  },
  {
    Trending: 40,
    Rating: 30,
    Newest: 4,
    topic: "Python",
    level: "Intermediate",
    heading: "Learn Programming in python",
  },
];

const buttons = ["Trending", "Rating", "Newest"];

const Courses = ({ columns }) => {
  const [toggle, setToggle] = useState("Trending");
  const [filterTopic, setFilterTopic] = useState([]);
  const [filterLevel, setFilterLevel] = useState([]);

  data.sort((a, b) => b[toggle] - a[toggle]);

  return (
    <div className="flex flex-1 h-[100vh]">
      <div className="px-[40px] flex-1 max-w-[1200px] mx-auto overflow-y-scroll">
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
              <li>
                <span className="font-bold ">Sorted by:</span>
              </li>
              {buttons.map((i, idx) => (
                <li key={idx}>
                  <button
                    className={i !== toggle ? "text-[gray]" : "underline"}
                    onClick={() => setToggle(i)}
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
            {data.map((i, idx) =>
              (filterTopic.includes(i.topic) || filterTopic.length === 0) &&
              (filterLevel.includes(i.level) || filterLevel.length === 0) ? (
                <div key={idx} className="border border-black">
                  <div className="border-b-[1px] h-[200px] border-black"></div>
                  <div className="p-[20px]">
                    <p className="text-[14px] mb-[10px] leading-[25px]">
                      Programming • {i.level} • Oct 12, 2022.
                    </p>
                    <p className="text-[20px] leading-[25px]">{i.heading}</p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
      <Coursebar
        filterTopic={filterTopic}
        setFilterTopic={setFilterTopic}
        filterLevel={filterLevel}
        setFilterLevel={setFilterLevel}
      />
    </div>
  );
};
export default Courses;

//&&
