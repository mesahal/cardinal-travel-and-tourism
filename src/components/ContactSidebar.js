import React from "react";
import { Phone, Mail, ChevronDown } from "lucide-react";

const tourPackages = [
  {
    title: "Adventure Package",
    description: "Mountain treks & scenic landscapes",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300"
  },
  // {
  //   title: "Cultural Package",
  //   description: "Historic temples & ancient sites",
  //   image: "https://images.unsplash.com/photo-1609892677791-484c4e6cdf4c?auto=format&fit=crop&w=300"
  // },
  {
    title: "Island Package",
    description: "Pristine beaches & crystal waters",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=300"
  }
];

const ContactSidebar = () => {
  return (
    <div>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-[#8e2157] text-center mb-4">
            Need Assistance?
          </h2>
          <h3 className="text-lg text-center mb-4">Please Contact</h3>

          <div className="space-y-3">
            <div className="text-center">
              <h4 className="font-semibold text-green-700 mb-2">
                WhatsApp 
              </h4>
              {[
                "+8801897619789",
                "+8801897619794",
                "+8801897619791",
              ].map((number, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2"
                >
                  <Phone size={16} className="text-[#8e2157]" />
                  <span className="text-[#8e2157] font-semibold">{number}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tour Packages */}
        {tourPackages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            {/* <h3 className="font-semibold mb-3 text-[#8e2157]">{pkg.title}</h3> */}
            <p className="text-gray-600 mb-3">
              {pkg.description}
            </p>
            <img
              src={pkg.image}
              alt={pkg.title}
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSidebar;