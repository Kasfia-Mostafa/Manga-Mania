import { Outlet } from "react-router-dom";
import Navbar from "../Pages/HomePage/Navbar/Navbar";
import Home from "../Pages/HomePage/Home/Home";

const MainLayout = () => {
  return (
    <div className="px-10">
      <Navbar></Navbar>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
