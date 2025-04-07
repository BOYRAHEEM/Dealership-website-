import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Vehicle {
  id: string;
  name: string;
  brand: string;
  image: string;
  description: string;
  features: string[];
}

const VirtualShowroom = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [viewMode, setViewMode] = useState<'exterior' | 'interior'>('exterior');

  const vehicles: Vehicle[] = [
    {
      id: '1',
      name: 'i4',
      brand: 'BMW',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      description: 'The BMW i4 brings electric performance to the iconic 4 Series.',
      features: [
        '301 miles range',
        '5.5s 0-60 mph',
        '118 mph top speed',
        '335 horsepower',
      ],
    },
    {
      id: '2',
      name: 'i7',
      brand: 'BMW',
      image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e',
      description: 'The BMW i7 redefines luxury in the electric vehicle segment.',
      features: [
        '318 miles range',
        '4.5s 0-60 mph',
        '130 mph top speed',
        '536 horsepower',
      ],
    },
    {
      id: '3',
      name: 'iX',
      brand: 'BMW',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      description: 'The BMW iX combines SUV versatility with electric innovation.',
      features: [
        '324 miles range',
        '4.4s 0-60 mph',
        '124 mph top speed',
        '516 horsepower',
      ],
    },
    {
      id: '4',
      name: 'Model S',
      brand: 'Tesla',
      image: 'https://images.unsplash.com/photo-1551830820-330a71b99659',
      description: 'The Model S sets an industry standard for performance and safety.',
      features: [
        '396 miles range',
        '1.99s 0-60 mph',
        '200 mph top speed',
        '1,020 horsepower',
      ],
    },
    {
      id: '5',
      name: 'Taycan',
      brand: 'Porsche',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
      description: 'The Porsche Taycan combines legendary performance with electric innovation.',
      features: [
        '246 miles range',
        '5.1s 0-60 mph',
        '143 mph top speed',
        '402 horsepower',
      ],
    },
    {
      id: '6',
      name: 'EQS',
      brand: 'Mercedes-Benz',
      image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e',
      description: 'The EQS redefines luxury in the electric vehicle segment.',
      features: [
        '350 miles range',
        '4.1s 0-60 mph',
        '130 mph top speed',
        '516 horsepower',
      ],
    },
  ];

  return (
    <div className="section bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Virtual Showroom</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {vehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedVehicle(vehicle)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                      <p className="text-gray-600">{vehicle.brand}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{vehicle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {selectedVehicle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold">{selectedVehicle.name}</h3>
                  <p className="text-gray-600">{selectedVehicle.brand}</p>
                </div>
                <div className="flex space-x-4">
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      viewMode === 'exterior'
                        ? 'bg-accent text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => setViewMode('exterior')}
                  >
                    Exterior
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      viewMode === 'interior'
                        ? 'bg-accent text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => setViewMode('interior')}
                  >
                    Interior
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={selectedVehicle.image}
                    alt={`${selectedVehicle.brand} ${selectedVehicle.name} ${viewMode}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedVehicle.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-accent mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default VirtualShowroom; 