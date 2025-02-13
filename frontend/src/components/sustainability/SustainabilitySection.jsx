import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import SustainabilityCircle from './SustainabilityCircle';
import ContentBox from './ContentBox';
import { CIRCLE_DATA } from './data';
import { useRef } from 'react';

const SustainabilitySection = () => {
  const [activeCircle, setActiveCircle] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-8 md:py-16 px-4 bg-[#4DA1A9]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Driving towards sustainable outcomes
          </h2>
          <p className="text-lg md:text-xl text-white/80">
            All our SDGs, and the impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
          {CIRCLE_DATA.map((circle, index) => (
            <div key={circle.id} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex justify-center"
              >
                <SustainabilityCircle
                  data={circle}
                  isActive={activeCircle === circle.id}
                  onClick={setActiveCircle}
                  startCounting={isInView}
                />
              </motion.div>
              
              {/* Mobile Content Box */}
              <div className="block sm:hidden">
                <AnimatePresence mode="wait">
                  {activeCircle === circle.id && (
                    <ContentBox 
                      key={`mobile-${activeCircle}`}
                      content={circle.content}
                      className="mt-4"
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop/Tablet Content Box */}
        <div className="hidden sm:block">
          <AnimatePresence mode="wait">
            <ContentBox 
              key={`desktop-${activeCircle}`}
              content={CIRCLE_DATA.find(c => c.id === activeCircle).content} 
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;