
import  { useRef, useEffect, useState } from 'react';

const VerticalTimeline = () => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [visibleLineHeight, setVisibleLineHeight] = useState(0);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  // Timeline data
  const milestones = [
    {
      date: "May 2019",
      achievements: [
        { 
          title: "1st", 
          description: "BaaS station established in Delhi NCR",
          color: "text-accent", 
          highlight: true 
        }
      ],
      icon: "🏢"
    },
    {
      date: "Sep 2021",
      achievements: [
        { 
          title: "1000", 
          description: "Chargeup drivers",
          color: "text-accent", 
          highlight: false 
        }
      ],
      icon: "🛵"
    },
    {
      date: "Dec 2021",
      achievements: [
        { 
          title: "$1 Mn", 
          description: "Raised Seed Round", 
          highlight: false,
          logo: true 
        }
      ],
      icon: "💰"
    },
    {
      date: "Jan 2022",
      achievements: [
        { 
          title: "100", 
          description: "Chargeup dealer partners",
          color: "text-accent", 
          highlight: false 
        }
      ],
      icon: "🤝"
    },
    {
      date: "Sep 2022",
      achievements: [
        { 
          title: "EV Startup of the Year", 
          description: "Awarded by E Mobility",
          highlight: true 
        }
      ],
      icon: "🏆"
    },
    {
      date: "Dec 2022",
      achievements: [
        { 
          title: "$2.5 Mn", 
          description: "Raised Pre-Series A",
          highlight: false 
        },
        { 
          title: "3000", 
          description: "Chargeup drivers",
          color: "text-accent", 
          highlight: false 
        }
      ],
      icon: "📈"
    },
    {
      date: "May 2023",
      achievements: [
        { 
          title: "Partnership", 
          description: "with Ascend Capital (NBFC)",
          highlight: false,
          logo: true 
        }
      ],
      icon: "🔄"
    },
    {
      date: "Jan 2024",
      achievements: [
        { 
          title: "15", 
          description: "Cities",
          color: "text-accent", 
          highlight: true 
        },
        { 
          title: "6800+", 
          description: "Drivers reached",
          color: "text-accent", 
          highlight: false 
        }
      ],
      icon: "🌆"
    },
    {
      date: "Oct 2024",
      achievements: [
        { 
          title: "14", 
          description: "B2B Partnerships",
          color: "text-accent", 
          highlight: false 
        },
        { 
          title: "₹380 Mn", 
          description: "ARR",
          color: "text-accent", 
          highlight: true
        }
      ],
      icon: "🚀"
    }
  ];

  // Calculate how much of the timeline is visible
  const updateLineProgress = () => {
    if (!timelineRef.current) return;

    const scrollPosition = window.scrollY;
    const timelineTop = timelineRef.current.offsetTop;
    const timelineHeight = timelineRef.current.offsetHeight;
    const windowHeight = window.innerHeight;

    // Calculate how far we've scrolled into the timeline
    const scrollPercentage = Math.max(0, Math.min(1,
      (scrollPosition + windowHeight - timelineTop) / (timelineHeight + windowHeight)
    ));

    setVisibleLineHeight(scrollPercentage * 100);
  };

  // Set up Intersection Observer to detect when timeline items come into view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, // Trigger when at least 15% of the item is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.dataset.index);

        if (entry.isIntersecting) {
          setActiveIndices(prev => Array.from(new Set([...prev, index])));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Add scroll event listener for timeline progress
    window.addEventListener('scroll', updateLineProgress);
    window.addEventListener('resize', updateLineProgress);

    // Initial update
    updateLineProgress();

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      window.removeEventListener('scroll', updateLineProgress);
      window.removeEventListener('resize', updateLineProgress);
    };
  }, []);

  // Determine if item is active (has been scrolled into view)
  const isActive = (index) => activeIndices.includes(index);

  return (
    <div 
      className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      ref={timelineRef}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-primary mb-12 tracking-tight">
          Chargeup's <span className="text-accent">Journey</span>
        </h1>

        <div className="relative">
          {/* Timeline static line (background) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full transform md:-translate-x-px"></div>

          {/* Timeline dynamic line (foreground - changes with scroll) */}
          <div
            className="absolute left-6 md:left-1/2 top-0 w-1 bg-gradient-to-b from-secondary via-accent to-primary rounded-full transform md:-translate-x-px transition-all duration-300 ease-out"
            style={{ height: `${visibleLineHeight}%` }}
          ></div>

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
                data-index={index}
                className={`relative transition-all duration-700 ease-out
                  ${isActive(index) ? 'opacity-100' : 'opacity-0'}
                `}
              >
                {/* Date bubble */}
                <div className={`
                  absolute top-0 left-6 md:left-1/2 transform -translate-x-1/2 
                  bg-gradient-to-r from-secondary to-accent text-white font-bold 
                  px-4 py-2 rounded-full shadow-lg z-10
                  ${isActive(index) ? 'animate-pulse-once scale-100' : 'scale-90'}
                  transition-transform duration-500
                `}>
                  {milestone.date}
                </div>

                {/* Content container */}
                <div className={`
                  relative ml-16 md:ml-0 pt-12
                  ${index % 2 === 0 ? 'md:mr-[52%] md:pr-12' : 'md:ml-[52%] md:pl-12'}
                  ${isActive(index) ?
                    `${index % 2 === 0 ? 'animate-slide-from-left' : 'animate-slide-from-right'}` :
                    ''}
                `}>
                  {/* Milestone icon */}
                  <div className={`
                    absolute top-10 -left-10 md:static md:float-${index % 2 === 0 ? 'right -mr-20' : 'left -ml-20'}
                    w-12 h-12 flex items-center justify-center
                    bg-white rounded-full shadow-md border-2 border-accent text-2xl z-10
                    ${isActive(index) ? 'animate-bounce-once' : ''}
                    transition-all duration-300 ease-out hover:scale-110
                  `}>
                    {milestone.icon}
                  </div>

                  {/* Card */}
                  <div className={`
                    bg-white p-5 rounded-xl shadow-xl border-l-4 border-accent
                    transform transition-all duration-500 ease-out
                    ${isActive(index) ? 'translate-y-0 rotate-0' :
                      index % 2 === 0 ? 'translate-y-10 rotate-2' : 'translate-y-10 -rotate-2'}
                    hover:shadow-2xl hover:scale-105
                  `}>
                    <div className="space-y-4">
                      {milestone.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className={`
                            ${achievement.highlight ?
                              'bg-gray-50 p-4 rounded-lg border-l-2 border-accent transform transition-all duration-300' : ''}
                            ${isActive(index) && achievement.highlight ? 'animate-fade-in' : ''}
                          `}
                        >
                          {achievement.logo && (
                            <div className="w-20 h-12 bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-xs text-gray-500 border border-gray-200">
                              <span className="text-accent">Logo</span>
                            </div>
                          )}

                          <div className={`font-bold text-2xl mb-1 ${achievement.color || 'text-primary'}`}>
                            {achievement.title}
                          </div>

                          <div className="text-gray-600 text-lg">
                            {achievement.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connector dot */}
                  <div className={`
                    absolute top-0 left-6 md:left-1/2 w-6 h-6
                    ${isActive(index) ? 'bg-accent' : 'bg-gray-300'} 
                    border-3 border-white rounded-full shadow-md
                    transform -translate-x-1/2
                    z-10
                    ${isActive(index) ? 'animate-ping-once scale-100' : 'scale-75'}
                    transition-all duration-500
                  `}></div>
                </div>
              </div>
            ))}

            {/* Final element - future indicator */}
            <div className="relative mt-12">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-10 h-10 
                bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center 
                animate-pulse shadow-lg">
                <span className="text-white text-xl">→</span>
              </div>
              <div className="ml-20 md:ml-[52%] text-gray-600 italic text-lg">
                Future milestones coming soon...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add required animations
const addAnimationStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes bounceOnce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }
    
    @keyframes pulseOnce {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.08); }
    }
    
    @keyframes pingOnce {
      0% { transform: translate(-50%, 0) scale(1); opacity: 1; }
      50% { transform: translate(-50%, 0) scale(1.8); opacity: 0.5; }
      100% { transform: translate(-50%, 0) scale(1); opacity: 1; }
    }
    
    @keyframes slideFromLeft {
      0% { transform: translateX(-40px); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideFromRight {
      0% { transform: translateX(40px); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeIn {
      0% { opacity: 0.5; transform: scale(0.95); }
      100% { opacity: 1; transform: scale(1); }
    }
    
    .animate-bounce-once {
      animation: bounceOnce 1.2s ease-in-out;
    }
    
    .animate-pulse-once {
      animation: pulseOnce 1.2s ease-in-out;
    }
    
    .animate-ping-once {
      animation: pingOnce 1.5s ease-in-out;
    }
    
    .animate-slide-from-left {
      animation: slideFromLeft 0.8s ease-out forwards;
    }
    
    .animate-slide-from-right {
      animation: slideFromRight 0.8s ease-out forwards;
    }
    
    .animate-fade-in {
      animation: fadeIn 1s ease-out forwards;
    }
  `;
  document.head.appendChild(style);
};

// Component to wrap everything
const ChargeupJourneyTimeline = () => {
  useEffect(() => {
    addAnimationStyles();
  }, []);

  return <VerticalTimeline />;
};

export default ChargeupJourneyTimeline;