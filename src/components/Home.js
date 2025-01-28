import React from "react";
import visa from "../assets/visa-assistance.png";
import airTicket from "../assets/air-ticket.png";
import studentVisa from "../assets/study-abroad.jpeg";
import tourPackage from "../assets/tour-package.jpeg";

const Home = () => {
  return (
    <div className="flex flex-col bg-purple-50 min-h-screen">
      {/* Services Section */}
      <section className="flex flex-grow flex-col container mx-auto py-8">
        <h2 className="text-center text-xl font-bold text-red-600 mb-4">
          Our cheapest and most reliable services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="flex flex-col bg-purple-100 p-4 shadow-lg rounded-lg">
            <img
              src={visa}
              alt="Visa Services"
              className="w-full  object-contain rounded-md mb-3 flex-grow"
            />
            <h3 className="text-center font-bold text-blue-700">
              Visa Services
            </h3>
            <p className="text-center">Visa Service From Bangladesh</p>
          </div>
          <div className="flex flex-col bg-purple-100 p-4 shadow-lg rounded-lg">
            <img
              src={airTicket}
              alt="Air Ticket Booking"
              className="w-full object-contain rounded-md mb-3 flex-grow"
            />
            <h3 className="text-center font-bold text-blue-700">
              Air Ticket Online Booking
            </h3>
            <p className="text-center">
              Book Domestic / International Cheap Air Ticket at arnimair.com
            </p>
          </div>
          <div className="flex flex-col bg-purple-100 p-4 shadow-lg rounded-lg">
            <img
              src={studentVisa}
              alt="Arnim Protect"
              className="w-full object-contain rounded-md mb-3 flex-grow"
            />
            <h3 className="text-center font-bold text-blue-700">
              Arnim Protect
            </h3>
            <p className="text-center">Protect Policy for You & Your Family</p>
          </div>
          <div className="flex flex-col bg-purple-100 p-4 shadow-lg rounded-lg">
            <img
              src={tourPackage}
              alt="Student Visa Services"
              className="w-full object-contain rounded-md mb-3 flex-grow"
            />
            <h3 className="text-center font-bold text-blue-700">
              Student Visa Services
            </h3>
            <p className="text-center">
              For Students looking for Educational Opportunity Abroad
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
