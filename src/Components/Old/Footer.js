import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About Green Glide */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Green Glide</h3>
          <img
            src="/images/zeway-logo.png"
            alt="Green Glide Mobility"
            className="h-12 mb-4"
          />
          <p className="text-gray-300 leading-relaxed">
            Green Glide MOBILITY Pvt. Ltd. is a visionary start-up with a
            founding team that is deeply passionate about creating positive
            social impact by providing Electric Mobility solutions.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Important Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="border-b border-gray-600 pb-1">FAQ's</li>
            <li className="border-b border-gray-600 pb-1">Privacy Policy</li>
            <li className="border-b border-gray-600 pb-1">Terms & Condition</li>
            <li className="border-b border-gray-600 pb-1">
              Non-Disclosure Agreement
            </li>
            <li className="border-b border-gray-600 pb-1">Disclaimer</li>
          </ul>
        </div>

        {/* Contact Green Glide */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Green Glide</h3>
          <p className="mb-2">
            <span className="font-semibold">Mobile:</span> +91-8882204353
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> 0120-3113375
          </p>
          <p>
            <span className="font-semibold">Email:</span> support@Green Glide.in
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm">Copyright © 2025 Green Glide.in</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-white hover:text-green-500">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-green-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-green-500">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-green-500">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
