import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-2 md:px-10">
      <div className="rounded-tl-3xl rounded-br-3xl bg-zinc-200 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center overflow-hidden md:px-10">
        
        {/* Mission Section */}
        <div className="relative z-10 p-6 rounded-xl pl-10 ">
          <span className="z-10 text-green-500 font-semibold text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span> WHAT WE DO!
          </span>
          <h2 className="z-10 text-4xl font-bold mt-4 leading-tight">
            GreenGlide makes<br /> urban travel cleaner & easier
          </h2>
          <p className="z-10 mt-4 text-gray-500 mb-20">
            We provide flexible electric scooter rental plans for individuals, 
            campuses, corporates, and institutions — helping reduce pollution 
            while making your daily commute more affordable and convenient.
          </p>
          <div className="absolute bottom-0 left-0 mt-8 -z-10">
            <img
              src="pricingImg.webp" // Replace with actual GreenGlide scooter image
              alt="GreenGlide Electric Scooter"
              className="w-full -z-10 max-w-sm scale-[1.5] opacity-20"
            />
          </div>
        </div>

        {/* Weekly Plan */}
        <div className="bg-white shadow p-8 flex flex-col items-start rounded-tl-3xl rounded-br-3xl mx-6">
          <div className="text-green-500 text-4xl mb-4">📅</div>
          <h3 className="text-xl font-semibold mb-4">Weekly Plan</h3>
          <p className="text-4xl font-bold mb-1">₹699</p>
          <p className="text-gray-500 mb-6">/week</p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" /> Unlimited rides (within city limits)
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" /> Free maintenance & servicing
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" /> GPS tracking & app control
            </li>
          </ul>
          <button className="mt-6 bg-white border border-gray-300 rounded-full px-6 py-3 text-black hover:bg-gray-100 flex items-center gap-2">
            GET STARTED →
          </button>
        </div>

        {/* Monthly Plan */}
        <div className="bg-black text-white shadow p-8 flex flex-col items-start rounded-tl-3xl rounded-br-3xl mb-10 md:mb-0 mx-6">
          <div className="text-green-500 text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-4">Monthly Plan</h3>
          <p className="text-4xl font-bold mb-1">₹2,499</p>
          <p className="text-gray-400 mb-6">/month</p>
          <ul className="space-y-3 text-gray-300 ">
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" /> Best value for regular commuters
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" /> Priority customer support
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" /> Charging included at partner stations
            </li>
          </ul>
          <button className="mt-6 bg-black border border-gray-300 rounded-full px-6 py-3 text-white hover:bg-gray-900 flex items-center gap-2">
            SUBSCRIBE →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
