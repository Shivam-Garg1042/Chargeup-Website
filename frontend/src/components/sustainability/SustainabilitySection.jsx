import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import SustainabilityCircle from './SustainabilityCircle';
import ContentBox from './ContentBox';
import { CIRCLE_DATA } from './data';

const SustainabilitySection = () => {
  const [activeCircle, setActiveCircle] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Create a color gradient from primary to accent for background
  const backgroundGradient = 'bg-gradient-to-b from-[#003444] to-[#1e7295]';

  return (
    <section className={`py-16 md:py-24 px-4 ${backgroundGradient}`} ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Driving towards sustainable outcomes
          </h2>
          <div className="w-24 h-1 bg-[#79D7BE] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Our commitment to Sustainable Development Goals and the impact we create in the EV ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {CIRCLE_DATA.map((circle, index) => (
            <motion.div 
              key={circle.id} 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex justify-center">
                <SustainabilityCircle
                  data={circle}
                  isActive={activeCircle === circle.id}
                  onClick={setActiveCircle}
                  startCounting={isInView}
                />
              </div>
              
              {/* Mobile Content Box */}
              <div className="block sm:hidden mt-4">
                <AnimatePresence mode="wait">
                  {activeCircle === circle.id && (
                    <ContentBox
                      key={`mobile-${activeCircle}`}
                      content={circle.content}
                      className="bg-white/10 backdrop-blur-sm rounded-xl"
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop/Tablet Content Box */}
        <div className="hidden sm:block mt-12">
          <AnimatePresence mode="wait">
            <ContentBox
              key={`desktop-${activeCircle}`}
              content={CIRCLE_DATA.find(c => c.id === activeCircle).content}
              className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;