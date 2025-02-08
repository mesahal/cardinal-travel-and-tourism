// import React, { useState } from 'react';
// import { ExternalLink, MapPin } from 'lucide-react';

// const tourPackages = [
//   { name: "Bangladesh", url: "https://arnimholidays.com/bangladesh-tour-package", flag: "https://images.unsplash.com/photo-1583309432732-0e9831a84c1e?w=40&h=30&fit=crop" },
//   { name: "Thailand", url: "https://arnimholidays.com/thailand-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=40&h=30&fit=crop" },
//   { name: "Singapore", url: "https://arnimholidays.com/singapore-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=40&h=30&fit=crop" },
//   { name: "Malaysia", url: "https://arnimholidays.com/malaysia-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=40&h=30&fit=crop" },
//   { name: "Indonesia", url: "https://arnimholidays.com/indonesia-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1558005530-a7958896ec60?w=40&h=30&fit=crop" },
//   { name: "Vietnam", url: "https://arnimholidays.com/vietnam-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=40&h=30&fit=crop" },
//   { name: "Cambodia", url: "https://arnimholidays.com/cambodia-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1583309432732-0e9831a84c1e?w=40&h=30&fit=crop" },
//   { name: "India", url: "https://arnimholidays.com/india-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=40&h=30&fit=crop" },
//   { name: "Nepal", url: "https://arnimholidays.com/nepal-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=40&h=30&fit=crop" },
//   { name: "Bhutan", url: "https://arnimholidays.com/bhutan-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=40&h=30&fit=crop" },
//   { name: "Myanmar", url: "https://arnimholidays.com/myanmar-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1558005530-a7958896ec60?w=40&h=30&fit=crop" },
//   { name: "Maldives", url: "https://arnimholidays.com/maldives-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=40&h=30&fit=crop" },
//   { name: "Sri Lanka", url: "https://arnimholidays.com/sri-lanka-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1546975490-a79abdd54533?w=40&h=30&fit=crop" },
//   { name: "UAE (Dubai)", url: "https://arnimholidays.com/dubai-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=40&h=30&fit=crop" },
//   { name: "Egypt", url: "https://arnimholidays.com/egypt-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=40&h=30&fit=crop" },
//   { name: "Russia", url: "https://arnimholidays.com/russia-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=40&h=30&fit=crop" },
//   { name: "Turkey", url: "https://arnimholidays.com/turkey-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=40&h=30&fit=crop" },
//   { name: "Cyprus", url: "https://arnimholidays.com/cyprus-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=40&h=30&fit=crop" },
//   { name: "China", url: "https://arnimholidays.com/china-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=40&h=30&fit=crop" },
//   { name: "Hong Kong", url: "https://arnimholidays.com/hong-kong-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=40&h=30&fit=crop" },
//   { name: "Uzbekistan", url: "https://arnimholidays.com/uzbekistan-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1528457851219-e5dc6b80c4eb?w=40&h=30&fit=crop" },
//   { name: "Philippines", url: "https://arnimholidays.com/philippines-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=40&h=30&fit=crop" },
//   { name: "Australia", url: "https://arnimholidays.com/australia-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=40&h=30&fit=crop" },
//   { name: "New Zealand", url: "https://arnimholidays.com/new-zealand-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=40&h=30&fit=crop" },
//   { name: "UK", url: "https://arnimholidays.com/uk-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=40&h=30&fit=crop" },
//   { name: "USA", url: "https://arnimholidays.com/usa-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?w=40&h=30&fit=crop" },
//   { name: "Canada", url: "https://arnimholidays.com/canada-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1535745318714-da922ca4c44d?w=40&h=30&fit=crop" },
//   { name: "Multi Country", url: "https://arnimholidays.com/multi-country-tour-package-from-bangladesh.php", flag: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=40&h=30&fit=crop" },
// ];

// const TourPackages = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("");

//   const filteredPackages = tourPackages.filter(pkg =>
//     pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleCountryChange = (e) => {
//     const url = e.target.value;
//     if (url !== "Select Country") {
//       window.open(url, '_blank');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">
//             Tour Packages From Bangladesh
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Please Choose Your Destination
//           </p>
//         </div>

//         <div className="flex flex-col md:flex-row gap-6 mb-8 justify-center items-center">
//           <div className="w-full md:w-1/3">
//             <select
//               value={selectedCountry}
//               onChange={handleCountryChange}
//               className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//             >
//               <option value="Select Country">Select Country</option>
//               {tourPackages.map((pkg, index) => (
//                 <option key={index} value={pkg.url}>
//                   {pkg.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredPackages.map((pkg, index) => (
//             <a
//               key={index}
//               href={pkg.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-200"
//             >
//               <div className="p-4">
//                 <div className="flex items-center gap-3">
//                   <div className="relative w-10 h-6 overflow-hidden rounded-sm shadow-sm">
//                     <img
//                       src={pkg.flag}
//                       alt={`${pkg.name} flag`}
//                       className="absolute inset-0 w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
//                         {pkg.name}
//                       </h3>
//                       <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors duration-200" />
//                     </div>
//                     <div className="flex items-center gap-1 mt-1">
//                       <MapPin className="w-4 h-4 text-gray-400" />
//                       <p className="text-sm text-gray-500">Tour Package</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TourPackages;

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
                image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
                title: "Maldives",
                description: "Discover happiness in luxurious overwater villas"
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
        </div>
      </div>
    </div>
  );
};

export default TourPackages;