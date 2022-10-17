import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";

const Navbar = lazy(() => import("./UI/navbar/navbar"));
const Home = lazy(() => import("./Components/home/home"));
const Dashboard = lazy(() => import("./Components/dashboard/dashboard"));
const Courses = lazy(() => import("./Components/courses/courses"));
const Practice = lazy(() => import("./Components/practice/practice"));
const Chat = lazy(() => import("./Components/chat/chat"));
const Logout = lazy(() => import("./Components/authentication/logout/logout"));

function App() {
  const [isNavbarToggled, setIsNavbarToggle] = useState(false);
  const location = useLocation();
  const navbar = ["/dashboard", "/courses", "/practice", "/chat", "/account"];
  useEffect(() => {
    setIsNavbarToggle(navbar.includes(location.pathname));
  }, [location]);

  const [miniNav, setMiniNav] = useState(false);

  return (
    <div className="flex font-[Montserrat] leading-none">
      {isNavbarToggled && <Navbar miniNav={miniNav} setMiniNav={setMiniNav} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses columns={miniNav} />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
