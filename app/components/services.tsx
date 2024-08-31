import React from 'react';

const OurServices: React.FC = () => {
  return (
    <section className="bg-gray-100 w-full py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Services
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Process Plants</h3>
            <p className="mt-4 text-gray-600">
              Comprehensive design and development of process plants with an emphasis on efficiency and sustainability.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Oil and Gas</h3>
            <p className="mt-4 text-gray-600">
              Delivering state-of-the-art solutions for the oil and gas sector, ensuring safety and compliance.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Energy Sector</h3>
            <p className="mt-4 text-gray-600">
              Innovative energy solutions focusing on renewable energy and reducing carbon footprints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
