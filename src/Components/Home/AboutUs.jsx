
const AboutUs = () => {
    return (
        <div data-aos="fade-up" className="w-[90%] mx-auto btn-grads my-6 rounded-lg">
            <div className="w-[70%] mx-auto text-navText py-5">
                <h1 className="text-4xl font-bold text-navText text-center pb-5 underline">Frequently Asked Question</h1>
                <div className="text-navText join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">How To Use Coupon</div>
                            <div className="collapse-content">
                            <p>Go to Coupon Page And Press Use Now.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">Can I Purchase Multiple Coupon</div>
                            <div className="collapse-content">
                            <p>Yes Of Course</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">Promotional Brand Post</div>
                            <div className="collapse-content">
                            <p>You can asked us to add your brand infomations.</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;