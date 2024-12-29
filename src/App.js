import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import ServicesSection from './components/ServicesSection';
import Clients from './components/Clients';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Service1 from './pages/Service1';
import Service2 from './pages/Service2';
import Service3 from './pages/Service3';
import RentConditions from './pages/RentConditions';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Header />
      <div id="heroSection">
        <HeroSection />
      </div>
      <div id="aboutSection">
        <AboutUs />
      </div>
      <div id="servicesSection">
        <ServicesSection />
      </div>
      <div id="clientsSection">
        <Clients />
      </div>
      <div id="contactSection">
        <ContactForm />
      </div>
      <Routes>
        <Route path="/service1" element={<Service1 />} />
        <Route path="/service2" element={<Service2 />} />
        <Route path="/service3" element={<Service3 />} />
        <Route path="/rent-conditions" element={<RentConditions />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
