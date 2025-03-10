import React, { useState } from 'react';

const NewsCard = ({ color, image, title, description, link }) => {
  const [hovered, setHovered] = useState(false);
  
  // Define a sky-ish color palette
  const skyBlueColor = "#e8f0f2"; // Light sky blue color
  
  return (
    <div 
      className="relative w-80 rounded-2xl transition-all duration-500 flex-shrink-0"
      style={{ 
        height: hovered ? '400px' : '430px',
        marginTop: hovered ? '100px' : '0',
        marginBottom: hovered ? '0' : '100px'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Absolutely positioned wrapper that contains both image and content */}
      <div className="absolute inset-0 flex flex-col items-center">
        {/* Image container - positioned relative to the wrapper */}
        <div 
          className="absolute w-[270px] h-[200px] bg-gray-800 rounded-xl overflow-hidden transition-all duration-500"
          style={{
            top: hovered ? '-100px' : '20px',
            transform: hovered ? 'scale(0.75)' : 'scale(1)',
            boxShadow: hovered ? '0 15px 45px rgba(0,0,0,0.2)' : 'none', // No shadow when not hovered
            zIndex: 10
          }}
        >
          <img 
            src={image} 
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-fit"
          />
        </div>
        
        {/* Card body - positioned relative to the wrapper */}
        <div 
          className="absolute w-full rounded-2xl transition-all duration-500 flex flex-col items-center"
          style={{
            top: '0',
            bottom: '0',
            zIndex: 5,
            backgroundColor: hovered ? 'white' : skyBlueColor, // Sky-ish color when not hovered
            boxShadow: '0 10px 30px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)',
            border: `1px solid ${hovered ? color : 'transparent'}`,
          }}
        >
          {/* Content container */}
          <div 
            className="absolute w-full px-8 text-center transition-all duration-500 overflow-hidden"
            style={{
              top: hovered ? '130px' : '240px',
              height: hovered ? '250px' : '170px'
            }}
          >
            <h2 
              className="text-2xl font-bold"
              style={{ color: color }}
            >{title}</h2>
            <p className={`text-gray-700 ${!hovered ? 'opacity-100' : 'opacity-100'} transition-opacity duration-300`}>
              {description}
            </p>
            <a 
              onClick={() => link && window.open(link, '_blank')}
              className={`relative inline-block px-6 py-3 mt-4 text-white font-medium rounded-lg cursor-pointer ${!hovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
              style={{ 
                backgroundColor: color,
                top: '15px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResearchSection = ({ researchData }) => {
  return (
    <div className="w-3/4 max-w-6xl mx-auto py-5 overflow-x-auto scrollbar-none bg-transparent">
      <div className="flex gap-6 pb-5 overflow-x-auto scrollbar-none">
        {researchData.map((item, index) => (
          <NewsCard
            key={index}
            color={item.color || '#03a9f4'}
            image={item.image}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCard;