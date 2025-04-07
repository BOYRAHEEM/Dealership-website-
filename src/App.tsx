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

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
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
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;