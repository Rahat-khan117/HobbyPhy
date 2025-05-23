import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import AllGroup from "./pages/AllGroup";
import CreateGroup from "./pages/CreateGroup";
import MyGroup from "./pages/MyGroup";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import UpdateGroup from "./pages/UpdateGroup";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
           path:'/allGroup',
           element:<AllGroup></AllGroup>
        },
        {
            path:'/createGroup',
            element:<CreateGroup></CreateGroup>
        },
        {
            path:'/myGroup',
            element:<MyGroup></MyGroup>,
            loader:() => fetch('http://localhost:3000/createGroup')
    
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SingUp></SingUp>
        },
        {
            path:'/updateGroup/:id',
            element:<UpdateGroup></UpdateGroup>,
            loader:() => fetch('http://localhost:3000/createGroup')
        }
      ]
    }
])