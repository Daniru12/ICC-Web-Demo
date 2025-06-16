import React, { useState, useEffect } from 'react';

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imageUrl: "https://i.postimg.cc/mrLWBgQy/image.png",
      category: "MATCH RESULT",
      tournament: "World Test Championship Final 2025",
      title: "South Africa crowned World Test Champions after Historic Win",
      description: "Dean Elgar's team secures South Africa's first-ever World Test Championship title with a commanding performance",
      buttonText: "Match Report"
    },
    {
      imageUrl: "https://i.postimg.cc/8zYVx3JQ/cricket2.jpg",
      category: "LATEST NEWS",
      tournament: "Ashes Series 2025",
      title: "England fight back on day 3 of the 2nd Test",
      description: "Stokes and Root partnership revives England's hopes after early wickets",
      buttonText: "Full Story"
    },
    {
      imageUrl: "https://i.postimg.cc/9FJYx9WQ/cricket3.jpg",
      category: "INTERVIEW",
      tournament: "IPL 2025 Special",
      title: "Kohli reflects on his journey after 100th IPL century",
      description: "The batting maestro shares insights on his fitness regime and mental preparation",
      buttonText: "Watch Now"
    }
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="mt-0 mb-0">
      <div className="relative rounded-xl overflow-hidden h-[500px]">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061325] via-[#061325]/70 to-transparent z-10"></div>
        
        {/* Slides container */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        
        {/* Slide content */}
        <div className="absolute bottom-0 left-0 z-20 w-full p-6">
          <div className="flex items-center mb-3">
            <span className="bg-[#28B6CE] text-white px-3 py-1 rounded-md text-sm font-medium">
              {slides[currentSlide].category}
            </span>
            <span className="ml-3 text-sm text-gray-300">
              {slides[currentSlide].tournament}
            </span>
          </div>
          <h2 className="mb-2 text-3xl font-bold text-white">
            {slides[currentSlide].title}
          </h2>
          <p className="max-w-2xl mb-4 text-gray-200">
            {slides[currentSlide].description}
          </p>
          <button className="bg-[#28B6CE] hover:bg-[#1A97AF] text-white px-5 py-2 rounded-md transition-colors duration-200">
            {slides[currentSlide].buttonText}
          </button>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute z-20 flex space-x-2 bottom-6 right-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};