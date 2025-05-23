import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import AllGroup from "./pages/AllGroup";
import CreateGroup from "./pages/CreateGroup";
import MyGroup from "./pages/MyGroup";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import UpdateGroup from "./pages/UpdateGroup";
import GroupDetails from "./pages/GroupDetails";
import Error from "./components/Error";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('../group.json')
        },
        {
           path:'/allGroup',
           element:<AllGroup></AllGroup>,
           loader:()=> fetch('../group.json')
        },
        {
            path:'/createGroup',
            element:<CreateGroup></CreateGroup>
        },
        {
            path:'/myGroup',
            element:<MyGroup></MyGroup>,
            loader:() => fetch('https://assignment-serverside.vercel.app/createGroup')
    
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
            loader:() => fetch('https://assignment-serverside.vercel.app/createGroup')
        },
        {
            path:'/groupDetails/:id',
            element:<GroupDetails></GroupDetails>,
            loader:()=> fetch('../group.json')
        }
      ]
    }
])