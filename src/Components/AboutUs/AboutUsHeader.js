import React from "react";

const AboutUsHero = () => {
  return (
    <div
      className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/aboutUsBannerImg.jpg')", // Replace with your image path
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold mb-3">About Us</h1>
        <div className="flex items-center justify-center gap-2 bg-white text-black rounded-full px-4 py-1 text-sm">
          <span>Green Glide</span>
          <span className="text-gray-500">{`»`}</span>
          <span className="font-medium">About Us</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
