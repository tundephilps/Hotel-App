import React from "react";
import Nav from "./Nav";

const KnowMore = () => {
  return (
    <>
      <Nav />
      <section class="w-full">
        <div class="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div class="flex w-full mx-auto text-left">
            <div class="relative flex-col items-center mx-auto">
              <div class="inline-flex items-center text-left">
                <div class="relative items-center mx-auto lg:inline-flex">
                  <div class="items-start text-left lg:inline-flex">
                    <div class="lg:pr-16">
                      <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 lg:text-5xl lg:max-w-7xl">
                        Stay ahead of <br class="hidden lg:block" />
                        latest NewsLetters & info from our Business
                      </h1>
                    </div>
                    <div>
                      <p class="max-w-md mt-4 text-base text-gray-500 md:max-w-xl lg:mt-0">
                        Leverage agile frameworks to provide a robust synopsis
                        for high level overviews.
                      </p>
                      <form
                        action=""
                        method="post"
                        id="revue-form"
                        name="revue-form"
                        target="_blank"
                        class="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl sm:max-w-lg sm:flex"
                      >
                        <div class="flex-1 min-w-0 revue-form-group">
                          <label for="member_email" class="sr-only">
                            Email address
                          </label>
                          <input
                            id="cta-email"
                            type="email"
                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            placeholder="Enter your email  "
                          />
                        </div>
                        <div class="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                          <button
                            type="submit"
                            value="Subscribe"
                            name="member[subscribe]"
                            id="member_submit"
                            class="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                          >
                            Notify me
                          </button>
                        </div>
                      </form>
                      <div class="sm:max-w-lg sm:flex md:mx-auto">
                        <p class="mt-3 text-xs text-gray-500">
                          By subscribing, you agree with Our {""}
                          <a
                            target="_blank"
                            href="https://www.getrevue.co/terms"
                          >
                            {""} Terms of Service{""}
                          </a>
                          {""} and {""}
                          <a
                            target="_blank"
                            href="https://www.getrevue.co/privacy"
                          >
                            {""} Privacy Policy
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-12">
                <div
                  class="flex flex-col items-center justify-center py-24 mx-auto rounded-lg max-w-7xl h-[90vh] bg-no-repeat bg-cover "
                  style={{
                    backgroundImage:
                      "url(https://image.cnbcfm.com/api/v1/image/105778433-1551897628371balcony2fpool.jpg?v=1551897664&w=1600&h=900)",
                  }}
                >
                  <div class="object-cover object-center  rounded-xl bg-gray-500 h-40 w-[40%] opacity-75 flex items-center justify-center px-4">
                    <blockquote class="text-xl italic font-semibold text-center text-gray-900 dark:text-white">
                      <p>
                        "This Hotel is just awesome. It contains tons of
                        predesigned Luxury at its finest making it feel like
                        heaven. Perfect choice for your next vacation."
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KnowMore;
