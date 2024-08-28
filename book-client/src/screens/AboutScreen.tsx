// src/screens/AboutScreen.tsx
import React from "react";
import { Users, Globe, BookOpen } from "lucide-react";

const AboutScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <BookOpen size={64} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg">
              At BookStore, our mission is to bring the joy of reading to
              everyone. We believe that books have the power to change lives,
              and we strive to provide a diverse selection of books for readers
              of all ages and interests.
            </p>
          </div>
          <div>
            <Globe size={64} className="text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              Our Reach
            </h2>
            <p className="text-gray-600 text-lg">
              We serve readers all over the world with a vast collection of
              books, ranging from the latest bestsellers to timeless classics.
              Our online store is accessible 24/7, allowing you to explore new
              worlds and ideas from the comfort of your home.
            </p>
          </div>
        </div>
        <div className="text-center">
          <Users size={64} className="text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-600 text-lg">
            Our team is composed of passionate book lovers who are dedicated to
            providing you with the best possible shopping experience. From
            customer service to book curation, we’re here to help you find your
            next great read.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
