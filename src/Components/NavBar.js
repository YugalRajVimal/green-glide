import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#8cc63f] relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/Logo.png" // Replace with your logo path
          alt="Green Glide Logo"
          className="h-10 rounded-full"
        />
        <span className="text-xl font-bold">Green Glide</span>
      </div>

      {/* Hamburger Icon (Small screens) */}
      <button className="lg:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Menu (Desktop) */}
      <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
        <li className="cursor-pointer">
          <a href="/">HOME</a>
        </li>
        <li className="cursor-pointer">
          <a href="/about-us">ABOUT US</a>
        </li>
        <li className="cursor-pointer">
          <a href="/services">SERVICES</a>
        </li>
        <li className="cursor-pointer">
          <a href="/electric-scooter-rentals">ELECTRIC SCOOTER RENTALS</a>
        </li>
        <li className="cursor-pointer">
          <a href="/contact-us">CONTACT US</a>
        </li>
      </ul>

      {/* Right side (Desktop) */}
      <div className="hidden lg:flex items-center gap-6">
        {/* Contact */}
        <span className="font-medium">+919999999999</span>

        {/* Get a Quote */}
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
          GET A QUOTE →
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 w-full bg-[#8cc63f] lg:hidden flex flex-col items-start p-4 gap-4">
          <li className="cursor-pointer">
            <a href="/">HOME</a>
          </li>
          <li className="cursor-pointer">
            <a href="/about-us">ABOUT US</a>
          </li>
          <li className="cursor-pointer">
            <a href="/services">SERVICES</a>
          </li>
          <li className="cursor-pointer">
            <a href="/electric-scooter-rentals">ELECTRIC SCOOTER RENTALS</a>
          </li>
          <li className="cursor-pointer">
            <a href="/contact-us">CONTACT US</a>
          </li>

          <span className="font-medium">+919999999999</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
            GET A QUOTE →
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
