// src/components/Home.tsx
import React from "react";
import {
  Book,
  ShoppingCart,
  Star,
  User,
  Heart,
  Truck,
  Tag,
  BookOpen,
  ThumbsUp,
  DollarSign,
  Shield,
} from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="text-center text-white mb-12">
          <h1 className="text-5xl font-bold mb-4 flex justify-center items-center">
            <BookOpen className="mr-3" size={50} /> Welcome to BookStore
          </h1>
          <p className="text-lg mb-8">
            Your one-stop shop for all the latest and greatest books. Whether
            you're looking for the classics or the latest releases, we've got
            you covered. Join our community of book lovers today!
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex flex-col items-center">
              <ThumbsUp className="text-yellow-400" size={40} />
              <p className="mt-2">Trusted by Thousands</p>
            </div>
            <div className="flex flex-col items-center">
              <DollarSign className="text-green-400" size={40} />
              <p className="mt-2">Best Prices Guaranteed</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="text-blue-400" size={40} />
              <p className="mt-2">Secure Payments</p>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">
            Shop Now
          </button>
        </section>

        {/* Featured Books Section */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Featured Books
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
            {/* Example book items */}
            <div className="bg-white  p-6 rounded-lg shadow-lg">
              <Book className="text-blue-500 mb-4 mx-auto" size={48} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                The Great Gatsby
              </h3>
              <p className="text-gray-600 mb-4">
                A novel by F. Scott Fitzgerald set in the Jazz Age.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-yellow-500">
                  <Star className="mr-1" /> 4.5
                </div>
                <div className="text-blue-600">$19.99</div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
                <ShoppingCart className="mr-2" /> Add to Cart
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Book className="text-blue-500 mb-4 mx-auto" size={48} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                To Kill a Mockingbird
              </h3>
              <p className="text-gray-600 mb-4">
                A novel by Harper Lee about racial injustice in the South.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-yellow-500">
                  <Star className="mr-1" /> 4.8
                </div>
                <div className="text-blue-600">$14.99</div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
                <ShoppingCart className="mr-2" /> Add to Cart
              </button>
            </div>
            {/* Add more books as needed */}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Truck className="text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Free Shipping
              </h3>
              <p className="text-gray-600">On all orders over $50</p>
            </div>
            <div className="flex flex-col items-center">
              <Tag className="text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Best Prices
              </h3>
              <p className="text-gray-600">Competitive pricing on all books</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">We prioritize our customers</p>
            </div>
            <div className="flex flex-col items-center">
              <ThumbsUp className="text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Top Ratings
              </h3>
              <p className="text-gray-600">High ratings on all products</p>
            </div>
          </div>
        </section>

        {/* Popular Authors Section */}
        <section className="text-white mb-12">
          <h2 className="text-3xl font-semibold mb-6">Popular Authors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <User className="text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                J.K. Rowling
              </h3>
              <p className="text-gray-600">Author of the Harry Potter series</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <User className="text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                George R.R. Martin
              </h3>
              <p className="text-gray-600">Author of A Song of Ice and Fire</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <User className="text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Harper Lee
              </h3>
              <p className="text-gray-600">Author of To Kill a Mockingbird</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <User className="text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                F. Scott Fitzgerald
              </h3>
              <p className="text-gray-600">Author of The Great Gatsby</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
