import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className="w-full flex flex-col items-center py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-sm font-medium text-gray-700 uppercase">
            Get in Touch
          </span>
        </div>
        <h2 className="text-4xl font-bold text-black mb-3">
          We’d Love To Help You
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Please feel free to get in touch using the form below. We’d love to
          hear your thoughts &amp; answer any questions you may have!
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Location */}
        <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-6 w-80">
          <div className="text-green-500 text-4xl">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h3 className="font-bold text-lg">Our Location</h3>
            <p className="text-gray-500">
              456, Lorem Street, New York, 33454, NY.
            </p>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-6 w-80">
          <div className="text-green-500 text-4xl">
            <MdAccessTime />
          </div>
          <div>
            <h3 className="font-bold text-lg">Phone Number</h3>
            <p className="text-gray-500">Emergency Cases</p>
            <p className="text-gray-500">+1 (088) 456 888 (24/7)</p>
          </div>
        </div>

        {/* Email Address */}
        <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-6 w-80">
          <div className="text-green-500 text-4xl">
            <FaEnvelope />
          </div>
          <div>
            <h3 className="font-bold text-lg">Email Address</h3>
            <p className="text-gray-500">contact@example.com</p>
            <p className="text-gray-500">admin@example.com</p>
          </div>
        </div>
      </div>

      {/* Cookie Accept Box */}
      {/* <div className="mt-10 flex items-center gap-4 bg-white rounded-full shadow-md px-6 py-3">
        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="bg-transparent text-green-700 font-semibold hover:underline">
          Accept
        </button>
      </div> */}
    </div>
  );
};

export default ContactSection;
