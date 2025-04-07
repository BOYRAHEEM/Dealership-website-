import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="hero-title text-white mb-6">
            The Future of Luxury Electric Vehicles
          </h1>
          <p className="hero-subtitle text-white/90 mb-8">
            Experience the perfect blend of performance, sustainability, and cutting-edge technology.
            Redefining what it means to drive electric.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary">
              View Models
            </button>
            <button className="btn btn-secondary text-white border-white hover:bg-white/10">
              Book a Test Drive
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 