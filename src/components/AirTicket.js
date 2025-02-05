import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Send, User, Phone, Flag, Calendar, BadgeCheck } from "lucide-react";

const AirTicket = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationality: "",
    mobile: "",
    fromDate: "",
    toDate: "",
    passportNo: "",
    passportExpiry: "",
  });
  const [mobileError, setMobileError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const bdMobileRegex = /^01[3-9]\d{8}$/;
      if (!bdMobileRegex.test(value)) {
        setMobileError("Invalid mobile number!");
      } else {
        setMobileError("");
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mobileError) {
      alert("Please enter a valid Bangladeshi mobile number.");
      return;
    }

    const serviceID = "service_x2g1tgq";
    const templateID = "template_c9k5xrd";
    const publicKey = "mxL_Yw4s1rAgy6OK4";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert("Registration submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          nationality: "",
          mobile: "",
          fromDate: "",
          toDate: "",
          passportNo: "",
          passportExpiry: "",
        });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-indigo-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Air Ticket Form</h2>
              <p className="mb-4 text-purple-100">
                Please fill in your details carefully. Make sure all information
                matches your passport.
              </p>
              {/* <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-4">
                  <BadgeCheck className="w-5 h-5 text-purple-200" />
                  <span>Valid passport required</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="w-5 h-5 text-purple-200" />
                  <span>Select your travel dates</span>
                </div>
              </div> */}
            </div>

            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Personal Information
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <label className="font-semibold text-gray-800">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <label className="font-semibold text-gray-800">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Flag className="h-5 w-5 text-gray-400" />
                    </div>
                    <label className="font-semibold text-gray-800">
                      Nationality
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      placeholder="Nationality"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      value={formData.nationality}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <label className="font-semibold text-gray-800">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile Number"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {mobileError && (
                  <p className="text-red-500 text-sm mt-1">{mobileError}</p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <label className="font-semibold text-gray-800">
                      From Date
                    </label>
                    <input
                      type="date"
                      name="fromDate"
                      placeholder="From Date"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      value={formData.fromDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <label className="font-semibold text-gray-800">
                      To Date
                    </label>
                    <input
                      type="date"
                      name="toDate"
                      placeholder="To Date"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      value={formData.toDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BadgeCheck className="h-5 w-5 text-gray-400" />
                    </div>
                    <label className="font-semibold text-gray-800">
                      Passport Number
                    </label>
                    <input
                      type="text"
                      name="passportNo"
                      placeholder="Passport Number"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      value={formData.passportNo}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <label className="font-semibold text-gray-800">
                      Passport Expiry Date
                    </label>
                    <input
                      type="date"
                      name="passportExpiry"
                      placeholder="Passport Expiry Date"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      value={formData.passportExpiry}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirTicket;
