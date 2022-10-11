import { Link } from "react-router-dom";

export default function Navbar() {
  const navlinks = [
    { figure: "", name: "Dashboard", link: "/dashboard" },
    { figure: "", name: "Courses", link: "/courses" },
    { figure: "", name: "Practice", link: "/practice" },
    { figure: "", name: "Chat", link: "/chat" },
  ];
  
  return (
    <div className="h-screen flex w-[320px] flex-col pb-[10px] border-r-[1px] border-black">
      <div className="pl-[70px] h-[20vh] pt-[50px]">
        <figure className="text-[22px]">edTech</figure>
      </div>
      <div className="">
        <ul>
          {navlinks.map((i, idx) => (
            <li key={idx} className="pl-[70px] py-[10px]">
              <Link className="font-medium text-[18px]" to={i.link}>
                <figure>{i.figure}</figure>
                {i.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-0 mt-auto py-[10px] pl-[70px]">
        <Link className=" font-medium text-[18px]">
          <figure></figure>Log in
        </Link>
      </div>
    </div>
  );
}
