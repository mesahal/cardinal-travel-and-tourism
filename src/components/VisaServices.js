import React, { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VisaServices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const countries = [
    { name: "Thailand", path: "/thailand-visa-service", flag: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=40&h=30&fit=crop" },
    { name: "Singapore", path: "/singapore-visa-service", flag: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=40&h=30&fit=crop" },
    { name: "Malaysia-Tourist", path: "/malaysia-tourist-visa-service", flag: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=40&h=30&fit=crop" },
    // { name: "Malaysia-Student", path: "/malaysia-student-visa-service", flag: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=40&h=30&fit=crop" },
    { name: "Indonesia", path: "/indonesia-visa-service", flag: "https://images.unsplash.com/photo-1558005530-a7958896ec60?w=40&h=30&fit=crop" },
    { name: "Vietnam", path: "/vietnam-visa-service", flag: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=40&h=30&fit=crop" },
    { name: "Pakistan", path: "/pakistan-visa-service", flag: "https://images.unsplash.com/photo-1586077427825-15dca6b44dba?w=40&h=30&fit=crop" },
    { name: "Cambodia", path: "/cambodia-visa-service", flag: "https://images.unsplash.com/photo-1583309432732-0e9831a84c1e?w=40&h=30&fit=crop" },
    { name: "UAE (Dubai)", path: "/uae-dubai-visa-service", flag: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=40&h=30&fit=crop" },
    { name: "Qatar", path: "/qatar-visa-service", flag: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=40&h=30&fit=crop" },
    // { name: "Saudi Arabia (KSA)", path: "/saudi-arabia-visa-service", flag: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=40&h=30&fit=crop" },
    { name: "China", path: "/china-visa-service", flag: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=40&h=30&fit=crop" },
    { name: "Egypt", path: "/egypt-visa-service", flag: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=40&h=30&fit=crop" },
    { name: "Philippine", path: "/philippines-visa-service", flag: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=40&h=30&fit=crop" },
    // { name: "Uzbekistan", path: "/uzbekistan-visa-service", flag: "https://images.unsplash.com/photo-1528457851219-e5dc6b80c4eb?w=40&h=30&fit=crop" },
    { name: "Sri Lanka", path: "/sri-lanka-visa-service", flag: "https://images.unsplash.com/photo-1546975490-a79abdd54533?w=40&h=30&fit=crop" },
    { name: "Hong Kong", path: "/hong-kong-visa-service", flag: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=40&h=30&fit=crop" },
    { name: "India", path: "/india-visa-service", flag: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=40&h=30&fit=crop" },
    { name: "Nepal", path: "/nepal-visa-service", flag: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=40&h=30&fit=crop" },
    { name: "Turkey", path: "/turkey-visa-service", flag: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=40&h=30&fit=crop" },
    { name: "Netherlands", path: "/netherlands-visa-service", flag: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=40&h=30&fit=crop" },
    // { name: "New Zealand", path: "/new-zealand-visa-service", flag: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=40&h=30&fit=crop" },
    { name: "Morocco", path: "/morocco-visa-service", flag: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=40&h=30&fit=crop" },
    // { name: "Brazil", path: "/brazil-visa-service", flag: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=40&h=30&fit=crop" },
    // { name: "Brunei", path: "/brunei-visa-service", flag: "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?w=40&h=30&fit=crop" },
    // { name: "Kenya", path: "/kenya-visa-service", flag: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=40&h=30&fit=crop" },
    // { name: "Malawi", path: "/malawi-visa-service", flag: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=40&h=30&fit=crop" },
    // { name: "Uganda", path: "/uganda-visa-service", flag: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=40&h=30&fit=crop" },
    // { name: "Rwanda", path: "/rwanda-visa-service", flag: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=40&h=30&fit=crop" },
    // { name: "Tanzania", path: "/tanzania-visa-service", flag: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=40&h=30&fit=crop" },
    // { name: "Zambia", path: "/zambia-visa-service", flag: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=40&h=30&fit=crop" },
    { name: "Ethiopia", path: "/ethiopia-visa-service", flag: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=40&h=30&fit=crop" }
  ];
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleCountryClick = (country) => {
    navigate(country.path);
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
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
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200 cursor-pointer"
            >
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-10 h-6 object-cover rounded-sm shadow-sm"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                      {country.name}
                    </h3>
                    <p className="text-sm text-gray-500">Visa Service</p>
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
