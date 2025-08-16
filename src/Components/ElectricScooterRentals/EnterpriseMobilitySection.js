import React from "react";
import { Link } from "react-router-dom";

const EnterpriseMobilitySection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">
          <span className="text-green-500 font-serif">Enterprise </span>
          <span className="text-gray-900 font-serif">Mobility Solution</span>
        </h2>
        <p className="text-gray-700 mt-6">
          Green Glide works as a mobility partner with Corporate, Educational
          Institutions, Universities, City Development Authorities, Railways,
          Metro, Food Chains, Service Delivery Companies and Housing Societies
          to provide affordable rental schemes of Green Glide scooters.
        </p>
        <p className="text-gray-700 mt-4">
          Green Glide works as a mobility partner with Corporate, Educational
          Institutions, Universities, City Development Authorities, Railways,
          Metro, Food Chains, Service Delivery Companies and Housing Societies
          to provide affordable rental schemes of Green Glide scooters.
        </p>
        <p className="text-gray-700 mt-4">
          Enterprise mobility solution includes Vehicle, Charging Station and
          onsite servicing.
        </p>
        <Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>
        <button className="mt-8 px-6 py-3 bg-green-500 text-white font-medium rounded-full shadow-lg hover:bg-green-600 transition">
          KNOW MORE
        </button>
        </Link>
      </div>
    </section>
  );
};

export default EnterpriseMobilitySection;
