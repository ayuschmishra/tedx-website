// src/components/layout/Header.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to enhance glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 text-tedx-white backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
      isScrolled 
        ? 'bg-tedx-black/80' 
        : 'bg-tedx-black/40'
    }`}>
      <div className="container mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-tedx-red font-bold text-2xl drop-shadow-sm">TEDx</span>
          <span className="font-light text-xl">ShivajiCollege</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-tedx-red transition duration-300 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tedx-red transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/events" className="hover:text-tedx-red transition duration-300 relative group">
            Events
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tedx-red transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="hover:text-tedx-red transition duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tedx-red transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/get-involved" className="hover:text-tedx-red transition duration-300 relative group">
            Get Involved
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tedx-red transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-tedx-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-md bg-tedx-black/90">
          <div className="px-4 py-2 space-y-4">
            <Link 
              to="/" 
              className="block hover:text-tedx-red transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className="block hover:text-tedx-red transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/about" 
              className="block hover:text-tedx-red transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/get-involved" 
              className="block hover:text-tedx-red transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;