import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import image1 from "../../assets/banner.png";
import image2 from "../../assets/banner2.png";
import image3 from "../../assets/banner1.png";
import image4 from "../../assets/banner3.png";

const Banner = () => {
  const swiperRef = useRef(null); // Create a ref for the Swiper container

  useEffect(() => {
    if (swiperRef.current) {
      // Initialize Swiper
      new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination],
        direction: 'horizontal', // Change to 'vertical' if needed
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }, []);

  return (
    <div className='w-full my-5' >
      <div className="swiper w-full" ref={swiperRef}>
        <div className="swiper-wrapper w-full">
          <div className="swiper-slide w-full" data-aos="fade-top">
            <img src={image1} alt="Banner 1" />
          </div>
          <div className="swiper-slide w-full" data-aos="fade-top">
            <img src={image2} alt="Banner 2" />
          </div>
          <div className="swiper-slide w-full" data-aos="fade-top">
            <img src={image3} alt="Banner 3" />
          </div>
          <div className="swiper-slide w-full" data-aos="fade-top">
            <img src={image4} alt="Banner 4" />
          </div>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination w-full"></div>

        {/* Navigation */}
        <div className="swiper-button-prev w-full"></div>
        <div className="swiper-button-next w-full"></div>
      </div>
    </div>

  );
};

export default Banner;
