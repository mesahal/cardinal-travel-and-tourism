import React, { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VisaServices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const countries = [
    {
      name: "Thailand",
      path: "/thailand-visa-service",
      flag: "https://flagcdn.com/w40/th.png",
    },
    {
      name: "Singapore",
      path: "/singapore-visa-service",
      flag: "https://flagcdn.com/w40/sg.png",
    },
    {
      name: "Malaysia-Tourist",
      path: "/malaysia-tourist-visa-service",
      flag: "https://flagcdn.com/w40/my.png",
    },
    {
      name: "Indonesia",
      path: "/indonesia-visa-service",
      flag: "https://flagcdn.com/w40/id.png",
    },
    {
      name: "Vietnam",
      path: "/vietnam-visa-service",
      flag: "https://flagcdn.com/w40/vn.png",
    },
    {
      name: "Pakistan",
      path: "/pakistan-visa-service",
      flag: "https://flagcdn.com/w40/pk.png",
    },
    {
      name: "Cambodia",
      path: "/cambodia-visa-service",
      flag: "https://flagcdn.com/w40/kh.png",
    },
    {
      name: "UAE (Dubai)",
      path: "/uae-dubai-visa-service",
      flag: "https://flagcdn.com/w40/ae.png",
    },
    {
      name: "Qatar",
      path: "/qatar-visa-service",
      flag: "https://flagcdn.com/w40/qa.png",
    },
    {
      name: "China",
      path: "/china-visa-service",
      flag: "https://flagcdn.com/w40/cn.png",
    },
    {
      name: "Egypt",
      path: "/egypt-visa-service",
      flag: "https://flagcdn.com/w40/eg.png",
    },
    {
      name: "Philippine",
      path: "/philippines-visa-service",
      flag: "https://flagcdn.com/w40/ph.png",
    },
    {
      name: "Sri Lanka",
      path: "/sri-lanka-visa-service",
      flag: "https://flagcdn.com/w40/lk.png",
    },
    {
      name: "Hong Kong",
      path: "/hong-kong-visa-service",
      flag: "https://flagcdn.com/w40/hk.png",
    },
    {
      name: "India",
      path: "/india-visa-service",
      flag: "https://flagcdn.com/w40/in.png",
    },
    {
      name: "Nepal",
      path: "/nepal-visa-service",
      flag: "https://flagcdn.com/w40/np.png",
    },
    {
      name: "Turkey",
      path: "/turkey-visa-service",
      flag: "https://flagcdn.com/w40/tr.png",
    },
    {
      name: "Netherlands",
      path: "/netherlands-visa-service",
      flag: "https://flagcdn.com/w40/nl.png",
    },
    {
      name: "Morocco",
      path: "/morocco-visa-service",
      flag: "https://flagcdn.com/w40/ma.png",
    },
    {
      name: "Ethiopia",
      path: "/ethiopia-visa-service",
      flag: "https://flagcdn.com/w40/et.png",
    },
  ];
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleCountryClick = (country) => {
    navigate(country.path);
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Visa Services From Bangladesh
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive list of visa services for various
            countries. We provide professional assistance for tourist, business,
            and student visas.
          </p>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCountries.map((country, index) => (
            <div
              key={index}
              onClick={() => handleCountryClick(country)}
              className="group bg-white rounded-lg shadow-lg hover:shadow-md transition-shadow duration-200 overflow-hidden border-2 border-gray-200 cursor-pointer text-2xl p-4"
            >
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-20 h-12 object-cover rounded-sm shadow-sm"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                      {country.name}
                    </h3>
                    <p className="text-lg text-gray-500">Visa Service</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No countries found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisaServices;
