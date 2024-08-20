import React from 'react';
import Who from '@/app/components/who';
import Services from './components/services';
import WhyUs from './components/whyUs';
import Projects from './components/projects';
import Contact from './components/contact';

const Home: React.FC = () => {
  return (
    <main>
      <section
        className="hero h-screen  w-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/hero.jfif')" }}
      >
        <div className="container mx-auto flex flex-col justify-center h-full px-4 md:px-8 lg:px-16 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            We are one of the best dealers in
          </h1>
          <h2 className="text-4xl md:text-6xl font-extrabold text-yellow-500 mt-2 md:mt-4">
            India
          </h2>
        </div>
      </section>  
      <div className="text-black pt-10 px-4 md:px-8 lg:px-20 text-lg md:text-xl lg:text-2xl space-y-10">
        <Who />
        <Services />
        <WhyUs />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default Home;
