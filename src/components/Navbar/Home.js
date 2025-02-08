// import React from "react";
// import { MapPin } from "lucide-react";
// import visa from "../assets/visa-assistance.png";
// import airTicket from "../assets/air-ticket.png";
// import studentVisa from "../assets/study-abroad.jpeg";
// import tourPackage from "../assets/tour-package.jpeg";

// const Home = () => {
//   // Using Unsplash images instead of local assets
//   const services = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1554224155-1696413565d3?w=800&auto=format&fit=crop&q=60",
//       title: "Visa Services",
//       description: "Visa Service From Bangladesh",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=60",
//       title: "Air Ticket Online Booking",
//       description:
//         "Book Domestic / International Cheap Air Ticket at arnimair.com",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60",
//       title: "Cardinal Protect",
//       description: "Protect Policy for You & Your Family",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&auto=format&fit=crop&q=60",
//       title: "Student Visa Services",
//       description: "For Students looking for Educational Opportunity Abroad",
//     },
//   ];

//   return (
//     <div className="flex flex-col bg-purple-50 min-h-screen">
//       {/* Services Section */}
//       <section className="container mx-auto py-8 px-4">
//         <h2 className="text-center text-xl font-bold text-red-600 mb-6">
//           Our cheapest and most reliable services
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="flex flex-col bg-white p-4 rounded-lg border-2 border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-200"
//               style={{ maxWidth: "300px", margin: "0 auto", width: "100%" }}
//             >
//               <div className="h-40 mb-3">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover rounded-md"
//                 />
//               </div>
//               <h3 className="text-center font-bold text-blue-700 text-lg">
//                 {service.title}
//               </h3>
//               <p className="text-center text-sm text-gray-600 mt-1">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Office Location Section */}
//         <div className="mt-12 bg-white p-6 rounded-lg border-2 border-purple-200">
//           <div className="flex items-center justify-center mb-6">
//             <MapPin className="w-6 h-6 text-red-600 mr-2" />
//             <h3 className="text-xl font-bold text-gray-800">
//               Our Office Locations
//             </h3>
//           </div>
//           <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:space-x-6">
//             {/* Malaysia Office */}
//             <div className="text-center text-gray-600">
//               <h4 className="text-lg font-semibold mb-2">Malaysia Office</h4>
//               <p className="mb-2">No. 6G, Jalan Dato Shaik Ahmad</p>
//               <p className="mb-2">70000, Seremban</p>
//               <p>Negeri Sembilan, Malaysia</p>
//             </div>
//             {/* Thailand Office */}
//             <div className="text-center text-gray-600">
//               <h4 className="text-lg font-semibold mb-2">Thailand Office</h4>
//               <p className="mb-2">129/2 Soi Sukhumvit 55 (Thonglor 7)</p>
//               <p className="mb-2">Klongtannua, Wattana</p>
//               <p>Bangkok 10110, Thailand</p>
//             </div>
//             {/* Bangladesh Office */}
//             <div className="text-center text-gray-600">
//               <h4 className="text-lg font-semibold mb-2">Bangladesh Office</h4>
//               <p className="mb-2">6/19 Eastern Plaza, 70 Bir Uttam</p>
//               <p className="mb-2">CR Datta Road, Dhanmondi,</p>
//               <p>Dhaka-1205</p>
//             </div>
//             {/* UAE Office */}
//             <div className="text-center text-gray-600">
//               <h4 className="text-lg font-semibold mb-2">UAE Office</h4>
//               <p className="mb-2">
//                 P.O. Box. 283963 Office No. 101m Bin Sought Building,
//               </p>
//               <p className="mb-2"> Salad Al Din Road, AI Muraqqabat , Deira,</p>
//               <p> Dubai - U.A.E.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Home;
import React from "react";
import { MapPin, Plane, Import as Passport, GraduationCap, Shield } from "lucide-react";

const services = [
  {
    icon: <Passport className="w-8 h-8 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=800&auto=format&fit=crop&q=60",
    title: "Visa Services",
    description: "Expert visa consultation and processing services for all destinations",
  },
  {
    icon: <Plane className="w-8 h-8 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=60",
    title: "Air Ticket Booking",
    description: "Competitive airfares for domestic and international flights",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60",
    title: "Tour Package",
    description: "Delightful Tour Package for enjoyment",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800&auto=format&fit=crop&q=60",
    title: "Student Consultancy",
    description: "Complete support for international education aspirants",
  },
];

const locations = [
  {
    country: "Malaysia",
    address: [
      "No. 6G, Jalan Dato Shaik Ahmad",
      "70000, Seremban",
      "Negeri Sembilan, Malaysia"
    ]
  },
  {
    country: "Thailand",
    address: [
      "129/2 Soi Sukhumvit 55 (Thonglor 7)",
      "Klongtannua, Wattana",
      "Bangkok 10110, Thailand"
    ]
  },
  {
    country: "Bangladesh",
    address: [
      "6/19 Eastern Plaza, 70 Bir Uttam",
      "CR Datta Road, Dhanmondi",
      "Dhaka-1205"
    ]
  },
  {
    country: "UAE",
    address: [
      "P.O. Box. 283963 Office No. 101m",
      "Bin Sought Building, Salad Al Din Road",
      "AI Muraqqabat, Deira, Dubai - U.A.E."
    ]
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&auto=format&fit=crop&q=80"
            alt="Travel Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Your Trusted Travel Partner
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Providing comprehensive travel solutions with reliability and excellence
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
              <MapPin className="w-8 h-8 text-blue-600 mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Global Presence</h2>
            </div>
            <p className="text-gray-600">Find us at our international offices</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
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