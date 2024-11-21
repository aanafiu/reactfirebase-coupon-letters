
const ContactUS = () => {
    return (
        <div data-aos="fade-up" className=" h-full w-[80%] mx-auto p-5">
            <div className="card btn-grads flex flex-col justify-center items-center gap-5 py-5 outline-none hover:outline-purple-500">
                <h1 className="text-4xl underline py-4">Contact With US</h1>
                <input type="text" className="w-[70%] text-2xl tracking-[5px] font-bold text-center rounded-lg text-navText p-4 bg-navBg mx-auto outline-none btn-grad focus:outline-purple-500" placeholder="Enter Your Email Address"/>
                <button className="py-2 px-5 text-xl font-bold btn-grad w-fit text-navText">Contact Now</button>
            </div>
        </div>
    );
};

export default ContactUS;