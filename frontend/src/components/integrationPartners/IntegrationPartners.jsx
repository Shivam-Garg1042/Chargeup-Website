import Marquee from "react-fast-marquee";
import { Card } from '../../components/ui/card';
import insurer1 from '../../assets/insurer1.png';
import insurer2 from '../../assets/insurer2.png';
import nbfc1 from "../../assets/nbfc1.png";
import nbfc2 from "../../assets/nbfc2.png";
import nbfc3 from "../../assets/nbfc3.png";
import nbfc4 from "../../assets/nbfc4.png";
import nbfc5 from "../../assets/nbfc5.png";
import recycler1 from "../../assets/recycler1.png";
import recycler2 from "../../assets/recycler2.png";
import oem1 from "../../assets/oem1.png";
import oem2 from "../../assets/oem2.png";
import oem3 from "../../assets/oem3.png";
import oem4 from "../../assets/oem4.jpg";
import techpartner1 from "../../assets/techpartner1.png";
import { useEffect } from "react";
import AOS from "aos";
import { FlipWordsDemo } from "./flip-heading";

const IntegrationPartners = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, [])
  // Colors for each row
  const rowColors = {
    1: "#d3d3d3", // Green for NBFCs
    2: "#0d9a45", // Light blue for OEMs
    3: "#113e55"  // Dark blue for Recyclers, Insurers, Tech partners
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-full mx-auto">
        <FlipWordsDemo/>
        <div className="space-y-8">
          {integrationData.map((row, index) => (
            <div key={row.id} className="relative">
              {/* Enhanced gradient overlays with more blur */}
              <div className="absolute inset-y-0 left-0 w-0 sm:w-40 bg-gradient-to-r from-blue-50 via-blue-50/90 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-0 sm:w-40 bg-gradient-to-l from-blue-50 via-blue-50/90 to-transparent z-10" />
              
             
              
              <div 
                className="mb-2 py-1 md:hidden text-center"
                style={{ backgroundColor: rowColors[row.id] }}
              >
                <span className="text-white font-medium">{row.sectionName}</span>
              </div>
              
              <Marquee
                direction={index % 2 === 0 ? "left" : "right"}
                gradient={false}
                speed={25 + (index * 5)}
                pauseOnHover={true}
              >
                <div className="flex py-2">
                  {[...row.items, ...row.items].map((integration, idx) => (
                    <div key={`${integration.id}-${idx}`} className="mx-3">
                      <IntegrationCard {...integration} rowColor={rowColors[row.id]} />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IntegrationCard = ({ icon, name, category, rowColor }) => {
  return (
    <Card className="bg-white p-4 hover:scale-105 hover:bg-blue-50/30 shadow-lg hover:shadow-xl transition-all duration-300 w-[250px]">
      <div className="flex items-center gap-4">
        {/* Increased logo size from w-12 h-12 to w-16 h-16 */}
        <div className="relative w-16 h-16 flex-shrink-0">
          {/* Changed background color to match row color with opacity */}
          <div 
            className="absolute inset-0 rounded-full opacity-20" 
            style={{ backgroundColor: rowColor }}
          />
          <img 
            src={icon} 
            alt={name}
            className="w-full h-full object-contain p-2"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">
            {name}
          </h3>
          <p className="text-sm text-gray-600 truncate">
            {category}
          </p>
        </div>
      </div>
      
    </Card>
  );
};

const integrationData = [
  {
    id: 1,
    
    items: [
      { id: 'Ascend', name: "Ascend", category: "NBFC", icon: nbfc1 },
      { id: 'PDL', name: "PDL", category: "NBFC", icon: nbfc2 },
      { id: 'Credit Fair', name: "Credit Fair", category: "NBFC", icon: nbfc3 },
      { id: 'Shivakari Finance', name: "Shivakari Finance ", category: "NBFC", icon: nbfc4 },
      { id: 'MegaCorp', name: "MegaCorp", category: "NBFC", icon: nbfc5 },
    ]
  },
  {
    id: 2,
   
    items: [
      { id: 'Greenfuel', name: "Greenfuel", category: "Battery OEM", icon: oem3 },
      { id: 'Piaggio', name: "Piaggio", category: "Vehicle OEM", icon: oem1 },
      { id: 'Inverted', name: "Eastman", category: "Battery OEM", icon: oem2 },
      { id: 'Eastman', name: "Inverted", category: "Battery OEM", icon: oem4 },
    ]
  },
  {
    id: 3,
    
    items: [
      { id: 'Nunam', name: "Nunam", category: "Recycler", icon: recycler1 },
      { id: 'SPA', name: "SPA", category: "Insurer", icon: insurer2 },
      { id: 'Attero', name: "Attero", category: "Recycler", icon: recycler2 },
      { id: 'Marsh', name: "Marsh", category: "Insurer", icon: insurer2 },
      { id: 'Microsoft', name: "Microsoft Founder's HUB", category: "Tech partners", icon: techpartner1 },
      { id: 'Prudent', name: "Prudent", category: "Insurer", icon: insurer1 },
    ]
  }
];

export default IntegrationPartners;