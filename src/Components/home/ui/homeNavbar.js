import { Link } from "react-router-dom";

const HomeNavbar = ({border, bgColor}) => {
  return (
  <div className="flex w-full h-[80px]">
    <nav className={`flex w-full px-[50px]  justify-between ${border && 'border-b-[1px]'} fixed  h-[80px] ${bgColor && 'bg-white'} z-[100] top-0 items-center`}>
      <ul className="flex w-[200px] gap-[30px]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/explore-courses">Courses</Link>
        </li>
         <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <div>
        <h1>
          <Link to="/">EdTech</Link>
        </h1>
      </div>
      <ul className="flex w-[200px] justify-end gap-[30px]">
        <li>
          <button>
            <Link to="/Login">Login</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/Signup">Signup</Link>
          </button>
        </li>
      </ul>
    </nav>
    </div>
  );
};
export default HomeNavbar;
