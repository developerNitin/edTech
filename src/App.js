import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
const Dashboard = lazy(() => import("./Components/dashboard/dashboard"));
const Courses = lazy(() => import("./Components/courses/courses"));
const Practice = lazy(() => import("./Components/practice/practice"));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/Practice" element={<Practice />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
