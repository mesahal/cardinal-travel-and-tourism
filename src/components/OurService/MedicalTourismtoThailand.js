import React from 'react';
import { Guitar as Hospital, Award, Users, Plane, Hotel, Star, MapPin, Heart, Stethoscope, Clock } from 'lucide-react';

const procedures = [
  {
    title: "Wellness & Preventive Care",
    highlights: [
      "Comprehensive health screenings",
      "State-of-the-art facilities",
      "Personalized treatment plans",
      "Recovery in luxury accommodations"
    ]
  },
  {
    title: "General Medical Care",
    highlights: [
      "Advanced medical treatments",
      "Modern medical facilities",
      "Experienced medical specialists",
      "Comprehensive care packages"
    ]
  },
  {
    title: "Specialized Medical Care",
    highlights: [
      "Cutting-edge surgical procedures",
      "Highly skilled specialists",
      "Tailored treatment plans",
      "Advanced rehabilitation programs"
    ]
  }
];

// Function to display data side by side
function displayProceduresSideBySide(procedures) {
  const maxHighlights = Math.max(...procedures.map(p => p.highlights.length));

  console.log("| " + procedures.map(p => `**${p.title}**`).join(" | ") + " |");
  console.log("|" + procedures.map(() => "---").join("|") + "|");

  for (let i = 0; i < maxHighlights; i++) {
    console.log("| " + procedures.map(p => p.highlights[i] || "").join(" | ") + " |");
  }
}

displayProceduresSideBySide(procedures);


const MedicalTourismtoThailand = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            opacity: '0.7'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Medical Tourism in Asia & Europe</h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl">World-class healthcare combined with luxury recovery in tropical paradise</p>
        </div>
      </div>

      {/* Featured Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-6xl mx-auto -mt-20">
        <div className="h-64 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80" 
            alt="Modern Hospital"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-64 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80" 
            alt="Luxury Recovery"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Why Choose Thailand */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Cardinal Tour & Travel for Medical Tourism</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Hospital className="w-8 h-8" />, title: "JCI Accredited Hospitals", desc: "Internationally recognized healthcare facilities" },
              { icon: <Award className="w-8 h-8" />, title: "Experienced Doctors", desc: "Internationally trained medical professionals" },
              { icon: <Heart className="w-8 h-8" />, title: "Personalized Care", desc: "Dedicated support throughout your medical journey" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg bg-gray-50">
                <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Medical Procedures */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Medical Procedures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {procedures.map((procedure, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{procedure.title}</h3>
                  <div className="text-xl text-blue-600 mb-6">Contact for Consultation</div>
                  <ul className="space-y-3">
                    {procedure.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center">
                        <Stethoscope className="w-5 h-5 text-blue-600 mr-2" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <button className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                    Request Information
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Care Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Plane className="w-6 h-6" />, title: "Travel Arrangements" },
              { icon: <Hotel className="w-6 h-6" />, title: "Luxury Accommodation" },
              { icon: <Users className="w-6 h-6" />, title: "Personal Assistant" },
              { icon: <Clock className="w-6 h-6" />, title: "Recovery Support" }
            ].map((service, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="inline-block p-3 bg-gray-100 rounded-full text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Medical Journey</h2>
          <p className="text-gray-600 mb-8">Our Team is ready to guide you through your medical tourism journey</p>
          {/* <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Free Consultation
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MedicalTourismtoThailand;