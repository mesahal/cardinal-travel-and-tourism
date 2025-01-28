import React from "react";
import logo from "../assets/logo.jpg";

const Home = () => {
  return (
    <div className="flex flex-col bg-purple-50 min-h-screen">
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
            <p>WhatsApp / Call: +88 0197-2288-521 (Tour)</p>
            <p>+88 0197-2288-523 (Ticket)</p>
            <p>+88 0197-2288-525 (Visa)</p>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-pink-500 text-white">
        <div className="flex justify-between container mx-auto p-4">
          <ul className="flex space-x-4 relative">
            {/* Home */}
            <li className="relative group">
              <a className="hover:underline cursor-pointer">Home</a>
            </li>

            {/* Our Services */}
            <li className="relative group">
              <a className="hover:underline cursor-pointer">Our Services</a>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg z-10">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a
                    href="https://arnimholidays.com/visa-services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visa Services
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a
                    href="https://arnimair.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Air Ticket
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a
                    href="https://arnimholidays.com/group-ticket"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Group Ticket
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a
                    href="https://arnimholidays.com/umrah"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Umrah Packages
                  </a>
                </li>
              </ul>
            </li>

            {/* Visa Services */}
            <li className="relative group">
              <a
                href="https://arnimholidays.com/visa-services"
                className="hover:underline cursor-pointer"
              >
                Visa Services
              </a>
            </li>

            {/* Air Ticket */}
            <li className="relative group">
              <a
                href="https://arnimair.com"
                className="hover:underline cursor-pointer"
              >
                Air Ticket
              </a>
            </li>

            {/* Tour Packages */}
            <li className="relative group">
              <a className="hover:underline cursor-pointer">Tour Packages</a>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg z-10">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a
                    href="https://arnimholidays.com/tour-packages"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bangladesh Tours
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a
                    href="https://arnimholidays.com/quarantine-packages"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quarantine Packages
                  </a>
                </li>
              </ul>
            </li>

            {/* PSA */}
            <li className="relative group">
              <a className="hover:underline cursor-pointer">PSA</a>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg z-10">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a
                    href="https://arnimholidays.com/airasia/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Air Asia
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a
                    href="https://arnimholidays.com/jetstar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jetstar Air
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a
                    href="https://arnimholidays.com/nokair"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nok Air
                  </a>
                </li>
              </ul>
            </li>

            {/* About Us */}
            <li className="relative group">
              <a
                href="https://arnimholidays.com/about-arnimholidays.php"
                className="hover:underline cursor-pointer"
              >
                About Us
              </a>
            </li>

            {/* Contact Us */}
            <li className="relative group">
              <a
                href="https://arnimholidays.com/contact-us.php"
                className="hover:underline cursor-pointer"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="flex space-x-4">
            <button className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700">
              Client Login
            </button>
            <button className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700">
              Agent Login
            </button>
          </div>
        </div>
      </nav>

      {/* Services Section */}
      <section className="flex flex-grow flex-col container mx-auto py-8">
        <h2 className="text-center text-xl font-bold text-red-600 mb-4">
          Our cheapest and most reliable services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-yellow-100 p-4 shadow-lg rounded-lg">
            <h3 className="text-center font-bold text-blue-700">
              Visa Services
            </h3>
            <p className="text-center">Visa Service From Bangladesh</p>
          </div>
          <div className="bg-yellow-100 p-4 shadow-lg rounded-lg">
            <h3 className="text-center font-bold text-blue-700">
              Air Ticket Online Booking
            </h3>
            <p className="text-center">
              Book Domestic / International Cheap Air Ticket at arnimair.com
            </p>
          </div>
          <div className="bg-yellow-100 p-4 shadow-lg rounded-lg">
            <h3 className="text-center font-bold text-blue-700">
              Tour Packages
            </h3>
            <p className="text-center">Tour Packages From Bangladesh</p>
          </div>
          <div className="bg-yellow-100 p-4 shadow-lg rounded-lg">
            <h3 className="text-center font-bold text-blue-700">
              Study Abroad
            </h3>
            <p className="text-center">Student Visa Service From Bangladesh</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>
            Bangladesh Office | Dubai Office | Vietnam Office | China Office
          </p>
          <p>© 2025 Arnim Holidays. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
