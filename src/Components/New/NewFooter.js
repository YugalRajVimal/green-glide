import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function NewFooter() {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-10">
        {/* Subscribe Box */}
        <div className="bg-[#7cc143] rounded-tr-[50px] p-6">
          <h2 className="text-2xl font-semibold mb-4 leading-snug">
            Sign up for Electric Car, news & insights
          </h2>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 mb-4 text-black rounded-none outline-none"
          />
          <button className="bg-black text-white px-6 py-3 rounded-tl-[20px] font-semibold">
            SUBSCRIBE
          </button>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Grevo WP Theme</h3>
          <p className="text-gray-300 mb-4">
            A leading developer of A-grade commercial, electric car and bike
            projects in USA. Since its foundation the company has doubled its
            turnover year on year, with its staff numbers.
          </p>
          <a href="#" className="text-[#7cc143] font-medium">
            Get a quote →
          </a>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company info</h3>
          <ul className="space-y-2 text-gray-300">
            <li>› About Us</li>
            <li>› Our Projects</li>
            <li>› Meet Our Team</li>
            <li>› News & Media</li>
            <li>› Contact Us</li>
            <li>› Careers</li>
          </ul>
        </div>

        {/* Quick Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
          <p className="text-gray-300">
            2307 Beverley Rd Brooklyn, New York 11226 United States.
          </p>
          <p className="mt-4 text-gray-300">
            If you have any questions or need help, feel free to contact with
            our team.
          </p>
          <p className="text-[#7cc143] text-xl font-bold mt-4">
            (002) 01061245741
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm flex gap-4">
            <a href="#">Where to Find Us</a> | <a href="#">Terms of Payment</a>{" "}
            | <a href="#">Stats Element</a>
          </div>
          <p className="text-gray-500 text-sm">
            Copyright © 2021 Grevo, All Rights Reserved.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-black border border-gray-600">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-black border border-gray-600">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-black border border-gray-600">
              <FaYoutube />
            </a>
            <a href="#" className="p-2 bg-black border border-gray-600">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
