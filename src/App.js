import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/Navbar/AboutUs";
import AirAsia from "./components/Unused/AirAsia";
import AirTicket from "./components/Navbar/AirTicket";
import ArnimProtect from "./components/Unused/ArnimProtect";
import ContactUs from "./components/Unused/ContactUs";
import FerryServices from "./components/Unused/FerryServices";
import Firefly from "./components/Unused/Firefly";
import GroupTicket from "./components/OurService/GroupTicket";
import Header from "./components/Header";
import Home from "./components/Navbar/Home";
import HotelBooking from "./components/Unused/HotelBooking";
import IndiGoAir from "./components/Unused/IndiGoAir";
import JetstarAir from "./components/Unused/JetstarAir";
import MalaysiaSingaporeBusTicket from "./components/Unused/MalaysiaSingaporeBusTicket";
import MedicalTourismtoThailand from "./components/OurService/MedicalTourismtoThailand";
import NokAir from "./components/Unused/NokAir";
import QuarantinePackages from "./components/Unused/QuarantinePackages";
import SpiceJet from "./components/Unused/SpiceJet";
import StudentVisa from "./components/OurService/StudentVisa";
import TourPackages from "./components/OurService/TourPackages";
import TransferServices from "./components/Unused/TransferServices";
import UmrahPackages from "./components/OurService/UmrahPackages";
import VisaServices from "./components/Navbar/VisaServices";
import AgentLogin from "./components/Navbar/AgentLogin";
import UAEVisa from "./components/VisaService/UaeVisa";
import QatarVisa from "./components/VisaService/QatarVisa";
import ChinaVisa from "./components/VisaService/ChinaVisa";
import EgyptVisa from "./components/VisaService/EgyptVisa";
import PhilippinesVisa from "./components/VisaService/PhilippinesVisa";
import SriLankaVisa from "./components/VisaService/SriLankaVisa";
import HongKongVisa from "./components/VisaService/HongKongVisa";
import IndiaVisa from "./components/VisaService/IndiaVisa";
import TurkeyVisa from "./components/VisaService/TurkeyVisa";
import NetherlandsVisa from "./components/VisaService/NetherlandsVisa";
import EthiopiaVisa from "./components/VisaService/EthiopiaVisa";
import MoroccoVisa from "./components/VisaService/MoroccoVisa";
import MalaysiaTouristVisa from "./components/VisaService/MalaysiaTouristVisa";
import PakistanVisa from "./components/VisaService/PakistanVisa";
import CambodiaVisa from "./components/VisaService/CambodiaVisa";
import ContactForm from "./components/Navbar/ContactForm";
import ThailandVisa from "./components/VisaService/ThailandVisa";
import SingaporeVisa from "./components/VisaService/SingaporeVisa";
import IndonesiaVisa from "./components/VisaService/IndonesiaVisa";
import VietNamVisa from "./components/VisaService/VietnamVisa";
import NepalVisa from "./components/VisaService/NepalVisa";

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
            <Route path="/singapore-visa-service" element={<SingaporeVisa />} />
            <Route path="/indonesia-visa-service" element={<IndonesiaVisa />} />
            <Route path="/vietnam-visa-service" element={<VietNamVisa />} />
            <Route path="/uae-dubai-visa-service" element={<UAEVisa />} />
            <Route path="/qatar-visa-service" element={<QatarVisa />} />
            <Route path="/china-visa-service" element={<ChinaVisa />} />
            <Route path="/egypt-visa-service" element={<EgyptVisa />} />
            <Route
              path="/philippines-visa-service"
              element={<PhilippinesVisa />}
            />
            <Route path="/sri-lanka-visa-service" element={<SriLankaVisa />} />
            <Route path="/hong-kong-visa-service" element={<HongKongVisa />} />
            <Route path="/india-visa-service" element={<IndiaVisa />} />
            <Route path="/nepal-visa-service" element={<NepalVisa />} />
            <Route path="/turkey-visa-service" element={<TurkeyVisa />} />
            <Route
              path="/netherlands-visa-service"
              element={<NetherlandsVisa />}
            />
            <Route path="/ethiopia-visa-service" element={<EthiopiaVisa />} />
            <Route path="/morocco-visa-service" element={<MoroccoVisa />} />
            <Route
              path="/malaysia-tourist-visa-service"
              element={<MalaysiaTouristVisa />}
            />
            <Route path="/pakistan-visa-service" element={<PakistanVisa />} />
            <Route path="/cambodia-visa-service" element={<CambodiaVisa />} />
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
