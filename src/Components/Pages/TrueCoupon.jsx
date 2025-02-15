
const TrueCoupon = ({item}) => {
    const {brand_logo, brand_name,coupons,category} = item;
    return (
        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                <div className=" flex gap-2 rounded-2xl items-center border-2 border-purple-500 backdrop-blur bg-white bg-transparent text-navText h-[200px] shadow-xl p-3">
                    <div className="h-full rounded-[50px]">
                        <img
                        src={brand_logo}
                        alt="Movie" className="rounded-badge h-full object-fill shadow-xl border-2 border-purple-500 " />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="card-title text-xl font-bold whitespace-nowrap">{brand_name}</h2>
                        <p className="font-semibold text-purple-500">{category}</p>
                        <div className="flex flex-col gap-2">
                        <p className="font-bold text-lg whitespace-nowrap">Coupons Available:</p>
                        <h1 className="w-fit text-base py-2 px-5 text-center rounded-box bg-navBg font-semibold btn-grads border-purple-500 border-2 text-navText">Left: {coupons.length}</h1>
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default TrueCoupon;