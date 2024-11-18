import { useContext } from "react";
import { UserContext } from "./userProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {

const {user} = useContext(UserContext);

    if(user && user?.email )
    {
        return children;
    }

    return <Navigate to={"/user/login"}></Navigate>
};

export default PrivateRoutes;