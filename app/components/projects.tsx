import React from 'react';
import Image from 'next/image';

// Assuming you have the logos available in your public/images directory
const clientLogos = [
  { src: '/images/abb.png', alt: 'ABB' },
  { src: '/images/applus.png', alt: 'Applus Velosi' },
  { src: '/images/biozeen.jfif', alt: 'Biozeen' },
  { src: '/images/praxair.jfif', alt: 'Praxair' },
  { src: '/images/shell.png', alt: 'Shell Oman' },
  { src: '/images/chemtex.png', alt: 'Chemtex' },
  { src: '/images/worleyparsons.jfif', alt: 'Worley Parsons' },
];

const Projects: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Projects DTX with Customer Appreciations
        </h2>
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">For Oil & Gas</h3>
            <ul className="text-gray-700 text-lg leading-relaxed list-none space-y-2">
              <li><strong>Upstream, Midstream, Downstream Facilities</strong>: CRUDE GATHERING SYSTEM, REFINERY PROCESS SYSTEM, AS-BUILT ENGINEERING, DETAIL ENGINEERING</li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">For Biotech Facility</h3>
            <ul className="text-gray-700 text-lg leading-relaxed list-none space-y-2">
              <li><strong>Animal Vaccination Facility</strong>: BLACK AND CLEAN UTILITIES</li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">For Pharma Facilities</h3>
            <ul className="text-gray-700 text-lg leading-relaxed list-none space-y-2">
              <li><strong>Process Piping and Utility Systems</strong></li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">For Dairy Facilities</h3>
            <ul className="text-gray-700 text-lg leading-relaxed list-none space-y-2">
              <li><strong>Process Piping and Utility Systems</strong></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">For Process Industry</h3>
            <ul className="text-gray-700 text-lg leading-relaxed list-none space-y-2">
              <li><strong>Process Piping and Utility Systems</strong></li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">For Marine Sector</h3>
            <ul className="text-gray-700 text-lg leading-relaxed list-none space-y-2">
              <li><strong>Utility Piping and Compartment Piping</strong></li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">For Nuclear Sector</h3>
            <ul className="text-gray-700 text-lg leading-relaxed list-none space-y-2">
              <li><strong>Process Piping and Utility Piping</strong></li>
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">For Power Plants</h3>
            <ul className="text-gray-700 text-lg leading-relaxed list-none space-y-2">
              <li><strong>Fabrication Drawings of Oil Storage Tanks/Equipments</strong></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 py-6">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image src={logo.src} alt={logo.alt} width={120} height={60} objectFit="contain" />
            </div>
          ))}
        </div>

        <footer className="text-center text-gray-600 text-sm mt-8">
          © 2020 - Design Technix - All Rights Reserved
        </footer>
      </div>
    </section>
  );
};

export default Projects;
