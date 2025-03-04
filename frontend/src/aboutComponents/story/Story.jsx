import visionImage from "../../assets/oem1.png";
import missionImage from "../../assets/oem1.png";
import { useState, useEffect } from 'react';
import { Eye, Target, ChevronRight, ArrowRight, Quote } from 'lucide-react';

// Animation component for fade-in effect
const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
};

const SidebarItem = ({ title, isActive, onClick, icon }) => (
  <div 
    onClick={onClick}
    className={`
      py-4 px-6 rounded-lg mb-4 cursor-pointer transition-all duration-300
      flex items-center gap-3 border group
      ${isActive 
        ? 'bg-white shadow-lg border-l-4 border-accent text-primary scale-[1.02]' 
        : 'border-transparent bg-gray-50 hover:bg-white hover:shadow-md hover:border-gray-200 text-gray-600 hover:text-primary'
      }
    `}
  >
    <div className={`
      p-2 rounded-full transition-all duration-300
      ${isActive 
        ? 'bg-accent/10 text-accent' 
        : 'bg-gray-100 text-gray-500 group-hover:bg-accent/10 group-hover:text-accent'
      }
    `}>
      {icon}
    </div>
    <span className="text-sm font-medium">{title}</span>
    <div className={`
      ml-auto transition-all duration-300
      ${isActive 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0'
      }
    `}>
      <ChevronRight className="h-4 w-4 text-accent" />
    </div>
  </div>
);

const StorySection = ({ title, description, imageSrc, imageAlt }) => (
  <div className="mb-4">
    <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-100 transform transition-all duration-500 hover:shadow-2xl">
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 h-80">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent flex items-end">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-1 bg-accent rounded-full"></div>
              <span className="text-white/80 text-sm uppercase tracking-wider font-medium">Our Company</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-start mb-6">
          <Quote className="h-8 w-8 text-accent/40 flex-shrink-0 mr-3 mt-1" />
          <p className="text-primary/60 text-sm italic font-medium">
            Reimagining mobility for a sustainable future
          </p>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          {description}
        </p>
        
        <div className="mt-8 flex justify-end">
          <button className="flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all duration-300">
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Story = () => {
  const [activeSection, setActiveSection] = useState('vision');

  const sections = {
    vision: {
      title: "Our Vision for the Future",
      description: `
      In veniam et occaecat exercitation aute pariatur incididunt voluptate veniam. Ullamco magna ut est quis enim sunt exercitation sunt ad culpa sunt. Velit irure proident exercitation sint deserunt magna proident ex do veniam. Aute culpa deserunt aliquip veniam minim dolore ullamco cupidatat. Irure qui nostrud culpa elit cillum eiusmod dolore laborum. Mollit culpa irure consectetur non ipsum ut Lorem. Cillum quis id nisi mollit eu exercitation sunt adipisicing.`,
      imageSrc: visionImage,
      imageAlt: "Echargeup Vision"
    },
    
    mission: {
      title: "Our Mission and Purpose",
      description: `We're on a mission to uplift the earnings of last-mile drivers who are at the heart of India's mobility revolution.

As India rapidly switch to electric vehicles, Chargeup is building a one-stop mobility platform for seamless EV ownership and customer experience. Secured by AI powered tech ecosystem, our platform enables unique value proposition to – every new age Manufacturer, Financier, Insurer and others by capitalizing our platform play.`,
      imageSrc: missionImage,
      imageAlt: "Echargeup Mission"
    }
  };

  const sectionIcons = {
    vision: <Eye className="h-5 w-5" />,
    mission: <Target className="h-5 w-5" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Story</h1>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
            
            <div className="text-lg text-gray-600 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
                <div className="relative z-10">
                  <p className="mb-4">
                    We started with a simple question, do you buy petrol when you buy a vehicle? <span className="font-semibold text-primary">Then why do that with electric vehicles?</span>
                  </p>
                  <p>
                    We introduced <span className="text-accent font-medium">Energy-as-a-Service (EaaS)</span> and separated buying energy when you buy an electric vehicle. Through our Fin-E-Tech platform, we finance energy, which is secured by tech. Our batteries are AI-powered which ensures predictive battery maintenance, performance optimization, and a better asset buyback.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
                  <Target className="h-48 w-48 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col sm:flex-row gap-8 mb-12">
          <FadeIn delay={200}>
            <div className="flex sm:flex-col gap-4 sm:w-72">
              {Object.keys(sections).map(key => (
                <SidebarItem 
                  key={key}
                  title={key === 'vision' ? 'Vision' : 'Mission'} 
                  isActive={activeSection === key} 
                  onClick={() => setActiveSection(key)}
                  icon={sectionIcons[key]}
                />
              ))}
            </div>
          </FadeIn>

          <div className="flex-1">
            <FadeIn delay={400}>
              <StorySection {...sections[activeSection]} />
            </FadeIn>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Story;