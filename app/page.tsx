import React from 'react';
import Image from 'next/image';
import Who from '@/app/components/who';
import Services from './components/services';
import WhyUs from './components/whyUs';
import Projects from './components/projects';

const Home: React.FC = () => {
  return (
    <main>
      <section
        className="hero h-5/6 w-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/hero.jfif')" }}
      >
        <div className="container mx-auto flex flex-col justify-center h-96 px-4 md:px-0 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">We are one of the best dealers in</h1>
          <h2 className="text-4xl md:text-6xl font-extrabold text-yellow-500 mt-2 md:mt-4">India</h2>
        </div>
      </section>  
      <div className="text-black pt-10 pl-4 md:pl-20 text-xl md:text-2xl">
        <Who />
        <Services />
        <WhyUs />
        <Projects />
      </div>
    </main>
  );
}

export default Home;
