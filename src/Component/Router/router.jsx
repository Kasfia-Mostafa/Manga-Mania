import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/HomePage/Home/Home";
import Login from "../../Pages/User/Login/Login";
import MainLayout from "../../MainLayout/MainLayout";
import Register from "../../Pages/User/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
   children: [
    {
      path: "/",
      element: <Home></Home>
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