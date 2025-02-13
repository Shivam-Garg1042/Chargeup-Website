import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Counter = ({ end, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (startCounting) {
      const duration = 3000; // 2 seconds duration
      const steps = 60; // Number of steps
      const stepDuration = duration / steps;
      const increment = end / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        if (currentStep === steps) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(currentStep * increment));
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [startCounting, end]);

  return (
    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
      {count}+
    </span>
  );
};

const SustainabilityCircle = ({ data, isActive, onClick, startCounting }) => {
  return (
    <motion.div 
      className="relative w-48 sm:w-56 md:w-64 aspect-square cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(data.id)}
    >
      <motion.div 
        className="absolute inset-0 border-2 border-dashed border-gray-200 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className={`absolute inset-2 rounded-full overflow-hidden transition-all duration-300 
        ${isActive ? 'ring-4 ring-[#79D7BE] shadow-lg shadow-[#79D7BE]/20' : 'hover:ring-2 hover:ring-[#79D7BE]/50'}`}>
        <img 
          src={data.image} 
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center mb-2">{data.title}</h3>
          <Counter end={data.count} startCounting={startCounting} />
        </div>
      </div>
    </motion.div>
  );
};

export default SustainabilityCircle;