"use client";
import { useState, useEffect } from 'react';

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShowContent(false);
          }, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  if (!showContent) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-gray-100 rounded-full mix-blend-overlay filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-gray-200 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-300 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container with Glow Effect */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-white opacity-10 filter blur-lg rounded-full" />
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=320,fit=crop,q=95/AzGeNv8QxRTqXJan/20241226_222044-AwvDvRazrEUZ8ZMp.png"
            alt="Helper Buddy Logo"
            className="w-40 h-40 object-contain relative z-10"
          />
        </div>

        {/* Progress Bar Container */}
        <div className="w-80 relative">
          <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden relative z-10">
            <div 
              className="h-full bg-gradient-to-r from-gray-100 to-white transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Subtle Glow Effect */}
          <div 
            className="absolute inset-0 bg-white filter blur-md opacity-20 transform scale-110"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <div className="mt-8 relative">
          <span className="text-6xl font-bold text-white">
            {progress}%
          </span>
        </div>

        {/* New Pulse Wave Loading Animation */}
        <div className="mt-6 flex items-center gap-4">
          <span className="text-gray-300 text-xl">Loading</span>
          <div className="relative w-16 h-6 flex items-center justify-center">
            <div className="flex gap-1">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="w-1 h-4 bg-white rounded-full"
                  style={{
                    animation: "wave 1.5s ease-in-out infinite",
                    animationDelay: `${index * 0.15}s`
                  }}
                />
              ))}
            </div>
            <style jsx>{`
              @keyframes wave {
                0%, 100% {
                  transform: scaleY(0.5);
                }
                50% {
                  transform: scaleY(1.5);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}
