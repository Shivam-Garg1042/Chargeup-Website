

import FAQItem from './FAQ/FAQItem';
import { faqData } from './FAQ/faqData';

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#00ffa3]">FAQs</h2>
      <div className="max-w-3xl mx-auto space-y-4">
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