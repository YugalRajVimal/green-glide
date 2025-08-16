import React from "react";
import { Link } from "react-router-dom";

const ScooterRentalSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 px-4 md:px-16"
      style={{
        backgroundImage: "url('/bg.jpg')", // Replace with your dark city background
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-white text-xl md:text-2xl font-medium leading-relaxed">
          Green Glide e-Scooters are available on Rent for Corporates, SME's,
          PSU, Government & Educational Institutions.
        </h2>
        <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
          <button className="mt-8 px-6 py-3 bg-green-500 text-white font-medium rounded-full shadow-lg hover:bg-green-600 transition">
            CONTACT US
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ScooterRentalSection;
