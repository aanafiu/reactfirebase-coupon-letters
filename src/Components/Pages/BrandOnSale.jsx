
import { useLoaderData } from 'react-router-dom';
import TrueCoupon from './TrueCoupon';

const BrandOnSale = () => {
    const data = useLoaderData();
    // console.log("i am brand on sale")
    return (
        <div className='w-[90%] p-5 bg-[#282A3A] mx-auto my-10'>
            <h1 className='text-center text-4xl text-navText font-bold mb-5'>Brand On Sale</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    data.map((item)=> (item.isSaleOn ?<TrueCoupon key={item._id} item={item} ></TrueCoupon> : ""))
                }
            </div>
            
        </div>
    );
};

export default BrandOnSale;