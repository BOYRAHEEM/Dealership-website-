import { motion } from 'framer-motion';

const services = [
  {
    title: "Vehicle Maintenance",
    description: "Expert maintenance services to keep your luxury vehicle in pristine condition.",
    icon: "🔧"
  },
  {
    title: "Financing Options",
    description: "Flexible financing solutions tailored to your needs.",
    icon: "💰"
  },
  {
    title: "Trade-In Services",
    description: "Get the best value for your current vehicle with our trade-in program.",
    icon: "🔄"
  },
  {
    title: "Extended Warranty",
    description: "Comprehensive warranty coverage for your peace of mind.",
    icon: "📜"
  },
  {
    title: "Detailing Services",
    description: "Professional detailing to maintain your vehicle's showroom finish.",
    icon: "✨"
  },
  {
    title: "Parts & Accessories",
    description: "Genuine parts and premium accessories for your luxury vehicle.",
    icon: "🔩"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-400">Comprehensive services for your luxury vehicle</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-gold-500 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Our Services?</h2>
          <p className="text-xl text-gray-400 mb-8">Contact us today to schedule an appointment</p>
          <a
            href="/contact"
            className="inline-block bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services; 