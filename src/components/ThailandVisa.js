import React from "react";
import { useNavigate } from "react-router-dom";
import ContactSidebar from "./ContactSidebar";

function ThailandVisa() {
  const navigate = useNavigate();

  const countries = [
    { name: "Thailand", path: "/thailand-visa-service" },
    { name: "Singapore", path: "/singapore-visa-service" },
    { name: "Malaysia", path: "/malaysia-visa-service" },
    { name: "Japan", path: "/japan-visa-service" },
    { name: "Indonesia", path: "/indonesia-visa-service" },
    { name: "Vietnam", path: "/vietnam-visa-service" },
    { name: "Pakistan", path: "/pakistan-visa-service" },
    { name: "Cambodia", path: "/cambodia-visa-service" },
    { name: "UAE (Dubai)", path: "/uae-dubai-visa-service" },
    { name: "Qatar", path: "/qatar-visa-service" },
    { name: "Saudi Arabia (KSA)", path: "/saudi-arabia-visa-service" },
  ];

  const requiredDocuments = [
    "Passport Biodata page scan copy",
    "Recent 3.5 cm x 4.5 cm size Photo with white background scan copy",
    "Visiting Card & NID",
    "Bank Statement for last six months & Bank Solvency Certificate",
    "Document indicating current location (If Stay Outside of Bangladesh)",
  ];

  const additionalDocuments = [
    "Letter of appointment from hospital/medical center for Medical Visa",
    "Student ID Card for Student (if child travel with parent)",
    "Birth Certificate for Infant (if child travel with parent)",
    "Marriage Certificate (only for newly married couple)",
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
            Thailand Visa Service From Bangladesh
          </h1>
          <p className="text-gray-600">
            Arnim Holidays Authorized Visa Submitting Agents of Royal Thai
            Embassy in Dhaka, Bangladesh
          </p>
        </header>

        {/* Country Selection */}
        <div className="mb-8">
          <select
            className="w-full max-w-md mx-auto block px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            defaultValue="Thailand"
            onChange={handleCountryChange}
          >
            <option value="" disabled>
              Select Country
            </option>
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Required Documents */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 bg-gray-100 p-3 rounded">
                Documents Required for Thai eVisa
              </h2>
              <ul className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
                <li className="border-t my-4"></li>
                {additionalDocuments.map((doc, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <span className="h-2 w-2 bg-yellow-500 rounded-full"></span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-center bg-gray-200 p-3 rounded mb-6 font-semibold">
                Per Person Price (Non-Refundable)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold bg-gray-100 p-2 rounded mb-3">
                    Tourist eVisa Fee & Processing Fee
                  </h3>
                  <p className="pl-4 text-gray-700">
                    Single Entry 90 Days Validity 59 Days Stay Thailand Tourist
                    eVisa
                    <br />
                    <span className="font-semibold">Total: Tk.10,000/-</span>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold bg-gray-100 p-2 rounded mb-3">
                    Medical eVisa Fee & Processing Fee
                  </h3>
                  <p className="pl-4 text-gray-700">
                    Single Entry 90 Days Validity 59 Days Stay Medical eVisa
                    <br />
                    <span className="font-semibold">Total: Tk.10,000/-</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Sidebar */}
          <ContactSidebar />
        </div>
      </div>
    </div>
  );
}

export default ThailandVisa;
