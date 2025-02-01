
import  { useState } from 'react';

const BenefitCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group w-64 h-48" // Added fixed height
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Regular Card */}
      <div className={`flex flex-col items-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-24 h-24 bg-[#1e7295] rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#003444]">{title}</h3>
      </div>
      
      {/* Hover Card */}
      <div 
        className={`absolute top-0 left-0 w-full h-48 bg-[#003444] text-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out flex flex-col items-center justify-center
        ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {/* <h3 className="text-xl font-semibold mb-3">{title}</h3> */}
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;





























// import  { useState } from 'react';

// const BenefitCard = ({ icon, title, description }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className="relative group w-64 text-center"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="flex flex-col items-center">
//         <div className="w-24 h-24 bg-[#2D2F53] rounded-full flex items-center justify-center mb-4">
//           {icon}
//         </div>
//         <h3 className="text-xl font-semibold text-[#2D2F53] mb-2">{title}</h3>
        
//         {/* Hover Card */}
//         {isHovered && (
//           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 bg-[#2D2F53] text-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
//             <p className="text-center">{description}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BenefitCard;