import React from 'react';
import { motion } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const ServiceCenter = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Expert Maintenance',
      description: 'Comprehensive care to keep your vehicle performing at its best.',
      icon: '🔧',
    },
    {
      id: '2',
      title: 'Battery Care',
      description: 'Specialized service for optimal battery performance and longevity.',
      icon: '🔋',
    },
    {
      id: '3',
      title: 'Software Excellence',
      description: 'Regular updates to enhance your driving experience.',
      icon: '💻',
    },
    {
      id: '4',
      title: 'Warranty Service',
      description: 'Authorized care for all covered repairs and maintenance.',
      icon: '📋',
    },
  ];

  return (
    <div className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title">Service Excellence</h2>
          <p className="section-subtitle">
            Expert care for your luxury electric vehicle
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                className="card p-8 text-center bg-white"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-text-secondary">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="btn btn-primary">
              Schedule Service
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceCenter; 