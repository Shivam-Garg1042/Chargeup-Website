import { useState, useEffect, useRef } from "react";
import image1 from "../../assets/Animation_1.mp4";
import image2 from "../../assets/Animation_2.mp4";
import image3 from "../../assets/Animation_3_1.mp4";
import image4 from "../../assets/Animation_4.mp4";

const partnershipSteps = [
  {
    id: 1,
    title: "Select your geography",
    description: "Select the area where you want to do business with Chargeup",
    animation: image4
  },
  {
    id: 2,
    title: "Decide your partnership",
    description: "Select whether you wan to become a dealer partner or a distributor partner",
    animation: image3
  },
  {
    id: 3,
    title: "Onboard with Chargeup",
    description: "Join our ecosystem : get trained, get store branded, get tech integrated and launch",
    animation: image2
  },
  {
    id: 4,
    title: "Accelerate your earnings",
    description: "Start growing and mximize your retunr on investment",
    animation: image1
  }
];

export default function ScrollComponent() {
  // State management
  const [activeSection, setActiveSection] = useState(1);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const [isLastSectionVisible, setIsLastSectionVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isComponentFullyVisible, setIsComponentFullyVisible] = useState(false);
  const [isComponentAtTop, setIsComponentAtTop] = useState(false);
  const [isComponentAtBottom, setIsComponentAtBottom] = useState(false);
  const [hasCompletedScroll, setHasCompletedScroll] = useState(false);
  const [allowBodyScroll, setAllowBodyScroll] = useState(true);
  
  // Refs
  const sectionRefs = useRef([]);
  const containerRef = useRef(null);
  const componentRef = useRef(null);
  const pageScrollY = useRef(0);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check if component is in viewport
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        
        // Component visibility states
        if (entry.intersectionRatio >= 0.95) {
          setIsComponentFullyVisible(true);
          setAllowBodyScroll(false);
        } else if (entry.intersectionRatio < 0.5) {
          setIsComponentFullyVisible(false);
          setAllowBodyScroll(true);
        }
        
        // Position in viewport
        const boundingRect = entry.boundingClientRect;
        setIsComponentAtTop(boundingRect.top >= 0 && boundingRect.top <= 10);
        setIsComponentAtBottom(boundingRect.bottom <= window.innerHeight && boundingRect.bottom >= window.innerHeight - 10);
      },
      { threshold: [0, 0.5, 0.95, 1] }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [isMobile]);

  // Track active section
  useEffect(() => {
    if (isMobile) return;

    const observerOptions = { root: null, threshold: 0.5 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = parseInt(entry.target.dataset.id);
          setActiveSection(sectionId);
          setIsLastSectionVisible(sectionId === partnershipSteps.length);
          
          // Scroll control logic
          if (sectionId === partnershipSteps.length && hasReachedBottom) {
            setHasCompletedScroll(true);
            setAllowBodyScroll(true);
          } else if (sectionId === 1 && containerRef.current && containerRef.current.scrollTop === 0) {
            setAllowBodyScroll(true);
          } else {
            setHasCompletedScroll(false);
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    
    return () => sectionRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, [isMobile, hasReachedBottom]);

  // Handle wheel events
  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e) => {
      if (allowBodyScroll) return;
      if (!isComponentFullyVisible) return;
      if (!containerRef.current) return;

      const container = containerRef.current;
      const isAtBottom = Math.abs(container.scrollHeight - container.scrollTop - container.clientHeight) < 1;
      const isAtTop = container.scrollTop === 0;

      // Special scrolling cases
      if (e.deltaY > 0 && isAtBottom && isLastSectionVisible) {
        setHasCompletedScroll(true);
        setAllowBodyScroll(true);
        return;
      }

      if (e.deltaY < 0 && isAtTop && activeSection === 1) {
        setAllowBodyScroll(true);
        return;
      }

      // Handle internal scrolling
      e.preventDefault();
      container.scrollTop += e.deltaY;
    };

    const handlePageScroll = () => {
      if (allowBodyScroll) {
        pageScrollY.current = window.scrollY;
      } else {
        window.scrollTo(0, pageScrollY.current);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handlePageScroll);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handlePageScroll);
    };
  }, [activeSection, isLastSectionVisible, isMobile, isComponentFullyVisible, allowBodyScroll]);

  // Handle container scrolling
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const isAtBottom = Math.abs(container.scrollHeight - container.scrollTop - container.clientHeight) < 1;
      const isAtTop = container.scrollTop === 0;
      
      setHasReachedBottom(isAtBottom);
      
      // Scroll control logic
      if (isAtBottom && isLastSectionVisible) {
        setHasCompletedScroll(true);
        setAllowBodyScroll(true);
      } else if (isAtTop && activeSection === 1) {
        setAllowBodyScroll(true);
      } else if (isComponentFullyVisible) {
        setAllowBodyScroll(false);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile, isLastSectionVisible, activeSection, isComponentFullyVisible]);

  // Mobile view component
  if (isMobile) {
    return (
      <div className="px-6 py-12 my-12 max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-3 text-gray-900">Become a Chargeup Partner today</h1>
          <p className="text-lg text-gray-600">In 4 simple steps</p>
        </div>
        <div className="space-y-10">
          {partnershipSteps.map((section) => (
            <div key={section.id} className="flex items-start space-x-4 hover:bg-gray-50 p-4 rounded-lg transition-all duration-300">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-black text-white font-bold shadow-md">
                {section.id}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
                <p className="text-md mt-2 text-gray-600 leading-relaxed">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop view component
  return (
    <div ref={componentRef} className="relative scroll-component h-screen bg-gray-50">
      
      <div className="relative w-full h-screen overflow-hidden">
        <div className="flex w-full h-full">
          {/* Left Side - Scrollable Images */}
          <div 
            ref={containerRef} 
            className="w-1/2 h-full overflow-y-auto scrollbar-hide bg-white"
          >
            {partnershipSteps.map((section, index) => (
              <div
                key={section.id}
                data-id={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="h-screen flex items-center justify-center p-8"
              >
                <div className="relative  overflow-hidden  transition-transform duration-500 transform hover:scale-105">
                <video autoPlay loop muted className="max-w-full h-auto object-cover">
                  <source src={section.animation} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                </div>
              </div>
            ))}
          </div>

          {/* Right Side Content */}
          <div className="w-1/2 min-h-screen px-10 py-24 flex items-center">
          <div className="absolute top-0 p-2 text-center">
            <h1 className="text-4xl font-bold mb-3 text-gray-900">Become a Chargeup Partner today</h1>
            <p className="text-xl text-gray-600">In 4 simple steps</p>
          </div>
            <div className="w-full max-w-xl mx-auto">
              <div className="flex flex-col space-y-12">
                {partnershipSteps.map((section) => (
                  <div
                    key={section.id}
                    className={`transition-all duration-500 transform ${
                      activeSection === section.id 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-40 -translate-x-3"
                    }`}
                  >
                    <div className="flex items-start space-x-5">
                      <div
                        className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border-2 font-bold text-lg shadow-md transition-all duration-300 ${
                          activeSection === section.id 
                            ? "bg-black text-white scale-110" 
                            : "bg-white text-gray-700"
                        }`}
                      >
                        {section.id}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                        <p className="text-lg mt-3 text-gray-600 leading-relaxed">{section.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}