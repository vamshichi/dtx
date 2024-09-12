import React from 'react';

const Field: React.FC = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-16 mx-auto text-center lg:py-32 lg:px-12">
        <h1 className="text-3xl font-extrabold text-black sm:text-4xl pb-4">
        Field of Working <span className="text-blue-600 dark:text-blue-500"></span>
        </h1>
        <p className="mt-2 text-lg text-black">
We are a multidisciplinary Engineering Full service company providing Design and engineering solutions to the
core industrial sectors like, Petrochemical, Oil & Gas, Process Plant industries including, food, pharma, biotech,
dairy, pulp production etc.,
In our portfolio of services we have major business areas like, Training, Projects and Skilled Manpower
deputation to clients workplace for various engineering support services like, pre-commissioning, post
commissioning , As-Built Engineering services including reverse engineering.
 </p>
        {/* <div className="mt-8 flex justify-center">
          <a
            href="#who-are-we"
            className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Get Started
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Field;
