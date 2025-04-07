import React from 'react';
import { motion } from 'framer-motion';

const WorkingHours = () => {
  const hours = [
    { day: 'Monday', time: '9:00 AM - 7:00 PM' },
    { day: 'Tuesday', time: '9:00 AM - 7:00 PM' },
    { day: 'Wednesday', time: '9:00 AM - 7:00 PM' },
    { day: 'Thursday', time: '9:00 AM - 7:00 PM' },
    { day: 'Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 5:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <div className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title">Business Hours</h2>
          <p className="section-subtitle">
            Visit us during our operating hours or schedule an appointment
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="space-y-4">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-lg font-medium text-gray-900">{item.day}</span>
                    <span className="text-gray-600">{item.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-accent/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Appointment Booking</h3>
                <p className="text-gray-600 mb-4">
                  For after-hours appointments or special requests, please contact us to schedule a visit.
                </p>
                <button className="btn btn-primary">
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkingHours; 