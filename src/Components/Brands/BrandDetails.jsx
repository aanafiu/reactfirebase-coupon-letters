import { Link, useLoaderData, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Provider/userProvider";
import ReactStars from "react-rating-stars-component";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import 'animate.css';

const BrandDetails = () => {
  const { id } = useParams(); 
  const data = useLoaderData()
  const [brand, setBrand] = useState([]);
  const [coupon, setCoupon] = useState([]);
  const {loading, setLoading} = useContext(UserContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    
        const selectedBrand = data.find((brand) => brand._id === id)
        setLoading(false);
        if (selectedBrand) {
          setBrand(selectedBrand);
          setCoupon(selectedBrand.coupons)
        } else {
          setError("Brand not found");
        }
      
  }, [loading,data,id]);


  const notify = () => {
    toast.success('Copied', {
    style: {
      border: '2px solid #003171',
      padding: '16px',
      color: "#19B5FE",
    },
    iconTheme: {
      primary: '#003171',
      secondary: '"#19B5FE"',
    },
  })
};
  return (
    <div data-aos="fade-up" className="p-5 w-[80%] mx-auto my-5 bg-navText rounded-lg">
                <h1 className="text-5xl font-bold text-center text-navBg my-4 underline">{brand.brand_name}</h1>
        <div className="flex gap-5 justify-between items-center">
            <img src={brand.brand_logo} alt={brand.brand_name} className="w-[100%] h-fit mx-auto rounded-xl" />
            <div className="w-[100%] flex flex-col items-start">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-xl font-bold text-navBg">Rating</h1>
                        {brand.rating !== undefined && (
                                                        <ReactStars
                                                            count={5}
                                                            value={parseFloat(brand.rating) || 0}
                                                            size={30}
                                                            isHalf={true}
                                                            edit={false}
                                                            color="#C69749"
                                                            activeColor="#282A3A"
                                                        />
                                                    )}
                    </div>
                    <p className="text-gray-600 text-xl"><span className="font-bold text-blue-50">Description: </span>{brand.description}</p>
                    <p className="text-gray-600 text-center text-lg"><span className="font-bold text-blue-50">Category: </span> {brand.category}</p>

                    {/* grid coupon */}
                    <div className="w-full grid grid-cols-1 gap-4">
                            <h1 className="bg-navBg w-full my-2 p-2 text-2xl text-white font-bold text-center">Available Coupons</h1>
                        {
                            coupon.map((e,index)=>(
                            <div key={index} className="bg-white rounded-lg h-fit p-4 w-full flex flex-col gap-2">
                               <h1 className="text-xl font-extrabold animate__animated animate__bounce">Coupon Code: {e.coupon_code}</h1>
                               <h1 className="text-lg font-semibold">{e.description}</h1>
                               <h1 className="text-lg font-semibold">Expire Date: {e.expiry_date}</h1>
                               <CopyToClipboard onCopy={notify} text={e.coupon_code} >
                                    <button  type="button" className="btn-grad text-navText font-bold text-lg py-2 px-4 rounded hover:animate-pulse hover:bg-navBg">
                                    Copy to Clipboard
                                    </button>

                                </CopyToClipboard>
                                <Link to="/brands" className="btn-grad text-navText  font-bold text-lg py-2 px-4 rounded text-center hover:animate-pulse hover:bg-navBg">Use Now</Link>
                                </div>)
                            )

                        }

                    </div>
            </div>
            
        </div>

    </div>
  );
};

export default BrandDetails;
