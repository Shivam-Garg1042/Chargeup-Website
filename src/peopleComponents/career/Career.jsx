import { useState } from 'react';

const SidebarItem = ({ title, isActive, onClick }) => (
  <div 
    onClick={onClick}
    className={`
      w-full p-4 rounded-lg cursor-pointer transition-all duration-300 
      hover:shadow-md border border-transparent
      ${isActive 
        ? 'bg-white shadow-md scale-[1.02] border-l-4 border-green-600' 
        : 'bg-gray-50 hover:bg-white hover:border-gray-200'
      }
    `}
  >
    <span className={`text-sm md:text-base font-medium ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
      {title}
    </span>
  </div>
);

const StorySection = ({ title, location, requirements, responsibilities }) => (
  <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg mt-4 md:mt-0 md:ml-8">
    <div className="text-green-600 font-medium mb-2">{location}</div>
    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{title}</h2>
    
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
      <ul className="list-disc pl-5 space-y-2">
        {requirements.map((req, index) => (
          <li key={index} className="text-gray-600 text-sm md:text-base">{req}</li>
        ))}
      </ul>
    </div>
    
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Roles and responsibilities</h3>
      <ul className="list-disc pl-5 space-y-2">
        {responsibilities.map((resp, index) => (
          <li key={index} className="text-gray-600 text-sm md:text-base">{resp}</li>
        ))}
      </ul>
    </div>
    <a href="https://echargeup.com/" target="_blank" >
    <button className="w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
    Apply Now!
    </button>
    </a>
  </div>
);

const Career = () => {
  const [activeSection, setActiveSection] = useState('vision');

  const sections = {
    vision: {
      title: "Dealer Manager",
      location: "Delhi NCR",
      requirements: [
        "5 to 7 years of strong network expansion/dealer management experience from EV, Mobility",
        "Proven dealer management experience."
      ],
      responsibilities: [
        "Establish & maintain relationships with dealers",
        "Provide Guidance training & support to dealers on the organization's products & services and track dealer metrics and performance",
        "Maintain working knowledge of products and services",
        "ensure that dealers comply with company policies and standards"
      ]
    },
    mission: {
      title: "Service Engineer Interns (Electrical)",
      location: "Mumbai",
      requirements: [
        "8+ years of experience in sales management",
        "Strong track record of achieving sales targets",
        "Experience in EV industry preferred"
      ],
      responsibilities: [
        "Lead and motivate sales team to achieve targets",
        "Develop and implement sales strategies",
        "Build and maintain relationships with key clients",
        "Monitor market trends and competitor activities"
      ]
    },
    sales: {
      title: "Sales Intern (Field Sales)",
      location: "Mumbai",
      requirements: [
        "Freshers, 0-1 year of exp",
        "Interpersonal skills",
        "Target-oriented approach"
      ],
      responsibilities: [
        "Identifying new drivers and onboard them",
        "Market mapping and conducting offline market survey",
        "Developing & maintaining healthy relationships with drivers"
      ]
    },
    service: {
      title: "Service Intern (Field Sales)",
      location: "Mumbai",
      requirements: [
        "Freshers, 0-1 year of exp",
        "Interpersonal skills",
        "Target-oriented approach"
      ],
      responsibilities: [
        "Identifying new drivers and onboard them",
        "Market mapping and conducting offline market survey",
        "Developing & maintaining healthy relationships with drivers"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 md:py-12 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Join our Team</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-6xl mx-auto">
            Select the role according to the requirements
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 md:w-64">
            <SidebarItem 
              title="Dealer Manager" 
              isActive={activeSection === 'vision'} 
              onClick={() => setActiveSection('vision')}
            />
            <SidebarItem 
              title="Service Engineer Interns (Electrical)" 
              isActive={activeSection === 'mission'} 
              onClick={() => setActiveSection('mission')}
            />
            <SidebarItem 
              title="Sales Intern (Field Sales)" 
              isActive={activeSection === 'sales'} 
              onClick={() => setActiveSection('sales')}
            />
            <SidebarItem 
              title="Service Intern (Field Sales)" 
              isActive={activeSection === 'service'} 
              onClick={() => setActiveSection('service')}
            />
          </div>

          {/* Job Details Section */}
          <div className="flex-1">
            <StorySection {...sections[activeSection]} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Career;