import React from "react";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Arnim Holidays Logo"
              className="h-12 scale-150 mr-2"
            />
            <h1 className="text-xl font-bold text-green-700">
              CARDINAL TOUR & TRAVEL
            </h1>
          </div>
          <div className="text-sm text-gray-700">
            <p>Customer Service:</p>
            <p className="text-pink-500 font-bold">Hot line - 01897619789</p>
            <p>Tickets - 01897619790</p>
            <p>Visa & tour package - 01897619791</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
