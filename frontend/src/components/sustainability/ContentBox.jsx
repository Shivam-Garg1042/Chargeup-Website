
// import { motion } from 'framer-motion';

// const ContentBox = ({ content }) => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//       className="mt-8 md:mt-16"
//       // className="mt-8 md:mt-16 bg-gradient-to-r from-[#2E5077]/30 to-transparent backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg"
//     >
//       <div className="grid gap-6 md:gap-8 md:grid-cols-2">
//         {content.map((item, index) => (
//           <motion.div 
//             key={index} 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className="flex items-start gap-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors duration-300"
//           >
//             <span className="text-2xl md:text-3xl text-orange-500">{item.icon}</span>
//             <p className="text-sm md:text-base text-white/90">{item.text}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default ContentBox;

import { motion } from 'framer-motion';

const ContentBox = ({ content, className = '' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={`mt-8 md:mt-16  ${className}`}
    >
      <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        {content.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors duration-300"
          >
            <span className="text-2xl md:text-3xl text-orange-500">{item.icon}</span>
            <p className="text-sm md:text-base text-white/90">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContentBox;
