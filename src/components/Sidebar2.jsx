import {
  BookOutlined,
  BrowseGalleryOutlined,
  Close,
  ContactEmergency,
  Home,
  HomeOutlined,
  Hotel,
  HotelOutlined,
  Menu,
  Photo,
  Room,
  RoomOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar2 = () => {
  return (
    <>
      <button
        type="button"
        class=" hs-overlay-backdrop-open py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold  text-white hover:bg-lion focus:outline-none focus:ring-2 focus:ring-lion-dark focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        data-hs-overlay="#hs-overlay-unstyled"
        aria-controls="hs-overlay-unstyled"
      >
        <Menu />
      </button>

      <div
        data-hs-overlay-backdrop-container=""
        id="hs-overlay-unstyled"
        class="hs-overlay hs-overlay-backdrop-open hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xs  w-full z-[60]  border-r bg-lion border-gray-700"
        tabindex="-1"
      >
        <div class="flex justify-between items-center py-3 px-4 ">
          <h3 class="font-bold text-gray-800 dark:text-white">Welcome</h3>
          <button
            type="button"
            class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            data-hs-overlay="#hs-overlay.hidden"
          >
            <Close />
          </button>
        </div>
        <div class="p-4 sm:text-xl">
          <div class="px-6">
            <Link
              class="flex-none text-xl font-semibold dark:text-white"
              to="/"
              aria-label="Brand"
            >
              AnderMatt
            </Link>
          </div>
          <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap ">
            <ul class="space-y-1.5 ">
              <li>
                <Link
                  class="flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white"
                  to="/"
                >
                  <HomeOutlined />
                  Home
                </Link>
              </li>

              <li class="hs-accordion" id="bu-users-accordion">
                <Link
                  class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                  to="/Rooms"
                >
                  <HotelOutlined />
                  Rooms
                </Link>
              </li>

              <li>
                <Link
                  class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                  to="/Blogs"
                >
                  <BookOutlined />
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                  to="/Gallery"
                >
                  <Photo />
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                  to="/Contact"
                >
                  <ContactEmergency />
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar2;
