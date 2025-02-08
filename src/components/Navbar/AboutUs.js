// import React from 'react'

// const AboutUs = () => {
//   return (
//     <div>AboutUs</div>
//   )
// }

// export default AboutUs
import React from 'react';
import { Plane, Award, Globe2, Users2, Phone, Building2, Briefcase, MapPin } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Cardinal Tour & Travel</h1>
            <p className="text-xl">Your Trusted Travel Partner</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Company Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed">
                Cardinal Tour & Travel is a premier tour operator based in Bangladesh, established on December 19, 2013. As a Bangladesh Government-approved travel agency (Business License No: 02039064, Ministry of Civil Aviation and Tourism Certificate No: 0000859), we take pride in delivering exceptional travel experiences.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Under the leadership of our founder Anisur Rahman, we've grown into one of Bangladesh's leading travel and tourism companies. Our membership in prestigious organizations including ATAB, TOAB, PATA, and CLIA reflects our commitment to industry excellence.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                alt="Travel Experience" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Plane className="w-8 h-8 text-blue-600" />,
                title: "Tour Packages",
                description: "Customized tours to Thailand, Malaysia, Singapore, Dubai, Nepal, Bhutan, India, Sri Lanka, Maldives, and Bangladesh."
              },
              {
                icon: <Building2 className="w-8 h-8 text-blue-600" />,
                title: "Air Ticketing",
                description: "PSA for AirAsia, Jetstar, Scoot, Tiger Airways, Firefly, and IndiGo Air."
              },
              {
                icon: <Briefcase className="w-8 h-8 text-blue-600" />,
                title: "Visa Assistance",
                description: "Seamless visa processing for multiple destinations including Thailand, Singapore, Malaysia, and more."
              },
              {
                icon: <MapPin className="w-8 h-8 text-blue-600" />,
                title: "Hotel Reservations",
                description: "Worldwide hotel bookings across all categories from budget to luxury accommodations."
              },
              {
                icon: <Users2 className="w-8 h-8 text-blue-600" />,
                title: "Corporate Travel",
                description: "Specialized solutions for business travel, corporate events, and incentive tours."
              },
              {
                icon: <Globe2 className="w-8 h-8 text-blue-600" />,
                title: "Transport Services",
                description: "Airport transfers and bus ticketing services for Singapore and Malaysia."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sister Concerns */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Sister Concerns</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Cardinal Fashion",
              "Cardinal Aviation",
              "Cardinal Express",
              "Cardinal Holidays",
              "Cardinal eShop",
              "Cardinal Export",
              "Cardinal Checkout",
              "Cardinal Tel",
              "Cardinal Gift",
              "Cardinal IT"
            ].map((company, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                <span className="text-blue-600 font-medium">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-blue-600" />,
                title: "Government Approved",
                description: "Licensed and certified by Bangladesh Government and international travel associations."
              },
              {
                icon: <Globe2 className="w-8 h-8 text-blue-600" />,
                title: "Global Network",
                description: "Strong partnerships with airlines, hotels, and travel operators worldwide."
              },
              {
                icon: <Users2 className="w-8 h-8 text-blue-600" />,
                title: "24/7 Support",
                description: "Round-the-clock assistance throughout your journey."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Start Your Journey Today</h2>
          <p className="text-gray-600 mb-6">Contact us to plan your perfect travel experience</p>
          <div className="flex items-center justify-center space-x-4">
            <Phone className="w-5 h-5 text-blue-600" />
            <span className="text-lg font-semibold text-blue-600">Contact Our Travel Experts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;