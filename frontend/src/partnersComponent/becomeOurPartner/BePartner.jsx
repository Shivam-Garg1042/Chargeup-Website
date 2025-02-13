import { useState, useEffect, useRef } from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/5.png";
import image3 from "../../assets/6.png";
import image4 from "../../assets/4.png";

const sections = [
  {
    id: 1,
    text: "Select your area",
    description: "Nostrud sit amet ipsum qui nisi sunt dolor duis nostrud eu. Et dolor id est duis est laboris sint sit qui nisi dolor dolor. Reprehenderit laborum voluptate duis veniam ipsum exercitation dolor laboris non consectetur in deserunt cillum.",
    image: image1
  },
  {
    id: 2,
    text: "Decide your investment",
    description: "Anim duis velit sint cupidatat Lorem sint commodo aliqua officia cillum aliqua.",
    image: image2
  },
  {
    id: 3,
    text: "Onboard with Chargeup",
    description: "Aliqua reprehenderit voluptate mollit sint excepteur do eu. Irure sit tempor incididunt tempor nulla commodo nulla non est. Occaecat aliqua id proident dolore ipsum aliquip. Sit voluptate ea proident ut duis. Ut proident adipisicing quis aliqua commodo pariatur aute tempor deserunt.",
    image: image3
  },
  {
    id: 4,
    text: "Start earning",
    description: "Adipisicing nostrud ex consectetur incididunt dolore. Fugiat ut culpa ipsum tempor proident consectetur. Magna eu voluptate adipisicing id ex id nisi tempor minim pariatur. Eiusmod magna Lorem culpa magna irure nisi id cupidatat.",
    image: image4
  }
];

export default function ScrollComponent() {
  const [activeSection, setActiveSection] = useState(1);
  const sectionRefs = useRef([]);
  const containerRef = useRef(null);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const [isLastSectionVisible, setIsLastSectionVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip intersection observer on mobile

    const observerOptions = { root: null, threshold: 0.5 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = parseInt(entry.target.dataset.id);
          setActiveSection(sectionId);
          setIsLastSectionVisible(sectionId === sections.length);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    
    return () => sectionRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return; // Skip wheel handling on mobile

    const handleWheel = (e) => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const isAtBottom = Math.abs(container.scrollHeight - container.scrollTop - container.clientHeight) < 1;
      const isAtTop = container.scrollTop === 0;

      if (e.target.closest('.action')) {
        if (e.deltaY > 0) {
          if (!isLastSectionVisible || !isAtBottom) {
            e.preventDefault();
            container.scrollTop += e.deltaY;
          }
        } else if (e.deltaY < 0) {
          if (activeSection > 1 || !isAtTop) {
            e.preventDefault();
            container.scrollTop += e.deltaY;
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeSection, isLastSectionVisible, isMobile]);

  useEffect(() => {
    if (isMobile) return; // Skip scroll handling on mobile

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const isAtBottom = Math.abs(container.scrollHeight - container.scrollTop - container.clientHeight) < 1;
      setHasReachedBottom(isAtBottom);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  // Mobile view component
  if (isMobile) {
    return (
      <div className="px-4 py-8 my-10">
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.id} className="mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border-2 bg-black text-white font-bold">
                  {section.id}
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold">{section.text}</h2>
                  <p className="text-sm mt-2 justify">{section.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop view component
  return (
    <div className="relative">
      <div className="action relative w-full h-screen overflow-hidden">
        <div className="flex w-full h-full">
          {/* Left Side - Scrollable Images */}
          <div 
            ref={containerRef} 
            className="w-1/2 h-full overflow-y-auto scrollbar-hide"
          >
            {sections.map((section, index) => (
              <div
                key={section.id}
                data-id={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="h-screen flex items-center justify-center"
              >
                <img src={section.image} alt={section.text} className="max-w-full h-auto" />
              </div>
            ))}
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-3/4 lg:w-1/2 min-h-screen px-4 md:px-8 py-8 flex items-center">
      <div className="w-full">
        
        <div className="flex flex-col space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`transition-opacity duration-500 ${
                activeSection === section.id ? "opacity-100" : "opacity-40"
              }`}
            >
              <div className="flex items-start space-x-3 md:space-x-4">
                
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center rounded-full border-2 font-bold text-base md:text-lg ${
                    activeSection === section.id ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  {section.id}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{section.text}</h2>
                  <p className="text-xs md:text-sm mt-2 text-justify">{section.description}</p>
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