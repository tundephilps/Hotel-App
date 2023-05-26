import { Offcanvas, Ripple, Dropdown, initTE } from "tw-elements";

import MenuIcon from "@mui/icons-material/Menu";
initTE({ Offcanvas, Ripple, Dropdown });

import React from "react";
import { Menu } from "@mui/material";
import Siderbar from "./Siderbar";

const Drawer = () => {
  return (
    <div class="flex space-x-2">
      <div>
        <button
          class="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-lion hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-lion focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-lion-dark active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          type="button"
          data-te-offcanvas-toggle
          data-te-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <MenuIcon />
        </button>

        <div
          class="invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-96 max-w-full -translate-x-full flex-col border-none  bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          data-te-offcanvas-init
        >
          <div class="flex items-center justify-between p-4">
            <h5
              class="mb-0 font-semibold leading-normal"
              id="offcanvasExampleLabel"
            ></h5>
            <button
              type="button"
              class="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-te-offcanvas-dismiss
            >
              <span class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
          <Siderbar />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
