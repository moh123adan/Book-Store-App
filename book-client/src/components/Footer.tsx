import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold">BookStore</h3>
                    <p className="text-gray-400">Your favorite place for books</p>
                </div>
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a href="#" aria-label="Facebook" className="text-white hover:text-gray-400">
                        <Facebook size={24} />
                    </a>
                    <a href="#" aria-label="Twitter" className="text-white hover:text-gray-400">
                        <Twitter size={24} />
                    </a>
                    <a href="#" aria-label="Instagram" className="text-white hover:text-gray-400">
                        <Instagram size={24} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="text-white hover:text-gray-400">
                        <Linkedin size={24} />
                    </a>
                </div>
                <div>
                    <p className="text-gray-400">© 2023 BookStore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
