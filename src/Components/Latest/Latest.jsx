import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest = () => {
    return (
        <div className="skeleton bg-navBg flex w-[80%] mx-auto rounded-lg p-2 text-xl font-semibold text-white">
            <div className="z-10 w-fit text-nowrap bg-navBg p-2 rounded-l-box rounded-r-badge"><h1>Black Friday Offer</h1></div>
            <Marquee className="flex" speed={100} pauseOnHover={true}>
                <div className="mr-10">
                    <Link>product 1</Link>
                </div>
                <div className="mr-10">
                    <Link>product 2</Link>
                </div>
                <div className="mr-10">
                    <Link>product 3</Link>
                </div>
            </Marquee>
        </div>
    );
};

export default Latest;