// src/components/Header.tsx
import React, { useState } from "react";
import { ShoppingCart, User, BookOpen, Menu, X, LogIn, UserPlus } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-700 to-purple-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <BookOpen className="text-white mr-2" size={32} />
          <h1 className="text-white text-2xl font-bold">BookStore</h1>
        </div>

        {/* Hamburger Menu for Medium and Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-gray-200">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <a href="/" className="text-white text-lg hover:text-gray-200">
            Home
          </a>
          <a href="/about" className="text-white text-lg hover:text-gray-200">
            About
          </a>
          <a href="/contact" className="text-white text-lg hover:text-gray-200">
            Contact
          </a>
          <a href="/login" className="text-white text-lg hover:text-gray-200 flex items-center">
            <LogIn className="mr-1" size={18} /> Login
          </a>
          <a href="/register" className="text-white text-lg hover:text-gray-200 flex items-center">
            <UserPlus className="mr-1" size={18} /> Register
          </a>
        </nav>

        {/* Cart and Profile Icons for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/cart" className="text-white hover:text-gray-200">
            <ShoppingCart size={24} />
          </a>
          <a href="/profile" className="text-white hover:text-gray-200">
            <User size={24} />
          </a>
        </div>
      </div>

      {/* Dropdown for Small Screens */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="/" className="text-white text-lg hover:text-gray-200">
              Home
            </a>
            <a href="/about" className="text-white text-lg hover:text-gray-200">
              About
            </a>
            <a href="/contact" className="text-white text-lg hover:text-gray-200">
              Contact
            </a>
            <a href="/login" className="text-white text-lg hover:text-gray-200 flex items-center">
              <LogIn className="mr-2" size={18} /> Login
            </a>
            <a href="/register" className="text-white text-lg hover:text-gray-200 flex items-center">
              <UserPlus className="mr-2" size={18} /> Register
            </a>
            <a href="/cart" className="text-white text-lg hover:text-gray-200 flex items-center">
              <ShoppingCart className="mr-2" size={18} /> Cart
            </a>
            <a href="/profile" className="text-white text-lg hover:text-gray-200 flex items-center">
              <User className="mr-2" size={18} /> Profile
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
