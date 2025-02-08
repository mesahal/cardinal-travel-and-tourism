import React from 'react';
import { Plane, Clock, Wallet, Star, Shield, Map } from 'lucide-react';

const TourPackages = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Tour Packages from Bangladesh</h1>
            <p className="text-xl">Your Dream Destination, Your Custom Journey!</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            At Cardinal Tour & Travel, we offer customized tour packages tailored to your preferences. Whether you're looking for an adventurous escape, a relaxing beach holiday, a cultural exploration, or a luxurious getaway, we design the perfect travel experience for you.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Map className="w-8 h-8 text-blue-600" />,
                title: "Choose Your Destination",
                description: "Explore top destinations like Thailand, Malaysia, Singapore, Dubai, Nepal, Bhutan, India, Sri Lanka, Maldives, and more."
              },
              {
                icon: <Star className="w-8 h-8 text-blue-600" />,
                title: "Tell Us Your Preferences",
                description: "Share your travel dates, duration, budget, number of travelers, preferred accommodation type, and special requests."
              },
              {
                icon: <Plane className="w-8 h-8 text-blue-600" />,
                title: "Get a Personalized Itinerary",
                description: "We craft the ideal tour package with flights, hotels, sightseeing, transfers, and experiences tailored to you."
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: "Book with Confidence",
                description: "Enjoy seamless service, 24/7 support, and the best travel deals."
              }
            ].map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Destinations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Destinations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                title: "Thailand",
                description: "Experience the perfect blend of culture, beaches, and cuisine"
              },
              {
                image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80",
                title: "Malaysia",
                description: "Experience vibrant culture and modern cityscapes in Southeast Asia"
              },
              {
                image: "https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
                title: "Dubai",
                description: "Experience luxury, adventure, and modern marvels"
              }
            ].map((destination, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                  <p className="text-gray-600">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Our Custom Tour Packages?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-blue-600" />,
                title: "Flexible Itineraries",
                description: "Designed as per your schedule and interests"
              },
              {
                icon: <Wallet className="w-8 h-8 text-blue-600" />,
                title: "Best Price Guaranteed",
                description: "Competitive pricing with no hidden costs"
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: "Expert Travel Assistance",
                description: "From visa processing to local guides, we take care of everything"
              },
              {
                icon: <Star className="w-8 h-8 text-blue-600" />,
                title: "Premium & Budget Options",
                description: "Choose from luxury, mid-range, or economy packages"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Start Planning Your Dream Vacation</h2>
          <p className="text-gray-600 mb-6">Contact us today to get the best customized tour package from Bangladesh!</p>
          {/* <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Your Custom Package
          </button> */}
          <div className="flex items-center justify-center space-x-4">
            {/* <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/WhatsApp.svg" 
              alt="WhatsApp Logo" 
              className="w-6 h-6" 
            /> */}
            <a
              href="https://wa.me/+8801897619789"
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

export default TourPackages;