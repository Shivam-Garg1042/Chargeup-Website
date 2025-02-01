



import { useRef, useState, useEffect } from 'react';
import { newsData } from './NewsData';
import NewsCard from './NewsCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewsSection = () => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(newsData.length / cardsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (event) => {
    if (isMobile && scrollRef.current) {
      scrollRef.current.scrollLeft += event.deltaY;
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Echargeup Media</h2>
      <div
        className={`flex gap-6 overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory relative ${isMobile ? '' : 'overflow-hidden'}`}
        ref={scrollRef}
        onWheel={handleScroll}
      >
        {isMobile
          ? newsData.map((news) => (
              <div key={news.id} className="snap-center shrink-0 w-[90%] sm:w-[48%] lg:w-[30%]">
                <NewsCard {...news} />
              </div>
            ))
          : newsData
              .slice(currentSlide * cardsPerPage, (currentSlide + 1) * cardsPerPage)
              .map((news) => (
                <div key={news.id} className="snap-center shrink-0 w-[30%]">
                  <NewsCard {...news} />
                </div>
              ))}
      </div>
      
      {!isMobile && (
        <>
          <button
  onClick={prevSlide}
  className="absolute left-20 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200"
  aria-label="Previous slide"
>
  <ChevronLeft className="w-6 h-6" />
</button>

<button
  onClick={nextSlide}
  className="absolute right-20 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200"
  aria-label="Next slide"
>
  <ChevronRight className="w-6 h-6" />
</button>

          
          <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-16 h-1 rounded-full transition-colors duration-200 ${
                currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        </>
      )}
    </section>
  );
};

export default NewsSection;






