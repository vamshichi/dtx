import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Process Plants</h3>
            <p className="text-gray-700">
              Comprehensive design and development of process plants with an emphasis on efficiency and sustainability.
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Oil and Gas</h3>
            <p className="text-gray-700">
              Delivering state-of-the-art solutions for the oil and gas sector, ensuring safety and compliance.
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Energy Sector</h3>
            <p className="text-gray-700">
              Innovative energy solutions focusing on renewable energy and reducing carbon footprints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
