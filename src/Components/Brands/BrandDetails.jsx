import { useLoaderData, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Provider/userProvider";
import ReactStars from "react-rating-stars-component";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";

const BrandDetails = () => {
  const { id } = useParams(); // Extract the `id` from the URL
  const data = useLoaderData()
  const [brand, setBrand] = useState([]);
  const [coupon, setCoupon] = useState([]);
  const {loading, setLoading} = useContext(UserContext);
  const [error, setError] = useState(null);

  useEffect(() => {
        const selectedBrand = data.find((brand) => brand._id == parseInt(id))
        if (selectedBrand) {
          setBrand(selectedBrand);
          setCoupon(selectedBrand.coupons)
        } else {
          setError("Brand not found");
        }
        setLoading(false);
      
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
    <div className="p-5 w-[80%] mx-auto my-5 bg-blue-200 rounded-lg">
                <h1 className="text-5xl font-bold text-center text-white my-4">{brand.brand_name}</h1>
        <div className="flex gap-5 justify-between items-center">
            <img src={brand.brand_logo} alt={brand.brand_name} className="w-full h-fit mx-auto rounded-xl" />
            <div className="w-full flex flex-col items-start">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-xl font-bold">Rating</h1>
                        {brand.rating !== undefined && (
                                                        <ReactStars
                                                            count={5}
                                                            value={parseFloat(brand.rating) || 0}
                                                            size={30}
                                                            isHalf={true}
                                                            edit={false}
                                                            color="#003171"
                                                            activeColor="#19B5FE"
                                                        />
                                                    )}
                    </div>
                    <p className="text-gray-600 text-center text-xl"><span className="font-bold">Description: </span>{brand.description}</p>
                    <p className="text-gray-600 text-center text-lg"><span className="font-bold">Category: </span> {brand.category}</p>

                    {/* grid coupon */}
                    <div className="w-full grid grid-cols-1 gap-4">
                            <h1 className="bg-navBg w-full my-2 p-2 text-2xl text-white font-bold text-center">Available Coupons</h1>
                        {
                            coupon.map((e,index)=>(
                            <div key={index} className="bg-white rounded-lg h-fit p-4 w-full flex flex-col gap-2">
                               <h1 className="text-xl font-extrabold">Coupon Code: {e.coupon_code}</h1>
                               <h1 className="text-lg font-semibold">{e.description}</h1>
                               <h1 className="text-lg font-semibold">Expire Date: {e.expiry_date}</h1>
                               <CopyToClipboard onCopy={notify} text={e.coupon_code} >
                                    <button  type="button" className="bg-blue-500 text-white py-2 px-4 rounded">
                                    Copy to Clipboard
                                    </button>

                                </CopyToClipboard>
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
