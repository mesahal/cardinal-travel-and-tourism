import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const clientLogin = () => {
    navigate(`/client-login`);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-pink-500 text-white">
        <div className="flex justify-between container mx-auto p-4">
          <ul className="flex space-x-8 relative">
            {/* Home */}
            <li className="relative group">
              <Link to="/" className="hover:underline cursor-pointer">
                Home
              </Link>
            </li>

            {/* Our Services */}
            <li className="relative group">
              <span className="hover:underline cursor-pointer">
                Our Services
              </span>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg z-10 w-36">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/visa-service">Visa Services</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/air-ticket">Air Ticket</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/group-ticket">Group Ticket</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/umrah-packages">Umrah Packages</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/quarantine-packages">Quarantine Packages</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/tour-packages">Tour Packages</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/student-visa">Student Visa</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/arnim-protect">Arnim Protect</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/hotel-booking">Hotel Booking</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/transfer-services">Transfer Services</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/malaysia-singapore-bus-ticket">
                    Malaysia-Singapore Bus Ticket
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/ferry-services">Ferry Services</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/medical-tourism-to-thailand">
                    Medical Tourism to Thailand
                  </Link>
                </li>
              </ul>
            </li>

            {/* Visa Services */}
            <li className="relative group">
              <Link
                to="/visa-service"
                className="hover:underline cursor-pointer"
              >
                Visa Services
              </Link>
            </li>

            {/* Air Ticket */}
            <li className="relative group">
              <Link to="/air-ticket" className="hover:underline cursor-pointer">
                Air Ticket
              </Link>
            </li>

            {/* Tour Packages */}
            <li className="relative group">
              <Link
                to="/tour-packages"
                className="hover:underline cursor-pointer"
              >
                Tour Packages
              </Link>
            </li>

            {/* PSA */}
            <li className="relative group">
              <span className="hover:underline cursor-pointer">PSA</span>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg z-10 w-36">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/airasia">Air Asia</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/jetstar-air">Jetstar Air</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/nok-air">Nok Air</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/firefly">Firefly</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/spicejet">SpiceJet</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/indigo-air">IndiGo Air</Link>
                </li>
              </ul>
            </li>

            {/* About Us */}
            <li className="relative group">
              <Link to="/about-us" className="hover:underline cursor-pointer">
                About Us
              </Link>
            </li>

            {/* Contact Us */}
            <li className="relative group">
              <Link to="/contact-us" className="hover:underline cursor-pointer">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4">
            <button
              onClick={clientLogin}
              className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700"
            >
              Client Login
            </button>
            <button className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700">
              Agent Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
