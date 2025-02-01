
import { useState } from 'react';
import { motion } from 'framer-motion';

const TeamCard = ({ name, role, image, bio }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] w-full perspective-1000 transform  transition-transform duration-300"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transform-style-3d transition-transform duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
     
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          
          <div className="relative bg-white rounded-lg p-4 h-full">
          
            <img 
              src={image} 
              alt={name} 
              className="w-full h-[320px] object-cover rounded-lg"
            />
            <div className=" bottom-2 flex justify-center">
              <div className="bg-[#2D2F53] text-white px-4 py-2 rounded-full inline-block">
                <span className="font-bold">{name}</span>
                <span className="mx-2">•</span>
                <span>{role}</span>
              </div>
            </div>
            
          </div>
          
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#2D2F53] rounded-lg p-6">
          <div className="text-white h-full flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-sm">{bio}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamCard;