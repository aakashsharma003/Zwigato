import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

export default function Slideshow() {
  //   const [mySwiper, setMySwiper] = useState({});
  //   const [click, setclick] = useState(true);

  //   const slide = () => {
  //     setInterval(mySwiper.slideNext(), 2000);
  //   };

  return (
    <div style={{ width: "100%", margin: "2% 2% 0 2%" }}>
      <Swiper
        // onInit={(e) => {
        //   setMySwiper(e);
        //   slide();
        // }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="image" src={"/images/photo2.jpg"} alt="photo2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image" src={"/images/photo3.jpg"} alt="photo3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image" src={"/images/photo4.jpg"} alt="photo4" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image" src={"/images/photo5.jpg"} alt="photo5" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image" src={"/images/photo6.jpg"} alt="photo6" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image" src={"/images/pizza.jpg"} alt="pizza" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image" src={"/images/paubhaji.jpg"} alt="paubhaji" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image" src={"/images/puri.jpg"} alt="puri" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image" src={"/images/sweet.jpg"} alt="sweet" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
