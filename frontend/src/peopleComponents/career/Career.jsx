import { useState } from 'react';
import { ChevronDown, ChevronRight, Briefcase, MapPin, Award } from 'lucide-react';

const DepartmentItem = ({ title, isActive, onClick, jobRoles,selectedRole }) => (
  <div className="mb-5">
    <div 
      onClick={onClick}
      className={`
        w-full p-5 rounded-lg cursor-pointer transition-all duration-300 
        hover:shadow-md border flex items-center justify-between
        ${isActive 
          ? 'bg-white shadow-md scale-[1.02] border-l-4 border-accent text-primary' 
          : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-200'
        }
      `}
    >
      <span className={`text-sm md:text-base font-medium ${isActive ? 'text-primary' : 'text-gray-600'}`}>
        {title}
      </span>
      {isActive ? 
        <ChevronDown className={`h-5 w-5 text-accent`} /> : 
        <ChevronRight className="h-5 w-5 text-gray-400" />
      }
    </div>
    
    <div className={`
      overflow-hidden transition-all duration-300 pl-4
      ${isActive ? 'max-h-96 mt-3' : 'max-h-0'}
    `}>
      {jobRoles.map((role, index) => (
        <div
          key={index}
          className={`
            p-4 ml-2 border-l-2 cursor-pointer rounded-r-lg mb-3 
            transition-all duration-200 flex items-center
            ${selectedRole === role.id 
              ? 'border-accent bg-accent bg-opacity-10 text-primary' 
              : 'border-gray-200 hover:bg-accent hover:bg-opacity-5'}
          `}
          onClick={() => role.onClick(role.id)}
        >
          <Briefcase className="h-4 w-4 mr-2 text-accent" />
          <span className="text-sm font-medium">{role.title}</span>
        </div>
      ))}
    </div>
  </div>
);

const WelcomeSection = () => (
  <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mt-4 md:mt-0 md:ml-8 animate-fadeIn text-center border border-gray-100">
    <div className="mb-4 bg-primary bg-opacity-5 p-6 rounded-lg">
      <div className="mx-auto w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-4">
        <Briefcase className="h-10 w-10 text-white" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Welcome to Our Career Portal</h2>
      <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4"></div>
    </div>
    <p className="text-gray-600 text-base md:text-lg mb-8">
      Explore opportunities across different departments and find your perfect role with us.
      Select a department to view available positions.
    </p>
    <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
      <div className="bg-accent bg-opacity-10 p-4 rounded-lg flex items-center">
        <Award className="h-5 w-5 mr-2 text-accent" />
        <span className="font-medium text-primary">4 Departments</span>
      </div>
      <div className="bg-secondary bg-opacity-10 p-4 rounded-lg flex items-center">
        <Briefcase className="h-5 w-5 mr-2 text-secondary" />
        <span className="font-medium text-primary">Multiple Positions</span>
      </div>
      <div className="bg-primary bg-opacity-10 p-4 rounded-lg flex items-center">
        <MapPin className="h-5 w-5 mr-2 text-primary" />
        <span className="font-medium text-primary">Various Locations</span>
      </div>
    </div>
  </div>
);

const StorySection = ({ title, location, requirements, responsibilities }) => (
  <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mt-4 md:mt-0 md:ml-8 animate-fadeIn border border-gray-100">
    <div className="flex items-center mb-2">
      <MapPin className="h-5 w-5 mr-2 text-accent" />
      <div className="text-accent font-medium">{location}</div>
    </div>
    <h2 className="text-xl md:text-2xl font-bold text-primary mb-6">{title}</h2>
    
    <div className="mb-8 bg-primary bg-opacity-5 p-5 rounded-lg">
      <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
        <Award className="h-5 w-5 mr-2 text-accent" />
        Requirements
      </h3>
      <ul className="space-y-3">
        {requirements.map((req, index) => (
          <li key={index} className="text-gray-600 text-sm md:text-base flex items-start">
            <div className="h-5 w-5 rounded-full bg-accent bg-opacity-20 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
              <div className="h-2 w-2 rounded-full bg-accent"></div>
            </div>
            {req}
          </li>
        ))}
      </ul>
    </div>
    
    <div className="mb-8 bg-secondary bg-opacity-5 p-5 rounded-lg">
      <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
        <Briefcase className="h-5 w-5 mr-2 text-secondary" />
        Roles and responsibilities
      </h3>
      <ul className="space-y-3">
        {responsibilities.map((resp, index) => (
          <li key={index} className="text-gray-600 text-sm md:text-base flex items-start">
            <div className="h-5 w-5 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
              <div className="h-2 w-2 rounded-full bg-secondary"></div>
            </div>
            {resp}
          </li>
        ))}
      </ul>
    </div>
    
    <button className="w-full md:w-auto bg-accent text-white px-8 py-3.5 rounded-lg font-medium hover:bg-accent hover:bg-opacity-90 transition-colors shadow-md flex items-center justify-center">
      <span>Apply Now</span>
      <ChevronRight className="h-5 w-5 ml-2" />
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
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:py-16 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">Be a Charge(u)prenuer</h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Departments Container */}
          <div className="md:w-72">
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
                selectedRole={selectedRole}
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