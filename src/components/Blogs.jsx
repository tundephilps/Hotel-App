import React from "react";
import Nav from "./Nav";
import pattern1 from "../images/decorated-pattern.svg";
import blog1 from "../images/blogs-1.png";
import blog2 from "../images/blogs-2.png";
import blog3 from "../images/blogs-3.png";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <Nav />
      <section class="py-16 px-3 bg-nero">
        <div class="container max-w-[1200px] mx-auto">
          <h2 class="font-gilda font-normal text-3xl sm:text-[46px] tracking-[.04em] text-center text-white mb-3">
            Blogs & News
          </h2>
          <div class="flex items-center justify-center">
            <img src={pattern1} alt="" />
          </div>

          <div class="grid mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
            <Link
              to="/Article"
              class="transition duration-300 ease-in-out hover:-translate-y-5"
            >
              <div class="min-h-[400px]">
                <img src={blog1} class="w-full h-full object-cover" alt="" />
              </div>
              <div class="bg-white text-coyote text-center text-lg sm:text-xl font-gilda font-medium tracking-widest uppercase py-6 px-4">
                historic restaurant renovation
              </div>
            </Link>

            <Link
              to="/Article"
              class="transition duration-300 ease-in-out hover:-translate-y-5"
            >
              <div class="min-h-[400px]">
                <img src={blog2} class="w-full h-full object-cover" alt="" />
              </div>
              <div class="bg-white text-coyote text-center text-lg sm:text-xl font-gilda font-medium tracking-widest uppercase py-6 px-4">
                historic restaurant renovation
              </div>
            </Link>

            <Link
              to="/Article"
              class="transition duration-300 ease-in-out hover:-translate-y-5"
            >
              <div class="min-h-[400px]">
                <img src={blog3} class="w-full h-full object-cover" alt="" />
              </div>
              <div class="bg-white text-coyote text-center text-lg sm:text-xl font-gilda font-medium tracking-widest uppercase py-6 px-4">
                historic restaurant renovation
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
