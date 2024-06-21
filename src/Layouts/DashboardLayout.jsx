import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { DashboardLayoutRoute } from "../routes";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {DashboardLayoutRoute}
    </>
  );
};
export default DashboardLayout;
