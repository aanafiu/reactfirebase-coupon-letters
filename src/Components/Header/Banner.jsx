
import image1 from "../../assets/banner.png";
import image2 from "../../assets/regimage2.webp";
import image3 from "../../assets/regimage.jpeg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Banner = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className="h-[100%]">
        <Carousel responsive={responsive}>
            <div className="h-[100%] w-[100%]"><img src={image2} className="h-[100%] w-[100%]" alt=""  /></div>
            <div className="h-[100%] w-[100%]"><img src={image1} className="h-[100%] w-[100%]" alt=""  /></div>
            <div className="h-[100%] w-[100%]"><img src={image3} className="h-[100%] w-[100%]" alt=""  /></div>
            <div className="h-[100%] w-[100%]"><img src={image1} className="h-[100%] w-[100%]" alt=""  /></div>
            <div className="h-[100%] w-[100%]"><img src={image2} className="h-[100%] w-[100%]" alt=""  /></div>
            <div className="h-[100%] w-[100%]"><img src={image3} className="h-[100%] w-[100%]" alt=""  /></div>


        </Carousel>
    </div>

    
  );
};

export default Banner;
