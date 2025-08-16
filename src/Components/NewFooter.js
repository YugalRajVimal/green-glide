import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function GreenGlideFooter() {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        {/* Subscribe Box */}
        {/* <div className="bg-[#7cc143] rounded-tr-[50px] p-6">
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
        </div> */}

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-serif">Green Glide</h3>
          <p className="text-gray-300 mb-4">
            GreenGlide offers eco-friendly electric scooter rentals with
            flexible plans – weekly, monthly, or rent-to-own. Ride smarter,
            cleaner, and greener across your city.
          </p>
          <a href="#" className="text-[#7cc143] font-medium">
            Start Riding →
          </a>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-serif">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-white"
                onClick={() => window.scrollTo(0, 0)}
              >
                › HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-gray-300 hover:text-white"
                onClick={() => window.scrollTo(0, 0)}
              >
                › ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-300 hover:text-white"
                onClick={() => window.scrollTo(0, 0)}
              >
                › SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/electric-scooter-rentals"
                className="text-gray-300 hover:text-white"
                onClick={() => window.scrollTo(0, 0)}
              >
                › ELECTRIC SCOOTER RENTALS
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-gray-300 hover:text-white"
                onClick={() => window.scrollTo(0, 0)}
              >
                › CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-serif">Contact Us</h3>
          <p className="text-gray-300">
            GreenGlide Office, SK 38, Sector 117 , Noida 201301
          </p>
          <p className="mt-4 text-gray-300">
            Have questions or need assistance? Our support team is here to help.
          </p>
          <p className="text-[#7cc143] text-xl font-bold mt-4">+919999999999</p>
          <p className="text-gray-300 mt-2">Sales@greenglide.net.in</p>
          <p className="text-gray-300 mt-1">Support@greenglide.net.in</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm flex gap-4">
            <a href="#" onClick={() => window.scrollTo(0, 0)}>
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" onClick={() => window.scrollTo(0, 0)}>
              Terms & Conditions
            </a>{" "}
            |{" "}
            <a href="#" onClick={() => window.scrollTo(0, 0)}>
              Refund Policy
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} GreenGlide, All Rights
            Reserved.
          </p>
          {/* Social Icons */}
          {/* <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-black border border-gray-600 hover:text-[#7cc143]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-black border border-gray-600 hover:text-[#7cc143]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-black border border-gray-600 hover:text-[#7cc143]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="p-2 bg-black border border-gray-600 hover:text-[#7cc143]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <FaInstagram />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
