import HomeNavbar from "../ui/homeNavbar";

import ExploreCoursebar from "./exploreCoursebar/exploreCoursebar";
import Header from "../../../UI/header/header";
import { useState } from "react";
import { Link } from "react-router-dom";

const buttons = ["Trending", "Rating", "Newest"];

const ExploreCourses = ({ data }) => {
  const [toggle, setToggle] = useState("Trending");
  const [filterTopic, setFilterTopic] = useState([]);
  const [filterLevel, setFilterLevel] = useState([]);

  data.sort((a, b) => b[toggle] - a[toggle]);

  return (
    <div className="flex flex-col w-full">
      <HomeNavbar border={true} />
      <div className="flex flex-1 h-[100vh]">
        <div className="px-[40px] flex flex-1 w-full mx-auto pl-[440px]">
          <ExploreCoursebar
            filterTopic={filterTopic}
            setFilterTopic={setFilterTopic}
            filterLevel={filterLevel}
            setFilterLevel={setFilterLevel}
            
          />
          <div className="w-full">
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
              <div className={`flex flex-col gap-[20px]`}>
                {data.map((i, idx) =>
                  (filterTopic.includes(i.topic) || filterTopic.length === 0) &&
                  (filterLevel.includes(i.level) ||
                    filterLevel.length === 0) ? (
                    <div key={idx} className="border border-black flex">
                      <div className="border-r-[1px] border-black w-[30%]"></div>
                      <div className="p-[30px] flex-1 flex flex-col justify-center">
                        <p className="text-[14px] mb-[20px]">
                          Programming • {i.owner} • Oct 12, 2022.
                        </p>
                        <Link
                          to={
                            i.owner +
                            "/" +
                            i.heading.toLowerCase().replaceAll(" ", "-")
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
        </div>
      </div>
    </div>
  );
};
export default ExploreCourses;
