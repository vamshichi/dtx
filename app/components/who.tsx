import React from 'react';

const Who: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Who are we
        </h2>
        <div className="bg-gray-50 p-6 md:p-10 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
            <strong>Design Technix</strong> - Bangalore, Owned by Verkey Group FZC, UAE.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
            We have a team strength of 10 full-time staff and have all the necessary infrastructure with a seating capacity and IT infrastructure to accommodate 30 employees. We have owned all the necessary CAD software like AutoCAD, BricsCAD, ActCAD, Microstation, SSPipe, MS Office, Antivirus, etc., complete with an FTP Server with firewall and dedicated Internet facilities for communication needs.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We have executed more than 50 projects, including the complete 2D, 3D, BOM, and engineering deliverables like P&ID, Piping Isometrics, Pipeline flow line drawings, 3D Modeling, and As-Built Projects for all the major customers in India and abroad.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Who;
