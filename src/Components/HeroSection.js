// // src/components/HeroSection.jsx
// const HeroSection = () => {
//   return (
//     <div className="relative h-[80vh] w-full overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/video-bg.mp4"
//         autoPlay
//         muted
//         loop
//         playsInline
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center px-4">
//         {/* <img src="/logo.png" alt="Center Logo" className="h-40 mb-6" /> */}
//         <h1 className="text-4xl md:text-5xl font-extrabold">
//           Redefining the <span className="text-green-400">NEW AGE</span> of
//           Mobility
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// HeroSection.jsx

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLeafOutline } from "react-icons/io5";
import { LuSmartphone } from "react-icons/lu";
import { MdElectricScooter } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="overflow-hidden flex flex-col justify-center">
      <div className="relative bg-[#8cc63f] flex justify-start min-h-[75vh]">
        {/* Left Social Icons */}
        <div className="absolute z-20 left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 text-black text-xs font-bold">
          <span className="[writing-mode:vertical-rl] rotate-180">
            FOLLOW US
          </span>
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaLinkedinIn />
        </div>

        {/* Hero Content */}
        <div className="relative container ml-8 z-30  pl-8 pr-4 py-20 flex items-center justify-between">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold leading-tight text-white">
              Your City. <br />
              <span className="text-black">
                Your <span className="font-serif">Eco</span>-Friendly
              </span>{" "}
              Ride.
            </h1>
            <p className="mt-4 text-lg text-black/80">
              GreenGlide makes urban travel easy, affordable, and sustainable
              with app-connected e-scooters. Choose flexible rental plans and
              ride emission-free.
            </p>

            {/* Features */}
            <div className="flex gap-10 mt-10">
              <div className="flex flex-col items-start">
                <IoLeafOutline className="text-4xl mb-2" />
                <p className="font-semibold">100% Electric</p>
                <p className="text-sm text-black/70">
                  Zero emissions, cleaner air
                </p>
              </div>

              <div className="flex flex-col items-start">
                <LuSmartphone className="text-4xl mb-2" />
                <p className="font-semibold">App Powered</p>
                <p className="text-sm text-black/70">
                  Locate, unlock & ride instantly
                </p>
              </div>

              <div className="flex flex-col items-start">
                <MdElectricScooter className="text-4xl mb-2" />
                <p className="font-semibold">Flexible Plans</p>
                <p className="text-sm text-black/70">
                  Weekly, monthly & rent-to-own
                </p>
              </div>
            </div>

            {/* Book Now Button */}
            <button className="mt-10 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-black/90 transition">
              BOOK YOUR RIDE →
            </button>
          </div>

          {/* Right Image */}
          <div className="absolute z-20 -bottom-[260px] md:-bottom-[100px] right-0 lg:-right-[150px]">
            <img
              src="/heroImg.webp" // Replace with your transparent scooter image
              alt="GreenGlide e-Scooter"
              className="max-h-[350px] lg:max-h-[550px] xl:max-h-[650px] object-contain"
            />
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute z-10 border-[55px] -left-[100px] -top-[100px] border-[#a4d16a] h-[400px] aspect-[1/1] rounded-full"></div>
        <div className="absolute z-10 border-[55px] -right-[100px] -bottom-[100px] border-[#a4d16a] h-[600px] aspect-[1/1] rounded-full"></div>
      </div>

      <div className="h-[150px] bg-white pb-[300px] md:pb-10 z-20"></div>
    </section>
  );
};

export default HeroSection;
