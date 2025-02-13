

import TeamCard from './TeamCard';
import { teamData } from './TeamData';
import { motion } from 'framer-motion';

const TeamGrid = () => {
  return (
    <div className="container mx-auto px-2 py-2 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            initial={{ y: (index % 2 === 0) ? -50 : 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <TeamCard {...member} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;









