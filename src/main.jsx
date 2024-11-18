
import './index.css'
import 'animate.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './Layout/Mainlayout';
import Home from './Components/Pages/Home';
import UserLayout from './Layout/UserLayout';
import Register from './Components/Provider/Register';
import Login from './Components/Provider/Login';
import UserProvider from './Components/Provider/userProvider';
import PrivateRoutes from './Components/Provider/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/brands",
        element:<div>this is brand</div>
      },
      {
        path:"/my-profile",
        element:<PrivateRoutes><div>this is profile</div></PrivateRoutes>
      }
    ]
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
