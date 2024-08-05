import Image from "next/image";

export default function Home() {
  return (
    <main>
       <section className="hero h-5/6 w-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/hero.jfif')" }}>
        <div className="container mx-auto flex flex-col justify-center h-96">
          <h1 className="text-4xl font-bold">We are one of the best dealers in</h1>
          <h2 className="text-6xl font-extrabold text-yellow-500">India</h2>
        </div>
      </section>  
      <div className="text-black  pt-10 pl-20 text-2xl">
      <div className="border-l-4 border-l-yellow-400 p-1">BRANDS</div>  
      <ul className="flex justify-start space-x-4 pt-10">
        <li>wipro</li>
        <li>hcl</li>
        <li>wtc</li>

      </ul>
      </div>
    </main>
  );
}
