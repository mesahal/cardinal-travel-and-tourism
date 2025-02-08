import React from 'react';
import { Calendar, Users, Clock, Plane, Hotel, Star, MapPin } from 'lucide-react';

const packages = [
  {
    title: "Standard Blessed Journey",
    price: "Contact for Price",
    highlights: [
      "Luxury hotel stay in Makkah near Haram",
      "Luxury hotel stay in Madinah near Masjid Nabawi",
      "Return flights included",
      "All transportation between cities",
      "Guided Ziyarat tours",
      "Experienced religious guide"
    ]
  },
  {
    title: "Premium Package",
    price: "Contact for Price",
    highlights: [
      "Extended stay in Makkah (5-star luxury hotel)",
      "Extended stay in Madinah (5-star luxury hotel)",
      "Business class flights",
      "VIP transportation",
      "Extended Ziyarat tours",
      "24/7 dedicated support"
    ]
  }
];

const UmrahPackages = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            opacity: '0.7'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Sacred Journey to the Holy Cities</h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl">Experience a spiritual journey of a lifetime with our premium Umrah packages</p>
        </div>
      </div>

      {/* Featured Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-6xl mx-auto -mt-20">
        <div className="h-64 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" 
            alt="Masjid Al-Haram"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-64 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Masjid An-Nabawi"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Umrah Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Hotel className="w-8 h-8" />, title: "Luxury Hotels", desc: "5-star accommodations near the holy sites" },
              { icon: <Plane className="w-8 h-8" />, title: "Flight Included", desc: "Return flights with premium airlines" },
              { icon: <MapPin className="w-8 h-8" />, title: "Guided Tours", desc: "Expert guides for all Ziyarat visits" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg bg-gray-50">
                <div className="inline-block p-3 bg-green-100 rounded-full text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Umrah Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                  <div className="text-xl text-green-600 mb-6">{pkg.price}</div>
                  <ul className="space-y-3">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center">
                        <Star className="w-5 h-5 text-green-600 mr-2" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-gray-600 mb-8">Our travel experts are here to help you plan your spiritual journey</p>
          <button className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default UmrahPackages;