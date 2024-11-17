import Header from "../Components/Header/Header";
import Latest from "../Components/Latest/Latest";

const Mainlayout = () => {
    return (
        <div >
            <header className="bg-navBg text-navText sticky top-0 py-3"><Header></Header></header>
            <section className="bg-navBg py-4"><Latest></Latest></section>
        </div>
    );
};

export default Mainlayout;