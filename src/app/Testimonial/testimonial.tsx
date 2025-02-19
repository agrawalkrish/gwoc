"use client";

import { Star, MapPin, Users, Wrench, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TestimonialSection() {
  const stats = [
    { icon: <MapPin size={48} className="text-black" />, endCount: 15, label: "Locations", suffix: "+" },
    { icon: <Users size={48} className="text-black" />, endCount: 1000, label: "Happy Customers", suffix: "+" },
    { icon: <Wrench size={48} className="text-black" />, endCount: 50, label: "Services", suffix: "+" },
    { icon: <User size={48} className="text-black" />, endCount: 100, label: "Specialists", suffix: "+" }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    const incrementValues = stats.map(stat => stat.endCount / steps);
    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep === steps) {
        setCounts(stats.map(stat => stat.endCount));
        clearInterval(timer);
        return;
      }

      setCounts(prevCounts =>
        prevCounts.map((count, index) => {
          const newValue = count + incrementValues[index];
          return Math.min(newValue, stats[index].endCount);
        })
      );

      currentStep += 1;
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const reviews = [
    {
      rating: 5,
      comment: "Exceptional service! The team was professional and completed the work ahead of schedule.",
      name: "Rakesh Kumar",
      role: "Home Owner",
      image: "https://preview.redd.it/the-most-typical-american-person-ever-v0-ziquc6kdeo2a1.png?width=1024&format=png&auto=webp&s=91df898d6fc055f05767303f9ef5c4bd292cc0d8"
    },
    {
      rating: 5,
      comment: "Very satisfied with the quality of work. The specialist was knowledgeable and courteous.",
      name: "Meenakshi Jain",
      role: "Business Manager",
      image: "https://media.istockphoto.com/photos/couldnt-be-more-happier-with-my-life-picture-id629077926?k=20&m=629077926&s=612x612&w=0&h=loRSeuNbCYMi6CbVOPsk5pd73lHLUgDIHLr-Yaw5kGA="
    },
    {
      rating: 4,
      comment: "Great experience overall. The booking process was simple and service was efficient.",
      name: "Rohit Sharma",
      role: "Restaurant Owner",
      image: "https://circleofcricket.com/post_image/post_image_6baec7a.jpg"
    },
    {
      rating: 5,
      comment: "Outstanding experience from start to finish. The team went above and beyond.",
      name: "Namita Singh",
      role: "Office Manager",
      image: "https://tse4.mm.bing.net/th?id=OIP.3s08xWW2dC0Spg8SWjDM4wHaHa&pid=Api&P=0&h=180"
    },
    {
      rating: 5,
      comment: "Incredible attention to detail and professional service. Highly recommended!",
      name: "Vineet Singhal",
      role: "Property Manager",
      image: "https://img.freepik.com/premium-photo/face-smiling-indian-man_130568-535.jpg"
    }
  ];

  return (
    <div className="h-screen overflow-y-auto bg-gray-50">
      {/* Stats Section */}
      <div className="max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 text-blue-600">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold text-gray-900">
                {Math.round(counts[index])}{stat.suffix}
              </div>
              <div className="text-gray-500 text-lg mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-6xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Happy Customers, Happy Us</h2>
        
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-8 py-4">
            {/* First set of cards */}
            {reviews.map((review, index) => (
              <div 
                key={`first-${index}`} 
                className="flex-none w-[400px]"
              >
                <div className="bg-white rounded-2xl shadow-xl h-[200px] flex flex-col overflow-hidden transform hover:scale-105 transition duration-300">
                  {/* Upper Part - Rating and Comment */}
                  <div className="p-6 flex-1">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          fill={i < review.rating ? "#FBBF24" : "none"}
                          color={i < review.rating ? "#FBBF24" : "#D1D5DB"}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-base line-clamp-3">{review.comment}</p>
                  </div>
                  
                  {/* Lower Part - Customer Info */}
                  <div className="p-4 bg-gray-50 border-t flex items-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-gray-300"
                    />
                    <div>
                      <div className="font-medium text-base">{review.name}</div>
                      <div className="text-gray-500 text-sm">{review.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {reviews.map((review, index) => (
              <div 
                key={`second-${index}`} 
                className="flex-none w-[400px]"
              >
                <div className="bg-white rounded-2xl shadow-xl h-[200px] flex flex-col overflow-hidden transform hover:scale-105 transition duration-300">
                  {/* Upper Part - Rating and Comment */}
                  <div className="p-6 flex-1">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          fill={i < review.rating ? "#FBBF24" : "none"}
                          color={i < review.rating ? "#FBBF24" : "#D1D5DB"}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-base line-clamp-3">{review.comment}</p>
                  </div>
                  
                  {/* Lower Part - Customer Info */}
                  <div className="p-4 bg-gray-50 border-t flex items-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-gray-300"
                    />
                    <div>
                      <div className="font-medium text-base">{review.name}</div>
                      <div className="text-gray-500 text-sm">{review.role}</div>
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