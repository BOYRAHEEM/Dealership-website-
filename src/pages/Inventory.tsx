import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Inventory = () => {
  const [filter, setFilter] = useState('all');

  const vehicles = [
    {
      id: 1,
      name: 'BMW i7',
      price: 'Starting at $119,300',
      image: '/images/vehicles/bmw-i7.jpg',
      description: 'Luxury electric sedan with cutting-edge technology',
      type: 'sedan',
      year: 2024,
      mileage: '0',
      color: 'Mineral White',
    },
    {
      id: 2,
      name: 'Porsche Taycan',
      price: 'Starting at $190,000',
      image: '/images/vehicles/porsche-taycan.jpg',
      description: 'High-performance electric sports car',
      type: 'sedan',
      year: 2024,
      mileage: '0',
      color: 'Frozen Blue Metallic',
    },
    {
      id: 3,
      name: 'Lamborghini Huracan',
      price: 'Starting at $209,400',
      image: '/images/vehicles/lamborghini-huracan.jpg',
      description: 'Iconic supercar with breathtaking performance',
      type: 'sports',
      year: 2024,
      mileage: '0',
      color: 'Verde Mantis',
    }
  ];

  const filteredVehicles = filter === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.type === filter);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Inventory</h1>
        
        {/* Filters */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Vehicles
          </button>
          <button
            onClick={() => setFilter('sedan')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'sedan' 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sedans
          </button>
          <button
            onClick={() => setFilter('sports')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'sports' 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sports Cars
          </button>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative pb-[56.25%]">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                <p className="text-primary font-bold text-xl mb-4">{vehicle.price}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-600">Year</p>
                    <p className="font-medium">{vehicle.year}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Mileage</p>
                    <p className="font-medium">{vehicle.mileage} miles</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Type</p>
                    <p className="font-medium capitalize">{vehicle.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Color</p>
                    <p className="font-medium">{vehicle.color}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{vehicle.description}</p>
                <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors">
                  Schedule Test Drive
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory; 