import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">
              <strong>Address:</strong> Shop No 7, Hari Om Shopping Center, Sector 2, Nerul West, Navi Mumbai, Maharashtra 400706
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +91 9967502476, +91 9323202476, +91 7718886081
            </p>
            <p>
              <strong>Email:</strong><br />
              <a href="mailto:namo@namoengineering.com" className="text-blue-400 hover:underline">dtx@dtxengineering.com</a><br />
              <a href="mailto:sachinshah@itwebtechcomputers.com" className="text-blue-400 hover:underline">dtx@dtxengineering.com</a><br />
              <a href="mailto:manpower@namoengineering.com" className="text-blue-400 hover:underline">dtx@dtxengineering.com</a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul>
              <li><Link href="/" className="text-blue-400 hover:underline">Home</Link></li>
              <li><Link href="/about" className="text-blue-400 hover:underline">About Us</Link></li>
              <li><Link href="/projects" className="text-blue-400 hover:underline">Our Projects</Link></li>
            </ul>
          </div>
          <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul> 
          <li><Link href="/engineering-design" className="text-blue-400 hover:underline">Engineering Design</Link></li>
              <li><Link href="/manpower-deputation" className="text-blue-400 hover:underline">Manpower Deputation</Link></li>
              <li><Link href="/training-courses" className="text-blue-400 hover:underline">Training and Courses</Link></li>
          </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Design Technix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
