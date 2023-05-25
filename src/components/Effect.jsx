import React from "react";

import welcome1 from "../images/welcome1.png";

import welcome2 from "../images/welcome2.png";
import welcome3 from "../images/welcome3.png";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules

import { Autoplay, Pagination, Navigation } from "swiper";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Effect = () => {
  return (
    <div class="bg-nero min-h-[640px] mx-auto px-3 flex items-center py-16">
      <div class="container max-w-[1200px] mx-auto grid md:grid-cols-2 gap-14">
        <div class="flex flex-col justify-center items-start">
          <h3 class="text-coyote font-normal opacity-70 tracking-[.25em] font-barlow-cond text-xl sm:text-[22px] uppercase">
            welcome to
          </h3>
          <h1 class="font-gilda text-2xl sm:text-[38px] tracking-[.04em] font-normal py-3 text-white mb-3">
            Andermatt Resort & Farm
          </h1>
          <p class="opacity-60 font-light font-barlow text-justify text-base sm:text-lg text-white">
            Andermatt is located in the middle of the Swiss Alps. In recent
            years, Andermatt Swiss Alps has expanded its infrastructure, created
            attractive opportunities for investors and created new jobs for the
            entire region.
          </p>
          <a
            href="#"
            class="bg-lion font-barlow px-4 min-w-[158px] min-h-[48px] inline-flex items-center justify-center uppercase text-white transition duration-300 ease-in-out hover:bg-lion-dark mt-8 tracking-widest"
          >
            know more
          </a>
        </div>

        <div class="welcome-slider overflow-hidden">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation, EffectCards]}
          >
            <SwiperSlide>
              <img
                class="w-full h-full object-cover"
                src={welcome1}
                alt="welcome image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                class="w-full h-full object-cover"
                src={welcome2}
                alt="welcome image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                class="w-full h-full object-cover"
                src={welcome3}
                alt="welcome image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Effect;
