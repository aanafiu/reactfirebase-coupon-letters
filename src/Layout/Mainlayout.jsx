
import Header from "../Components/Header/Header";
import Latest from "../Components/Latest/Latest";

import Banner from "../Components/Header/Banner";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Mainlayout = () => {
    return (
        <div className=" relative bg-black" >
            <header className=" text-navText sticky z-10 top-0 py-3 backdrop-blur-xl"><Header></Header></header>
            <section data-aos="fade-down"> <Outlet></Outlet></section>
           
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;