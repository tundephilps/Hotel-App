import React from "react";
import pattern2 from "../images/decorated-pattern-2.svg";
import hotel from "../images/icons/hotel.svg";
import room1 from "../images/room-1.png";

import room2 from "../images/room-2.png";
import room3 from "../images/room-3.png";

const Section = () => {
  return (
    <>
      <section class="min-h-[600px] py-16 flex flex-col items-center justify-center bg-banner-image bg-center bg-cover bg-fixed bg-no-repeat px-3">
        <div class="container max-w-[1200px] mx-auto text-white text-center">
          <h2 class="font-gilda font-normal text-2xl sm:text-[38px] tracking-[.04em] mb-3">
            Relax at the bedrooms with Comfy Couches.
          </h2>
          <div class="flex items-center justify-center">
            <img src="../src/images/decorated-pattern.svg" alt="" />
          </div>
          <p class="mt-9 tracking-[.04em] text-lg sm:text-2xl font-barlow font-light max-w-[600px] mx-auto leading-7 sm:leading-9">
            Everything for an active vacation and luxury experience lover.
          </p>
          <a
            href="#"
            class="bg-lion font-barlow px-4 min-w-[158px] min-h-[48px] inline-flex items-center justify-center uppercase text-white transition duration-300 ease-in-out hover:bg-lion-dark mt-8 tracking-widest"
          >
            explore now
          </a>
        </div>
      </section>

      <section class="py-16 px-3">
        <div class="container max-w-[1200px] mx-auto">
          <h2 class="font-gilda font-normal text-3xl sm:text-[46px] tracking-[.04em] text-coyote text-center mb-3">
            Rooms & Suites
          </h2>
          <div class="flex items-center justify-center">
            <img src={pattern2} alt="" />
          </div>
          <div class="grid gap-10 md:grid-cols-2 py-10">
            <p class="text-black opacity-60 font-light text-base sm:text-lg font-barlow first-letter:text-4xl first-letter:font-bold first-letter:tracking-[.03em]">
              Andermatt is located in the middle of the Swiss Alps. In recent
              years, Andermatt Swiss Alps has expanded its infrastructure,
              created attractive opportunities for investors and created new
              jobs for the entire region.
            </p>

            <ul class="bg-lion py-5 sm:py-9 px-7">
              <li class="grid items-center grid-cols-[32px_auto] my-1">
                <img src={hotel} alt="" />
                <span class="text-white font-barlow text-base font-light">
                  The best prices for your relaxing vacation.
                </span>
              </li>
              <li class="grid items-center grid-cols-[32px_auto] my-1">
                <img src={hotel} alt="" />
                <span class="text-white font-barlow text-base font-light">
                  Ultimate place to spend time with you loved ones.
                </span>
              </li>
              <li class="grid items-center grid-cols-[32px_auto] my-1">
                <img src={hotel} alt="" />
                <span class="text-white font-barlow text-base font-light">
                  Cool place to have entertaining time.{" "}
                </span>
              </li>
            </ul>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-[4px]">
            <a
              href="#"
              class="object-cover relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b from-black/25 to-black/75 hover:before  before:absolute before:content-[''] before:top-3 before:left-3 before:right-3 before:bottom-3 before:border-white before:border-2 before:border-solid before:z-10 before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 before:ease-in-out"
            >
              <img src={room1} class="w-full h-full object-cover" alt="" />
              <div class="absolute bottom-0 left-2/4 -translate-x-2/4 text-white font-medium uppercase text-xl md:text-2xl font-barlow z-10 px-4 mb-14 text-center w-full tracking-widest">
                Stay Room
              </div>
            </a>

            <a
              href="#"
              class="object-cover relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b from-black/25 to-black/75 hover:before  before:absolute before:content-[''] before:top-3 before:left-3 before:right-3 before:bottom-3 before:border-white before:border-2 before:border-solid before:z-10 before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 before:ease-in-out"
            >
              <img src={room2} class="w-full h-full object-cover" alt="" />
              <div class="absolute bottom-0 left-2/4 -translate-x-2/4 text-white font-medium uppercase text-xl md:text-2xl font-barlow z-10 px-4 mb-14 text-center w-full tracking-widest">
                conference/meeting hall
              </div>
            </a>

            <a
              href="#"
              class="object-cover relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b from-black/25 to-black/75 hover:before  before:absolute before:content-[''] before:top-3 before:left-3 before:right-3 before:bottom-3 before:border-white before:border-2 before:border-solid before:z-10 before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 before:ease-in-out"
            >
              <img src={room3} class="w-full h-full object-cover" alt="" />
              <div class="absolute bottom-0 left-2/4 -translate-x-2/4 text-white font-medium uppercase text-xl md:text-2xl font-barlow z-10 px-4 mb-14 text-center w-full tracking-widest">
                wedding
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
