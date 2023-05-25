import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div class="header-main px-3 flex-1 flex bg-eerie-black">
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
                <Link
                  to="/"
                  class="text-eerie-black uppercase text-md tracking-[.12em] font-medium hover:text-lion transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white"
                >
                  Home
                </Link>
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

            <Link
              to="/KnowMore"
              class="w-full h-[42px] px-7 uppercase flex items-center justify-center bg-lion tracking-widest font-medium text-white mt-4 hover:bg-lion-dark md:mt-0 md:min-w-[140px] ms-6"
            >
              know more
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
