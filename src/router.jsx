import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Banner from "./components/Banner/Banner";


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
                 path:"banner",
                element:<Banner/>,
            }
        ]
    }
])

export default myRouter
