import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FinancingCalculator from './components/FinancingCalculator';
import WorkingHours from './components/WorkingHours';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Map from './components/Map';
import FeaturedVehicles from './components/FeaturedVehicles';
import Newsletter from './components/Newsletter';
import ServiceCenter from './components/ServiceCenter';
import Inventory from './pages/Inventory';
import About from './pages/About';
import ViewModel from './pages/ViewModel';
import BookTestDrive from './pages/BookTestDrive';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <FeaturedVehicles />
                <FinancingCalculator />
                <WorkingHours />
                <ServiceCenter />
                <Testimonials />
                <Newsletter />
                <Map />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/vehicle/:id" element={<ViewModel />} />
          <Route path="/book-test-drive" element={<BookTestDrive />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;