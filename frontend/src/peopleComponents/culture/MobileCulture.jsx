import { useState } from 'react';
import testimony1 from "../../assets/teamPhoto1.webp";
import testimony2 from "../../assets/teamPhoto2.png";
import testimony3 from "../../assets/teamPhoto1.webp";
import testimony4 from "../../assets/teamPhoto2.png";

const MobileCulture = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const slides = [
    { image: testimony1 },
    { image: testimony2 },
    { image: testimony3 },
    { image: testimony4 }
  ];

  const handleSwipe = (direction) => {
    if (direction === 'left' && currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
    if (direction === 'right' && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleSwipe('left');
    }
    if (distance < -minSwipeDistance) {
      handleSwipe('right');
    }
  };

  return (
    <div className="w-full bg-white py-8">
      <h1 className="text-[#003444] text-2xl font-bold mb-6 px-4 text-center">
      Culture at Chargeup

      </h1>

      <div className="relative w-full overflow-hidden px-2">
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full aspect-square object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-[#003444] w-4' 
                : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileCulture;