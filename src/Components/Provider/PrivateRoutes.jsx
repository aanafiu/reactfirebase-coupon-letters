import { useContext } from "react";
import { UserContext } from "./userProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";

const PrivateRoutes = ({children}) => {

const {user, loading} = useContext(UserContext);
const location = useLocation();
console.log(location);
    if(loading)
    {
        return <Loading></Loading>
    }

    if(user && user?.email )
    {
        return children;
    }

    return <Navigate state={location.pathname} to={"/user/login"}></Navigate>
};

export default PrivateRoutes;