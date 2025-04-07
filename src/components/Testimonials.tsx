import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  car: string;
  brand: string;
  image: string;
  rating: number;
  review: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      car: 'Model S',
      brand: 'Tesla',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      rating: 5,
      review: 'The Model S has exceeded all my expectations. The performance is incredible, and the autopilot features make my daily commute a breeze.',
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Business Consultant',
      car: 'Taycan',
      brand: 'Porsche',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      rating: 5,
      review: 'The Porsche Taycan is a perfect blend of luxury and performance. The handling is exceptional, and the electric powertrain is incredibly smooth.',
    },
    {
      id: '3',
      name: 'Michael Brown',
      role: 'Marketing Director',
      car: 'EQS',
      brand: 'Mercedes-Benz',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 5,
      review: 'The Mercedes EQS is the epitome of luxury. The interior is stunning, and the ride quality is unmatched. It\'s the perfect executive car.',
    },
    {
      id: '4',
      name: 'Sarah Wilson',
      role: 'Architect',
      car: 'i4',
      brand: 'BMW',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      rating: 5,
      review: 'The BMW i4 combines sporty handling with electric efficiency. It\'s a joy to drive and the technology integration is seamless.',
    },
    {
      id: '5',
      name: 'Lisa Kim',
      role: 'Graphic Designer',
      car: 'Ioniq 5',
      brand: 'Hyundai',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      rating: 5,
      review: 'The Hyundai Ioniq 5 is a game-changer. The design is futuristic, and the range is impressive for its price point.',
    },
    {
      id: '6',
      name: 'James Thompson',
      role: 'Financial Analyst',
      car: 'Model 3',
      brand: 'Tesla',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      rating: 5,
      review: 'The Model 3 offers incredible value. The performance and technology are top-notch, and the charging network is extensive.',
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <div className="section bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Don't just take our word for it - hear from our satisfied customers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

                <p className="text-gray-700 mb-4">{testimonial.review}</p>
                
                <div className="text-sm text-gray-500">
                  <p>{testimonial.brand} {testimonial.car} Owner</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="btn btn-primary">
              Share Your Experience
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials; 