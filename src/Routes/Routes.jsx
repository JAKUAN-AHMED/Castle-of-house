import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import PropertyDetails from "../pages/Details/PropertyDetails";
import Contact_us from "../pages/Contact/Contact_us";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/details',
                element:<PropertyDetails></PropertyDetails>
            }
            ,
            {
                path:'/contact',
                element:<Contact_us></Contact_us>
            }
        ]
    }
])
export default router;