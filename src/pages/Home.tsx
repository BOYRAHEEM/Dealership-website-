import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const featuredVehicles = [
    {
      id: 1,
      brand: 'BMW',
      model: 'i7',
      price: '$120,000',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      description: 'The future of luxury electric sedans',
    },
    {
      id: 2,
      brand: 'Porsche',
      model: 'Taycan',
      price: '$150,000',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      description: 'Performance meets sustainability',
    },
    {
      id: 3,
      brand: 'Lamborghini',
      model: 'Huracan',
      price: '$250,000',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      description: 'Italian supercar excellence',
    },
    {
      id: 4,
      brand: 'Mercedes-Benz',
      model: 'EQS',
      price: '$105,000',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      description: 'Electric luxury reimagined',
    },
    {
      id: 5,
      brand: 'Aston Martin',
      model: 'DB12',
      price: '$245,000',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      description: 'British elegance meets power',
    },
    {
      id: 6,
      brand: 'Ferrari',
      model: 'Roma',
      price: '$230,000',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      description: 'Italian passion in motion',
    },
    {
      id: 7,
      brand: 'Rolls-Royce',
      model: 'Ghost',
      price: '$350,000',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      description: 'The epitome of luxury',
    },
    {
      id: 8,
      brand: 'Bentley',
      model: 'Continental GT',
      price: '$220,000',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      description: 'Grand touring perfection',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [financeData, setFinanceData] = useState({
    vehiclePrice: 100000,
    downPayment: 20000,
    loanTerm: 60,
    interestRate: 5.5
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredVehicles.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredVehicles.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredVehicles.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredVehicles.length) % featuredVehicles.length);
    setIsAutoPlaying(false);
  };

  const calculateMonthlyPayment = () => {
    const principal = financeData.vehiclePrice - financeData.downPayment;
    const monthlyRate = financeData.interestRate / 100 / 12;
    const numberOfPayments = financeData.loanTerm;
    
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return monthlyPayment.toFixed(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFinanceData(prev => ({
      ...prev,
      [name]: parseFloat(value)
    }));
  };

  const workingDays = [
    {
      day: 'Monday',
      hours: '9:00 AM - 7:00 PM',
      services: ['Sales', 'Service', 'Test Drives'],
      isOpen: true
    },
    {
      day: 'Tuesday',
      hours: '9:00 AM - 7:00 PM',
      services: ['Sales', 'Service', 'Test Drives'],
      isOpen: true
    },
    {
      day: 'Wednesday',
      hours: '9:00 AM - 7:00 PM',
      services: ['Sales', 'Service', 'Test Drives'],
      isOpen: true
    },
    {
      day: 'Thursday',
      hours: '9:00 AM - 7:00 PM',
      services: ['Sales', 'Service', 'Test Drives'],
      isOpen: true
    },
    {
      day: 'Friday',
      hours: '9:00 AM - 7:00 PM',
      services: ['Sales', 'Service', 'Test Drives'],
      isOpen: true
    },
    {
      day: 'Saturday',
      hours: '10:00 AM - 6:00 PM',
      services: ['Sales', 'Test Drives'],
      isOpen: true
    },
    {
      day: 'Sunday',
      hours: 'Closed',
      services: [],
      isOpen: false
    }
  ];

  const specialOffers = [
    {
      id: 1,
      title: 'Summer Special',
      description: 'Get 0% APR financing on select models',
      icon: '🌞',
      validUntil: 'August 31, 2024'
    },
    {
      id: 2,
      title: 'Trade-In Bonus',
      description: 'Extra $5,000 on your trade-in vehicle',
      icon: '🚗',
      validUntil: 'July 31, 2024'
    },
    {
      id: 3,
      title: 'Maintenance Package',
      description: 'Free maintenance for 3 years',
      icon: '🔧',
      validUntil: 'December 31, 2024'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Michael Johnson',
      role: 'Business Executive',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      quote: 'The level of service and attention to detail at Coolman Autos is unmatched. They made my car buying experience exceptional.'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Tech Entrepreneur',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      quote: 'I was impressed by Coolman Autos\' knowledge of luxury vehicles and the personalized approach to finding the perfect car for my needs.'
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Investment Banker',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd3298ea0',
      quote: 'The after-sales service and maintenance support at Coolman Autos have been outstanding. They truly care about their customers.'
    },
    {
      id: 4,
      name: 'Emma Rodriguez',
      role: 'Luxury Real Estate Agent',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      quote: 'The selection of luxury vehicles at Coolman Autos is impressive, and their trade-in process was seamless. Highly recommended!'
    },
    {
      id: 5,
      name: 'James Wilson',
      role: 'Professional Athlete',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      quote: 'Coolman Autos\' concierge service is exceptional. They handled everything from delivery to customization exactly as I wanted.'
    },
    {
      id: 6,
      name: 'Sophia Lee',
      role: 'Fashion Designer',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      quote: 'The attention to detail in Coolman Autos\' vehicle preparation and delivery process is remarkable. A truly premium experience.'
    },
    {
      id: 7,
      name: 'Alexander Thompson',
      role: 'Corporate Lawyer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      quote: 'Coolman Autos\' financing options are flexible and competitive. Made my dream car purchase a reality with excellent terms.'
    },
    {
      id: 8,
      name: 'Olivia Martinez',
      role: 'Medical Professional',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      quote: 'The maintenance team at Coolman Autos is highly skilled and professional. My vehicle is always in perfect condition.'
    }
  ];

  const services = [
    {
      id: 1,
      title: 'Vehicle Maintenance',
      description: 'Expert service and maintenance for all luxury vehicles',
      icon: '🔧'
    },
    {
      id: 2,
      title: 'Customization',
      description: 'Personalize your vehicle to match your style',
      icon: '🎨'
    },
    {
      id: 3,
      title: 'Financing',
      description: 'Flexible financing options for all budgets',
      icon: '💰'
    },
    {
      id: 4,
      title: 'Trade-In',
      description: 'Get the best value for your current vehicle',
      icon: '🔄'
    }
  ];

  const whyChooseUs = [
    {
      id: 1,
      title: 'Expert Team',
      description: 'Our team consists of certified luxury vehicle specialists with years of experience.',
      icon: '👨‍🔧'
    },
    {
      id: 2,
      title: 'Premium Service',
      description: 'Experience white-glove service from consultation to delivery.',
      icon: '🤝'
    },
    {
      id: 3,
      title: 'Quality Assurance',
      description: 'Every vehicle undergoes a rigorous 200-point inspection.',
      icon: '✅'
    },
    {
      id: 4,
      title: 'Flexible Financing',
      description: 'Tailored financing solutions for every budget.',
      icon: '💰'
    }
  ];

  const latestNews = [
    {
      id: 1,
      title: 'New Electric Models Arriving Soon',
      date: 'June 15, 2024',
      excerpt: 'Discover our latest lineup of luxury electric vehicles featuring cutting-edge technology.',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      category: 'News'
    },
    {
      id: 2,
      title: 'Summer Service Special',
      date: 'June 10, 2024',
      excerpt: 'Take advantage of our exclusive summer maintenance packages.',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      category: 'Promotion'
    },
    {
      id: 3,
      title: 'Dealership Expansion',
      date: 'June 5, 2024',
      excerpt: 'We\'re expanding our showroom to better serve our growing clientele.',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      category: 'Announcement'
    }
  ];

  useEffect(() => {
    let interval: number;
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevClick = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleNextClick = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Styling */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/hero-bg.jpg")',
            filter: 'brightness(0.7)'
          }}
        ></div>

        {/* Content with Enhanced Animation */}
        <motion.div
          className="relative z-20 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to
            <span className="block text-4xl md:text-6xl text-gold-500 mt-2">Coolman Auto's</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your premier destination for luxury vehicles
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/inventory"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Our Collection
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">Special Offers</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-gold-500/0 via-gold-500 to-gold-500/0 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg shadow-2xl border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                <div className="relative p-8 h-full flex flex-col">
                  <motion.div 
                    className="text-6xl mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {offer.icon}
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                    {offer.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6 flex-grow">{offer.description}</p>
                  <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-xl backdrop-blur-sm">
                      <span className="text-gold-400 text-sm font-medium">Valid until</span>
                      <span className="text-white text-sm font-bold">{offer.validUntil}</span>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-block w-full bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 text-center border border-white/20 hover:border-white/40 shadow-lg"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-xl text-white/80 mb-8">Don't miss out on these exclusive offers</p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-white font-semibold px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-gold-500/25"
            >
              Contact Us for Details
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Vehicles Section with Sliding Animation */}
      <section className="py-20 bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Vehicles</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="relative h-[500px] overflow-hidden">
              {featuredVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  className="absolute w-full h-full"
                  initial={{ x: '100%' }}
                  animate={{
                    x: index === currentSlide ? '0%' : index < currentSlide ? '-100%' : '100%',
                    opacity: index === currentSlide ? 1 : 0,
                    scale: index === currentSlide ? 1 : 0.9,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                    {/* Vehicle Image */}
                    <motion.div
                      className="relative h-full rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={vehicle.image}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                    </motion.div>

                    {/* Vehicle Details */}
                    <motion.div
                      className="text-white space-y-6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div>
                        <span className="text-gold-500 font-semibold">{vehicle.brand}</span>
                        <h3 className="text-4xl font-bold mt-2">{vehicle.model}</h3>
                      </div>
                      <p className="text-2xl font-bold text-gold-500">{vehicle.price}</p>
                      <p className="text-gray-300 text-lg">{vehicle.description}</p>
                      <Link
                        to={`/vehicle/${vehicle.id}`}
                        className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                      >
                        View Details
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {featuredVehicles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-gold-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative p-8 h-full flex flex-col">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-500 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 flex-grow">{feature.description}</p>
                  <div className="mt-6">
                    <div className="w-full h-1 bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0 transform group-hover:scale-x-100 scale-x-0 transition-transform duration-300"></div>
                  </div>
                </div>
                <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-gold-500/30 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-white/60 mb-6">Experience the difference of luxury service</p>
            <Link
              to="/contact"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Finance Calculator Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Finance Calculator</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl"
            >
              <div className="space-y-8">
                {[
                  {
                    name: 'vehiclePrice',
                    label: 'Vehicle Price',
                    min: 50000,
                    max: 500000,
                    step: 1000,
                    format: (value: number) => `$${value.toLocaleString()}`
                  },
                  {
                    name: 'downPayment',
                    label: 'Down Payment',
                    min: 0,
                    max: financeData.vehiclePrice,
                    step: 1000,
                    format: (value: number) => `$${value.toLocaleString()}`
                  },
                  {
                    name: 'loanTerm',
                    label: 'Loan Term',
                    min: 12,
                    max: 84,
                    step: 12,
                    format: (value: number) => `${value} months`
                  },
                  {
                    name: 'interestRate',
                    label: 'Interest Rate',
                    min: 0,
                    max: 15,
                    step: 0.1,
                    format: (value: number) => `${value}%`
                  }
                ].map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-white text-lg font-medium">{field.label}</label>
                      <span className="text-white font-bold text-xl">
                        {field.format(financeData[field.name as keyof typeof financeData])}
                      </span>
                    </div>
                    <input
                      type="range"
                      name={field.name}
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      value={financeData[field.name as keyof typeof financeData]}
                      onChange={handleInputChange}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                    />
                    <div className="flex justify-between text-sm text-white/60 mt-1">
                      <span>{field.format(field.min)}</span>
                      <span>{field.format(field.max)}</span>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="pt-8 border-t border-white/20"
                >
                  <div className="text-center">
                    <p className="text-white/80 mb-2 text-lg">Estimated Monthly Payment</p>
                    <p className="text-7xl font-bold text-white mb-6 drop-shadow-lg">${calculateMonthlyPayment()}</p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg backdrop-blur-sm"
                      >
                        <p className="text-white/60 text-sm mb-2">Total Interest</p>
                        <p className="text-3xl font-bold text-white drop-shadow-lg">
                          ${((parseFloat(calculateMonthlyPayment()) * financeData.loanTerm) - (financeData.vehiclePrice - financeData.downPayment)).toFixed(2)}
                        </p>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg backdrop-blur-sm"
                      >
                        <p className="text-white/60 text-sm mb-2">Total Cost</p>
                        <p className="text-3xl font-bold text-white drop-shadow-lg">
                          ${(parseFloat(calculateMonthlyPayment()) * financeData.loanTerm).toFixed(2)}
                        </p>
                      </motion.div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg backdrop-blur-sm"
                      >
                        <p className="text-white/60 text-sm mb-2">Loan Amount</p>
                        <p className="text-3xl font-bold text-white drop-shadow-lg">
                          ${(financeData.vehiclePrice - financeData.downPayment).toLocaleString()}
                        </p>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg backdrop-blur-sm"
                      >
                        <p className="text-white/60 text-sm mb-2">APR</p>
                        <p className="text-3xl font-bold text-white drop-shadow-lg">
                          {financeData.interestRate}%
                        </p>
                      </motion.div>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-block bg-white hover:bg-white/90 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Apply for Financing
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative p-8 h-full flex flex-col">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 flex-grow">{service.description}</p>
                  <div className="mt-6">
                    <div className="w-full h-1 bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0 transform group-hover:scale-x-100 scale-x-0 transition-transform duration-300"></div>
                  </div>
                </div>
                <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-gold-500/30 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-white/60 mb-6">Discover our comprehensive range of luxury services</p>
            <Link
              to="/services"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Customer Testimonials</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </motion.div>

          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevClick}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNextClick}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="relative h-[400px] overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="absolute w-full h-full"
                  initial={{ x: '100%' }}
                  animate={{
                    x: index === currentTestimonial ? '0%' : index < currentTestimonial ? '-100%' : '100%',
                    opacity: index === currentTestimonial ? 1 : 0,
                    scale: index === currentTestimonial ? 1 : 0.95,
                  }}
                  transition={{
                    type: 'tween',
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="max-w-3xl mx-auto">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-8"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="relative">
                        <div className="flex items-center mb-6">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent"></div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-gold-500 transition-colors duration-300">
                              {testimonial.name}
                            </h3>
                            <p className="text-gold-500">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-lg italic mb-6">"{testimonial.quote}"</p>
                        <div className="w-full h-1 bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0 transform group-hover:scale-x-100 scale-x-0 transition-transform duration-300"></div>
                      </div>
                      <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-gold-500/30 transition-colors duration-300"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-gold-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Working Days Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Working Hours</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingDays.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl backdrop-blur-sm border ${
                  day.isOpen ? 'border-gold-500/30 hover:border-gold-500' : 'border-gray-700'
                } transition-all duration-300`}
              >
                <h3 className={`text-xl font-semibold mb-2 ${
                  day.isOpen ? 'text-gold-500' : 'text-gray-500'
                }`}>
                  {day.day}
                </h3>
                <p className={`text-lg mb-4 ${
                  day.isOpen ? 'text-white' : 'text-gray-500'
                }`}>
                  {day.hours}
                </p>
                {day.services.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Available Services:</p>
                    <ul className="space-y-1">
                      {day.services.map((service) => (
                        <li key={service} className="text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">Need to schedule a visit outside our regular hours?</p>
            <Link
              to="/contact"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              Contact Us for Special Arrangements
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location and Hours Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-96 rounded-xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155710122!2d-73.9878448!3d40.7579887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1645555555555!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Visit Us</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gold-500 mb-2">Address</h3>
                  <p className="text-gray-300">123 Luxury Avenue, New York, NY 10001</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gold-500 mb-2">Contact</h3>
                  <p className="text-gray-300">Phone: (555) 123-4567</p>
                  <p className="text-gray-300">Email: info@coolmanautos.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gold-500 mb-2">About Coolman Auto's</h3>
                  <p className="text-gray-300">Your trusted partner in luxury automotive excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Styling */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Luxury?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our luxury vehicle specialists today
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 