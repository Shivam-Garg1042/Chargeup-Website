import { useState } from 'react';
import { Linkedin } from "lucide-react";
import employee1 from "../../assets/employee1.webp";
import employee2 from "../../assets/employee2.webp";
import employee3 from "../../assets/employee3.png";
import employee4 from "../../assets/employee4.webp";
import employee5 from "../../assets/employee5.jpg";
import employee6 from "../../assets/employee6.webp";
import employee7 from "../../assets/employee7.webp";

// Team member data - updated to match your desired format
const teamData = [
  {
    name: "Varun Goenka",
    role: "CEO",
    image: employee1,
    industryExperience: "Extensive experience in power trading and distributed power generation",
    atChargeup: "Oversees the business strategy, execution and vision for the organization",
    linkedin: "https://www.linkedin.com/in/varun-goenka/",
    companyTag: "CEO"
  },
  {
    name: "Satish Mittal",
    role: "CDO",
    image: employee2,
    industryExperience: "Deep expertise building IoT solutions & IT networks",
    atChargeup: "Spearheads tech, data and partnership initiatives",
    linkedin: "https://www.linkedin.com/in/satish-mittal/",
    companyTag: "CDO"
  },
  {
    name: "Arun Madan",
    role: "CFO",
    image: employee3,
    industryExperience: "Deep expertise in finance and underwriting",
    atChargeup: "Responsible for finance, product, and risk management.",
    linkedin: "https://www.linkedin.com/in/arun-madan/",
    companyTag: "CFO"
  },
  {
    name: "Swati",
    role: "CHRO",
    image: employee4,
    industryExperience: "People-focused HR leader with expertise in talent acquisition",
    atChargeup: "Leading employee development and organizational culture",
    linkedin: "https://linkedin.com/in/swatichro",
    companyTag: "CHRO"
  },
  {
    name: "Anmol Chouksey",
    role: "Chief of Staff",
    image: employee5,
    industryExperience: "Cross-functional leader with experience in strategic planning",
    atChargeup: "Ensuring strategic alignment and operational excellence across departments",
    linkedin: "https://www.linkedin.com/in/anmol-chouksey/",
    companyTag: "COS"
  },
  {
    name: "Chetan Guglani",
    role: "Lead Product",
    image: employee7,
    industryExperience: "Innovative product leader with background in UX design",
    atChargeup: "Developing user-centric solutions and driving product roadmap",
    linkedin: "https://www.linkedin.com/in/chetan-guglani/",
    companyTag: "PRODUCT"
  },
  {
    name: "Sunil Singh",
    role: "Growth Head",
    image: employee6,
    industryExperience: "Growth strategist with proven track record in market expansion",
    atChargeup: "Driving revenue growth and market presence",
    linkedin: "https://linkedin.com/in/sunilsingh",
    companyTag: "GROWTH"
  }
];

// Team Card Component
const TeamCard = ({ name, role, image, industryExperience, atChargeup, linkedin, companyTag }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] w-full cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)} 
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`w-full h-full absolute transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative bg-white rounded-lg h-full shadow-md overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            
            {/* Text overlay positioned at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <div className="flex flex-col items-center">
                <div className="bg-secondary/90 backdrop-blur-sm px-4 py-2 rounded-t-lg w-full">
                  <h3 className="text-xl font-bold text-center">{name}</h3>
                </div>
                <div className="bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-b-lg w-full">
                  <p className="text-center font-medium">{role}</p>
                  {/* <div className="mt-1 flex items-center justify-center">
                    <span className="bg-accent/80 text-white px-2 py-1 text-xs font-bold rounded-full">{companyTag}</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-6 h-full shadow-md text-white">
            <h3 className="text-2xl font-bold mb-2 text-accent">{name}</h3>
            <p className="text-white/90 font-medium mb-6">{role}</p>
            
            <div className="mb-4">
              <h4 className="font-bold text-white">Industry Experience</h4>
              <p className="text-white/80">{industryExperience}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-bold text-white">At Chargeup</h4>
              <p className="text-white/80">{atChargeup}</p>
            </div>
            
            <div className="mt-auto pt-4 flex justify-between items-center border-t border-white/20">
              <div className="flex items-center gap-2">
                <span className="bg-accent/30 text-white px-2 py-1 text-xs font-medium rounded">{companyTag}</span>
              </div>
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-accent transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Team Grid Component with 3 cards in first row and 4 in second row
const TeamGrid = () => {
  // Split the data into two rows: first 3 cards and remaining 4 cards
  const firstRowData = teamData.slice(0, 3);
  const secondRowData = teamData.slice(3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* First row - 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-20 mb-6">
        {firstRowData.map((member, index) => (
          <div
            key={index}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <TeamCard {...member} />
          </div>
        ))}
      </div>

      {/* Second row - 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {secondRowData.map((member, index) => (
          <div
            key={index}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <TeamCard {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;