import React, { useState } from "react";
import { Edit3, User, Mail, Key } from "lucide-react";

const ProfileScreen: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Handle save logic here, such as updating the state or sending data to the server
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Your Profile
        </h1>

        {/* Profile Information */}
        {!isEditing ? (
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <User className="text-blue-600 w-32 h-32" />
            </div>
            <div className="md:ml-8 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {name}
              </h2>
              <p className="text-gray-600 text-lg mb-2">
                <Mail className="inline-block mr-2" /> {email}
              </p>
              <p className="text-gray-600 text-lg mb-4">
                <Key className="inline-block mr-2" /> *************
              </p>
              <button
                onClick={handleEditClick}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Edit3 className="mr-2" size={18} /> Edit Profile
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center mb-12">
            <div className="mb-4">
              <User className="text-blue-600 w-32 h-32" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter new password"
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={handleSaveClick}
                  className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancelClick}
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

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
