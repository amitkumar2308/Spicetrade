import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // State to manage dropdowns

  // Toggle mobile menu
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle dropdown menu
  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index); // Close if already open
  };

  return (
    <nav className="flex justify-between items-center px-6 bg-white shadow-md relative z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="CultivAIte Logo" className="w-32" />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8 items-center">
        {/* Home Link */}
        <div className="group relative">
          <button className="font-medium text-gray-700 hover:text-orange-500">Home</button>
        </div>

        {/* Dropdowns with icons */}
        <div className="group relative">
          <button
            onClick={() => handleDropdownToggle(1)}
            className="w-full text-left py-2 flex justify-between items-center font-medium text-gray-700 hover:text-orange-500"
          >
            <span>Agri Trade 101</span>
            <span>{dropdownOpen === 1 ? "▲" : "▼"}</span>
          </button>
          {dropdownOpen === 1 && (
            <div className="absolute left-0 w-full bg-white shadow-md mt-2">
              {/* Add dropdown items here */}
              <button className="w-full text-left py-2 px-4">Submenu Item 1</button>
              <button className="w-full text-left py-2 px-4">Submenu Item 2</button>
            </div>
          )}
        </div>

        <div className="group relative">
          <button
            onClick={() => handleDropdownToggle(2)}
            className="w-full text-left py-2 flex justify-between items-center font-medium text-gray-700 hover:text-orange-500"
          >
            <span>Exporters Handbook</span>
            <span>{dropdownOpen === 2 ? "▲" : "▼"}</span>
          </button>
          {dropdownOpen === 2 && (
            <div className="absolute left-0 w-full bg-white shadow-md mt-2">
              {/* Add dropdown items here */}
              <button className="w-full text-left py-2 px-4">Submenu Item 1</button>
              <button className="w-full text-left py-2 px-4">Submenu Item 2</button>
            </div>
          )}
        </div>

        <div className="group relative">
          <button
            onClick={() => handleDropdownToggle(3)}
            className="w-full text-left py-2 flex justify-between items-center font-medium text-gray-700 hover:text-orange-500"
          >
            <span>Commodity Focus</span>
            <span>{dropdownOpen === 3 ? "▲" : "▼"}</span>
          </button>
          {dropdownOpen === 3 && (
            <div className="absolute left-0 w-full bg-white shadow-md mt-2">
              {/* Add dropdown items here */}
              <button className="w-full text-left py-2 px-4">Submenu Item 1</button>
              <button className="w-full text-left py-2 px-4">Submenu Item 2</button>
            </div>
          )}
        </div>

        <div className="group relative">
          <button
            onClick={() => handleDropdownToggle(4)}
            className="w-full text-left py-2 flex justify-between items-center font-medium text-gray-700 hover:text-orange-500"
          >
            <span>Resources</span>
            <span>{dropdownOpen === 4 ? "▲" : "▼"}</span>
          </button>
          {dropdownOpen === 4 && (
            <div className="absolute left-0 w-full bg-white shadow-md mt-2">
              {/* Add dropdown items here */}
              <button className="w-full text-left py-2 px-4">Submenu Item 1</button>
              <button className="w-full text-left py-2 px-4">Submenu Item 2</button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <IconButton onClick={handleMobileMenuToggle}>
          <MenuIcon />
        </IconButton>
      </div>

      {/* Log in and Contact Us */}
      <div className="flex space-x-4 items-center">
        <button className="text-gray-700 font-medium text-sm sm:text-base md:text-lg">Log in</button>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 text-sm sm:text-base md:text-lg">
          Contact Us
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white shadow-md p-4 flex flex-col space-y-4 z-50">
          {/* Close Button */}
          <div className="flex justify-end">
            <IconButton onClick={handleMobileMenuToggle}>
              <CloseIcon />
            </IconButton>
          </div>

          <button className="font-medium text-gray-700">Home</button>
          <button className="font-medium text-gray-700">Agri Trade 101</button>
          <button className="font-medium text-gray-700">Exporters Handbook</button>
          <button className="font-medium text-gray-700">Commodity Focus</button>
          <button className="font-medium text-gray-700">Resources</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
