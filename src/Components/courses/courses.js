import Coursebar from "./coursebar/coursebar";
import Header from "../../UI/header/header";
import { useState } from "react";
import { Link } from "react-router-dom";

const buttons = ["Trending", "Rating", "Newest"];

const Courses = ({ columns, data }) => {
  const [toggle, setToggle] = useState("Trending");
  const [filterTopic, setFilterTopic] = useState([]);
  const [filterLevel, setFilterLevel] = useState([]);

  data.sort((a, b) => b[toggle] - a[toggle]);

  return (
    <div className="flex flex-1 h-[100vh] overflow-y-scroll">
      <div className="px-[40px] flex-1 max-w-[1600px] mx-auto pr-[440px]">
        <Header heading="Courses" />
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
                  <div className="border-b-[1px] border-black"></div>
                  <div className="p-[20px]">
                    <p className="text-[14px] mb-[10px] leading-[25px]">
                      Programming • {i.owner} • Oct 12, 2022.
                    </p>
                    <Link
                      to={
                        i.owner +
                        "/" +
                        i.heading.toLowerCase().replaceAll(" ", "-")
                      }
                      className="text-[20px] leading-[25px] hover:underline"
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
