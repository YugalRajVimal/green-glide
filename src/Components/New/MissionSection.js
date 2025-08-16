import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineElectricScooter } from "react-icons/md";
import { IoLeafOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const MissionSection = () => {
  return (
    <section className="bg-white pb-16 px-6 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Images */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center">
          {/* Main image */}
          <img
            src="/chargingStation.jpg" // Replace with actual image
            alt="GreenGlide Charging Station"
            className="shadow-lg max-w-[250px] md:max-w-[320px] mr-auto rounded-tl-3xl md:translate-x-[50px] md:translate-y-[50px]"
          />

          {/* Overlapping image */}
          <img
            src="/twoRiders.webp" // Replace with actual image
            alt="GreenGlide Riders"
            className="rounded-lg shadow-lg max-w-[250px] md:max-w-[320px] border-4 border-white ml-auto rounded-br-3xl md:-translate-x-[50px] md:-translate-y-[50px]"
          />

          {/* Badge */}
          <div className="absolute top-0 md:top-20 right-10 md:right-20 transform translate-x-1/3 bg-[#8cc63f] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-lg border-4 border-white">
            <span className="text-2xl font-bold">543+</span>
            <span className="text-sm text-center">
              Charging Stations in NCR
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <span className="flex items-center gap-2 text-sm font-semibold uppercase font-serif">
            <span className="w-2 h-2 rounded-full bg-[#8cc63f] "></span>
            What We Do
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-snug font-serif">
            Driving Sustainable Urban Mobility
          </h2>
          <p className="mt-4 text-gray-600">
            At GreenGlide, we make eco-friendly city travel easy and affordable.
            Our app-connected electric scooters help reduce congestion, cut
            carbon emissions, and provide a convenient alternative for daily
            commutes, leisure rides, and last-mile connections.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-3">
              <IoLeafOutline className="text-[#8cc63f] text-3xl" />
              <div>
                <p className="font-semibold">Eco-Friendly Rides</p>
                <p className="text-sm text-gray-600">
                  100% electric, zero-emission scooters for cleaner cities.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdOutlineElectricScooter className="text-[#8cc63f] text-3xl" />
              <div>
                <p className="font-semibold">Flexible Rentals</p>
                <p className="text-sm text-gray-600">
                  Weekly, monthly & rent-to-own plans for every rider.
                </p>
              </div>
            </div>
          </div>

          {/* Bullet points */}
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-2 font-medium">
              <FaCheckCircle className="text-[#8cc63f]" /> Find & unlock
              scooters instantly with our mobile app.
            </li>
            <li className="flex items-center gap-2 font-medium">
              <FaCheckCircle className="text-[#8cc63f]" /> Access 543+ public
              charging stations across Delhi NCR.
            </li>
          </ul>

          {/* Button */}
          <Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>
            <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-black/90 transition">
              LEARN MORE →
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="container mx-auto mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold">543+</h3>
          <p className="text-gray-500 text-sm mt-1">
            Public charging stations in Delhi NCR
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">245+</h3>
          <p className="text-gray-500 text-sm mt-1">
            Battery-swapping facilities for quick turnaround
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">100%</h3>
          <p className="text-gray-500 text-sm mt-1">
            Zero-emission electric scooters for sustainable cities
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
