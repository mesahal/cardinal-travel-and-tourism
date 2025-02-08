import React from 'react';
import { Plane, Calendar, Briefcase, UtensilsCrossed, Phone } from 'lucide-react';

const destinations = [
  {
    country: 'Singapore',
    flag: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=25&h=20&fit=crop",
    route: "Dhaka to Singapore Direct Flight",
    airline: "Singapore Airlines (SQ) | DAC 23:55 pm - SIN 06:05 am",
    baggage: "30Kg +7 Kg",
    food: true,
    price: "Tk. 29,000/-"
  },
  {
    country: 'Malaysia',
    flag: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=25&h=20&fit=crop",
    route: "Dhaka to Kuala Lumpur Direct Flight",
    airline: "Air Asia (AK-78)",
    baggage: "30Kg +7 Kg",
    price: "Call for Price"
  },
  {
    country: 'Maldives',
    flag: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=25&h=20&fit=crop",
    route: "Dhaka to Male",
  },
  {
    country: 'Saudi Arabia (KSA)',
    flag: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=25&h=20&fit=crop",
    routes: ["Dhaka to Jeddah", "Dhaka to Riyadh", "Dhaka to Dammam"]
  },
  {
    country: 'Qatar',
    flag: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=25&h=20&fit=crop",
    route: "Dhaka to Doha"
  },
  {
    country: 'Bahrain',
    flag: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=25&h=20&fit=crop",
    route: "Dhaka to Manama"
  }
];

const GroupTicket = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-yellow-50 p-6 text-center border-b border-yellow-100">
          <h1 className="text-2xl font-bold text-gray-800">Group Ticket</h1>
          <p className="text-gray-600 mt-2">Please Choose Your Destination</p>
        </div>

        <div className="p-6 space-y-6">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={destination.flag} 
                  alt={`${destination.country} flag`}
                  className="w-8 h-6 object-cover rounded"
                />
                <h2 className="text-xl font-semibold text-gray-800">{destination.country}</h2>
              </div>

              {destination.routes ? (
                <div className="space-y-2 pl-11">
                  {destination.routes.map((route, idx) => (
                    <div key={idx} className="text-gray-600 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{route}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600">{destination.route}</span>
                    {destination.price && (
                      <span className="ml-auto font-semibold text-gray-800">
                        {destination.price}
                      </span>
                    )}
                  </div>

                  {destination.airline && (
                    <div className="flex items-center gap-3">
                      <Plane className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-600">{destination.airline}</span>
                    </div>
                  )}

                  {destination.baggage && (
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-600">Baggage {destination.baggage}</span>
                    </div>
                  )}

                  {destination.food && (
                    <div className="flex items-center gap-3">
                      <UtensilsCrossed className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-600">Food Includes</span>
                    </div>
                  )}

                  {destination.price === "Call for Price" && (
                    <div className="flex items-center gap-3 text-blue-600">
                      <Phone className="w-5 h-5" />
                      <span className="font-semibold">Call for Price</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupTicket;