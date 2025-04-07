import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Raheem Johnson',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      bio: 'With over 20 years of experience in the automotive industry, Raheem founded the dealership with a vision to provide exceptional service and quality vehicles.',
    },
    {
      id: 2,
      name: 'Sarah Williams',
      position: 'Sales Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bio: 'Sarah brings her expertise in customer relations and sales strategy to ensure every client finds their perfect vehicle.',
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Service Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      bio: 'Michael oversees our service department, ensuring all vehicles meet our high standards of quality and performance.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551830820-330a71b99659)' }}></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Raheem's Dealership
          </motion.h1>
        </div>
      </section>

      {/* Company Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              Our Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 mb-8"
            >
              Founded in 2010, Raheem's Dealership has grown from a small family business to one of the most trusted names in the automotive industry. Our commitment to excellence and customer satisfaction has been the driving force behind our success.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-600"
            >
              We specialize in providing high-quality vehicles and exceptional service to our customers. Our team of experienced professionals is dedicated to helping you find the perfect vehicle that meets your needs and exceeds your expectations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-secondary">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p>We believe in honesty and transparency in all our dealings.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p>We strive for excellence in every aspect of our business.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p>Our customers are at the heart of everything we do.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 