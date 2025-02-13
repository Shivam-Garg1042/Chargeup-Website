
import visionImage from "../../assets/1.png";
import missionImage from "../../assets/4.png";
import  { useState } from 'react';

const SidebarItem = ({ title, isActive, onClick }) => (
  <div 
    onClick={onClick}
    className={`py-3 px-6 rounded-lg mb-4 cursor-pointer transition-all duration-300 ${
      isActive ? 'bg-white shadow-md' : 'text-gray text-500 hover:text-gray-700'
    }`}
  >
    <span className="text-sm font-medium">{title}</span>
  </div>
);

const StorySection = ({ title, description, imageSrc, imageAlt }) => (
  <div className="mb-16">
    
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl h-96 mx-auto">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="max-w-4xl mx-auto text-center mt-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
    </div>
    <div className="max-w-4xl mx-auto text-center mb-8">
      <p className="text-gray-600 text-lg">
        {description}
      </p>
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
    // pission: {
    //   title: "Our Vision for the Future",
    //   description: `
    //   In veniam et occaecat exercitation aute pariatur incididunt voluptate veniam. Ullamco magna ut est quis enim sunt exercitation sunt ad culpa sunt. Velit irure proident exercitation sint deserunt magna proident ex do veniam. Aute culpa deserunt aliquip veniam minim dolore ullamco cupidatat. Irure qui nostrud culpa elit cillum eiusmod dolore laborum. Mollit culpa irure consectetur non ipsum ut Lorem. Cillum quis id nisi mollit eu exercitation sunt adipisicing.`,
    //   imageSrc: visionImage,
    //   imageAlt: "Echargeup Vision"
    // },
    mission: {
      title: "Our Mission and Purpose",
      description: `We’re on a mission to uplift the earnings of last-mile drivers who are at the heart of India’s mobility revolution.

As India rapidly switch to electric vehicles, Chargeup is building a one-stop mobility platform for seamless EV ownership and customer experience. Secured by AI powered tech ecosystem, our platform enables unique value proposition to – every new age Manufacturer, Financier, Insurer and others by capitalizing our platform play.`,
      imageSrc: missionImage,
      imageAlt: "Echargeup Mission"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-1 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-lg text-gray-600 max-w-6xl mx-auto">
                We started with a simple question, do you buy petrol when you buy a vehicle? Then why do that with electric vehicles?
      We introduced Energy-as-a-Service (EaaS) and separated buying energy when you buy an electric vehicle. Through our Fin-E-Tech platform, we finance energy, which is secured by tech. Our batteries are AI-powered which ensures predictive battery maintenance, performance optimization, and a better asset buyback.
      We are the largest data curator in the EV industry leveraging data to benefit drivers with better vehicle life and higher earnings, OEMs with insights for future battery design, and NBFCs with ideal customer profiles, thereby offering a holistic solution to the entire ecosystem. Thus leveraging data
      Till date Charegup has impacted 4500 Drivers, increasing their earnings by 52%.
      Why Chargeup ?
      

          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 mb-12">
          <div className="flex sm:flex-col gap-4 sm:w-32">
            <SidebarItem 
              title="Vision" 
              isActive={activeSection === 'vision'} 
              onClick={() => setActiveSection('vision')}
            />
            <SidebarItem 
              title="Mission" 
              isActive={activeSection === 'mission'} 
              onClick={() => setActiveSection('mission')}
            />
            {/* <SidebarItem 
              title="Pission" 
              isActive={activeSection === 'pission'} 
              onClick={() => setActiveSection('pission')}
            /> */}
          </div>

          <div className="flex-1">
            <StorySection {...sections[activeSection]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;