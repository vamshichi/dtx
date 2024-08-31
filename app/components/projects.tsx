import React from 'react';

const ProjectsDTX: React.FC = () => {
  return (
    <section className="bg-gray-100 w-full py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl">
          Projects DTX with Customer Appreciations
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">For Oil & Gas</h3>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Upstream, Midstream, Downstream Facilities</li>
              <li>CRUDE GATHERING SYSTEM</li>
              <li>REFINERY PROCESS SYSTEM</li>
              <li>AS-BUILT ENGINEERING</li>
              <li>DETAIL ENGINEERING</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">For Biotech Facility</h3>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Animal Vaccination Facility</li>
              <li>BLACK AND CLEAN UTILITIES</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">For Pharma Facilities</h3>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Process Piping and Utility Systems</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">For Dairy Facilities</h3>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Process Piping and Utility Systems</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">For Process Industry</h3>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Process Piping and Utility Systems</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">For Marine Sector</h3>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Utility Piping and Compartment Piping</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">For Nuclear Sector</h3>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Process Piping and Utility Piping</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">For Power Plants</h3>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Fabrication Drawings of Oil Storage Tanks/Equipments</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDTX;
