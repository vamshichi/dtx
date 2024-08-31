import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Link from "next/link";
import Nav from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DTX",
  description: "All types of engineering works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
         {/*<header className="bg-cyan-600 shadow-md">
          <nav className="container mx-auto px-4 md:px-8 lg:px-16 py-4 flex justify-between items-center">
            <div>
              {/* Logo could be included here if available */}
              {/* <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                DTX
              </h1>
            </div>
            <ul className="flex space-x-2 md:space-x-4 lg:space-x-6 text-white font-semibold text-lg md:text-xl lg:text-2xl">
              <li className="hover:bg-cyan-500 p-3 rounded">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:bg-cyan-500 p-3 rounded">
                <Link href="/about">About Us</Link> */}
              {/* </li>
              <li className="relative group">
                <div className="hover:bg-cyan-500 p-3 rounded cursor-pointer">
                  Services
                </div>
                <ul className="absolute left-0 top-full hidden bg-cyan-600 text-white group-hover:block w-48 shadow-lg rounded">
                  <li className="p-3 hover:bg-cyan-500">
                    <Link href="/products/category1">Process Plants</Link>
                  </li> */}
                  {/* <li className="p-3 hover:bg-cyan-500">
                    <Link href="/products/category2">Oil and Gas</Link>
                  </li>
                  <li className="p-3 hover:bg-cyan-500">
                    <Link href="/products/category3">Energy Sector</Link>
                  </li>
                  <li className="p-3 hover:bg-cyan-500">
                    <Link href="/products/category4">EAM</Link>
                  </li>
                </ul>
              </li> */}
              {/* <li className="hover:bg-cyan-500 p-3 rounded">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </header> */} 
        <Nav />
        <main >
          {children}
        </main>
      </body>
    </html>
  );
}
