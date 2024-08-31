import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-16 mx-auto text-center lg:py-32 lg:px-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Welcome to <span className="text-blue-600 dark:text-blue-500">DTX</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:mt-6">
        We are a learning services provider that offers a multitude of different Engineering training services. Our coursework is geared for professionals, students, and corporations that want to increase their knowledge base to provide outstanding service.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#who-are-we"
            className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
