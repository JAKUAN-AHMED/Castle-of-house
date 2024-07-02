import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import PropertyDetails from "../pages/Details/PropertyDetails";
import Contact_us from "../pages/Contact/Contact_us";
import Login from "../pages/Login/Login";
import View from "../pages/View/View";
import Register from "../pages/Shared/Register/Register";
import ErrorPage from "../Utility/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details",
        element: <PropertyDetails></PropertyDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/contact",
        element: <Contact_us></Contact_us>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/res/:id",
        element: <View></View>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/aminities",
        element: <Contact_us></Contact_us>,
      },
    ],
  },
]);
export default router;