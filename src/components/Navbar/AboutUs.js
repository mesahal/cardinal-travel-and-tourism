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
              Cardinal Tour & Travel, a prominent wing of the Cardinal Group, is a dedicated travel agent and career consultant connecting our people to the global community. Building on our group's experience since 1991, Cardinal Tour & Travel is driven by a commitment to excellence. </p>
              <p className="text-gray-600 leading-relaxed mt-4">
              We help transform unskilled and semi-skilled workers into valuable global resources through education and on-the-job training, setting them to international standards. In addition to leisure trips, we also arrange corporate tours for knowledge sharing and skill exchange with the global market.</p>
              <p className="text-gray-600 leading-relaxed mt-4">
              Our dedicated team provides customized, cost-effective services through a one-stop platform for career exploration and immigration, including corporate tours, Umrah and Hajj packages, holiday packages, visa processing, hotel bookings, ticketing, and more, ensuring the satisfaction of our valued stakeholders.</p>
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
                icon: <Plane className="w-8 h-8 text-[#8e2157]" />,
                title: "Tour Packages",
                description: "Customized tours to Thailand, Malaysia, Singapore, Dubai, Nepal, Bhutan, India, Sri Lanka, Maldives, and Bangladesh."
              },
              {
                icon: <Building2 className="w-8 h-8 text-[#8e2157]" />,
                title: "Air Ticketing",
                description: "PSA for AirAsia, Jetstar, Scoot, Tiger Airways, Firefly, and IndiGo Air."
              },
              {
                icon: <Briefcase className="w-8 h-8 text-[#8e2157]" />,
                title: "Visa Assistance",
                description: "Seamless visa processing for multiple destinations including Thailand, Singapore, Malaysia, and more."
              },
              {
                icon: <MapPin className="w-8 h-8 text-[#8e2157]" />,
                title: "Hotel Reservations",
                description: "Worldwide hotel bookings across all categories from budget to luxury accommodations."
              },
              {
                icon: <Users2 className="w-8 h-8 text-[#8e2157]" />,
                title: "Corporate Travel",
                description: "Specialized solutions for business travel, corporate events, and incentive tours."
              },
              {
                icon: <Globe2 className="w-8 h-8 text-[#8e2157]" />,
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
          <div className="grid md:grid-cols-2 gap-8">
            {[ 
              {
                name: "Cardinal Fashion",
                description: "Premium fashion retail and export solutions",
                image: "/images/Alhera.png"
              },
              {
                name: "Cardinal Aviation",
                description: "Professional aviation and travel services",
                image: "/images/Cardinal Tradecom.png"
              }
            ].map((company, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={company.image} 
                  alt={company.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#8e2157] mb-2">{company.name}</h3>
                  <p className="text-gray-600">{company.description}</p>
                </div>
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
                icon: <Award className="w-8 h-8 text-[#8e2157]" />,
                title: "Government Approved",
                description: "Licensed and certified by Bangladesh Government and international travel associations."
              },
              {
                icon: <Globe2 className="w-8 h-8 text-[#8e2157]" />,
                title: "Global Network",
                description: "Strong partnerships with airlines, hotels, and travel operators worldwide."
              },
              {
                icon: <Users2 className="w-8 h-8 text-[#8e2157]" />,
                title: "Strong Support System",
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
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Start Your Journey Today</h2>
          <p className="text-gray-600 mb-6">Contact us to plan your perfect travel experience</p>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://wa.me/+8801813279398"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-green-600 hover:text-green-800"
            >
              Chat with Our Travel Experts on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;