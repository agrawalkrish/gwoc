"use client";

import { ArrowRight, Clock, User } from 'lucide-react';

const blogs = [
  {
    id: 1,
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=458,fit=crop,trim=0;0;164.0084388185654;0/AzGeNv8QxRTqXJan/office-cleaning-1-YX4a51DklJuBp3RY.webp',
    title: 'Looking for Cleaning Services in Surat?',
    description: 'Choose Helper Buddy for a Cleaner, Healthier Home',
    author: 'Yash Rawal',
    time: '1 min read'
  },
  {
    id: 2,
    image: '/api/placeholder/400/250',
    title: 'Professional Office Cleaning in Surat',
    description: 'Keep Your Workspace Spotless with Helper Buddy',
    author: 'Yash Rawal',
    time: '2 min read'
  },
  {
    id: 3,
    image: '/api/placeholder/400/250',
    title: 'Carpet Cleaning Services in Surat',
    description: 'Revive Your Carpets with Helper Buddy',
    author: 'Yash Rawal',
    time: '3 min read'
  },
  {
    id: 4,
    image: '/api/placeholder/400/250',
    title: 'Window Cleaning Services in Surat',
    description: 'Crystal Clear Views with Helper Buddy',
    author: 'Yash Rawal',
    time: '4 min read'
  },
  {
    id: 5,
    image: '/api/placeholder/400/250',
    title: 'Kitchen Cleaning Services in Surat',
    description: 'Deep Clean Your Kitchen with Helper Buddy',
    author: 'Yash Rawal',
    time: '5 min read'
  }
];

export default function BlogSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Latest Updates & Tips
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-8 py-4">
            {/* First set of cards */}
            {blogs.map((blog, index) => (
              <div 
                key={`first-${index}`} 
                className="flex-none w-[400px]"
              >
                <div className="bg-white rounded-2xl shadow-xl h-[400px] flex flex-col overflow-hidden transform hover:scale-105 transition duration-300">
                  <div className="relative h-48">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-10" />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {blog.description}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User size={16} className="mr-2" />
                          {blog.author}
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2" />
                          {blog.time}
                        </div>
                      </div>
                      
                      <button className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors duration-300">
                        Read More
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {blogs.map((blog, index) => (
              <div 
                key={`second-${index}`} 
                className="flex-none w-[400px]"
              >
                <div className="bg-white rounded-2xl shadow-xl h-[400px] flex flex-col overflow-hidden transform hover:scale-105 transition duration-300">
                  <div className="relative h-48">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-10" />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {blog.description}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User size={16} className="mr-2" />
                          {blog.author}
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2" />
                          {blog.time}
                        </div>
                      </div>
                      
                      <button className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors duration-300">
                        Read More
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
