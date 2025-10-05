import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
import Search from "./pages/Search";
import MealLatter from "./pages/MealLatter";

const myRouter = createBrowserRouter([
     {
        path:"/",
        element:<Layout/>,
        children: [
            {
                path:"",
                element:<Home/>,
            },
            {
                path:"about",
                element:<About/>,
            },
            {
                path:"info/:id",
                element:<Info/>
            },
            {
                path:"search/:title",
                element:<Search/>
            },
             {
                path:"letter/:letter",
                element:<MealLatter/>
            }
            
        ]
    }
])

export default myRouter
