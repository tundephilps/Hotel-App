import React from "react";

const Hero = () => {
  return (
    <>
      <div>
        <div class="flex-1 flex items-center justify-stretch flex-col text-center py-12">
          <h1 class="text-2xl xs:text-[32px] text-white font-gilda tracking-[.04em] uppercase font-normal max-w-[800px] md:text-[42px]">
            An upcoming vacation gives us something to eagerly anticipate.
          </h1>
          <a
            href="#"
            class="min-w-[158px] min-h-[48px] bg-transparent uppercase text-white border-2 font-barlow tracking-widest text-base font-normal inline-flex items-center justify-center mt-9 md:mt-[60px] hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            know more
          </a>

          <form class="font-barlow mt-16 bg-white w-full grid sm:grid-cols-2 lg:grid-cols-6">
            <div class="flex items-center justify-between px-3 py-4 border-[1px] border-solid">
              <input
                data-toggle="datepicker"
                type="text"
                class="placeholder:text-eerie-black placeholder:uppercase text-sm outline-none border-none w-full"
                placeholder="check in"
              />
              <span class="cursor-pointer">
                <img src="../assets/images/icons/calendar.svg" />
              </span>
            </div>
            <div class="flex items-center justify-between px-3 py-4 border-[1px]">
              <input
                data-toggle="datepicker"
                type="text"
                class="placeholder:text-eerie-black placeholder:uppercase text-sm outline-none border-none w-full"
                placeholder="check in"
              />
              <span class="cursor-pointer">
                <img src="../assets/images/icons/calendar.svg" />
              </span>
            </div>
            <div class="px-2 py-4 border-[1px]">
              <select class="min-w-full uppercase text-eerie-black outline-none">
                <option disabled selected>
                  adult
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div class="px-2 py-4 border-[1px]">
              <select class="min-w-full uppercase text-eerie-black outline-none">
                <option disabled selected>
                  children
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div class="px-2 py-4 border-[1px]">
              <select class="min-w-full uppercase text-eerie-black outline-none">
                <option selected>1 room</option>
                <option>2 room</option>
                <option>3 room</option>
              </select>
            </div>
            <button
              type="button"
              class="bg-lion font-barlow h-full min-h-[52px] flex items-center justify-center uppercase text-white transition duration-300 ease-in-out hover:bg-lion-dark"
            >
              check now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
