// src/components/EVChargingSection.jsx
import React from "react";
import { FaChargingStation, FaTree, FaCoins } from "react-icons/fa";

const EVChargingSection = () => {
  return (
    <div className="bg-[#f7f7f7] py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/ev-charging.png"
            alt="EV Charging"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Electric Scooters and EV Charging Station
          </h2>
          <h3 className="text-green-600 font-semibold text-lg mb-3">
            Transform Your Area with Affordable EV Charging Stations and
            Eco-Friendly Electric Scooters
          </h3>
          <p className="text-gray-700 mb-4">
            Zeway works as a mobility partner with Corporate, Educational Institutions,
            Universities, City Development Authorities, Railways, Metro, Food Chains,
            Service Delivery Companies, and Housing Societies to install
            <span className="font-semibold"> affordable EV charging stations</span>. We focus
            on providing <span className="font-semibold">eco-friendly electric scooters</span> and
            <span className="font-semibold"> affordable EV charging</span> solutions to make
            transportation more sustainable.
          </p>
          <p className="text-gray-700 mb-6">
            Zeway is looking ahead to tie up with Public Parking, Local Government,
            and Enterprises on a profit-sharing basis to optimize
            <span className="font-semibold"> EV charging stations</span> across Delhi NCR,
            providing a greener future for all.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-md p-5 shadow-md text-center">
              <FaChargingStation className="text-2xl mx-auto mb-2" />
              <p className="font-semibold">Get Charging Station installed for Free</p>
            </div>
            <div className="bg-white rounded-md p-5 shadow-md text-center">
              <FaTree className="text-2xl mx-auto mb-2" />
              <p className="font-semibold">Convert your area in green campus</p>
            </div>
            <div className="bg-white rounded-md p-5 shadow-md text-center">
              <FaCoins className="text-2xl mx-auto mb-2" />
              <p className="font-semibold">Earn while away from work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVChargingSection;
