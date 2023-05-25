import React from "react";
import pattern1 from "../images/decorated-pattern.svg";
import pattern2 from "../images/decorated-pattern-2.svg";
import event1 from "../images/events-1.png";
import event2 from "../images/events-2.png";
import event3 from "../images/events-3.png";

const Section2 = () => {
  return (
    <>
      <section class="py-16 px-3 bg-booking-image bg-center bg-cover bg-no-repeat">
        <div class="container max-w-[1200px] mx-auto">
          <h2 class="font-gilda font-normal text-3xl sm:text-[46px] tracking-[.04em] text-center text-white mb-3">
            Hotel Booking Form
          </h2>
          <div class="flex items-center justify-center">
            <img src={pattern1} alt="" />
          </div>

          <form class="my-16 max-w-[824px] mx-auto">
            <div class="my-3">
              <input
                type="text"
                class="outline-none py-4 px-5 bg-transparent caret-white text-white text-lg tracking-[.04em] font-light font-barlow placeholder:text-white border-white border-solid border-b-[1px] w-full"
                placeholder="Full Name"
              />
            </div>

            <div class="grid md:grid-cols-2 md:my-3 md:gap-x-10">
              <input
                type="text"
                class="outline-none py-4 px-5 bg-transparent caret-white text-white text-lg tracking-[.04em] font-light font-barlow placeholder:text-white border-white border-solid border-b-[1px] w-full my-3"
                placeholder="Phone Number"
              />

              <input
                type="text"
                class="outline-none py-4 px-5 bg-transparent caret-white text-white text-lg tracking-[.04em] font-light font-barlow placeholder:text-white border-white border-solid border-b-[1px] w-full my-3"
                placeholder="Email Address (optional)"
              />
            </div>

            <div class="grid md:grid-cols-2 md:my-3 md:gap-x-10">
              <input
                type="text"
                class="outline-none py-4 px-5 bg-transparent caret-white text-white text-lg tracking-[.04em] font-light font-barlow placeholder:text-white border-white border-solid border-b-[1px] w-full my-3"
                placeholder="Purpose of Booking"
              />

              <select class="outline-none py-4 px-5 bg-transparent text-white text-lg tracking-[.04em] font-light font-barlow border-white border-solid border-b-[1px] w-full my-3">
                <option selected disabled>
                  No. of Adult
                </option>
                <option class="bg-black/30" value="1">
                  1
                </option>
                <option class="bg-black/30" value="2">
                  2
                </option>
                <option class="bg-black/30" value="3">
                  3
                </option>
              </select>
            </div>

            <div class="grid md:grid-cols-2 md:my-3 md:gap-x-10">
              <input
                type="date"
                class="outline-none py-4 px-5 bg-transparent caret-white text-white text-lg tracking-[.04em] font-light font-barlow placeholder:text-white border-white border-solid border-b-[1px] w-full my-3"
              />

              <input
                type="time"
                class="outline-none py-4 px-5 bg-transparent caret-white text-white text-lg tracking-[.04em] font-light font-barlow placeholder:text-white border-white border-solid border-b-[1px] w-full my-3"
              />
            </div>

            <div class="flex items-center justify-center">
              <a
                href="#"
                class="bg-white font-barlow px-4 min-w-[158px] min-h-[48px] inline-flex items-center justify-center uppercase text-eerie-black transition duration-300 ease-in-out hover:bg-eerie-black hover:text-white mt-8 tracking-widest"
              >
                explore now
              </a>
            </div>
          </form>
        </div>
      </section>

      <section class="py-16 px-3 bg-white">
        <div class="container max-w-[1200px] mx-auto">
          <h2 class="font-gilda font-normal text-3xl sm:text-[46px] tracking-[.04em] text-coyote text-center mb-3">
            Events
          </h2>
          <div class="flex items-center justify-center">
            <img src={pattern2} alt="" />
          </div>

          <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-10">
            <div class="min-h-[323px] relative">
              <img src={event1} class="w-full h-full object-cover" />
              <div class="text-white absolute bottom-2 left-2 right-2 bg-black/50 p-5">
                <div class="w-[70px] h-[70px] bg-lion rounded-full flex items-center justify-center flex-col uppercase font-mont text-sm absolute top-0 right-3 -translate-y-[50%]">
                  <span class="font-bold tracking-widest text-xl inline-block">
                    03
                  </span>
                  <span class="tracking-widest inline-block -mt-[3px]">
                    apr
                  </span>
                </div>
                <h3 class="font-gilda text-xl tracking-[.04em] uppercase">
                  decade nights
                </h3>
                <p class="font-normal tracking-[.04em] font-barlow text-lg">
                  Saturday Music Fest - <span class="font-light">07:00 PM</span>
                </p>
              </div>
            </div>

            <div class="min-h-[323px] relative">
              <img src={event2} class="w-full h-full object-cover" />
              <div class="text-white absolute bottom-2 left-2 right-2 bg-black/50 p-5">
                <div class="w-[70px] h-[70px] bg-lion rounded-full flex items-center justify-center flex-col uppercase font-mont text-sm absolute top-0 right-3 -translate-y-[50%]">
                  <span class="font-bold tracking-widest text-xl inline-block">
                    06
                  </span>
                  <span class="tracking-widest inline-block -mt-[3px]">
                    may
                  </span>
                </div>
                <h3 class="font-gilda text-xl tracking-[.04em] uppercase">
                  wine tastings
                </h3>
                <p class="font-normal tracking-[.04em] font-barlow text-lg">
                  Special Wine Dinner - <span class="font-light">09:00 PM</span>
                </p>
              </div>
            </div>

            <div class="min-h-[323px] relative">
              <img src={event3} class="w-full h-full object-cover" />
              <div class="text-white absolute bottom-2 left-2 right-2 bg-black/50 p-5">
                <div class="w-[70px] h-[70px] bg-lion rounded-full flex items-center justify-center flex-col uppercase font-mont text-sm absolute top-0 right-3 -translate-y-[50%]">
                  <span class="font-bold tracking-widest text-xl inline-block">
                    10
                  </span>
                  <span class="tracking-widest inline-block -mt-[3px]">
                    jun
                  </span>
                </div>
                <h3 class="font-gilda text-xl tracking-[.04em] uppercase">
                  love is in the air
                </h3>
                <p class="font-normal tracking-[.04em] font-barlow text-lg">
                  Romantic Couple Nights -{" "}
                  <span class="font-light">06:00 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
