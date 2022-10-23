import {
  RiArrowDownSLine,
  RiPlayCircleFill as PlayFill,
  RiPlayCircleLine as PlayLine,
  RiCloseFill as CloseIcon,
  RiArrowLeftLine as ArrowIcon,
} from "react-icons/ri";
import Navbar from "../../UI/topNavbar/navbar";
import { useEffect, useRef, useState } from "react";

const Learn = ({ data }) => {
  const [toggle, setToggle] = useState([0]);
  const [toggleLink, setToggleLink] = useState(
    data.course[0].videos[0].video + 0
  );
  const [video, setVideo] = useState(data.course[0].videos[0].video);
  // let [time, setTime] = useState([]);
  const [toggleBar, setToggleBar] = useState("Overview");
  const [videoNav, setVideoNav] = useState(true);
  const navbar = ["Overview", "Notes", "Q&A", "Announcements", "Review"];
  let num = 0;
  // let num2 = 0;

  const videoref = useRef();

  // useEffect(() => {
  //   console.log(videoref.current.duration);
  // }, [videoref]);

  return (
    <>
      {/* {data.course.map((i) => {
        return i.videos.map((i, idx) => {
          return (
            <video
              key={idx}
              src={i.video}
              type="video/mp4"
              className="hidden"
              onLoadedMetadata={(e) =>
                setTime([...time, e.target.duration])
              }
            />
          );
        });
      })} */}
      <div className="w-full">
        <Navbar heading={data.heading} />
        <div className={`flex h-screen ${videoNav && "mr-[350px]"} `}>
          <div className={`flex-1 pt-[60px] ${videoNav && "border-r-[1px]"}`}>
            <div className={`flex justify-center items-center h-[550px] ${!videoNav && "h-[650px]"}`}>
              <video
                className="w-[100%] h-[100%] bg-[#1C1D1F] cursor-pointer"
                src={video}
                type="video/mp4"
                controls
                ref={videoref}
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
            <div
              className={`py-[30px] px-[30px] ${
                !(toggleBar === "Overview") && "hidden"
              }`}
            ></div>
          </div>
          <div
            className={`${
              videoNav && "hidden"
            } absolute z-10 right-0 top-[90px] overflow-hidden`}
          >
            <button className="bg-[#1C1D1F] hover:bg-[#353739] text-white mr-[-128px] hover:mr-0 p-[8px] flex items-center border border-[#6a6f73] border-r-0" onClick={() => setVideoNav(true)}>
              <ArrowIcon className="text-[25px] mr-[8px]" />
              <span>course content</span>
            </button>
          </div>
          <div
            className={`w-[350px] fixed right-0 h-screen text-[16px]  pb-[20px] overflow-y-auto ${
              !videoNav && "hidden"
            }`}
          >
            <div className="mt-[60px]  bg-white ">
              <div className="flex items-center px-[30px] border-b-[1px] h-[60px] justify-between">
                <h1 className="font-bold ">Course content</h1>
                <button onClick={() => setVideoNav(false)}>
                  <CloseIcon className="text-[24px] mr-[-2px]" />
                </button>
              </div>
              {data.course.map((i, IDX) => (
                <div className="border-b-[1px]" key={IDX}>
                  <button
                    onClick={() =>
                      !toggle.includes(IDX)
                        ? setToggle([...toggle, IDX])
                        : setToggle((prev) =>
                            prev.filter((item) => item !== IDX)
                          )
                    }
                    className={`flex font-bold justify-between bg-gray-50 w-full py-[20px] px-[30px] ${
                      toggle.includes(IDX) && "border-b-[1px]"
                    } `}
                  >
                    <span className="text-[16px]">{i.topic}</span>
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
                            className={`flex justify-between items-center py-[17px] text-left px-[30px] ${
                              i.video + IDX === toggleLink && "bg-gray-200"
                            } hover:bg-gray-200`}
                          >
                            <span className="text-[14px]">
                              {`${++num}. ${i.topic}`}
                            </span>
                            <span className="text-[14px]">
                              {/* {time[num]} */}
                              <PlayFill />
                            </span>
                          </div>
                        </button>
                      );
                    })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
