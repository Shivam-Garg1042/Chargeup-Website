import { useState } from 'react';
import { motion } from 'framer-motion';

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
      transition-all duration-300
      ${isActive ? 'bg-[#2C4A52] text-white' : 'bg-[#E8F0F2] hover:bg-[#D9EBE5]'}
    `}>
      {/* Circle with number */}
      <div className={`
        w-16 h-16 rounded-full flex items-center justify-center
        text-2xl font-bold transition-all duration-300
        ${isActive ? 'bg-white text-[#2C4A52]' : 'bg-[#A5C6CE] text-white'}
      `}>
        {number}
      </div>
      
      {/* Title */}
      <h3 className={`
        text-center font-semibold transition-all duration-300
        ${isActive ? 'text-lg md:text-xl' : 'text-base'}
      `}>
        {title}
      </h3>
      
      {/* Expandable content */}
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
    1: "Laborum elit esse laboris incididunt. Adipisicing ipsum ipsum nulla ullamco officia voluptate anim excepteur. Veniam in laborum fugiat velit est adipisicing pariatur. Culpa labore dolore labore est reprehenderit reprehenderit duis labore aliquip esse. Enim non pariatur reprehenderit laborum tempor anim veniam excepteur laborum Lorem cillum veniam ullamco. Enim cillum laboris ullamco ea elit tempor incididunt labore sunt nisi ea pariatur.",
    2: "In ipsum ex velit dolore dolore eiusmod aliqua cupidatat nostrud. Cupidatat ut qui veniam proident laborum. Fugiat qui proident pariatur enim minim dolor consectetur aute nostrud pariatur. Nulla non mollit laboris in voluptate culpa proident laboris consectetur ea. Consectetur nisi ea irure mollit. Qui sit irure veniam labore. Consectetur proident id et minim fugiat proident culpa Lorem.",
    3: "Velit occaecat esse laborum duis irure culpa adipisicing laborum ipsum tempor duis sunt Lorem. In amet cillum nisi pariatur irure voluptate occaecat fugiat. Nisi id irure reprehenderit tempor magna. Lorem dolore nulla non anim laboris cillum anim tempor pariatur consequat eu sit reprehenderit. Ad exercitation pariatur velit cupidatat laboris sit eu Lorem culpa consequat in sit ad aliquip. Aliquip Lorem aliquip duis anim veniam magna dolor id deserunt cupidatat consequat laborum tempor.",
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
    { number: 1, title: "Deliver" },
    { number: 2, title: "Embrace and Drive " },
    { number: 3, title: " Fun and A Little Weirdness" },
    { number: 4, title: "Be Adventurous, Creative, and Open-Minded" },
    { number: 5, title: "Pursue Growth and Learning" },
    { number: 6, title: "Build Open and Honest Relationships" },
    { number: 7, title: "Build a Positive Team Spirit" },
    { number: 8, title: "Do More With Less" },
    { number: 9, title: "Be Passionate and Determined" },
    { number: 10, title: "Be Humble" }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B2D] text-center mb-12">
          Our Core Values
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((value) => (
            <ValueCard
              key={value.number}
              number={value.number}
              title={value.title}
              isActive={activeValue === value.number}
              onClick={() => setActiveValue(activeValue === value.number ? null : value.number)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commandments;