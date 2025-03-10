import { useState, useEffect } from 'react';
import testimony1 from "../../assets/culture1.jpg";
import testimony2 from "../../assets/culture2.jpg";
import testimony3 from "../../assets/teamPhoto1.webp";
import testimony4 from "../../assets/teamPhoto2.png";
import background from "../../assets/aesthetic_collage.jpg";


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
          className="absolute top-0 left-0 w-full h-full object-fit"
          src={background}
          alt="Background Image"
        />
        {/* Dark overlay for blackish effect - adjusted opacity for better look */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#2E5077]/30 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-4">
        {/* Mission Title */}
        <h1 className="text-[#FFFFFF] text-2xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
          Culture at Chargeup
        </h1>

        {/* Image Container */}
        <div className="w-full max-w-2xl mx-auto">
          {/* Image */}
          <div className="relative aspect-[16/9] mb-6">
            <div
              className={`absolute w-full h-full transform transition-transform duration-500 ${
                isAnimating ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
              }`}
            >
              <img
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2">
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
    </div>
  );
};

export default DesktopCulture;