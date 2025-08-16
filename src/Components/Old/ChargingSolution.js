// src/components/ChargingSolution.jsx
import React from "react";
import {
  FaBatteryFull,
  FaNetworkWired,
  FaGasPump,
  FaCar,
} from "react-icons/fa";

const ChargingSolution = () => {
  return (
    <div className="relative">
      {/* Fixed background image */}
      {/* <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center -z-10"
        style={{ backgroundImage: `url('/bg.jpg')` }}
      ></div> */}

      {/* Overlay to darken image */}
      {/* <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 -z-10"></div> */}

      {/* Content */}
      <div className="min-h-screen flex justify-center items-center text-white text-center py-24 px-4">
        <div className="text-3xl md:text-4xl font-bold mb-12 w-1/3 h-full flex justify-center items-center">
          Green Glide EV Charging Solutions
        </div>

        {/* Grid Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 w-2/3">
          {/* Card 1 */}
          <div className="bg-purple-800 p-6 md:p-8 text-left text-white">
            <div className="flex items-center mb-4">
              <FaBatteryFull className="text-2xl mr-3" />
              <h3 className="font-bold text-lg">EV Charging</h3>
            </div>
            <p className="text-sm">
              We provide next-generation EV charging station solutions tailored
              for eco-friendly electric scooters. Whether at home, the
              workplace, or a public plug-in point, we guarantee a consistent
              plug-in experience for your reasonable electric vehicle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-100 p-6 md:p-8 text-left text-black">
            <div className="flex items-center mb-4">
              <FaNetworkWired className="text-2xl mr-3" />
              <h3 className="font-bold text-lg">Our Network</h3>
            </div>
            <p className="text-sm">
              Easily connect your smartphone to a Green Glide charging station
              using our intuitive app. Start charging, manage the duration, and
              monitor energy usage in real-time, ensuring a smooth and efficient
              process for your affordable EV charging needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-lime-400 p-6 md:p-8 text-left text-black">
            <div className="flex items-center mb-4">
              <FaGasPump className="text-2xl mr-3" />
              <h3 className="font-bold text-lg">Charging Point</h3>
            </div>
            <p className="text-sm">
              We offer the ultimate solution for powering your electric
              scooters. Our EV charging platform is fully compatible with
              advanced charger software, ensuring reliability and ease of use.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-purple-700 p-6 md:p-8 text-left text-white">
            <div className="flex items-center mb-4">
              <FaCar className="text-2xl mr-3" />
              <h3 className="font-bold text-lg">Electric Driving</h3>
            </div>
            <p className="text-sm">
              Experience the convenience of driving eco-friendly electric
              scooters without gears. Our electric vehicles are designed for
              safety, simplicity, and sustainability, making them the perfect
              choice for the modern commuter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargingSolution;
