// src/screens/ProfileScreen.tsx
import React from "react";
import { Edit3, User, Mail, Key } from "lucide-react";

const ProfileScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Your Profile
        </h1>

        {/* Profile Information */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <User className="text-blue-600 w-32 h-32" />
          </div>
          <div className="md:ml-8 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              John Doe
            </h2>
            <p className="text-gray-600 text-lg mb-2">
              <Mail className="inline-block mr-2" /> johndoe@example.com
            </p>
            <p className="text-gray-600 text-lg mb-4">
              <Key className="inline-block mr-2" /> *************
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
              <Edit3 className="mr-2" size={18} /> Edit Profile
            </button>
          </div>
        </div>

        {/* User Activity or Preferences */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Your Preferences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Favorite Genre
              </h3>
              <p className="text-gray-700">Science Fiction</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Wishlist
              </h3>
              <p className="text-gray-700">Dune, 1984, The Expanse</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Recently Purchased
              </h3>
              <p className="text-gray-700">Brave New World, Foundation</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Membership Status
              </h3>
              <p className="text-gray-700">Premium Member</p>
            </div>
          </div>
        </div>

        {/* Additional Settings */}
        <div className="text-center">
          <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
