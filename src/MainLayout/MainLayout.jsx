import { Outlet } from "react-router-dom";
import Navbar from "../Pages/HomePage/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="px-10">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
