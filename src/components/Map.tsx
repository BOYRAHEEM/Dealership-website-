import React from 'react';

const Map = () => {
  return (
    <div className="section bg-primary">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Visit Our Dealership</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2150199999997!2d-73.9878448!3d40.7579887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1645555555555!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
            <p className="text-gray-300 mb-2">123 Luxury Drive</p>
            <p className="text-gray-300 mb-2">New York, NY 10036</p>
            <p className="text-gray-300">Open Monday - Saturday: 9AM - 8PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map; 