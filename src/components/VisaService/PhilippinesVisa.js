import React from "react";
import { useNavigate } from "react-router-dom";
import ContactSidebar from "../ContactSidebar";

function PhilippinesVisa() {
  const navigate = useNavigate();

  const countries = [
    { name: "Cambodia", path: "/cambodia-visa-service" },
    { name: "China", path: "/china-visa-service" },
    { name: "Egypt", path: "/egypt-visa-service" },
    { name: "Ethiopia", path: "/ethiopia-visa-service" },
    { name: "Hong Kong", path: "/hong-kong-visa-service" },
    { name: "India", path: "/india-visa-service" },
    { name: "Indonesia", path: "/indonesia-visa-service" },
    { name: "Malaysia-Tourist", path: "/malaysia-tourist-visa-service" },
    { name: "Morocco", path: "/morocco-visa-service" },
    { name: "Nepal", path: "/nepal-visa-service" },
    { name: "Netherlands", path: "/netherlands-visa-service" },
    { name: "Pakistan", path: "/pakistan-visa-service" },
    { name: "Philippines", path: "/philippines-visa-service" },
    { name: "Qatar", path: "/qatar-visa-service" },
    { name: "Singapore", path: "/singapore-visa-service" },
    { name: "Sri Lanka", path: "/sri-lanka-visa-service" },
    { name: "Thailand", path: "/thailand-visa-service" },
    { name: "Turkey", path: "/turkey-visa-service" },
    { name: "UAE (Dubai)", path: "/uae-dubai-visa-service" },
    { name: "Vietnam", path: "/vietnam-visa-service" },
  ];
  

  const handleCountryChange = (event) => {
    const selectedPath = countries.find(
      (country) => country.name === event.target.value
    )?.path;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-600 mb-2">
            Philippines Visa Service
          </h1>
          <p className="text-gray-600">
            Get your Philippines visa processed with ease and reliability.
          </p>
        </header>

        <div className="mb-8">
          <select
            className="w-full max-w-md mx-auto block px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            defaultValue="Philippines"
            onChange={handleCountryChange}
          >
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Required Documents</h2>
            <ul className="space-y-3">
              <li>Valid passport with at least 6 months validity</li>
              <li>Recent passport-size photo</li>
              <li>Bank statement (last 6 months)</li>
              <li>Flight and hotel booking confirmation</li>
            </ul>
          </div>
          <ContactSidebar />
        </div>
      </div>
    </div>
  );
}

export default PhilippinesVisa;
