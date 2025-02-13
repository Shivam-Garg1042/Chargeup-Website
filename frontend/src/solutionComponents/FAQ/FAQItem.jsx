
import { useState } from 'react';
import {motion} from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          
        >
    <div className="border rounded-lg bg-gray-50">
    
      <button
        className="w-full p-4 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        
        <span className="text-lg font-medium text-[#2E5077]">{question}</span>
        
        <span className={`text-[#2E5077] text-2xl transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`}>
          {isOpen ? '-' : '+'}
        </span>
       
      </button>
      
      {isOpen && (
        <div className="p-4 pt-0">
          
          <p className="text-gray-600">{answer}</p>
          
        </div>
      )}
     
    </div>
    </motion.div>
  );
};

export default FAQItem;