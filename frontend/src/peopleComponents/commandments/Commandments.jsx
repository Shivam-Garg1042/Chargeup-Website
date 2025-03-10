import { useState } from 'react';

const ValueCard = ({ number, title, isActive, onClick }) => (
  <div 
    onClick={onClick}
    className={`
      relative cursor-pointer group transition-all duration-300
      rounded-xl overflow-hidden
      ${isActive ? 'md:col-span-2 row-span-2' : 'col-span-1'}
    `}
  >
    <div className={`
      h-full w-full p-6 md:p-8
      flex flex-col items-center justify-center gap-4
      transition-all duration-300  border-4 border-emerald-800
      ${isActive ? 'bg-[#2C4A52] text-white' : 'bg-[#E8F0F2] hover:bg-[#D9EBE5]'}
    `}>
      <div className={`
        w-16 h-16 rounded-full flex items-center justify-center
        text-2xl font-bold transition-all duration-300
        ${isActive ? 'bg-white text-[#2C4A52]' : 'bg-[#003444] text-white'}
      `}>
        {number}
      </div>
      
      <h3 className={`
        text-center font-semibold transition-all duration-300
        ${isActive ? 'text-lg md:text-xl' : 'text-base'}
      `}>
        {title}
      </h3>
      
      <div className={`
        overflow-hidden transition-all duration-300
        ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <p className="text-sm text-center">
          {getDescription(number)}
        </p>
      </div>
    </div>
  </div>
);

const getDescription = (number) => {
  const descriptions = {
    1: "Laborum elit esse laboris incididunt. Adipisicing ipsum ipsum nulla ullamco officia voluptate anim excepteur.",
    2: "In ipsum ex velit dolore dolore eiusmod aliqua cupidatat nostrud. Cupidatat ut qui veniam proident laborum.",
    3: "Velit occaecat esse laborum duis irure culpa adipisicing laborum ipsum tempor duis sunt Lorem.",
    4: "Embracing innovation and thinking outside the box to find unique solutions.",
    5: "Continuously learning and developing to stay ahead in our field.",
    6: "Fostering transparency and authentic connections in all our relationships.",
    7: "Creating an environment where every team member feels valued and supported.",
    8: "Achieving more with less through smart, efficient solutions.",
    9: "Approaching our work with enthusiasm and unwavering dedication.",
    10: "Maintaining modesty while striving for excellence in all endeavors."
  };
  return descriptions[number] || "";
};

const Commandments = () => {
  const [activeValue, setActiveValue] = useState(null);

  const values = [
    { number: 1, title: "Drivers are the centre of every decision we make" },
    { number: 2, title: "Ask don’t Assume" },
    { number: 3, title: "Top line is vanity, bottom line is sanity, Cash is reality" },
    { number: 4, title: "We believe in T1 & L1, not either" },
    { number: 5, title: "Let your love be greater than your fear, driving your Returns on Risk" },
    { number: 6, title: "We just don’t believe in miracles, but make it happen" },
    { number: 7, title: "Working long, hard and smart, you cant choose any two" },
    { number: 8, title: "Your job isn’t done, until the job is done" },
    { number: 9, title: "We are into the business of Growth, Fun & Care" },
    { number: 10, title: "Play for India and not for any individual" }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003444] text-center mb-12">
          Chargeup Commandments
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative">
          {/* First 8 items */}
          {values.slice(0, 8).map((value) => (
            <ValueCard
              key={value.number}
              number={value.number}
              title={value.title}
              isActive={activeValue === value.number}
              onClick={() => setActiveValue(activeValue === value.number ? null : value.number)}
            />
          ))}
          
          {/* Centered container for items 9 and 10 */}
          <div className="xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="xl:col-start-2 xl:col-span-1">
              <ValueCard
                number={values[8].number}
                title={values[8].title}
                isActive={activeValue === values[8].number}
                onClick={() => setActiveValue(activeValue === values[8].number ? null : values[8].number)}
              />
            </div>
            <div className="xl:col-start-3 xl:col-span-1">
              <ValueCard
                number={values[9].number}
                title={values[9].title}
                isActive={activeValue === values[9].number}
                onClick={() => setActiveValue(activeValue === values[9].number ? null : values[9].number)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commandments;


 








