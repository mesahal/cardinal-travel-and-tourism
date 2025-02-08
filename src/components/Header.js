import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Phone, Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-white shadow-lg">
        {/* Desktop Header */}
        <div className="container mx-auto p-4">
          <div className="lg:flex lg:items-center lg:justify-between hidden">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt="Cardinal Tour & Travel Logo"
                className="h-12 scale-150 mr-2"
              />
              <div>
                <h1 className="text-2xl font-extrabold text-[#8e2157] tracking-wide drop-shadow-md font-poppins">
                  CARDINAL TOUR & TRAVEL
                </h1>
                <p className="text-sm text-gray-600 italic font-bold">
                  Fly your best with us
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <h2 className="text-lg font-semibold text-[#8e2157] mb-2">
                Customer Service
              </h2>
              <div className="space-y-1">
                <p className="flex items-center justify-center gap-2">
                  <Phone size={16} className="text-[#8e2157]" />
                  <span className="text-black font-bold">
                    Hotline: +8801897619789
                  </span>
                </p>
                <p className="text-black font-bold">Tickets: +8801897619794</p>
                <p className="text-black font-bold">
                  Visa & Tour: +8801897619791
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col items-end space-y-2">
              <div className="flex space-x-4 bg-[#8e2157] p-2 rounded-lg shadow-md">
                <a
                  href="https://www.facebook.com/people/Cardinal-Tour-And-Travel/61559996273281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://wa.me/+8801897619789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <Phone size={24} />
                </a>
              </div>
              <p className="text-sm font-semibold text-[#8e2157] bg-gray-100 p-1 rounded-lg shadow-md">
                Follow us on social media
              </p>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between">
              {/* Mobile Logo */}
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Cardinal Tour & Travel Logo"
                  className="h-32 mr-2"
                />
                <h1 className="text-lg font-bold text-[#8e2157]">
                  CARDINAL TOUR
                </h1>
              </div>

              {/* Mobile Menu Button
              <button
                onClick={toggleMenu}
                className="text-[#8e2157] p-2 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button> */}
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="mt-4 space-y-4 pb-4">
                {/* Contact Information */}
                <div className="text-center bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold text-[#8e2157] mb-2">
                    Customer Service
                  </h2>
                  <div className="space-y-2">
                    <p className="flex items-center justify-center gap-2">
                      <Phone size={16} className="text-[#8e2157]" />
                      <span className="text-black font-bold">
                        Hotline: +8801897619789
                      </span>
                    </p>
                    <p className="text-black font-bold">
                      Tickets: +8801897619794
                    </p>
                    <p className="text-black font-bold">
                      Visa & Tour: +8801897619791
                    </p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 bg-[#8e2157] p-3 rounded-lg">
                  <a
                    href="https://www.facebook.com/people/Cardinal-Tour-And-Travel/61559996273281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <Twitter size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://wa.me/+8801897619789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <Phone size={24} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
