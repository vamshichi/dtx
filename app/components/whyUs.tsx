import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Why DTX?
        </h2>
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Globally recognized firm that has been leading the way in Design and Detailed Engineering Services for oil and gas companies globally. 
            DTX has been providing all-round engineering solutions such as <strong>Detailing, Designing, Layouts, Process Engineering, Instrumentation Engineering, Piping Engineering, Electrical Engineering, Civil Engineering</strong>.
          </p>
          <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
            <li>Project completion on time</li>
            <li>Experience of over decades in industry</li>
            <li>Trust & Credibility in the market</li>
            <li>Deployment of skilled engineering professionals</li>
            <li>Engineering services of international standard</li>
            <li>Cost-effective services to the industry</li>
            <li>Government statutory compliance</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Purpose</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              EPC services in Oil and Gas Sector. We specialize in Design and Detailed Engineering services for Oil and Gas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a one-stop destination for complete engineering solutions for Oil & Gas Industry.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to provide innovative, skillful engineering services in industry, leveraging our deep industry knowledge and best-in-class engineering resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
