import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between pr-8 bg-[#8cc63f] relative">
      {/* Logo */}
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        <div className="flex items-center gap-2">
          <img
            src="/NavLogo.png" // Replace with your logo path
            alt="Green Glide Logo"
            className="h-20"
          />
          {/* <span className="text-xl font-bold">Green Glide</span> */}
        </div>
      </Link>

      {/* Hamburger Icon (Small screens) */}
      <button className="lg:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Menu (Desktop) */}
      <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
        <li className="cursor-pointer">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            HOME
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>
            ABOUT US
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            SERVICES
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="/electric-scooter-rentals"
            onClick={() => window.scrollTo(0, 0)}
          >
            ELECTRIC SCOOTER RENTALS
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
            CONTACT US
          </Link>
        </li>
      </ul>

      {/* Right side (Desktop) */}
      <div className="hidden lg:flex items-center gap-6">
        {/* Contact */}
        <a href="tel:+919999999999" className="font-medium">
          +919999999999
        </a>

        {/* Get a Quote */}
        <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
            GET A QUOTE →
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 w-full bg-[#8cc63f] lg:hidden flex flex-col items-start p-4 gap-4">
          <li className="cursor-pointer">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              HOME
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>
              ABOUT US
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
              SERVICES
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="/electric-scooter-rentals"
              onClick={() => window.scrollTo(0, 0)}
            >
              ELECTRIC SCOOTER RENTALS
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
              CONTACT US
            </Link>
          </li>

          <a href="tel:+919999999999" className="font-medium">
            +919999999999
          </a>
          <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
              GET A QUOTE →
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
