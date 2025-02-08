import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const clientLogin = () => {
    navigate(`/agent-login`);
  };

  const linkClasses = `
    relative px-4 py-2 rounded-md transition-all duration-200
    text-white hover:bg-white/10
    after:content-[''] after:absolute after:bottom-0 after:left-0 
    after:w-full after:h-0.5 after:bg-current
    after:scale-x-0 after:origin-center after:transition-transform
    hover:after:scale-x-100
  `;

  const dropdownClasses = `
    absolute top-full left-0 mt-1 py-2 rounded-lg shadow-xl
    bg-purple-600 min-w-[200px] opacity-0 invisible 
    group-hover:opacity-100 group-hover:visible 
    transition-all duration-200
  `;

  const dropdownItemClasses = `
    block px-4 py-2 text-sm transition-colors duration-150
    text-white hover:bg-white/10
  `;

  const services = [
    { path: "/umrah-packages", label: "Umrah Packages" },
    { path: "/visa-service", label: "Visa Services" },
    { path: "/air-ticket", label: "Air Ticket" },
    { path: "/group-ticket", label: "Group Ticket" },
    
    // { path: "/quarantine-packages", label: "Quarantine Packages" },
    { path: "/tour-packages", label: "Tour Packages" },
    { path: "/student-visa", label: "Student Visa" },
    { path: "/arnim-protect", label: "Cardinal Protect" },
    // { path: "/hotel-booking", label: "Hotel Booking" },
    // { path: "/transfer-services", label: "Transfer Services" },
    // { path: "/malaysia-singapore-bus-ticket", label: "Malaysia-Singapore Bus" },
    // { path: "/ferry-services", label: "Ferry Services" },
    { path: "/medical-tourism-to-thailand", label: "Medical Tourism" },
  ];

  return (
    <nav className="bg-purple-500 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className={linkClasses}>
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group z-50">
              <button className={`${linkClasses} flex items-center gap-1`}>
                Our Services
                <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className={dropdownClasses}>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={dropdownItemClasses}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/visa-service" className={linkClasses}>
              Visa Services
            </Link>
            <Link to="/air-ticket" className={linkClasses}>
              Air Ticket
            </Link>
            <Link to="/tour-packages" className={linkClasses}>
              Tour Packages
            </Link>
            <Link to="/about-us" className={linkClasses}>
              About Us
            </Link>
            <Link to="/contact-us" className={linkClasses}>
              Contact Us
            </Link>
          </div>

          {/* Login Button */}
          <div className="hidden lg:block">
            <button
              onClick={clientLogin}
              className="bg-white text-purple-600 hover:bg-purple-50 
                px-6 py-2 rounded-full font-medium transition-all duration-200"
            >
              Agent Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-none"
          >
            {isOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden transition-all duration-300 overflow-hidden
            ${isOpen ? "max-h-screen pb-4" : "max-h-0"}
          `}
        >
          <div className="flex flex-col space-y-2">
            <Link to="/" className={dropdownItemClasses}>
              Home
            </Link>
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className={dropdownItemClasses}
              >
                {service.label}
              </Link>
            ))}
            <Link to="/about-us" className={dropdownItemClasses}>
              About Us
            </Link>
            <Link to="/contact-us" className={dropdownItemClasses}>
              Contact Us
            </Link>
            <button
              onClick={clientLogin}
              className="bg-white text-purple-600 hover:bg-purple-50 
                px-6 py-2 rounded-full font-medium transition-all duration-200 mt-4"
            >
              Agent Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;