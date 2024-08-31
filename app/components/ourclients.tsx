import React from 'react';

const clientLogos = [
  { src: '/images/abb.png', alt: 'ABB' },
  { src: '/images/applus.png', alt: 'Applus Velosi' },
  { src: '/images/biozeen.jfif', alt: 'Biozeen' },
  { src: '/images/praxair.jfif', alt: 'Praxair' },
  { src: '/images/shell.png', alt: 'Shell Oman' },
  { src: '/images/chemtex.png', alt: 'Chemtex' },
  { src: '/images/worleyparsons.jfif', alt: 'Worley Parsons' },
];

const OurClients: React.FC = () => {
  return (
    <section className="bg-white w-full py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl">
          Our Clients
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img src={logo.src} alt={logo.alt} className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
