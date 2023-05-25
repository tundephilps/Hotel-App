import React from "react";
import Card from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import Card4 from "./Cards/Card4";
import Card3 from "./Cards/Card3";
import Card2 from "./Cards/Card2";
import Card1 from "./Cards/Card1";
import Nav from "./Nav";

const Rooms = () => {
  return (
    <>
      <Nav />
      <div className="  bg-light-gray">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card4 />
          </SwiperSlide>

          <SwiperSlide>
            <Card3 />
          </SwiperSlide>
          <SwiperSlide>
            <Card2 />
          </SwiperSlide>
          <SwiperSlide>
            <Card1 />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Rooms;
