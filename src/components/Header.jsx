import React from "react";
import map from "../images/icons/map-marker.svg";

import call from "../images/icons/call-calling.svg";
import calendar from "../images/icons/calendar.svg";
import instagram from "../images/icons/instagram.svg";

import pin from "../images/icons/pin.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="bg-header-image bg-cover bg-center bg-no-repeat min-h-screen flex flex-col overflow-hidden">
      <div class="header-top bg-eerie-black min-h-[48px] flex items-center font-barlow py-3">
        <div class=" container max-w-[1200px] mx-auto lg:flex lg:justify-between">
          <div class=" header-top-left flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start">
            <div class="flex py-1">
              <img src={map} class="w-[10px] mx-2" alt="" />
              <span class="text-platinum opacity-60 font-light text-sm">
                6390 Engelberg, Switzerland
              </span>
            </div>
            <div class="flex py-1 md:ms-5 lg:ms-[72px]">
              <img src={call} class="w-3 mx-2" alt="" />
              <span class="text-platinum opacity-60 font-light text-sm">
                +41 31 377 77 77
              </span>
            </div>
          </div>

          <ul class="flex items-center justify-center py-1">
            <li class="w-3 h-3 md:w-4 md:h-4 flex items-center justify-center mx-2">
              <a
                href="#"
                class="hover:opacity-80 transition ease-in-out duration-300"
              >
                <img src={instagram} alt="" />
              </a>
            </li>
            <li class="w-3 h-3 md:w-4 md:h-4 flex items-center justify-center mx-2">
              <a
                href="#"
                class="hover:opacity-80 transition ease-in-out duration-300"
              >
                <img src={pin} alt="" />
              </a>
            </li>
            <li class="w-3 h-3 md:w-4 md:h-4 flex items-center justify-center mx-2">
              <a
                href="#"
                class="hover:opacity-80 transition ease-in-out duration-300"
              >
                <img src="../src/images/icons/facebook.svg" alt="" />
              </a>
            </li>
            <li class="font-medium uppercase text-white ms-2 text-xs md:text-sm tracking-widest mt-[2px]">
              follow us
            </li>
          </ul>
        </div>
      </div>
      <div class="header-main px-3 flex-1 flex">
        <div class="container max-w-[1200px] mx-auto flex flex-col">
          <nav class="py-5 md:flex md:justify-between">
            <div class="flex justify-between">
              <a href="#" class="font-gilda text-[28px] font-normal text-lion">
                Ander<span class="text-white">Matt.</span>
              </a>
              <button
                type="button"
                class="text-white md:hidden"
                id="navbar-show-btn"
              >
                <i class="fas fa-bars"></i>
              </button>
            </div>
            <div class="navbar-box fixed top-0 right-0 w-[280px] h-full bg-white p-5 flex flex-col items-center font-barlow-cond translate-x-full transition duration-300 ease-in-out md:relative md:translate-x-0 md:bg-transparent md:flex-row md:h-auto md:w-auto md:p-0">
              <button
                type="button "
                class="absolute top-[18px] right-[18px] z-50 text-2xl hover:rotate-180 transition duration-300 ease-in-out md:hidden"
                id="navbar-hide-btn"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
              <ul class="flex flex-col w-full text-center mt-[60px] md:flex-row md:mt-0">
                <li class="py-3 border-b-[1px] border-solid md:py-0 md:border-none">
                  <a
                    href="/"
                    class="text-eerie-black uppercase text-md tracking-[.12em] font-medium hover:text-lion transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white"
                  >
                    Home
                  </a>
                </li>
                <li class="py-3 border-b-[1px] border-solid md:py-0 md:border-none">
                  <Link
                    to="/Rooms"
                    class="text-eerie-black uppercase text-md tracking-[.12em] font-medium hover:text-lion transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white"
                  >
                    rooms
                  </Link>
                </li>
                <li class="py-3 border-b-[1px] border-solid md:py-0 md:border-none">
                  <Link
                    to="/Blogs"
                    class="text-eerie-black uppercase text-md tracking-[.12em] font-medium hover:text-lion transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white"
                  >
                    Blogs
                  </Link>
                </li>
                <li class="py-3 border-b-[1px] border-solid md:py-0 md:border-none">
                  <Link
                    to="/Gallery"
                    class="text-eerie-black uppercase text-md tracking-[.12em] font-medium hover:text-lion transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white"
                  >
                    gallery
                  </Link>
                </li>
                <li class="py-3 md:py-0">
                  <Link
                    to="/Contact"
                    class="text-eerie-black uppercase text-md tracking-[.12em] font-medium hover:text-lion transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white"
                  >
                    contact
                  </Link>
                </li>
              </ul>

              <a
                href="#"
                class="w-full h-[42px] px-7 uppercase flex items-center justify-center bg-lion tracking-widest font-medium text-white mt-4 hover:bg-lion-dark md:mt-0 md:min-w-[140px] ms-6"
              >
                know more
              </a>
            </div>
          </nav>
          <div class="flex-1 flex items-center justify-stretch flex-col text-center py-12">
            <h1 class="text-2xl xs:text-[32px] text-white font-gilda tracking-[.04em] uppercase font-normal max-w-[800px] md:text-[42px]">
              An upcoming vacation gives us something to eagerly anticipate.
            </h1>
            <Link
              to="/Rooms"
              class="min-w-[158px] min-h-[48px] bg-transparent uppercase text-white border-2 font-barlow tracking-widest text-base font-normal inline-flex items-center justify-center mt-9 md:mt-[60px] hover:bg-white hover:text-black transition duration-300 ease-in-out"
            >
              Book a room
            </Link>

            <form class="font-barlow mt-16 bg-white w-full grid sm:grid-cols-2 lg:grid-cols-6">
              <div class="flex items-center justify-between px-3 py-4 border-[1px] border-solid">
                <input
                  data-toggle="datepicker"
                  type="text"
                  class="placeholder:text-eerie-black placeholder:uppercase text-sm outline-none border-none w-full"
                  placeholder="check in"
                />
                <span class="cursor-pointer">
                  <img src={calendar} />
                </span>
              </div>
              <div class="flex items-center justify-between px-3 py-4 border-[1px]">
                <input
                  data-toggle="datepicker"
                  type="text"
                  class="placeholder:text-eerie-black placeholder:uppercase text-sm outline-none border-none w-full"
                  placeholder="check out"
                />
                <span class="cursor-pointer">
                  <img src={calendar} />
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

              <Link
                to="/Rooms"
                type="button"
                class="bg-lion font-barlow h-full min-h-[52px] flex items-center justify-center uppercase text-white transition duration-300 ease-in-out hover:bg-lion-dark"
              >
                check now
              </Link>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
