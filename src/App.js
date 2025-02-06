import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import AirAsia from "./components/AirAsia";
import AirTicket from "./components/AirTicket";
import ArnimProtect from "./components/ArnimProtect";
import ContactUs from "./components/ContactUs";
import FerryServices from "./components/FerryServices";
import Firefly from "./components/Firefly";
import GroupTicket from "./components/GroupTicket";
import Header from "./components/Header";
import Home from "./components/Home";
import HotelBooking from "./components/HotelBooking";
import IndiGoAir from "./components/IndiGoAir";
import JetstarAir from "./components/JetstarAir";
import MalaysiaSingaporeBusTicket from "./components/MalaysiaSingaporeBusTicket";
import MedicalTourismtoThailand from "./components/MedicalTourismtoThailand";
import NokAir from "./components/NokAir";
import QuarantinePackages from "./components/QuarantinePackages";
import SpiceJet from "./components/SpiceJet";
import StudentVisa from "./components/StudentVisa";
import TourPackages from "./components/TourPackages";
import TransferServices from "./components/TransferServices";
import UmrahPackages from "./components/UmrahPackages";
import VisaServices from "./components/VisaServices";
import AgentLogin from "./components/AgentLogin";
import ContactForm from "./components/ContactForm";
import ThailandVisa from "./components/ThailandVisa";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Header (Optional, you can include it on specific pages if needed) */}
        <Header />

        {/* Navbar */}
        <Navbar />
        <div className="flex flex-grow flex-col">
          {/* Main Content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/airasia" element={<AirAsia />} />
            <Route path="/air-ticket" element={<AirTicket />} />
            <Route path="/arnim-protect" element={<ArnimProtect />} />
            <Route path="/contact-us" element={<ContactForm />} />
            <Route path="/ferry-services" element={<FerryServices />} />
            <Route path="/firefly" element={<Firefly />} />
            <Route path="/group-ticket" element={<GroupTicket />} />
            <Route path="/hotel-booking" element={<HotelBooking />} />
            <Route path="/indigo-air" element={<IndiGoAir />} />
            <Route path="/jetstar-air" element={<JetstarAir />} />
            <Route
              path="/malaysia-singapore-bus-ticket"
              element={<MalaysiaSingaporeBusTicket />}
            />
            <Route
              path="/medical-tourism-to-thailand"
              element={<MedicalTourismtoThailand />}
            />
            <Route path="/nok-air" element={<NokAir />} />
            <Route
              path="/quarantine-packages"
              element={<QuarantinePackages />}
            />
            <Route path="/spicejet" element={<SpiceJet />} />
            <Route path="/student-visa" element={<StudentVisa />} />
            <Route path="/tour-packages" element={<TourPackages />} />
            <Route path="/transfer-services" element={<TransferServices />} />
            <Route path="/umrah-packages" element={<UmrahPackages />} />
            <Route path="/visa-service" element={<VisaServices />} />
            <Route path="/thailand-visa-service" element={<ThailandVisa />} />
            <Route path="/agent-login" element={<AgentLogin />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
