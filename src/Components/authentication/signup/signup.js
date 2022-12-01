import { Link } from "react-router-dom";
import { RiArrowRightLine as DropRightIcon } from "react-icons/ri";

const Signup = () => {
  const Input = (porps) => (
    <input
      className="border p-[15px] border-r-0"
      type={porps.type}
      placeholder={porps.placeholder}
      required
    />
  );

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-[40%] gap-[20px] border-r-[1px] px-[30px] h-screen pb-[100px] justify-center">
        <h1 className="text-[22px] absolute top-[30px]">
          <a href="/">Edtech</a>
        </h1>
        <h2 className="text-[26px] ">improve your Skills Faster</h2>
        <p className="text-[18px] leading-[22px]">
          Speed Up The Skill Acquisition Process By Finding Unlimited Courses
          That Matches Your Niche
        </p>
      </div>
      <div className="w-[60%] pl-[50px] pt-[100px]">
        <div className="mb-[50px]">
          <h1 className="text-[28px]">Signup your edtech account.</h1>
        </div>
        <div className="border-b-[1px] pb-[30px]">
          <form className="flex flex-col gap-[20px]" action="POST">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
            <div className="flex items-center">
              <span>Signup as:</span>
              <div className="border flex w-[140px] ml-[15px]">
                <select className="cursor-pointer border-r-[15px] border-transparent w-[138px] p-[15px] ">
                  <option>Student</option>
                  <option>Teacher</option>
                </select>
              </div>
            </div>
            <div className="text-[14px] flex">
              <input className="mt-[1px] mr-[6px]" type={"checkbox"} />
              <div>
                agree with edtech{" "}
                <a className="text-[#6185D0]" href="/terms&service">
                  Terms & Service
                </a>{" "}
                and{" "}
                <a className="text-[#6185D0]" href="/privacypolicy">
                  Privacy Policy
                </a>
                .
              </div>
            </div>
            <button className="w-[100px] py-[15px] px-[20px] border">
              Signup
            </button>
          </form>
        </div>
        <div className="flex mt-[20px] gap-[5px] text-[14px]">
          Already have an account?
          <Link className="text-[#6185D0] gap-[2px] flex" to="/login">
            <span>Login</span> <DropRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Signup;
