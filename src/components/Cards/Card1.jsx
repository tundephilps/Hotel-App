import React from "react";
import PropTypes from "prop-types";
import card1 from "../../images/card1.jpg";

function Card1(props) {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Luxury Suite
            </h1>
            <div className="flex mb-4">
              <a
                href
                className={`flex-grow text-${props.theme}-500 border-b-2 border-lion py-2 text-lg px-1`}
              >
                Description
              </a>
              <a
                href
                className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
              >
                Reviews
              </a>
              <a
                href
                className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
              >
                Details
              </a>
            </div>
            <p className="leading-relaxed mb-4">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.
            </p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Bathroom</span>
              <span className="ml-auto text-gray-900">2</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Wifi</span>
              <span className="ml-auto text-gray-900">Yes</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Kitchen</span>
              <span className="ml-auto text-gray-900">1</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $120.00/Night
              </span>
              <button
                className={`flex ml-auto text-white bg-lion border-0 py-2 px-6 focus:outline-none hover:bg-lion rounded`}
              >
                Book
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={card1}
          />
        </div>
      </div>
    </section>
  );
}

Card1.defaultProps = {
  theme: "indigo",
};

Card1.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Card1;
