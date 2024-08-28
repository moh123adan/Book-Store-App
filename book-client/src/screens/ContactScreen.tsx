// src/screens/ContactScreen.tsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <MapPin size={64} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Our Address</h2>
            <p className="text-gray-600 text-lg text-center">
              123 Book St, Story City, TX, 54321, USA
            </p>
          </div>
          <div>
            <Phone size={64} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Call Us</h2>
            <p className="text-gray-600 text-lg text-center">
              +1 (555) 123-4567
            </p>
          </div>
          <div>
            <Mail size={64} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Email Us</h2>
            <p className="text-gray-600 text-lg text-center">
              support@bookstore.com
            </p>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Send Us a Message</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
