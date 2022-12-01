import { Link } from "react-router-dom";
import HomeNavbar from "./ui/homeNavbar";
import { RiArrowRightLine as DropRightIcon } from "react-icons/ri";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#FED676]">
      <HomeNavbar bgColor={false} />
      <div className="">
        <div className="flex justify-center gap-[200px] mt-[100px]">
          <h1 className="text-[40px] font-bold">
            <div className="mb-[20px]">improve your</div>
            <div>
              <span className="bg-black text-[#FED676] px-[10px] rounded-[100px] font-[Montserrat-italic]">
                Skills
              </span>{" "}
              Faster
            </div>
          </h1>
          <div className="w-[400px]">
            <p className="text-[16px] leading-[19px]">
              Speed Up The Skill Acquisition Process By Finding Unlimited
              Courses That Matches Your Niche
            </p>
            <button className="mt-[20px] text-[18px] border border-black p-[20px]">
              <a href="/signup">Enroll now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
