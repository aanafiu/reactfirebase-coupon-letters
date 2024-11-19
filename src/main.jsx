
import './index.css'
import 'animate.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './Layout/Mainlayout';
import UserLayout from './Layout/UserLayout';
import Register from './Components/Provider/Register';
import Login from './Components/Provider/Login';
import UserProvider from './Components/Provider/userProvider';
import PrivateRoutes from './Components/Provider/PrivateRoutes';
import BrandOnSale from './Components/Pages/BrandOnSale';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path:"/",
        element:<BrandOnSale></BrandOnSale>,
        loader: ()=>(fetch("./brands.json"))
      },
      {
        path:"brands",
        element:<div>this is brand</div>
      },
    ]
  },
  {
    path:"/home",
    element:<Mainlayout></Mainlayout>,
    children:[
      {
        path:"/home/",
        element:<BrandOnSale></BrandOnSale>,
        loader: ()=>(fetch("./brands.json"))
      },
      {
        path:"home/brands",
        element:<div>this is brand</div>
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
    </UserProvider>
  </React.StrictMode>
);
