import { Suspense } from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import About from "../Pages/About";
import Home from "../Pages/Home";
import { Route, Routes } from "react-router-dom";
import Admission from "../Pages/Admission";

const routes = [
  {
    path: "/school/*",
    element: <DashboardLayout />,
  },
];

export const DashboardLayoutRoute = (
  <Suspense>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admission" element={<Admission />} />
    </Routes>
  </Suspense>
);
export default routes;
