// src/components/Header.tsx
import React from "react";
import { ShoppingCart, User, BookOpen } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-purple-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <BookOpen className="text-white mr-2" size={32} />
          <h1 className="text-white text-2xl font-bold">BookStore</h1>
        </div>
        <nav className="flex space-x-4">
          <a href="/" className="text-white text-lg hover:text-gray-200">
            Home
          </a>
          <a href="/about" className="text-white text-lg hover:text-gray-200">
            About
          </a>
          <a href="/contact" className="text-white text-lg hover:text-gray-200">
            Contact
          </a>
          <a href="/login" className="text-white text-lg hover:text-gray-200">
            Login
          </a>
          <a href="/register" className="text-white text-lg hover:text-gray-200">
            Register
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="/cart" className="text-white hover:text-gray-200">
            <ShoppingCart size={24} />
          </a>
          <a href="/profile" className="text-white hover:text-gray-200">
            <User size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
