import {
  RiArrowDownSLine,
  // RiPlayCircleFill as PlayFill,
  // RiPlayCircleLine as PlayLIne,
} from "react-icons/ri";
import { useState } from "react";

const Course = ({ data }) => {
  const [toggle, setToggle] = useState([0]);
  const [toggleLink, setToggleLink] = useState(
    data.course[0].videos[0].video + 0
  );
  const [video, setVideo] = useState(data.course[0].videos[0].video);
  const [time, setTime] = useState([]);
  const [toggleBar, setToggleBar] = useState("Overview");
  const navbar = ["Overview", "Notes", "Q&A", "Announcements", "Review"];
  var number = 0;

  return (
    <div className="flex w-full h-[100vh] ">
      <div className="flex-1 overflow-y-scroll pr-[350px]">
        <div className="py-[20px] px-[30px] border-b-[1px] border-black">
          <h1 className="text-[18px]">{data.heading}</h1>
        </div>
        <div className="flex justify-center items-center h-[550px]">
          <video
            className="w-[100%] h-[100%] bg-[#1C1D1F] cursor-pointer"
            src={video}
            type="video/mp4"
            controls
          />
        </div>
        <div className="">
          <div className="flex px-[20px] border-b-[1px]">
            {navbar.map((i) => {
              return (
                <button
                  onClick={() => setToggleBar(i)}
                  className={`text-[16px] p-[20px] pb-[17px] hover:bg-gray-100 ${
                    toggleBar === i
                      ? "border-b-[3px] border-black"
                      : "border-b-[3px] border-[transparent]"
                  }`}
                  key={i}
                >
                  {i}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[350px] fixed right-[15px] bg-white text-[16px] h-full border-l-[1px] overflow-y-auto">
        <div className="mb-[20px] ">
          <h1 className="font-bold py-[21px] px-[30px] border-b-[1px]">
            Course content
          </h1>
          {data.course.map((i, IDX) => (
            <div className="border-b-[1px]" key={IDX}>
              <button
                onClick={() =>
                  !toggle.includes(IDX)
                    ? setToggle([...toggle, IDX])
                    : setToggle((prev) => prev.filter((item) => item !== IDX))
                }
                className={`flex font-bold justify-between bg-gray-50 w-full py-[25px] px-[30px] ${
                  toggle.includes(IDX) && "border-b-[1px]"
                } `}
              >
                <span>
                  Section {IDX + 1}: {i.topic}
                </span>
                <RiArrowDownSLine
                  className={`${toggle.includes(IDX) && "rotate-180"}`}
                />
              </button>
              {toggle.includes(IDX) &&
                i.videos.map((i, idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setVideo(i.video);
                        setToggleLink(i.video + IDX);
                      }}
                      className={`w-full`}
                    >
                      <div
                        className={`flex justify-between items-center py-[20px] text-left px-[30px] ${
                          i.video + IDX === toggleLink && "bg-gray-200"
                        } hover:bg-gray-200`}
                      >
                        <video
                          src={i.video}
                          onLoadedMetadata={(e) => {
                            console.log((e.target.duration / 100).toFixed(2));
                            return setTime([
                              ...time,
                              (e.target.duration / 100).toFixed(2),
                            ]);
                          }}
                          className="hidden"
                        />
                        <span>{i.topic}</span>

                        <span className="text-[12px]">{time[number++]}</span>
                      </div>
                    </button>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
