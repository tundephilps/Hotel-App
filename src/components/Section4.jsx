import React from "react";
import pattern2 from "../images/decorated-pattern-2.svg";
import food from "../images/icons/food.svg";

import pool from "../images/icons/pool.svg";
import bed from "../images/icons/bed.svg";
import vehicle from "../images/icons/vehicle.svg";
import plane from "../images/icons/plane.svg";

import wifi from "../images/icons/wifi.svg";

const Section4 = () => {
  return (
    <>
      <section class="py-16 px-3 bg-banner-image bg-center bg-cover bg-fixed bg-no-repeat">
        <div class="container max-w-[1200px] mx-auto">
          <h2 class="font-gilda font-normal text-3xl sm:text-[46px] tracking-[.04em] text-coyote text-center mb-3">
            Our Hotel Services
          </h2>
          <div class="flex items-center justify-center">
            <img src={pattern2} alt="" />
          </div>

          <div class="grid gap-3 mt-10 sm:grid-cols-2 md:grid-cols-3">
            <div class="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
              <img src={plane} class="w-[54px]" />
              <h4 class="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                Pick Up & Drop
              </h4>
              <p class="text-white text-base font-barlow font-light tracking-[.04em]">
                We’ll pick up from airport while you comfy on your ride, mus
                nellentesque habitant.
              </p>
            </div>

            <div class="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
              <img src={vehicle} class="w-[54px]" />
              <h4 class="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                Parking Space
              </h4>
              <p class="text-white text-base font-barlow font-light tracking-[.04em]">
                We’ll pick up from airport while you comfy on your ride, mus
                nellentesque habitant.
              </p>
            </div>

            <div class="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
              <img src={bed} class="w-[54px]" />
              <h4 class="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                Room Service
              </h4>
              <p class="text-white text-base font-barlow font-light tracking-[.04em]">
                We’ll pick up from airport while you comfy on your ride, mus
                nellentesque habitant.
              </p>
            </div>

            <div class="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
              <img src={pool} class="w-[54px]" />
              <h4 class="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                Swimming Pool
              </h4>
              <p class="text-white text-base font-barlow font-light tracking-[.04em]">
                We’ll pick up from airport while you comfy on your ride, mus
                nellentesque habitant.
              </p>
            </div>

            <div class="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
              <img src={wifi} class="w-[54px]" />
              <h4 class="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                Fibre Internet
              </h4>
              <p class="text-white text-base font-barlow font-light tracking-[.04em]">
                We’ll pick up from airport while you comfy on your ride, mus
                nellentesque habitant.
              </p>
            </div>

            <div class="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
              <img src={food} class="w-[54px]" />
              <h4 class="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                Breakfast
              </h4>
              <p class="text-white text-base font-barlow font-light tracking-[.04em]">
                We’ll pick up from airport while you comfy on your ride, mus
                nellentesque habitant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
