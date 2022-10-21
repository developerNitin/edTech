import { RiSearch2Line } from "react-icons/ri";

const Header = (props) => {
  return (
    <div className="flex mt-[40px] justify-between mb-[20px] ">
      <h1 className="text-[26px]">{props.heading}</h1>
      <div>
        <form className="flex h-[40px]">
          <input className="px-[15px] w-[230px] border-[1px] border-black"></input>
          <button className="w-[40px] bg-black">
            <RiSearch2Line className="mx-auto my-auto fill-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
