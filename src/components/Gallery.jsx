import React from "react";
import Nav from "./Nav";
import gallery1 from "../images/gallery-1.png";
import gallery2 from "../images/gallery-2.png";
import gallery3 from "../images/gallery-3.png";
import gallery4 from "../images/gallery-4.png";
import gallery5 from "../images/gallery-5.png";
import gallery6 from "../images/gallery-6.png";
import pattern2 from "../images/decorated-pattern-2.svg";

const Gallery = () => {
  return (
    <>
      <Nav />
      <section class="py-16 px-3 bg-light-gray">
        <div class="container max-w-[1200px] mx-auto">
          <h2 class="font-gilda font-normal text-3xl text-[46px] tracking-[.04em] text-coyote text-center mb-3">
            Gallery
          </h2>
          <div class="flex items-center justify-center">
            <img src={pattern2} alt="" />
          </div>
          <div class="grid gap-3 sm:grid-cols-2 md:grid-cols-3 mt-10">
            <div class="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
              <img src={gallery1} class="w-full h-full object-cover" alt="" />
              <div class="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                <span class="font-barlow text-lg font-normal">
                  Fancy Sleeping Room
                </span>
                <ul class="flex items-center">
                  <li class="text-sm">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div class="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
              <img src={gallery2} class="w-full h-full object-cover" alt="" />
              <div class="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                <span class="font-barlow text-lg font-normal">
                  Fancy Sleeping Room
                </span>
                <ul class="flex items-center">
                  <li class="text-sm">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div class="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
              <img src={gallery3} class="w-full h-full object-cover" alt="" />
              <div class="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                <span class="font-barlow text-lg font-normal">
                  Fancy Sleeping Room
                </span>
                <ul class="flex items-center">
                  <li class="text-sm">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div class="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
              <img src={gallery4} class="w-full h-full object-cover" alt="" />
              <div class="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                <span class="font-barlow text-lg font-normal">
                  Fancy Sleeping Room
                </span>
                <ul class="flex items-center">
                  <li class="text-sm">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div class="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
              <img src={gallery5} class="w-full h-full object-cover" alt="" />
              <div class="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                <span class="font-barlow text-lg font-normal">
                  Fancy Sleeping Room
                </span>
                <ul class="flex items-center">
                  <li class="text-sm">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div class="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
              <img src={gallery6} class="w-full h-full object-cover" alt="" />
              <div class="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                <span class="font-barlow text-lg font-normal">
                  Fancy Sleeping Room
                </span>
                <ul class="flex items-center">
                  <li class="text-sm">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                  <li class="text-sm ms-1">
                    <i class="fas fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
