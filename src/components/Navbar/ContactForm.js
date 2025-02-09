import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Send, User, Phone, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
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
    const templateID = "template_mc8o283";
    const publicKey = "mxL_Yw4s1rAgy6OK4";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", mobile: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-[#8e2157] to-[#ff66a3] p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-4 text-purple-100">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              {/* <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-purple-200" />
                  <span>+880 1XXX-XXXXXX</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageSquare className="w-5 h-5 text-purple-200" />
                  <span>info@example.com</span>
                </div>
              </div> */}
            </div>

            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
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
                    type="text"
                    name="mobile"
                    placeholder="Your Mobile Number"
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                {mobileError && (
                  <p className="text-red-500 text-sm mt-1">{mobileError}</p>
                )}

                <div className="relative">
                  <div className="absolute top-3 left-0 pl-3 flex items-center pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#8e2157] to-[#ff66a3] text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
