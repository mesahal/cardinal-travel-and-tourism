import React from "react";
import logo from "../assets/logo.jpg";
import { Facebook, Twitter, Instagram, Phone } from "lucide-react";
import { AiOutlineWhatsApp } from "react-icons/ai"; // ✅ WhatsApp icon

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
              <h1 className="text-xl font-bold text-green-700">
                CARDINAL TOUR & TRAVEL
              </h1>
              <p className="text-sm text-gray-600 italic">
                Fly your best with us
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-purple-600 mb-2">
              Customer Service
            </h2>
            <div className="space-y-1">
              <p className="flex items-center justify-center gap-2">
                <Phone size={16} className="text-purple-600" />
                <span className="text-black font-medium">01897619789</span>
              </p>
              <p className="text-black">Tickets: 01897619790</p>
              <p className="text-black">Visa & Tour: 01897619791</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-end space-y-2">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Cardinal-Tour-And-Travel/61559996273281/?rdid=Haw3N07SO5P77bRm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15y3m7cqYM%2F"
                target="_blank"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Instagram size={24} />
              </a>
              {/* WhatsApp Link */}
              <a
                href="https://wa.me/01813279398"
                target="_blank"
                className="text-green-600 hover:text-green-800 transition-colors"
              >
                <AiOutlineWhatsApp size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-600">Follow us on social media</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
