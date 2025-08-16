import React from "react";

const ScooterBusinessSection = () => {
  return (
    <section className="w-full px-6 py-12 flex flex-col mx-auto md:flex-row items-center gap-8 max-w-7xl">
      {/* Left Content */}
      <div className="flex-1">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-green-500"></div>
          <h2 className="text-lg md:text-xl font-light text-green-500 font-serif">
            Affordable and Eco-friendly
          </h2>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-serif">
          E-Scooter rental for Businesses
        </h1>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          Green Glide provides an{" "}
          <span className="font-semibold">
            affordable electric scooter rental
          </span>{" "}
          service, offering an{" "}
          <span className="font-semibold">eco-friendly e-scooter rental</span>{" "}
          solution that makes getting around easy and cost-effective. Whether
          you’re looking to{" "}
          <span className="font-semibold">hire e-scooters</span> for personal or
          professional use, Green Glide collaborates with a diverse range of
          groups, including companies, schools, universities, city development
          offices, railways, metro stations, restaurants, delivery services, and
          housing communities, to deliver tailored rental plans for our Green
          Glide scooters.
        </p>

        <p className="text-gray-700 mb-6">
          Green Glide is committed to promoting{" "}
          <span className="font-semibold">green transportation</span> while
          addressing the unique mobility needs of businesses and communities.
        </p>

        {/* Google Play Button */}
        <a href="#" className="inline-block flex gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="h-12"
          />
           <img
            src="/appStore.png"
            alt="Get it on Google Play"
            className="h-12"
          />
        </a>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <img
            src="/scooterImages/komakiRed.png"
            alt="Scooter"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ScooterBusinessSection;
