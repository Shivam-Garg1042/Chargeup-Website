import { useState } from 'react';
import { Card } from './../ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialData = [
  {
    id: 1,
    videoId: "uxwZTdbwp2s",
    avatar: "/api/placeholder/48/48",
    name: "Jyoti Kashyap",
    role: "",
    company: "",
    quote: "I used to work in a factory, and earn merely 7-8K per month. I could barely make ends meet. After Chargeup my life has changed tremendously, I can earn and also pamper my kids with gifts."
  },
  {
    id: 2,
    videoId: "qkccV1xW8iE",
    avatar: "/api/placeholder/48/48",
    name: "#voiceofdrivers",
    role: "",
    company: "",
    quote: "Chargeup proudly presents #AzadiKiAwaaz a heartfelt tribute to these silent warriors who share what independence means to them. Watch the full video to discover what azaadi truly signifies for these drivers."
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = testimonialData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  return (
    <div className="bg-white w-full max-w-7xl mx-auto p-4 md:p-8 relative">
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Hear what our
            <span className="block text-[#4da1a9] ">customers are saying</span>
          </h2>
        </div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <button onClick={prevSlide} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="text-lg">
            <span className="font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="text-gray-400"> / {String(totalSlides).padStart(2, '0')}</span>
          </div>
          <button onClick={nextSlide} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                <Card className="p-0 h-auto">
                  <div className="aspect-video relative mb-2 overflow-hidden rounded-md">
                    <img 
                      src={`http://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`} 
                      alt="video thumbnail" 
                      className="w-full h-full object-cover"
                    />
                    <a
                      href={`https://www.youtube.com/watch?v=${testimonial.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                    >
                      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M10 8l6 4-6 4z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm mb-2 p-3">{testimonial.quote}</p>
                  <div className="flex items-center gap-3 p-3">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <h5 className="font-medium text-sm">{testimonial.name}</h5>
                      <p className="text-xs text-gray-500">{testimonial.role} {testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-row gap-10">
        <div className="w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hear what our
            <span className="block text-[#4da1a9] ">customers are saying</span>
          </h2>
          <div className="flex items-center gap-4 mb-8 my-20">
            <div className="text-lg">
              <span className="font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
              <span className="text-gray-400"> / {String(totalSlides).padStart(2, '0')}</span>
            </div>
            <div className="flex gap-2">
              <button onClick={prevSlide} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="w-3/4 relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-12"
            style={{ transform: `translateX(calc(-${currentSlide * 76}%))` }}
          >
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id} className="w-[70%] flex-shrink-0">
                <Card className="p-0 h-auto mx-auto">
                  <div className="h-56 relative mb-1 overflow-hidden rounded-md">
                    <img 
                      src={`http://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`} 
                      alt="video thumbnail" 
                      className="w-full h-full object-cover"
                    />
                    <a
                      href={`https://www.youtube.com/watch?v=${testimonial.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                    >
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M10 8l6 4-6 4z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 text-lg mb-1 px-2 pt-1 line-clamp-2">{testimonial.quote}</p>
                  <div className="flex items-center gap-2 p-2">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-6 h-6 rounded-full" />
                    <div>
                      <h5 className="font-medium text-xs">{testimonial.name}</h5>
                      <p className="text-xs text-gray-500">{testimonial.role} {testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none">
            <div 
              className="w-full h-full"
              style={{
                background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9))'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;