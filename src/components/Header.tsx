
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-nursing-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-nursing-navy">NursingPro</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-nursing-navy hover:text-nursing-blue transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-nursing-navy hover:text-nursing-blue transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-nursing-navy hover:text-nursing-blue transition-colors">
              Services
            </Link>
            <Link to="/courses" className="text-nursing-navy hover:text-nursing-blue transition-colors">
              Courses
            </Link>
            <Link to="/pricing" className="text-nursing-navy hover:text-nursing-blue transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-nursing-navy hover:text-nursing-blue transition-colors">
              Blog
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </Link>
              <a href="/pricing#order-form">
                <Button className="bg-nursing-blue text-white hover:bg-nursing-navy">
                  Order Now
                </Button>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-nursing-navy"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-nursing-navy hover:text-nursing-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-nursing-navy hover:text-nursing-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="text-nursing-navy hover:text-nursing-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/courses" 
                className="text-nursing-navy hover:text-nursing-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                to="/pricing" 
                className="text-nursing-navy hover:text-nursing-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/blog" 
                className="text-nursing-navy hover:text-nursing-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/login" 
                className="text-nursing-navy hover:text-nursing-blue transition-colors flex items-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="h-4 w-4" />
                Login
              </Link>
              <a 
                href="/pricing#order-form"
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button 
                  className="bg-nursing-blue text-white hover:bg-nursing-navy w-full"
                >
                  Order Now
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
