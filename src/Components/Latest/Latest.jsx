import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link} from "react-router-dom";

const Latest = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch("brands.json")
            .then((res) => res.json())
            .then((data) => setBrands(data));
    }, []);
    return (
        <div className="skeleton flex rounded-lg p-6  text-xl font-semibold"  >
            <Marquee  speed={150} pauseOnHover={true}>
                {brands.map((e) => (
                    <Link data-aos="flip-down" to={`brands/${e._id}`} data-aos-duration="1000" key={e._id} className="flex flex-col justify-center items-center" >
                        <img src={e.brand_logo} alt="" className="mx-8 w-[120px] h-[100px]" />
                        <h1 className="text-lg">{e.brand_name}</h1>
                    </Link>
                ))}
            </Marquee>
        </div>
    );
};

export default Latest;
