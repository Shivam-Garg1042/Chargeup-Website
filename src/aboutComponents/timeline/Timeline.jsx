import React, { useEffect, useState, useRef } from 'react';

const TimelineSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [vehiclePosition, setVehiclePosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  const timelineEvents = [
    {
      year: '2019',
      title: 'Incorporation Year',
      description: 'Incorporation year, with 1st station opening in May’2019 in Delhi',
      color: 'from-green-100 to-green-200',
      textColor: 'text-emerald-800'
    },
    {
      year: '2020',
      title: 'Expansion Started',
      description: 'Expansion started, with opening new stores in asset lite model',
      color: 'from-orange-100 to-orange-200',
      textColor: 'text-orange-800'
    },
    {
      year: '2021',
      title: 'Marked Drivers',
      description: 'Marked 1000 drivers in our community network with 85 stations',
      color: 'from-green-100 to-green-200',
      textColor: 'text-emerald-800'
    },
    {
      year: '2022',
      title: 'Recognized as EV Startup',
      description: 'Recognized as EV startup of the year',
      color: 'from-orange-100 to-orange-200',
      textColor: 'text-orange-800'
    },
    {
      year: '2023',
      title: 'Growth in Revenue',
      description: '8x Growth in Revenue since 2021, across 13 new cities from 4000 drivers',
      color: 'from-green-100 to-green-200',
      textColor: 'text-emerald-800'
    }
  ];


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;
      
      const firstCardOffset = 100;
      const lastCardOffset = container.scrollHeight - 260;
      const totalTravelDistance = lastCardOffset - firstCardOffset;
      
      const scrollProgress = Math.max(0, Math.min(1, scrollPosition / maxScroll));
      const newVehiclePosition = firstCardOffset + (totalTravelDistance * scrollProgress);
      
      setVehiclePosition(newVehiclePosition);
      
      const newActiveIndex = Math.min(
        Math.floor((scrollPosition / maxScroll) * timelineEvents.length),
        timelineEvents.length - 1
      );
      setActiveIndex(newActiveIndex);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const cardHeight = isMobile ? 300 : 400;
  const totalHeight = timelineEvents.length * cardHeight;

  return (
    <div 
  className="relative" 
  style={{
    background: 'linear-gradient(135deg,rgb(21, 202, 88) 0%,rgb(254, 148, 60) 100%)'
  }}
>
      <h1 className="text-4xl font-bold text-center py-8 text-white">Our Journey</h1>
    <div 
      ref={containerRef}
      className="relative h-[600px] overflow-y-auto scrollbar-hide"
      style={{
        background: 'linear-gradient(135deg, #4ade80 0%, #fb923c 100%)',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}
    >
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .card-container-mobile-even {
            justify-content: flex-end;
            padding-right: 1rem;
          }
          .card-container-mobile-odd {
            justify-content: flex-start;
            padding-left: 1rem;
          }
          .mobile-card-even {
            --slide-from: 100%;
          }
          .mobile-card-odd {
            --slide-from: -100%;
          }
          .mobile-card {
            opacity: 0;
            transform: translateX(var(--slide-from));
            animation: slideIn 1s ease-out forwards;
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(var(--slide-from));
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
      
      <div style={{ height: `${totalHeight}px` }} className="relative">
        <div className="absolute left-1/2 top-0 -ml-16 md:w-32 w-4" style={{ height: `${totalHeight}px` }}>
          <div className="absolute inset-0 bg-gray-900" />
          <div className="absolute left-1 md:left-2 top-0 w-0.5 h-full bg-white" />
          <div className="absolute right-1 md:right-2 top-0 w-0.5 h-full bg-white" />
          <div 
            className="absolute left-1/2 top-0 w-1 -ml-0.5" 
            style={{ 
              height: `${totalHeight}px`,
              background: 'repeating-linear-gradient(to bottom, #FCD34D 0, #FCD34D 20px, transparent 20px, transparent 40px)'
            }} 
          />
        </div>

        {!isMobile && (
          <div 
            className="absolute left-1/2 z-10"
            style={{ 
              top: vehiclePosition,
              transform: 'translateX(-50%)',
              transition: 'top 0.1s ease-out'
            }}
          >
            <svg 
              width="80" 
              height="160" 
              viewBox="0 0 80 160" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="10" width="60" height="100" rx="15" fill="#0AAD2A" stroke="#087F1A" strokeWidth="3" />
              <ellipse cx="40" cy="30" rx="15" ry="10" fill="#0C3C26" />
              <line x1="30" y1="20" x2="50" y2="20" stroke="black" strokeWidth="3" />
              <circle cx="25" cy="18" r="3" fill="black" />
              <circle cx="55" cy="18" r="3" fill="black" />
              <circle cx="20" cy="15" r="4" fill="#F35A4A" />
              <circle cx="60" cy="15" r="4" fill="#F35A4A" />
              <rect x="20" y="50" width="40" height="35" fill="#F7934C" rx="5" />
              <rect x="25" y="95" width="30" height="15" fill="#F35A4A" rx="3" />
              <line x1="25" y1="100" x2="55" y2="100" stroke="black" strokeWidth="2" />
              <rect x="28" y="115" width="24" height="10" fill="#222" rx="3" />
              <circle cx="40" cy="150" r="6" fill="#1F2937" />
              <path d="M30 145 Q40 135 50 145" fill="#087F1A" stroke="#06661A" strokeWidth="2" />
              <path 
                d="M10 150 Q40 100 70 150" 
                stroke="rgba(0,0,0,0.3)" 
                strokeWidth="3" 
                strokeDasharray="5,5"
                fill="none"
              />
            </svg>
          </div>
        )}
        
        <div className="relative mx-auto">
          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={`
                ${isMobile ? 'h-[300px]' : 'h-[400px]'} 
                flex items-center 
                ${isMobile 
                  ? index % 2 === 0 
                    ? 'card-container-mobile-even' 
                    : 'card-container-mobile-odd'
                  : index % 2 === 0 
                    ? 'justify-end pr-16' 
                    : 'justify-start pl-16'
                }
              `}
            >
              <div
                className={`
                  ${isMobile ? 'w-[85vw] max-w-64' : 'w-96'} 
                  p-6 rounded-lg shadow-lg
                  transition-all duration-600
                  ${isMobile ? `mobile-card ${index % 2 === 0 ? 'mobile-card-even' : 'mobile-card-odd'}` : ''}
                  ${activeIndex === index ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}
                  bg-gradient-to-br ${event.color}
                `}
              >
                <h3 className={`text-2xl font-bold ${event.textColor}`}>{event.year}</h3>
                <h4 className={`text-xl font-semibold mt-2 ${event.textColor}`}>{event.title}</h4>
                <p className={`mt-2 ${event.textColor} opacity-90`}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default TimelineSlider;