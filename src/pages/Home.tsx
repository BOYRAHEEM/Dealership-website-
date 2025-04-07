import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredVehicles = [
    {
      id: 1,
      name: 'Tesla Model S',
      price: '$89,990',
      image: 'https://images.unsplash.com/photo-1551830820-330a71b99659',
      description: 'Luxury electric sedan with exceptional performance',
    },
    {
      id: 2,
      name: 'Tesla Model 3',
      price: '$42,990',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
      description: 'Premium electric sedan with advanced features',
    },
    {
      id: 3,
      name: 'Tesla Model X',
      price: '$99,990',
      image: 'https://images.unsplash.com/photo-1551830822-5a971f48b6d8',
      description: 'Luxury electric SUV with falcon wing doors',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551830820-330a71b99659)' }}></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Welcome to Raheem's Dealership
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Discover your perfect vehicle with us
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/inventory" className="btn btn-primary mr-4">
              View Inventory
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-accent font-bold mb-4">{vehicle.price}</p>
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  <Link
                    to={`/inventory/${vehicle.id}`}
                    className="btn btn-primary w-full"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Premium Selection</h3>
              <p>We offer only the highest quality vehicles from trusted manufacturers.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-2">Expert Service</h3>
              <p>Our team of professionals is dedicated to providing exceptional service.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Support</h3>
              <p>We provide ongoing support and maintenance services for all our vehicles.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 