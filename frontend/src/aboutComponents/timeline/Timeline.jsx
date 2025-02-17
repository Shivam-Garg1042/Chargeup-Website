// import React, { useEffect, useState, useRef } from 'react';

// const TimelineSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [vehiclePosition, setVehiclePosition] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [visibleCards, setVisibleCards] = useState(new Set());
//   const containerRef = useRef(null);
//   const cardRefs = useRef([]);

//   const timelineEvents = [
//     {
//       year: '2019',
//       title: 'Incorporation Year',
//       description: 'Incorporation year, with 1st station opening in May 2019 in Delhi',
//       color: 'bg-[#D0DDD0]',
//       textColor: 'text-emerald-800'
//     },
//     {
//       year: '2020',
//       title: 'Expansion Started',
//       description: 'Expansion started, with opening new stores in asset lite model',
//       color: 'bg-[#F0F0D7]',
//       textColor: 'text-orange-800'
//     },
//     {
//       year: '2021',
//       title: 'Marked Drivers',
//       description: 'Marked 1000 drivers in our community network with 85 stations',
//       color: 'bg-[#D0DDD0]',
//       textColor: 'text-emerald-800'
//     },
//     {
//       year: '2022',
//       title: 'Recognized as EV Startup',
//       description: 'Recognized as EV startup of the year',
//       color: 'bg-[#F0F0D7]',
//       textColor: 'text-orange-800'
//     },
//     {
//       year: '2023',
//       title: 'Growth in Revenue',
//       description: '8x Growth in Revenue since 2021, across 13 new cities from 4000 drivers',
//       color: 'bg-[#D0DDD0]',
//       textColor: 'text-emerald-800'
//     }
//   ];

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   useEffect(() => {
//     cardRefs.current = cardRefs.current.slice(0, timelineEvents.length);
//   }, [timelineEvents]);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleScroll = () => {
//       const scrollPosition = container.scrollTop;
//       const maxScroll = container.scrollHeight - container.clientHeight;
      
//       // Handle vehicle position for desktop view
//       if (!isMobile) {
//         const firstCardOffset = 100;
//         const lastCardOffset = container.scrollHeight - 260;
//         const totalTravelDistance = lastCardOffset - firstCardOffset;
//         const scrollProgress = Math.max(0, Math.min(1, scrollPosition / maxScroll));
//         const newVehiclePosition = firstCardOffset + (totalTravelDistance * scrollProgress);
//         setVehiclePosition(newVehiclePosition);
//       }

//       // Handle active index and card visibility
//       const newActiveIndex = Math.min(
//         Math.floor((scrollPosition / maxScroll) * timelineEvents.length),
//         timelineEvents.length - 1
//       );
//       setActiveIndex(newActiveIndex);

//       // Check card visibility for mobile animations
//       if (isMobile) {
//         const newVisibleCards = new Set(visibleCards);
//         cardRefs.current.forEach((card, index) => {
//           if (card && isElementInViewport(card)) {
//             newVisibleCards.add(index);
//           }
//         });
//         setVisibleCards(newVisibleCards);
//       }
//     };

//     const isElementInViewport = (el) => {
//       const rect = el.getBoundingClientRect();
//       const windowHeight = window.innerHeight || document.documentElement.clientHeight;
//       return rect.top <= windowHeight * 0.8 && rect.bottom >= windowHeight * 0.2;
//     };

//     container.addEventListener('scroll', handleScroll);
//     // Initial check for visible cards
//     handleScroll();
//     return () => container.removeEventListener('scroll', handleScroll);
//   }, [isMobile, visibleCards]);

//   const cardHeight = isMobile ? 300 : 400;
//   const totalHeight = timelineEvents.length * cardHeight;

//   return (
//     <div 
//       className="relative" 
//       style={{
//         background: 'linear-gradient(135deg, #278c6a 0%, #003444 100%)'
//       }}
//     >
//       <h1 className="text-4xl md:text-8xl font-bold text-center py-4 text-white">Our Journey</h1>
//       <p className="journey-subtitle text-lg md:text-xl mb-4 text-center text-white opacity-80">
//     Milestones that shaped our success
//     </p>
    
//       <div 
//         ref={containerRef}
//         className="relative h-[600px] overflow-y-auto scrollbar-hide"
//         style={{
//           // background: 'linear-gradient(135deg, #55883B 0%, #C1E899 35%, #9A6735 100%)',
//           msOverflowStyle: 'none',
//           scrollbarWidth: 'none'
//         }}
//       >
//         <style>
//           {`
//             .scrollbar-hide::-webkit-scrollbar {
//               display: none;
//             }
//             .mobile-card {
//               opacity: 0;
//               transform: translateX(var(--slide-from, 0));
//               transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//             }
//             .mobile-card.visible {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           `}
//         </style>
        
//         <div style={{ height: `${totalHeight}px` }} className="relative">
//         {!isMobile && ( <div className="absolute left-1/2 top-0 -ml-16 md:w-32 w-4" style={{ height: `${totalHeight}px` }}>
//             <div className="absolute inset-0 bg-gray-900" />
//             <div className="absolute left-1 md:left-2 top-0 w-0.5 h-full bg-white" />
//             <div className="absolute right-1 md:right-2 top-0 w-0.5 h-full bg-white" />
//             <div 
//               className="absolute left-1/2 top-0 w-1 -ml-0.5" 
//               style={{ 
//                 height: `${totalHeight}px`,
//                 background: 'repeating-linear-gradient(to bottom, #FCD34D 0, #FCD34D 20px, transparent 20px, transparent 40px)'
//               }} 
//             />
//           </div>
//         )}

//           {!isMobile && (
//             <div 
//               className="absolute left-1/2 z-10"
//               style={{ 
//                 top: vehiclePosition,
//                 transform: 'translateX(-50%)',
//                 transition: 'top 0.1s ease-out'
//               }}
//             >
//               <svg 
//                 width="80" 
//                 height="160" 
//                 viewBox="0 0 80 160" 
//                 fill="none" 
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <rect x="10" y="10" width="60" height="100" rx="15" fill="#0AAD2A" stroke="#087F1A" strokeWidth="3" />
//                 <ellipse cx="40" cy="30" rx="15" ry="10" fill="#0C3C26" />
//                 <line x1="30" y1="20" x2="50" y2="20" stroke="black" strokeWidth="3" />
//                 <circle cx="25" cy="18" r="3" fill="black" />
//                 <circle cx="55" cy="18" r="3" fill="black" />
//                 <circle cx="20" cy="15" r="4" fill="#F35A4A" />
//                 <circle cx="60" cy="15" r="4" fill="#F35A4A" />
//                 <rect x="20" y="50" width="40" height="35" fill="#F7934C" rx="5" />
//                 <rect x="25" y="95" width="30" height="15" fill="#F35A4A" rx="3" />
//                 <line x1="25" y1="100" x2="55" y2="100" stroke="black" strokeWidth="2" />
//                 <rect x="28" y="115" width="24" height="10" fill="#222" rx="3" />
//                 <circle cx="40" cy="150" r="6" fill="#1F2937" />
//                 <path d="M30 145 Q40 135 50 145" fill="#087F1A" stroke="#06661A" strokeWidth="2" />
//                 <path 
//                   d="M10 150 Q40 100 70 150" 
//                   stroke="rgba(0,0,0,0.3)" 
//                   strokeWidth="3" 
//                   strokeDasharray="5,5"
//                   fill="none"
//                 />
//               </svg>
//             </div>
//           )}
          
//           <div className="relative mx-auto">
//             {timelineEvents.map((event, index) => (
//               <div
//                 key={event.year}
//                 className={`
//                   ${isMobile ? 'h-[300px]' : 'h-[400px]'} 
//                   flex items-center 
//                   ${isMobile 
//                     ? index % 2 === 0 
//                       ? 'justify-center' 
//                       : 'justify-center'
//                     : index % 2 === 0 
//                       ? 'justify-end pr-16' 
//                       : 'justify-start pl-16'
//                   }
//                 `}
//               >
//                 <div
//                   ref={el => cardRefs.current[index] = el}
//                   className={`
//                     ${isMobile ? 'w-[85vw] max-w-64' : 'w-96'} 
//                     p-6 rounded-lg shadow-lg
//                     transition-all duration-300
//                     ${isMobile ? 'mobile-card' : ''}
//                     ${isMobile && visibleCards.has(index) ? 'visible' : ''}
//                     ${!isMobile && activeIndex === index ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}
//                     bg-gradient-to-br ${event.color}
//                   `}
//                   style={isMobile ? {
//                     '--slide-from': `${index % 2 === 0 ? '100%' : '-100%'}`
//                   } : {}}
//                 >
//                   <h3 className={`text-2xl font-bold ${event.textColor}`}>{event.year}</h3>
//                   <h4 className={`text-xl font-semibold mt-2 ${event.textColor}`}>{event.title}</h4>
//                   <p className={`mt-2 ${event.textColor} opacity-90`}>{event.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimelineSlider;










import React, { useEffect, useState, useRef } from 'react';

const TimelineSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [vehiclePosition, setVehiclePosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const timelineEvents = [
    {
      year: '2019',
      title: 'Incorporation Year',
      description: 'Incorporation year, with 1st station opening in May 2019 in Delhi',
      color: 'bg-[#D0DDD0]',
      textColor: 'text-emerald-800'
    },
    {
      year: '2020',
      title: 'Expansion Started',
      description: 'Expansion started, with opening new stores in asset lite model',
      color: 'bg-[#F0F0D7]',
      textColor: 'text-orange-800'
    },
    {
      year: '2021',
      title: 'Marked Drivers',
      description: 'Marked 1000 drivers in our community network with 85 stations',
      color: 'bg-[#D0DDD0]',
      textColor: 'text-emerald-800'
    },
    {
      year: '2022',
      title: 'Recognized as EV Startup',
      description: 'Recognized as EV startup of the year',
      color: 'bg-[#F0F0D7]',
      textColor: 'text-orange-800'
    },
    {
      year: '2023',
      title: 'Growth in Revenue',
      description: '8x Growth in Revenue since 2021, across 13 new cities from 4000 drivers',
      color: 'bg-[#D0DDD0]',
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
    cardRefs.current = cardRefs.current.slice(0, timelineEvents.length);
  }, [timelineEvents]);

  // Throttled Scroll Handler
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollPosition = container.scrollTop;
    const maxScroll = container.scrollHeight - container.clientHeight;

    // Handle vehicle position for desktop view
    if (!isMobile) {
      const firstCardOffset = 100;
      const lastCardOffset = container.scrollHeight - 260;
      const totalTravelDistance = lastCardOffset - firstCardOffset;
      const scrollProgress = Math.max(0, Math.min(1, scrollPosition / maxScroll));
      const newVehiclePosition = firstCardOffset + (totalTravelDistance * scrollProgress);
      setVehiclePosition(newVehiclePosition);
    }

    // Handle active index
    const newActiveIndex = Math.min(
      Math.floor((scrollPosition / maxScroll) * timelineEvents.length),
      timelineEvents.length - 1
    );
    setActiveIndex(newActiveIndex);

    // Handle card visibility for mobile
    if (isMobile) {
      const newVisibleCards = new Set(visibleCards);
      cardRefs.current.forEach((card, index) => {
        if (card && isElementInViewport(card)) {
          newVisibleCards.add(index);
        }
      });

      // Only update visibleCards if it has changed
      if (newVisibleCards.size !== visibleCards.size) {
        setVisibleCards(newVisibleCards);
      }
    }
  };

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight * 0.8 && rect.bottom >= windowHeight * 0.2;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      requestAnimationFrame(handleScroll); // Throttle the scroll event handler
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [isMobile, visibleCards]);

  const cardHeight = isMobile ? 300 : 400;
  const totalHeight = timelineEvents.length * cardHeight;

  return (
    <div 
      className="relative" 
      style={{
        background: 'linear-gradient(135deg, #727D73 0%, #AAB99A 100%)'
      }}
    >
      <h1 className="text-4xl md:text-8xl font-bold text-center py-4 text-white">Our Journey</h1>
      <p className="journey-subtitle text-lg md:text-xl mb-4 text-center text-white opacity-80">
        Milestones that shaped our success
      </p>
      
      <div 
        ref={containerRef}
        className="relative h-[600px] overflow-y-auto scrollbar-hide"
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <style>
          {`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .mobile-card {
              opacity: 0;
              transform: translateX(var(--slide-from, 0));
              transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .mobile-card.visible {
              opacity: 1;
              transform: translateX(0);
            }
          `}
        </style>
        
        <div style={{ height: `${totalHeight}px` }} className="relative">
          {!isMobile && (
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
          )}

          {/* Vehicle animation */}
          {!isMobile && (
            <div 
              className="absolute left-1/2 z-10"
              style={{ 
                top: vehiclePosition,
                transform: 'translateX(-50%)',
                transition: 'top 0.1s ease-out'
              }}
            >
              {/* Updated SVG for the vehicle */}
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
                      ? 'justify-center' 
                      : 'justify-center'
                    : index % 2 === 0 
                      ? 'justify-end pr-16' 
                      : 'justify-start pl-16'
                  }
                `}
              >
                <div
                  ref={el => cardRefs.current[index] = el}
                  className={`
                    ${isMobile ? 'w-[85vw] max-w-64' : 'w-96'} 
                    p-6 rounded-lg shadow-lg
                    transition-all duration-300
                    ${isMobile ? 'mobile-card' : ''} 
                    ${isMobile && visibleCards.has(index) ? 'visible' : ''}
                    ${!isMobile && activeIndex === index ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}
                    bg-gradient-to-br ${event.color}
                  `}
                  style={isMobile ? {
                    '--slide-from': `${index % 2 === 0 ? '100%' : '-100%'}` 
                  } : {}}
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
