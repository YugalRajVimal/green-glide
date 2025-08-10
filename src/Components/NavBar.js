// // src/components/Navbar.jsx
// const Navbar = () => {
//   return (
//     <nav className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-6 py-4 bg-black bg-opacity-30 text-white">
//       <div className="flex items-center space-x-2">
//         <img src="/logo.png" alt="Logo" className="h-10" />
//         <span className="font-bold text-lg">Green Glide</span>
//       </div>
//       <ul className="hidden md:flex space-x-6 font-medium text-sm">
//         <li>
//           <a href="#">About Us</a>
//         </li>
//         <li>
//           <a href="#">EV Scooter Rentals</a>
//         </li>
//         <li>
//           <a href="#">EV Charging Station</a>
//         </li>
//         <li>
//           <a href="#">B2B Services</a>
//         </li>
//         <li>
//           <a href="#">Blog</a>
//         </li>
//         <li>
//           <a href="#">Contact Us</a>
//         </li>
//         <li>
//           <a href="#">Career</a>
//         </li>
//       </ul>
//       <div className="hidden md:flex space-x-2">
//         <button className="bg-green-500 px-4 py-2 rounded text-sm font-semibold">
//           E-Charging App
//         </button>
//         <button className="bg-red-500 px-4 py-2 rounded text-sm font-semibold">
//           Rental App
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// NavBar.jsx

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
        <li className="cursor-pointer">HOME</li>
        <li className="cursor-pointer">PAGES</li>
        <li className="cursor-pointer">SERVICES</li>
        <li className="cursor-pointer">GALLERY</li>
        <li className="cursor-pointer">BLOG</li>
        <li className="cursor-pointer">CONTACT US</li>
      </ul>

      {/* Right side (Desktop) */}
      <div className="hidden lg:flex items-center gap-6">
        {/* Search */}
        <button className="text-lg">🔍</button>

        {/* Cart */}
        <div className="relative">
          <button className="text-lg">🛒</button>
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
            0
          </span>
        </div>

        {/* Contact */}
        <span className="font-medium">+(123) 1234-567-8901</span>

        {/* Get a Quote */}
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
          GET A QUOTE →
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 w-full bg-[#8cc63f] lg:hidden flex flex-col items-start p-4 gap-4">
          <li className="cursor-pointer">HOME</li>
          <li className="cursor-pointer">PAGES</li>
          <li className="cursor-pointer">SERVICES</li>
          <li className="cursor-pointer">GALLERY</li>
          <li className="cursor-pointer">BLOG</li>
          <li className="cursor-pointer">CONTACT US</li>
          <div className="flex items-center gap-4">
            <button className="text-lg">🔍</button>
            <div className="relative">
              <button className="text-lg">🛒</button>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
                0
              </span>
            </div>
          </div>
          <span className="font-medium">+(123) 1234-567-8901</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
            GET A QUOTE →
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
