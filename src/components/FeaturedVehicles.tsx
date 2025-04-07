import React from 'react';
import { motion } from 'framer-motion';

interface Vehicle {
  id: string;
  brand: string;
  model: string;
  description: string;
  image: string;
  price: string;
  specs: {
    range: string;
    acceleration: string;
    topSpeed: string;
  };
}

const FeaturedVehicles = () => {
  const vehicles: Vehicle[] = [
    {
      id: '1',
      brand: 'Mercedes ',
      model: 'GT',
      description: 'The ultimate luxury Sport sedan with cutting-edge technology and unparalleled comfort.',
      image: `/images/vehicles/bmw-i7.jpg?t=${Date.now()}`,
      price: 'Starting at $119,300',
      specs: {
        range: '318 miles',
        acceleration: '0-60 in 4.5s',
        topSpeed: '155 mph',
      },
    },
    {
      id: '2',
      brand: 'Porsche',
      model: 'Taycan',
      description: 'Electrifying performance meets timeless Porsche design in this revolutionary sports car.',
      image: `/images/vehicles/porsche-taycan.jpg?t=${Date.now()}`,
      price: 'Starting at $286,700',
      specs: {
        range: '246 miles',
        acceleration: '0-60 in 5.1s',
        topSpeed: '143 mph',
      },
    },
    {
      id: '3',
      brand: 'Bugati',
      model: 'Chiron',
      description: 'A masterpiece of speed and design, combining Italian craftsmanship with  innovation.',
      image: `/images/vehicles/lamborghini-huracan.jpg?t=${Date.now()}`,
      price: 'Starting at $209,400',
      specs: {
        range: '250 miles',
        acceleration: '0-60 in 2.8s',
        topSpeed: '202 mph',
      },
    },
  ];

  return (
    <div className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="section-title">Featured Vehicles</h2>
          <p className="section-subtitle">
            Discover our premium selection of luxury electric vehicles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {vehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                whileHover={{ y: -5 }}
                className="card overflow-hidden bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-sm font-medium">{vehicle.brand}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{vehicle.model}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Range</p>
                      <p className="font-medium">{vehicle.specs.range}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Acceleration</p>
                      <p className="font-medium">{vehicle.specs.acceleration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Top Speed</p>
                      <p className="font-medium">{vehicle.specs.topSpeed}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{vehicle.price}</span>
                    <button className="btn btn-primary">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedVehicles; 