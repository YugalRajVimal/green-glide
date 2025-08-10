import React from "react";
import { IoLeafOutline } from "react-icons/io5";
import { MdElectricScooter } from "react-icons/md";
import { LuSmartphone } from "react-icons/lu";
import { FaChargingStation, FaCoins, FaMapMarkerAlt } from "react-icons/fa";

const leftFeatures = [
  {
    title: "Eco-Friendly Rides",
    description: "100% electric, zero-emission scooters for cleaner, greener cities.",
    icon: <IoLeafOutline size={28} className="text-white" />,
  },
  {
    title: "Flexible Rental Plans",
    description: "Weekly, monthly & rent-to-own options to suit every rider’s needs.",
    icon: <MdElectricScooter size={28} className="text-white" />,
  },
  {
    title: "Seamless App Experience",
    description: "Locate, unlock & ride instantly using our user-friendly mobile app.",
    icon: <LuSmartphone size={28} className="text-white" />,
  },
];

const rightFeatures = [
  {
    title: "543+ Charging Stations",
    description: "Access an extensive charging network across Delhi NCR for convenience.",
    icon: <FaChargingStation size={28} className="text-white" />,
  },
  {
    title: "Affordable & Transparent Pricing",
    description: "No hidden fees — pay per ride or save more with long-term plans.",
    icon: <FaCoins size={28} className="text-white" />,
  },
  {
    title: "Widespread Availability",
    description: "Find GreenGlide scooters in key urban hotspots and busy routes.",
    icon: <FaMapMarkerAlt size={28} className="text-white" />,
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 bg-white px-10">
      {/* Top heading */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="tracking-wider text-gray-700">Why Choose GreenGlide</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mt-3">
          Advantages of Riding with GreenGlide
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Experience fast, affordable, and eco-conscious travel with our electric scooters — designed to make urban commuting smoother, cleaner, and more enjoyable.
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left features */}
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          {leftFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 max-w-xs">
              <div className="bg-green-500 p-3 rounded">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scooter image */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
          <img
            src="/advantageImg.webp"
            alt="GreenGlide e-scooter"
            className="w-[300px] sm:w-[400px] md:w-[500px] scale-[1.2]"
          />
        </div>

        {/* Right features */}
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          {rightFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 max-w-xs">
              <div className="bg-green-500 p-3 rounded">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
