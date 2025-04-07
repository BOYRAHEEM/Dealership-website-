import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Vehicle {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  specs: {
    range: string;
    acceleration: string;
    topSpeed: string;
    seating: string;
    cargo: string;
  };
}

const VehicleComparison = () => {
  const [selectedVehicles, setSelectedVehicles] = useState<Vehicle[]>([
    {
      id: '1',
      name: 'i4',
      brand: 'BMW',
      price: '$52,200',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      specs: {
        range: '301 miles',
        acceleration: '5.5s 0-60 mph',
        topSpeed: '118 mph',
        seating: '5 adults',
        cargo: '17 cu ft',
      },
    },
    {
      id: '2',
      name: 'i7',
      brand: 'BMW',
      price: '$119,300',
      image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e',
      specs: {
        range: '318 miles',
        acceleration: '4.5s 0-60 mph',
        topSpeed: '130 mph',
        seating: '5 adults',
        cargo: '14.5 cu ft',
      },
    },
  ]);

  const vehicles: Vehicle[] = [
    {
      id: '1',
      name: 'i4',
      brand: 'BMW',
      price: '$52,200',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      specs: {
        range: '301 miles',
        acceleration: '5.5s 0-60 mph',
        topSpeed: '118 mph',
        seating: '5 adults',
        cargo: '17 cu ft',
      },
    },
    {
      id: '2',
      name: 'i7',
      brand: 'BMW',
      price: '$119,300',
      image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e',
      specs: {
        range: '318 miles',
        acceleration: '4.5s 0-60 mph',
        topSpeed: '130 mph',
        seating: '5 adults',
        cargo: '14.5 cu ft',
      },
    },
    {
      id: '3',
      name: 'iX',
      brand: 'BMW',
      price: '$84,100',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      specs: {
        range: '324 miles',
        acceleration: '4.4s 0-60 mph',
        topSpeed: '124 mph',
        seating: '5 adults',
        cargo: '35.5 cu ft',
      },
    },
    {
      id: '4',
      name: 'Model S',
      brand: 'Tesla',
      price: '$89,990',
      image: 'https://images.unsplash.com/photo-1551830820-330a71b99659',
      specs: {
        range: '405 miles',
        acceleration: '3.1s 0-60 mph',
        topSpeed: '200 mph',
        seating: '5 adults',
        cargo: '28 cu ft',
      },
    },
    {
      id: '5',
      name: 'Taycan',
      brand: 'Porsche',
      price: '$86,700',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      specs: {
        range: '246 miles',
        acceleration: '5.1s 0-60 mph',
        topSpeed: '143 mph',
        seating: '4 adults',
        cargo: '14.3 cu ft',
      },
    },
    {
      id: '6',
      name: 'EQS',
      brand: 'Mercedes-Benz',
      price: '$104,400',
      image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e',
      specs: {
        range: '350 miles',
        acceleration: '4.1s 0-60 mph',
        topSpeed: '130 mph',
        seating: '5 adults',
        cargo: '22 cu ft',
      },
    },
  ];

  const handleVehicleSelect = (vehicle: Vehicle) => {
    if (selectedVehicles.length < 2) {
      setSelectedVehicles([...selectedVehicles, vehicle]);
    } else {
      setSelectedVehicles([selectedVehicles[1], vehicle]);
    }
  };

  return (
    <div className="section bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Compare Vehicles</h2>
        
        {/* Vehicle Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {vehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              whileHover={{ scale: 1.02 }}
              className={`p-4 rounded-lg cursor-pointer ${
                selectedVehicles.some((v) => v.id === vehicle.id)
                  ? 'ring-2 ring-accent'
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => handleVehicleSelect(vehicle)}
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{vehicle.name}</h3>
                  <p className="text-gray-600">{vehicle.brand}</p>
                </div>
                <p className="text-accent font-bold">{vehicle.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        {selectedVehicles.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4">Specification</th>
                  {selectedVehicles.map((vehicle) => (
                    <th key={vehicle.id} className="text-left p-4">
                      {vehicle.brand} {vehicle.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">Price</td>
                  {selectedVehicles.map((vehicle) => (
                    <td key={vehicle.id} className="p-4">
                      {vehicle.price}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Range</td>
                  {selectedVehicles.map((vehicle) => (
                    <td key={vehicle.id} className="p-4">
                      {vehicle.specs.range}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">Acceleration</td>
                  {selectedVehicles.map((vehicle) => (
                    <td key={vehicle.id} className="p-4">
                      {vehicle.specs.acceleration}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Top Speed</td>
                  {selectedVehicles.map((vehicle) => (
                    <td key={vehicle.id} className="p-4">
                      {vehicle.specs.topSpeed}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">Seating</td>
                  {selectedVehicles.map((vehicle) => (
                    <td key={vehicle.id} className="p-4">
                      {vehicle.specs.seating}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Cargo Space</td>
                  {selectedVehicles.map((vehicle) => (
                    <td key={vehicle.id} className="p-4">
                      {vehicle.specs.cargo}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleComparison; 