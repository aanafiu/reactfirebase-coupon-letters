
import { useLoaderData } from 'react-router-dom';
import TrueCoupon from './TrueCoupon';

const BrandOnSale = () => {
    const data = useLoaderData();
    // console.log("i am brand on sale")
    return (
        <div className='w-[90%] p-5 btn-grads mx-auto my-10 rounded-lg'>
            <h1 className='text-center text-4xl text-navText font-bold mb-5 underline'>Brand On Sale</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    data.map((item)=> (item.isSaleOn ?<TrueCoupon key={item._id} item={item} ></TrueCoupon> : ""))
                }
            </div>
            
        </div>
    );
};

export default BrandOnSale;