import React from "react";
import logo from "../assets/logo.jpg";
import { Facebook, Twitter, Instagram, Phone } from "lucide-react";
import { AiOutlineWhatsApp } from "react-icons/ai"; // ✅ WhatsApp icon

// Add the Google Font link in the <head> section of your HTML (or import it in your global styles).
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap" rel="stylesheet" />

const Header = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
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
              <p className="text-sm text-gray-600 italic font-bold">Fly your best with us</p>
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
                <span className="text-black font-medium">+8801897619789</span>
              </p>
              <p className="text-black font-bold">Tickets: +8801897619794</p>
              <p className="text-black font-bold">Visa & Tour: +8801897619791</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-end space-y-2">
            <div className="flex space-x-4 bg-[#8e2157] p-2 rounded-lg shadow-md">
              <a
                href="https://www.facebook.com/people/Cardinal-Tour-And-Travel/61559996273281/?rdid=Haw3N07SO5P77bRm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15y3m7cqYM%2F"
                target="_blank"
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
              {/* WhatsApp Link */}
              <a
                href="https://wa.me/8801897619789"
                target="_blank"
                className="text-green-600 hover:text-green-800 transition-colors"
              >
                <AiOutlineWhatsApp size={24} />
              </a>
            </div>
            <p className="text-sm font-semibold text-[#8e2157] bg-gray-100 p-1 rounded-lg shadow-md">
              Follow us on social media
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
