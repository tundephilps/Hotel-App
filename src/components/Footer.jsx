import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="bg-nero py-16 px-3">
        <div class="grid max-w-[1200px] mx-auto gap-8 text-center md:grid-cols-2 md:text-start lg:grid-cols-footer">
          <div class="md:me-2 lg:me-3">
            <a
              href="index.html"
              class="text-lion font-gilda font-normal text-2xl tracking-[.04em]"
            >
              Ander<span class="text-white">Matt.</span>
            </a>
            <p class="text-white font-light font-barlow text-base mt-3 max-w-[480px] mx-auto md:ms-0">
              Welcome to the best five-star deluxe hotel in Swiss city. Hotel
              elementum sesue the aucan vestibulum aliquam justo in sapien
              rutrum volutpat.
            </p>
          </div>

          <div>
            <h4 class="inline-block font-gilda tracking-[.04em] text-lg text-white capitalize relative after:absolute after:content-[''] after:left-0 after:-bottom-0 after:h-[1px] after:w-full after:bg-coyote pb-1 mb-4">
              quick link
            </h4>
            <ul>
              <li class="my-2">
                <a
                  href="#"
                  class="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                >
                  our services
                </a>
              </li>
              <li class="my-2">
                <a
                  href="#"
                  class="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                >
                  book
                </a>
              </li>
              <li class="my-2">
                <a
                  href="#"
                  class="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                >
                  about hotel
                </a>
              </li>
              <li class="my-2">
                <a
                  href="#"
                  class="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                >
                  blogs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="inline-block font-gilda tracking-[.04em] text-lg text-white capitalize relative after:absolute after:content-[''] after:left-0 after:-bottom-0 after:h-[1px] after:w-full after:bg-coyote pb-1 mb-4">
              explore
            </h4>
            <ul>
              <li class="my-2">
                <a
                  href="#"
                  class="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                >
                  rooms & suites
                </a>
              </li>
              <li class="my-2">
                <a
                  href="#"
                  class="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                >
                  spa & wellness
                </a>
              </li>
              <li class="my-2">
                <a
                  href="#"
                  class="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                >
                  special offers
                </a>
              </li>
              <li class="my-2">
                <a
                  href="#"
                  class="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                >
                  restaurant
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="inline-block font-gilda tracking-[.04em] text-lg text-white capitalize relative after:absolute after:content-[''] after:left-0 after:-bottom-0 after:h-[1px] after:w-full after:bg-coyote pb-1 mb-4">
              contact
            </h4>
            <ul>
              <li class="my-2 grid  justify-center md:justify-start">
                <span class="text-white">
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <span class="text-white/50 font-light">
                  6390 Engelberg, Switzerland
                </span>
              </li>
              <li class="my-2 grid  justify-center md:justify-start ">
                <span class="text-white">
                  <i class="fas fa-phone"></i>
                </span>
                <span class="text-white/50 font-light">+41 31 377 77 77</span>
              </li>
              <li class="my-2 grid  justify-center md:justify-start">
                <span class="text-white">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="text-white/50 font-light">
                  info.adermatt@mail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="py-4 text-white font-normal font-barlow uppercase text-center tracking-widest bg-nero-dark">
        <p class="text-sm">&copy; copyright 2023 by Tunde Philps</p>
      </div>
    </footer>
  );
};

export default Footer;
