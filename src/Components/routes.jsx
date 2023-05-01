import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Layout.jsx/HomeLayout";
import Home from "./Pages/Home";
import Visitform from "./Pages/Visitform/Visitform";
import Details from "./Pages/Visitform/Details";



const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>, 
            loader:()=>fetch('http://localhost:9500/place/')
        },
        {
            path: "/place/:id",
            element:<Visitform></Visitform> , 
            loader:({params})=>fetch(`http://localhost:9500/place/${params.id}`)
        },
        {
            path: "/details/:id",
            element:<Details></Details>, 
            loader:({params})=>fetch(`http://localhost:9500/place/${params.id}`)
           
        },
      ]
    },
  ]);

  export default router