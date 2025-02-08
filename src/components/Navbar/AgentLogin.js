import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Globe,
  User,
  DollarSign,
} from "lucide-react";

const AgentLogin = () => {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    preferredCurrency: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    address: "",

    // Owner Information
    name: "",
    ownerPhone: "",

    // Contact Information
    contactFirstName: "",
    contactLastName: "",
    contactPhone: "",
    contactEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_x2g1tgq";
    const templateID = "template_mc8o283";
    const publicKey = "mxL_Yw4s1rAgy6OK4";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert("Form submitted successfully!");
        setFormData({
          companyName: "",
          companyEmail: "",
          companyPhone: "",
          preferredCurrency: "",
          country: "",
          state: "",
          city: "",
          postalCode: "",
          address: "",
          name: "",
          ownerPhone: "",
          contactFirstName: "",
          contactLastName: "",
          contactPhone: "",
          contactEmail: "",
        });
      })
      .catch((error) => {
        console.error("Error sending form:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Agent Registration
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">
                  Company Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="companyEmail"
                      placeholder="Company Email"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.companyEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="companyPhone"
                      placeholder="Company Phone"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.companyPhone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="preferredCurrency"
                      placeholder="Preferred Currency"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.preferredCurrency}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Globe className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="state"
                      placeholder="State/Division"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="ZIP/Postal Code"
                      className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative md:col-span-2">
                    <textarea
                      name="address"
                      placeholder="Address"
                      rows="2"
                      className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Owner Information Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">
                  Owner Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="ownerPhone"
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.ownerPhone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="contactFirstName"
                      placeholder="First Name"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.contactFirstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="contactLastName"
                      placeholder="Last Name"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.contactLastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="contactPhone"
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="contactEmail"
                      placeholder="Email"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition duration-300 shadow-lg"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentLogin;
