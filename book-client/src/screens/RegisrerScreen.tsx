import { Lock, Mail, User } from "lucide-react";
import React from "react";

const RegisterScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Register
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <User className="text-gray-400 ml-2" />
              <input
                className="w-full px-4 py-2 text-sm text-gray-700 border-0 focus:ring-0"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <Mail className="text-gray-400 ml-2" />
              <input
                className="w-full px-4 py-2 text-sm text-gray-700 border-0 focus:ring-0"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <Lock className="text-gray-400 ml-2" />
              <input
                className="w-full px-4 py-2 text-sm text-gray-700 border-0 focus:ring-0"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <Lock className="text-gray-400 ml-2" />
              <input
                className="w-full px-4 py-2 text-sm text-gray-700 border-0 focus:ring-0"
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;