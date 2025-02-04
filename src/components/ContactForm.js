import React, { useState } from "react";
import emailjs from "emailjs-com";

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
      const bdMobileRegex = /^01[3-9]\d{8}$/; // Valid Bangladeshi mobile number regex
      if (!bdMobileRegex.test(value)) {
        setMobileError("Invalid mobile number!");
      } else {
        setMobileError(""); // Clear error if valid
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

    const serviceID = "service_iwrf2pu";
    const templateID = "template_r8bh7mm";
    const publicKey = "jSf645M79biWp2Irh";

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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Contact Us
      </h2>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="Your Mobile Number"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        {mobileError && <p className="text-red-500 text-sm">{mobileError}</p>}

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
