// src/components/Home.tsx
import React from "react";
import { Book } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example book items */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Book className="text-blue-500 mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              The Great Gatsby
            </h3>
            <p className="text-gray-600 mb-4">
              A novel by F. Scott Fitzgerald set in the Jazz Age.
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Book className="text-blue-500 mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              To Kill a Mockingbird
            </h3>
            <p className="text-gray-600 mb-4">
              A novel by Harper Lee about racial injustice in the South.
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
          {/* Add more books as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
