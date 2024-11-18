import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Latest from "../Components/Latest/Latest";

import Banner from "../Components/Header/Banner";

const Mainlayout = () => {
    return (
        <div className="overflow-hidden relative bg-navBg" >
            <header className=" text-navText sticky z-10 top-0 py-3"><Header></Header></header>
            <Banner></Banner>
            <section className="my-7"><Latest></Latest></section>

            <main><Outlet></Outlet></main>
        </div>
    );
};

export default Mainlayout;