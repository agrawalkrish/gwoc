// frontend/app/page.tsx (Next.js Ecommerce Homepage with TypeScript)
"use client";
import { useState,useEffect } from "react";

import { FaRegUserCircle } from "react-icons/fa";
import TestimonialSection from '@/app/Testimonial/testimonial';
import BlogSection from '@/app/blogsection/blog-section';
import AboutUs from '@/app/about/page';
import LoadingPage from './lodingpage/page';

export default function Home() {
  const [message, setMessage] = useState<string>("Welcome to Our Store");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (same duration as the loader)
    setTimeout(() => {
      setLoading(false);
    }, 3300); // (100 * 30ms + 1000ms extra delay from the loader)
  }, []);

  return loading? <LoadingPage/>:(
    <div className="bg-white text-black min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-black text-white p-4 flex justify-between items-center">
        {/* Left Section - Logo */}
        <div className="text-3xl px-8 font-bold">HB</div>

        <div className="flex items-center space-x-12 px-10">
          {/* Middle Section - Navigation Links */}
          <div>
            <ul className="text-xl flex space-x-12">
              <li><a href="/" className="hover:text-gray-300 hover:underline transition duration-300">Home</a></li>
              <li><a href="/services1" className="hover:text-gray-300 hover:underline transition duration-300">Services</a></li>
              <li><a href="/blog" className="hover:text-gray-300 hover:underline transition duration-300">Blog</a></li>
              <li><a href="/about" className="hover:text-gray-300 hover:underline transition duration-300">About</a></li>
            </ul>
          </div>

          {/* Right Section - User & Cart */}
          <div className="flex items-center space-x-12 px-10">
            <ul className="text-xl flex space-x-10">
              <li><a href="/SIGNUP" className="hover:text-gray-300 transition duration-300"><FaRegUserCircle size={30} /></a></li>
              {/* <li><a href="#" className="hover:text-gray-300 transition duration-300"><MdOutlineShoppingBag size={30} /></a></li>
             */}</ul>
          </div>
        </div>
      </nav>

      {/* Homepage Content */}
      {/* <div className="flex items-center justify-center h-screen text-4xl font-bold">
        {message}
      </div> */}

      {/* Split Section */}
      <div className="flex w-full h-[500px]">
        <div className="w-2/5 p-4 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold">Expert Services</h1><br />
          <h1 className="text-4xl font-bold">At Your Doorstep!</h1>
          <br />
          <button className="bg-black text-white px-10 py-3 text-lg rounded-lg transition duration-300 hover:bg-gray-800 hover:scale-105">
            Book Now!
          </button>
          <br />
          <p className="text-4xl mb-4 font-bold">Reliable-Fast-Affordable</p>
        </div>
        <div className="w-3/5 bg-gray-300 flex items-center justify-center">
          <img src="https://www.shutterstock.com/image-photo/asian-cleaning-service-woman-worker-600nw-2093118301.jpg" alt="Ecommerce Image" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-around p-6">
        <button className="bg-black text-white px-16 py-5 text-lg rounded-lg transition duration-300 hover:bg-gray-800 hover:scale-105">
          Dusting & Cleaning
        </button>
        <button className="bg-black text-white px-16 py-5 text-lg rounded-lg transition duration-300 hover:bg-gray-800 hover:scale-105">
          Repairing & Maintenance
        </button>
        <button className="bg-black text-white px-16 py-5 text-lg rounded-lg transition duration-300 hover:bg-gray-800 hover:scale-105">
          Plumbing & Electrical
        </button>
      </div>
     
      <div className="">
        {/* Testimonial Section */}
      <TestimonialSection />
      <BlogSection />
      <AboutUs />
      </div>
      {/* Footer Section */}
      <footer className="bg-black text-white p-6 text-center">
        © 2024 E-Shop. All rights reserved.
      </footer>
    </div>
    
  );
}
