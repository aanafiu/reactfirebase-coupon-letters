
import './index.css'
import 'animate.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Mainlayout from './Layout/Mainlayout';
import UserLayout from './Layout/UserLayout';
import Register from './Components/Provider/Register';
import Login from './Components/Provider/Login';
import UserProvider from './Components/Provider/userProvider';
import PrivateRoutes from './Components/Provider/PrivateRoutes';
import BrandOnSale from './Components/Pages/BrandOnSale';
import Brands from './Components/Brands/Brands';
import Home from './Components/Home/Home';
import BrandDetails from './Components/Brands/BrandDetails';
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path:"",
    element:<Mainlayout></Mainlayout>,
    children:[
      {
        path:"",
        element:<Home></Home>,
        children:[
          {
            path:"",
            element:<BrandOnSale></BrandOnSale>,
            loader:()=>fetch("../brands.json")
          },
        ]
     },
      {
        path:"/brands",
        element:<Brands></Brands>,
      },
      {
        path:"brands/:id",
        element:<PrivateRoutes><BrandDetails></BrandDetails></PrivateRoutes> ,
        loader:()=>fetch("../brands.json")
      }
     
    ]

  },
  {
    path:"/home",
    element:<Mainlayout></Mainlayout>,
    children:[
      {
        path:"/home",
        element:<Home></Home>,
        children:[
          {
            path:"/home/",
            element:<BrandOnSale></BrandOnSale>,
            loader:()=>fetch("../brands.json")
          }
        ]
     },
     {
      path:"brands/:id",
      element:<PrivateRoutes><BrandDetails></BrandDetails></PrivateRoutes> ,
      loader:()=>fetch("../brands.json")
    },
    ]

  },
  {
    path:"/my-profile",
    element:<PrivateRoutes><div>this is profile</div></PrivateRoutes>
  },
  {
    path:"/user",
    element:<UserLayout/>,
    children:[
      {
        path:"/user",
        element:<Login></Login>
      },
      {
        path:"/user/login",
        element:<Login></Login>
      },
      {
        path:"/user/register",
        element:<Register></Register>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
        <RouterProvider router={router} />
        <Toaster/>
    </UserProvider>
  </React.StrictMode>
);
