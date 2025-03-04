import { useState } from 'react';
import { motion } from 'framer-motion';

const TeamCard = ({ name, role, image, bio }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] w-full perspective-1000 transform  transition-transform duration-300"
      onMouseEnter={() => setIsFlipped(!isFlipped)} onMouseLeave={() => setIsFlipped(!isFlipped)}
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
              <div className="bg-[#2D2F53] text-white px-2 py-2 rounded-full inline-block">
              <div className=" border-white border-2 text-[#1e7295] px-2 mx-2  rounded-full inline-block">
                <span className="font-bold">{name}</span>
                </div>
                {/* <span className="mx-2">•</span> */}
                <span>{role}</span>
              </div>
            </div>
            
          </div>
          
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-[#2D2F53] to-[#1E1F3A] rounded-lg p-6">
          <div className="text-white h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-3">{name}</h3>
              <p className="text-sm mb-4 leading-relaxed">{bio}</p>
            </div>
            
            <div className="mt-auto">
              <div className="border-t border-white/20 pt-4 flex justify-between items-center">
                <span className="text-xs text-white/70">{role} at Chargeup</span>
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          </div>
      </motion.div>
    </div>
  );
};

export default TeamCard;

