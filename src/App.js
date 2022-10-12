import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";

const Navbar = lazy(() => import("./UI/navbar/navbar"));
const Home = lazy(() => import("./Components/home/home"));
const Dashboard = lazy(() => import("./Components/dashboard/dashboard"));
const Courses = lazy(() => import("./Components/courses/courses"));
const Practice = lazy(() => import("./Components/practice/practice"));
const Chat = lazy(() => import("./Components/chat/chat"));
const Login = lazy(() => import("./Components/authentication/login/login"));

function App() {
  const [isNavbarToggled, setIsNavbarToggle] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsNavbarToggle(!["/", "/login", "/signin"].includes(location.pathname));
  }, [location]);
  return (
    <div className="flex font-[Montserrat] leading-none">
      {isNavbarToggled && <Navbar />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
