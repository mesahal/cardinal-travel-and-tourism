import React from "react";
import { Phone, Mail, ChevronDown } from "lucide-react";

const ContactSidebar = () => {
  return (
    <div>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-red-600 text-center mb-4">
            Need Assistance?
          </h2>
          <h3 className="text-lg text-center mb-4">Please Contact</h3>

          <div className="space-y-3">
            <div className="text-center">
              <h4 className="font-semibold text-green-700 mb-2">
                WhatsApp / Viber / imo
              </h4>
              {[
                "+880197-2288-525",
                "+880197-2288-526",
                "+880197-2288-521",
                "+880197-2288-522",
                "+880197-2288-523",
                "+880197-2288-524",
              ].map((number, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2"
                >
                  <Phone size={16} className="text-pink-600" />
                  <span className="text-pink-600 font-semibold">{number}</span>
                </div>
              ))}
            </div>

            <div className="text-center pt-3">
              <div className="flex items-center justify-center gap-2">
                <Mail size={16} className="text-pink-600" />
                <span className="text-pink-600">visa@arnimholidays.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Package Card */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="font-semibold mb-3">Thailand Tour Package</h3>
          <p className="text-gray-600 mb-3">
            Bangkok - Pattaya - Phuket - Chiang Mai- Krabi
          </p>
          <img
            src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=300"
            alt="Thailand Tour Package"
            className="rounded-lg w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;
