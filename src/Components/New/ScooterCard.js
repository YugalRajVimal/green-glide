import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ScooterCard = () => {
  return (
    <div className="flex items-center gap-4 bg-white p-4">
      {/* Left Green Section */}
      <div className="flex flex-col justify-center bg-[#8CC63F] p-8 rounded-l-[40px] flex-1 relative">
        {/* Background watermark (optional, replace with SVG or image) */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <circle cx="60" cy="60" r="50" />
          </svg>
        </div>

        <h2 className="text-white font-bold text-3xl leading-snug z-10">
          Designed for the <br /> our roads.
        </h2>
        <p className="text-white mt-2 text-base z-10">
          Consectetur adipiscing elit sed do tempor <br />
          labor dolore magna aliqua quis suspendisse.
        </p>

        <button className="mt-6 bg-black text-white font-semibold px-6 py-3 rounded-[20px] flex items-center gap-3 w-fit z-10">
          BOOK NOW <FaArrowRight />
        </button>
      </div>

      {/* Right Image Section */}
      <div className="flex-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXawS7hIT_TngVjhJXedh3bbiV8tW1V7q2A&usqp=CAU"
          alt="Scooter"
          className="rounded-r-[40px] w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ScooterCard;
