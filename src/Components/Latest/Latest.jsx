import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useParams } from "react-router-dom";

const Latest = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch("brands.json")
            .then((res) => res.json())
            .then((data) => setBrands(data));
    }, []);
    return (
        <div className="skeleton bg-navBg flex rounded-lg p-4 text-xl font-semibold text-white">
            <Marquee  speed={150} pauseOnHover={true}>
                {brands.map((e) => (
                    <Link to={`brands/${e._id}`} key={e._id} className="flex flex-col justify-center items-center" >
                        <img src={e.brand_logo} alt="" className="mx-8 w-[120px] h-[100px]" />
                        <h1>{e.brand_name}</h1>
                    </Link>
                ))}
            </Marquee>
        </div>
    );
};

export default Latest;
