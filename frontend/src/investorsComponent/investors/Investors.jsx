import { useState } from 'react';
import investor1 from "../../assets/investor1.png";
import investor2 from "../../assets/investor2.png";
import investor3 from "../../assets/investor3.jpg";
const InvestorsSection = () => {
  const investors = [
    {
      id: 1,
      name: "Capital-A",
      logo: investor1,
      description: "Early-stage venture capital firm focused on technology startups",
      yearJoined: "2022"
    },
    {
      id: 2,
      name: "Anicut",
      logo: investor2,
      description: "Leading investment firm specializing in growth capital",
      yearJoined: "2021"
    },
    {
      id: 3,
      name: "MapmyIndia",
      logo: investor3,
      description: "India's leading digital mapping company",
      yearJoined: "2023"
    }
  ];

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#003048] relative inline-block">
          Our Investors
          <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-emerald-500 rounded-full"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
        {investors.map((investor) => (
          <div
            key={investor.id}
            className="w-full max-w-sm"
            onMouseEnter={() => setHoveredId(investor.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative group">
              <div className={`
                bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300
                ${hoveredId === investor.id ? 'scale-105' : 'scale-100'}
                hover:shadow-xl
              `}>
                <div className="h-32 flex items-center justify-center mb-4 relative">
                  <div className={`
                    absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/10
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  `}></div>
                  <img
                    src={investor.logo}
                    alt={`${investor.name} logo`}
                    className="max-h-full max-w-full object-contain transform transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>
                
                <div className={`
                  text-center opacity-0 max-h-0 overflow-hidden transition-all duration-300
                  ${hoveredId === investor.id ? 'opacity-100 max-h-40' : ''}
                `}>
                  <p className="text-gray-600 text-sm mt-4">{investor.description}</p>
                  <p className="text-emerald-600 text-sm font-medium mt-2">
                    Partner since {investor.yearJoined}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Backed by leading investors who share our vision of revolutionizing sustainable mobility solutions across India.
        </p>
      </div>
    </section>
  );
};

export default InvestorsSection;