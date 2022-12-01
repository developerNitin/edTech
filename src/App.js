import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import data from "./data";

const Navbar = lazy(() => import("./UI/sideNavbar/navbar"));
const Home = lazy(() => import("./Components/home/home"));
const Dashboard = lazy(() => import("./Components/dashboard/dashboard"));
const Courses = lazy(() => import("./Components/courses/courses"));
const Learn = lazy(() => import("./Components/learn/learn"));
const Practice = lazy(() => import("./Components/practice/practice"));
const Chat = lazy(() => import("./Components/chat/chat"));
const Account = lazy(() => import("./Components/account/account"));
const Login = lazy(() => import("./Components/authentication/login/login"));
const Signup = lazy(() => import("./Components/authentication/signup/signup"));
const ExploreCourses = lazy(() =>
  import("./Components/home/exploreCourses/exploreCourses")
);

function App() {
  const [isNavbarToggled, setIsNavbarToggle] = useState(false);
  const location = useLocation();
  const navbar = ["/dashboard", "/courses", "/practice", "/chat", "/account"];
  useEffect(() => {
    setIsNavbarToggle(navbar.includes(location.pathname));
  }, [location]);

  const [miniNav, setMiniNav] = useState(true);

  return (
    <div className="flex font-[Montserrat] leading-none">
      {isNavbarToggled && <Navbar miniNav={miniNav} setMiniNav={setMiniNav} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/explore-courses"
            element={<ExploreCourses data={data} columns={miniNav} />}
          />
          <Route path="/dashboard" element={<Dashboard data={data} />} />
          <Route
            path="/courses"
            element={<Courses data={data} columns={miniNav} />}
          />
          <Route path="/practice" element={<Practice />} />
          {data.map(
            (i, idx) =>
              i.isEnrolled && (
                <Route
                  key={idx}
                  path={
                    i.owner +
                    "/" +
                    i.heading.toLowerCase().replaceAll(" ", "-") +
                    "/learn"
                  }
                  element={<Learn data={i} />}
                />
              )
          )}
          <Route path="/chat" element={<Chat />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
