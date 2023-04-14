import { createBrowserRouter } from "react-router-dom";
import IndexLayout from "../layouts/IndexLayout";
import Index from "./Index/Index"
export const router = createBrowserRouter([
    {
        path:"/",
        element:<IndexLayout/>, 

        children:[
            {path:"/", element:<Index/>},
        ]
    }
])