import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Home/Home/Home";
import Services from "../Pages/Services/Services";
import Animation from "../Pages/Animation/Animation";
import CgiAnimation from "../Pages/CgiAnimation/CgiAnimation";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'services/animation',
                element:<Animation></Animation>
            },
            {
                path:'services/cgi',
                element:<CgiAnimation></CgiAnimation>
            },

        ])
    }
])
export default router;