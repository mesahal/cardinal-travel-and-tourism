import React from "react";
import {
  MapPin,
  Plane,
  Import as Passport,
  GraduationCap,
  Shield,
} from "lucide-react";
import Qatar from "../../assets/Qatar.jpg";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: <Passport className="w-8 h-8 text-blue-600" />,
    image:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?w=800&auto=format&fit=crop&q=60",
    title: "Visa Services",
    description:
      "Expert visa consultation and processing services for all destinations",
    path: "/visa-service",
  },
  {
    icon: <Plane className="w-8 h-8 text-blue-600" />,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=60",
    title: "Air Ticket Booking",
    description: "Competitive airfares for domestic and international flights",
    path: "/air-ticket",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=60",
    title: "Tour Package",
    description: "Delightful Tour Package for enjoyment",
    path: "/tour-packages",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    image:
      "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&auto=format&fit=crop&q=60",
    title: "Student Services",
    description: "Complete support for international education aspirants",
    path: "/student-visa",
  },
];
const locations = [
  {
    country: "Malaysia",
    address: [
      "No. 6G, Jalan Dato Shaik Ahmad",
      "70000, Seremban",
      "Negeri Sembilan, Malaysia",
    ],
  },
  {
    country: "Thailand",
    address: [
      "129/2 Soi Sukhumvit 55 (Thonglor 7)",
      "Klongtannua, Wattana",
      "Bangkok 10110, Thailand",
    ],
  },
  {
    country: "Bangladesh",
    address: [
      "6/19 Eastern Plaza, 70 Bir Uttam",
      "CR Datta Road, Dhanmondi",
      "Dhaka-1205",
    ],
  },
  {
    country: "UAE",
    address: [
      "P.O. Box. 283963 Office No. 101m",
      "Bin Sought Building, Salad Al Din Road",
      "AI Muraqqabat, Deira, Dubai - U.A.E.",
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            // src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&auto=format&fit=crop&q=80"
            src={Qatar}
            alt="Travel Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Your Trusted Travel Partner
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Providing comprehensive travel solutions with reliability and
            excellence
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience world-class travel services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.path)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 mt-8">
                <div className="flex items-center justify-center -mt-12 mb-4">
                  <div className="p-3 bg-white rounded-full shadow-md">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-[#8e2157] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">
                Global Presence
              </h2>
            </div>
            <p className="text-gray-600">
              Find us at our international offices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-[#8e2157] mb-4">
                  {location.country} Office
                </h3>
                <div className="space-y-2">
                  {location.address.map((line, i) => (
                    <p key={i} className="text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-blue-100">
            Contact us today for personalized travel solutions
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
