import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: 'Rahim Johnson',
      role: 'Founder & CEO',
      image: '/images/team/rahim.jpg',
      description: 'With over 20 years of experience in the luxury automotive industry, Rahim founded the dealership with a vision to provide an unparalleled car buying experience.',
    },
    {
      name: 'Sarah Chen',
      role: 'Sales Director',
      image: '/images/team/sarah.jpg',
      description: 'Sarah brings 15 years of expertise in luxury vehicle sales and customer relationship management.',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Service Manager',
      image: '/images/team/marcus.jpg',
      description: 'A certified master technician with expertise in high-performance and luxury vehicles.',
    },
    {
      name: 'Emily Thompson',
      role: 'Customer Experience Manager',
      image: '/images/team/emily.jpg',
      description: 'Dedicated to ensuring every client receives personalized attention and exceptional service.',
    }
  ];

  const values = [
    {
      title: 'Excellence',
      icon: '⭐',
      description: 'We strive for excellence in every aspect of our business, from vehicle selection to customer service.'
    },
    {
      title: 'Integrity',
      icon: '🤝',
      description: 'We believe in transparent, honest relationships with our clients and partners.'
    },
    {
      title: 'Innovation',
      icon: '💡',
      description: 'We continuously embrace new technologies and methods to enhance the car buying experience.'
    },
    {
      title: 'Sustainability',
      icon: '🌱',
      description: 'We are committed to promoting sustainable luxury mobility solutions.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: 'url(/images/about-hero.jpg)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              Redefining Luxury Car Experience Since 2010
            </motion.p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To provide an exceptional luxury car buying experience by offering the finest vehicles, 
              outstanding customer service, and innovative solutions that exceed our clients' expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">2010 - The Beginning</h3>
                  <p className="text-gray-700">
                    Founded with a vision to revolutionize the luxury car buying experience,
                    we opened our first showroom featuring a carefully curated selection of
                    premium vehicles.
                  </p>
                </div>
                <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">2015 - Expansion</h3>
                  <p className="text-gray-700">
                    We expanded our facilities to include a state-of-the-art service center
                    and launched our signature concierge service for our valued clients.
                  </p>
                </div>
                <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">2020 - Innovation</h3>
                  <p className="text-gray-700">
                    Embracing the future of mobility, we introduced our electric vehicle
                    division and implemented virtual showroom experiences for our clients.
                  </p>
                </div>
                <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative pb-[100%]">
                  <div className="absolute inset-0 bg-gray-200"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Best Luxury Dealership</h3>
              <p className="text-gray-700">2023 Automotive Excellence Awards</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-700">5-Star Rating for 5 Consecutive Years</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2">Service Excellence</h3>
              <p className="text-gray-700">Certified Premium Service Center</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 