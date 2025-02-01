
import FAQItem from './FAQItem';
import { faqData } from './faqData.js';
import {motion} from 'framer-motion';

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          
        >
      <h2 className="text-4xl font-bold text-center mb-12 text-[#2E5077]">FAQs</h2>
      </motion.div>
      <div className="max-w-5xl mx-auto space-y-2">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;