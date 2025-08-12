import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function GreenGlideFooter() {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-10">
        {/* Subscribe Box */}
        <div className="bg-[#7cc143] rounded-tr-[50px] p-6">
          <h2 className="text-2xl font-semibold mb-4 leading-snug">
            Sign up for GreenGlide news & ride updates
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
          <h3 className="text-xl font-semibold mb-4">GreenGlide</h3>
          <p className="text-gray-300 mb-4">
            GreenGlide offers eco-friendly electric scooter rentals with flexible plans –
            weekly, monthly, or rent-to-own. Ride smarter, cleaner, and greener across your city.
          </p>
          <a href="#" className="text-[#7cc143] font-medium">
            Start Riding →
          </a>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>› About Us</li>
            <li>› Pricing Plans</li>
            <li>› How It Works</li>
            <li>› Charging Locations</li>
            <li>› Contact Us</li>
            <li>› Careers</li>
          </ul>
        </div>

        {/* Quick Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">
            GreenGlide HQ, Connaught Place, New Delhi, India.
          </p>
          <p className="mt-4 text-gray-300">
            Have questions or need assistance? Our support team is here to help.
          </p>
          <p className="text-[#7cc143] text-xl font-bold mt-4">
            +91 98765 43210
          </p>
          <p className="text-gray-300 mt-2">
            support@greenglide.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm flex gap-4">
            <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a> |{" "}
            <a href="#">Refund Policy</a>
          </div>
          <p className="text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} GreenGlide, All Rights Reserved.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-black border border-gray-600 hover:text-[#7cc143]">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-black border border-gray-600 hover:text-[#7cc143]">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-black border border-gray-600 hover:text-[#7cc143]">
              <FaYoutube />
            </a>
            <a href="#" className="p-2 bg-black border border-gray-600 hover:text-[#7cc143]">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
