
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nursing-navy text-nursing-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-nursing-lightBlue">NursingPro</h3>
            <p className="text-sm text-nursing-white opacity-80 mb-4">
              Expert assistance with nursing assignments for Chamberlain students. Quality work, timely delivery, and academic excellence guaranteed.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>support@nursingpro.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm mt-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-nursing-lightBlue">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-nursing-lightBlue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-nursing-lightBlue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-nursing-lightBlue transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm hover:text-nursing-lightBlue transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-nursing-lightBlue transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-nursing-lightBlue">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#essays" className="text-sm hover:text-nursing-lightBlue transition-colors">Nursing Essays</Link>
              </li>
              <li>
                <Link to="/services#case-studies" className="text-sm hover:text-nursing-lightBlue transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/services#care-plans" className="text-sm hover:text-nursing-lightBlue transition-colors">Care Plans</Link>
              </li>
              <li>
                <Link to="/services#research" className="text-sm hover:text-nursing-lightBlue transition-colors">Research Papers</Link>
              </li>
              <li>
                <Link to="/services#dissertations" className="text-sm hover:text-nursing-lightBlue transition-colors">Dissertations</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-nursing-lightBlue">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm hover:text-nursing-lightBlue transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-nursing-lightBlue transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/refund" className="text-sm hover:text-nursing-lightBlue transition-colors">Refund Policy</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-nursing-lightBlue transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-nursing-blue/30 mt-8 pt-6 text-center">
          <p className="text-sm text-nursing-white opacity-70">
            © {currentYear} NursingPro. All rights reserved. 
          </p>
          <p className="text-xs text-nursing-white opacity-50 mt-2">
            NursingPro is not affiliated with Chamberlain University. We provide independent assignment assistance services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
