import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
// import careerImage from '../../assets/1.png';

const DepartmentItem = ({ title, isActive, onClick, jobRoles }) => (
  <div className="mb-4">
    <div 
      onClick={onClick}
      className={`
        w-full p-5 rounded-lg cursor-pointer transition-all duration-300 
        hover:shadow-md border border-transparent flex items-center justify-between
        ${isActive 
          ? 'bg-white shadow-md scale-[1.02] border-l-4 border-green-600' 
          : 'bg-gray-50 hover:bg-white hover:border-gray-200'
        }
      `}
    >
      <span className={`text-sm md:text-base font-medium ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
        {title}
      </span>
      {isActive ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
    </div>
    
    <div className={`
      overflow-hidden transition-all duration-300 pl-4
      ${isActive ? 'max-h-96 mt-2' : 'max-h-0'}
    `}>
      {jobRoles.map((role, index) => (
        <div
          key={index}
          className="p-3 ml-2 border-l-2 border-green-200 cursor-pointer hover:bg-green-50 rounded-r-lg mb-2 transition-all duration-200"
          onClick={() => role.onClick(role.id)}
        >
          <span className="text-sm text-gray-600">{role.title}</span>
        </div>
      ))}
    </div>
  </div>
);

const WelcomeSection = () => (
  <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg mt-4 md:mt-0 md:ml-8 animate-fadeIn text-center">
    <div className="mb-8">
      <img 
        // src={}
        alt="Welcome to Careers" 
        className="mx-auto w-full h-36 rounded-lg shadow-md"
      />
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Welcome to Our Career Portal</h2>
    <p className="text-gray-600 text-base md:text-lg mb-6">
      Explore opportunities across different departments and find your perfect role with us.
      Select a department to view available positions.
    </p>
    <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
      <div className="bg-green-50 p-3 rounded-lg">
        <span className="font-medium text-green-600">4 Departments</span>
      </div>
      <div className="bg-green-50 p-3 rounded-lg">
        <span className="font-medium text-green-600">Multiple Positions</span>
      </div>
      <div className="bg-green-50 p-3 rounded-lg">
        <span className="font-medium text-green-600">Various Locations</span>
      </div>
    </div>
  </div>
);

const StorySection = ({ title, location, requirements, responsibilities }) => (
  <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg mt-4 md:mt-0 md:ml-8 animate-fadeIn">
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
    
    <button className="w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
      Apply Now
    </button>
  </div>
);

const Career = () => {
  const [activeDepartment, setActiveDepartment] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const departments = {
    operations: {
      title: "Operations & Sales",
      roles: [
        {
          id: 'dealer_manager',
          title: "Dealer Manager",
          location: "Delhi NCR",
          requirements: [
            "5 to 7 years of strong network expansion/dealer management experience from EV, Mobility",
            "Proven dealer management experience."
          ],
          responsibilities: [
            "Establish & maintain relationships with dealers",
            "Provide Guidance training & support to dealers",
            "Maintain working knowledge of products and services",
            "Ensure dealer compliance with company policies"
          ]
        },
        {
          id: 'sales_intern',
          title: "Sales Intern",
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
      ]
    },
    tech: {
      title: "Tech",
      roles: [
        {
          id: 'service_engineer',
          title: "Service Engineer Intern",
          location: "Mumbai",
          requirements: [
            "B.Tech in Electrical Engineering",
            "Understanding of EV systems",
            "Basic programming knowledge"
          ],
          responsibilities: [
            "Assist in EV system maintenance",
            "Troubleshoot technical issues",
            "Document technical processes"
          ]
        }
      ]
    },
    finance: {
      title: "Finance",
      roles: [
        {
          id: 'finance_analyst',
          title: "Financial Analyst",
          location: "Bangalore",
          requirements: [
            "CA/MBA Finance",
            "2+ years experience",
            "Strong analytical skills"
          ],
          responsibilities: [
            "Financial planning and analysis",
            "Budget management",
            "Investment analysis"
          ]
        }
      ]
    },
    marketing: {
      title: "Marketing",
      roles: [
        {
          id: 'marketing_specialist',
          title: "Marketing Specialist",
          location: "Remote",
          requirements: [
            "3+ years in digital marketing",
            "Experience with social media campaigns",
            "Content creation skills"
          ],
          responsibilities: [
            "Develop marketing strategies",
            "Manage social media presence",
            "Create content for various platforms"
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 md:py-12 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Join our Team</h1>
          {/* <p className="text-base md:text-lg text-gray-600 max-w-6xl mx-auto">
            Select a department to explore open positions
          </p> */}
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Departments Container */}
          <div className="md:w-64">
            {Object.entries(departments).map(([key, dept]) => (
              <DepartmentItem 
                key={key}
                title={dept.title}
                isActive={activeDepartment === key}
                onClick={() => setActiveDepartment(activeDepartment === key ? null : key)}
                jobRoles={dept.roles.map(role => ({
                  ...role,
                  onClick: (roleId) => setSelectedRole(roleId)
                }))}
              />
            ))}
          </div>

          {/* Job Details Section */}
          <div className="flex-1">
            {selectedRole ? (
              <StorySection 
                {...Object.values(departments)
                  .flatMap(dept => dept.roles)
                  .find(role => role.id === selectedRole)
                }
              />
            ) : (
              <WelcomeSection />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;