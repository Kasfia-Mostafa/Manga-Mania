import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/User/Login/Login";
import MainLayout from "../../MainLayout/MainLayout";
import Register from "../../Pages/User/Register/Register";
import HomeSection from "../../Pages/HomePage/HomeSection/HomeSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
   children: [
    {
      path: "/",
      element: <HomeSection></HomeSection>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    },
   ]
  },
  
]);


export default router;