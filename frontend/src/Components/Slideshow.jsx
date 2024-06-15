import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import { Navigation, Autoplay } from "swiper/modules";

export default function Slideshow() {
  return (
    <div style={{ width: "100%", margin: "2% 2% 0 2%" }}>
      <Swiper
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Autoplay]}
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
