import React from 'react';

const WhoWeAre: React.FC = () => {
  return (
    <section id="who-we-are" className="bg-cyan-500 max-w-full pt-10 pb-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl pb-4">
          Who We Are
        </h2>
        <p className="mt-4 text-lg text-yellow-50">
          Design Technix - Bangalore, Owned by Verkey Group FZC, UAE.
        </p>
        <p className="mt-2 text-lg text-yellow-50">
          We have a team strength of 10 full-time staff and have all the necessary infrastructure
          with a seating capacity and IT infrastructure to accommodate 30 employees. We own all
          the necessary CAD software like AutoCAD, BricsCAD, ActCAD, Microstation, SSPipe, MS Office,
          Antivirus, etc., complete with an FTP Server with firewall and dedicated Internet facilities
          for communication needs.
        </p>
        <p className="mt-2 text-lg text-yellow-50">
          We have executed more than 50 projects, including the complete 2D, 3D, BOM, and engineering
          deliverables like P&ID, Piping Isometrics, Pipeline flow line drawings, 3D Modeling, and
          As-Built Projects for all the major customers in India and abroad.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
