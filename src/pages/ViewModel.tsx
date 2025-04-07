import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

// Mock data - In a real app, this would come from an API
const vehicles = [
  {
    id: '1',
    brand: 'BMW',
    model: 'i7',
    year: '2024',
    price: '$120,000',
    description: 'The BMW i7 represents the pinnacle of electric luxury sedans, combining cutting-edge technology with uncompromising comfort.',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2574&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2574&auto=format&fit=crop'
    ],
    specs: {
      range: '300 miles',
      acceleration: '4.5s 0-60 mph',
      topSpeed: '130 mph',
      battery: '101.7 kWh',
      charging: '195 kW max',
      seats: '5',
      colors: ['Black Sapphire', 'Mineral White', 'Arctic Grey']
    },
    features: [
      'Executive Lounge Seating',
      'BMW Theater Screen',
      'Sky Lounge Panoramic Roof',
      'Bowers & Wilkins Diamond Surround Sound',
      'BMW Personal eSIM 5G'
    ]
  },
  {
    id: '2',
    brand: 'Porsche',
    model: 'Taycan',
    year: '2024',
    price: '$150,000',
    description: 'The Porsche Taycan combines legendary Porsche performance with groundbreaking electric technology.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2574&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2574&auto=format&fit=crop'
    ],
    specs: {
      range: '246 miles',
      acceleration: '3.8s 0-60 mph',
      topSpeed: '155 mph',
      battery: '93.4 kWh',
      charging: '270 kW max',
      seats: '4',
      colors: ['Jet Black', 'Carrara White', 'Mamba Green']
    },
    features: [
      'Porsche Active Suspension Management',
      'Porsche Dynamic Light System Plus',
      'Bose Surround Sound System',
      'Sport Chrono Package',
      'Porsche Torque Vectoring Plus'
    ]
  },
  {
    id: '3',
    brand: 'Lamborghini',
    model: 'Huracan',
    year: '2024',
    price: '$250,000',
    description: 'The Lamborghini Huracan is a masterpiece of Italian engineering, delivering breathtaking performance and stunning design.',
    image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=2574&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=2574&auto=format&fit=crop'
    ],
    specs: {
      range: 'N/A',
      acceleration: '2.9s 0-60 mph',
      topSpeed: '202 mph',
      engine: '5.2L V10',
      power: '631 HP',
      seats: '2',
      colors: ['Giallo Inti', 'Arancio Borealis', 'Verde Mantis']
    },
    features: [
      'Lamborghini Dynamic Steering',
      'Magnetorheological Suspension',
      'Carbon Ceramic Brakes',
      'Lamborghini Infotainment System',
      'Alcantara Interior'
    ]
  }
];

const ViewModel = () => {
  const { id } = useParams();
  const vehicle = vehicles.find(v => v.id === id);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-white">Vehicle Not Found</h1>
          <Link 
            to="/inventory" 
            className="inline-block bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Return to Inventory
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Enhanced Styling */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block bg-gold-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
            >
              <span className="text-gold-500 font-semibold">{vehicle.year}</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
              {vehicle.brand} <span className="text-gold-500">{vehicle.model}</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-white/80"
            >
              Starting at {vehicle.price}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Enhanced Styling */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Gallery */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {vehicle.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-video overflow-hidden rounded-xl group"
                >
                  <img
                    src={image}
                    alt={`${vehicle.brand} ${vehicle.model} view ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Vehicle Details</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gold-500 mb-2">Description</h3>
                  <p className="text-gray-300 leading-relaxed">{vehicle.description}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gold-500 mb-4">Specifications</h3>
                  <ul className="space-y-3">
                    {Object.entries(vehicle.specs).map(([key, value]) => (
                      <li key={key} className="flex justify-between items-center py-2 border-b border-gray-700/50">
                        <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-white font-medium">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gold-500 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {vehicle.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gold-500 mr-3 mt-1">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/book-test-drive"
                  state={{ vehicle }}
                  className="block w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-full text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Book a Test Drive
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModel; 