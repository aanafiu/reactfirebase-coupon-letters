import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const UserLayout = () => {
    return (
        <div className="w-full relative overflow-hidden">
            <header className="bg-navBg text-navText sticky top-0 py-3 z-10"><Header></Header></header>

            <section className="w-[90%] bg-fuchsia-500 rounded-[100px] mx-auto flex justify-center items-center my-3"><Outlet></Outlet></section>

            
        </div>
    );
};

export default UserLayout;