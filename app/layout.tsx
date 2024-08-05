import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DTX",
  description: "all type of engeneering works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
        <header className="bg-cyan-500">
        <nav>
          <div className="container mx-auto flex justify-between items-center py-4">
            <div>
              {/* <Image src="/logo.png" alt="Namokar Enterprises" width={150} height={50} /> */}
              <h1 className="text-white font-bold text-3xl">DTX</h1>
            </div>
            <ul className="flex space-x-3 font-semibold  text-white text-2xl" >
              <li className="hover:bg-cyan-400 p-5"><Link href="/">Home</Link></li>
              <li className="hover:bg-cyan-400 p-5"><Link href="/about">About Us</Link></li>
              <li className="hover:bg-cyan-400 p-5"><Link href="/products">Products</Link></li>
              <li className="hover:bg-cyan-400 p-5"><Link href="/blog">Blog</Link></li>
              <li className="hover:bg-cyan-400 p-5"><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </nav>
      </header>
        </div>
        {children}</body>
    </html>
  );
}
