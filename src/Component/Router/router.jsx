import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/HomePage/Home/Home";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>
  },
]);


export default router;