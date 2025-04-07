import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/80 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            Luxury<span className="text-gold-500">Dealership</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gold-500 transition-colors">
              Home
            </Link>
            <Link to="/inventory" className="text-white hover:text-gold-500 transition-colors">
              Inventory
            </Link>
            <Link to="/about" className="text-white hover:text-gold-500 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-gold-500 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-white hover:text-gold-500 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block text-white hover:text-gold-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/inventory"
              className="block text-white hover:text-gold-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inventory
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-gold-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-white hover:text-gold-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-gold-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 