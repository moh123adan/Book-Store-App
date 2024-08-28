import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  BookOpen,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-purple-600 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About BookStore</h3>
          <p className="text-gray-200 mb-4">
            BookStore is your go-to destination for the latest and greatest
            books. We offer a wide variety of titles across all genres and
            strive to provide our customers with the best shopping experience.
          </p>
          <div className="flex items-center mb-2">
            <MapPin className="mr-2" size={20} />
            <p className="text-gray-200">123 Book St, Story City, TX</p>
          </div>
          <div className="flex items-center mb-2">
            <Phone className="mr-2" size={20} />
            <p className="text-gray-200">+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2" size={20} />
            <p className="text-gray-200">support@bookstore.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-200 hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-200 hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-200 hover:underline">
                Shop
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-200 hover:underline">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-200 hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-200 hover:underline">
                FAQ
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-200 hover:underline">
                Shipping & Returns
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-200 hover:underline">
                Order Tracking
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-200 hover:underline">
                Wishlist
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-200 hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <p className="text-gray-200 mb-4">
            Stay connected with us on social media!
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-gray-400"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white hover:text-gray-400"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-gray-400"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white hover:text-gray-400"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-gray-200">
          <BookOpen className="inline-block text-white mr-2" size={24} />© 2023
          BookStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
