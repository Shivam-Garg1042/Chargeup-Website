import { useState, useEffect } from 'react';
import testimony1 from "../../assets/culture1.jpg";
import testimony2 from "../../assets/culture2.jpg";
import testimony3 from "../../assets/teamPhoto1.webp";
import testimony4 from "../../assets/teamPhoto2.png";
import background from "../../assets/Collage_2.jpg";



const DesktopCulture = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const slides = [
    { image: testimony1 },
    { image: testimony2 },
    { image: testimony3 },
    { image: testimony4 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 600);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image without Blur */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          className="absolute top-0 left-0 w-full h-full object-fill"
          src={background}
          alt="Background Image"
        />
        {/* Dark overlay for blackish effect - adjusted opacity for better look */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#2E5077]/30 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between px-4 md:px-4 py-8">
        {/* Mission Title - at the very top */}
        <div className="w-full flex justify-center mb-8">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center">
            Culture at Chargeup
          </h1>
        </div>

        {/* Circular Image Container with Animation - in the middle */}
        <div className="w-full flex justify-center items-center flex-grow">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Container for both image and boundary to animate together */}
            <div
              className={`absolute w-full h-full transform transition-transform duration-500 ${
                isAnimating ? 'translate-y-full opacity-0 scale-75' : 'translate-y-0 opacity-100 scale-100'
              }`}
            >
              {/* Animated Circle Border that's part of the animation */}
              <div className="absolute inset-0 rounded-full border-4 border-white" />
              
              {/* Image inside the circle */}
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={slides[currentSlide].image}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Static placeholder to maintain space during animation */}
            <div className="invisible w-full h-full rounded-full" />
          </div>
        </div>

        {/* Dots Navigation - at the very bottom */}
        <div className="w-full flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white w-4'
                  : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopCulture;