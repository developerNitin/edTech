import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./UI/navbar/navbar"));
const Dashboard = lazy(() => import("./Components/dashboard/dashboard"));
const Courses = lazy(() => import("./Components/courses/courses"));
const Practice = lazy(() => import("./Components/practice/practice"));
const Login = lazy(()=>import("./Components/authentication/login/login"))

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/Practice" element={<Practice />} />
            <Route path="/Practice" element={<Practice />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
