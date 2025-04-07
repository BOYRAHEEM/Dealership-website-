import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Inventory = () => {
  const [filter, setFilter] = useState('all');

  const vehicles = [
    {
      id: 1,
      name: 'Tesla Model S',
      price: '$89,990',
      image: 'https://images.unsplash.com/photo-1551830820-330a71b99659',
      description: 'Luxury electric sedan with exceptional performance',
      type: 'sedan',
      year: 2023,
      mileage: '0',
      color: 'White',
    },
    {
      id: 2,
      name: 'Tesla Model 3',
      price: '$42,990',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
      description: 'Premium electric sedan with advanced features',
      type: 'sedan',
      year: 2023,
      mileage: '0',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Tesla Model X',
      price: '$99,990',
      image: 'https://images.unsplash.com/photo-1551830822-5a971f48b6d8',
      description: 'Luxury electric SUV with falcon wing doors',
      type: 'suv',
      year: 2023,
      mileage: '0',
      color: 'Blue',
    },
    {
      id: 4,
      name: 'Tesla Model Y',
      price: '$54,990',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89',
      description: 'Versatile electric SUV with ample space',
      type: 'suv',
      year: 2023,
      mileage: '0',
      color: 'Red',
    },
  ];

  const filteredVehicles = filter === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.type === filter);

  return (
    <div className="section bg-white">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12">Our Inventory</h1>
        
        {/* Filters */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
          >
            All Vehicles
          </button>
          <button
            onClick={() => setFilter('sedan')}
            className={`btn ${filter === 'sedan' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Sedans
          </button>
          <button
            onClick={() => setFilter('suv')}
            className={`btn ${filter === 'suv' ? 'btn-primary' : 'btn-secondary'}`}
          >
            SUVs
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
                    <p className="font-medium">{vehicle.type.toUpperCase()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Color</p>
                    <p className="font-medium">{vehicle.color}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                <button className="btn btn-primary w-full">
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