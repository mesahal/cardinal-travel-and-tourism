import React from "react";
import { MapPin } from "lucide-react";
import visa from "../assets/visa-assistance.png";
import airTicket from "../assets/air-ticket.png";
import studentVisa from "../assets/study-abroad.jpeg";
import tourPackage from "../assets/tour-package.jpeg";

const Home = () => {
  // Using Unsplash images instead of local assets
  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1554224155-1696413565d3?w=800&auto=format&fit=crop&q=60",
      title: "Visa Services",
      description: "Visa Service From Bangladesh",
    },
    {
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=60",
      title: "Air Ticket Online Booking",
      description:
        "Book Domestic / International Cheap Air Ticket at arnimair.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60",
      title: "Cardinal Protect",
      description: "Protect Policy for You & Your Family",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&auto=format&fit=crop&q=60",
      title: "Student Visa Services",
      description: "For Students looking for Educational Opportunity Abroad",
    },
  ];

  return (
    <div className="flex flex-col bg-purple-50 min-h-screen">
      {/* Services Section */}
      <section className="container mx-auto py-8 px-4">
        <h2 className="text-center text-xl font-bold text-red-600 mb-6">
          Our cheapest and most reliable services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-4 rounded-lg border-2 border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              style={{ maxWidth: "300px", margin: "0 auto", width: "100%" }}
            >
              <div className="h-40 mb-3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-center font-bold text-blue-700 text-lg">
                {service.title}
              </h3>
              <p className="text-center text-sm text-gray-600 mt-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Office Location Section */}
        <div className="mt-12 bg-white p-6 rounded-lg border-2 border-purple-200">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-red-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-800">
              Our Office Location
            </h3>
          </div>
          <div className="text-center text-gray-600">
            <p className="mb-2">123 Business Center, Level 4</p>
            <p className="mb-2">Main Street, Downtown Area</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
