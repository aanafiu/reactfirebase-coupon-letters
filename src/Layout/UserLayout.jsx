import { Navigate, Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { useContext } from "react";
import { UserContext } from "../Components/Provider/userProvider";
import Loading from "../Components/Provider/Loading";
import Footer from "../Components/Footer/Footer";

const UserLayout = () => {
    const {user, loading} =  useContext(UserContext);
    if(loading)
    {
        return <Loading/>
    }
    if(user)
    {
        return <Navigate to={"/"}></Navigate>
    }
    return (
        <div className="bg-black w-full relative">
            <header className="backdrop-blur-xl text-navText sticky top-0 py-3 z-10"><Header></Header></header>

            <section data-aos="fade-up" className="w-[90%] bg-navText rounded-[80px] mx-auto flex justify-center items-center my-3"><Outlet></Outlet></section>
            <Footer></Footer>
            
        </div>
    );
};

export default UserLayout;