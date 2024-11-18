import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Latest from "../Components/Latest/Latest";
import Home from "../Components/Pages/Home";

const Mainlayout = () => {
    return (
        <div >
            <header className="bg-navBg text-navText sticky top-0 py-3"><Header></Header></header>
            <section className="bg-navBg py-4"><Latest></Latest></section>

            <main><Outlet></Outlet></main>
        </div>
    );
};

export default Mainlayout;