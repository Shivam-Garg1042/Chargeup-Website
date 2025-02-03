

// const TimelineCard = ({ title, description, year, isRight }) => (
//     <div 
//       className={`
//         absolute 
//         ${isRight ? 'left-[60%]' : 'right-[60%]'} 
//         w-[40%] 
//         h-48
//         bg-white 
//         rounded-lg 
//         shadow-md 
//         p-6 
//         transform 
//         -translate-y-1/2
//         transition-all
//         duration-300
//         hover:-translate-y-[calc(50%+4px)]
//         hover:shadow-lg
//         overflow-auto
//       `}
//     >
//       <h3 className={`text-2xl font-bold mb-2 ${isRight ? 'text-primary' : 'text-accent'}`}>
//         {title}
//       </h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
  
//   const TimelineMarker = ({ year }) => (
//     <div className="
//       absolute 
//       left-1/2 
//       transform 
//       -translate-x-1/2 
//       -translate-y-1/2
//     ">
//       <div className="
//         w-12 
//         h-12 
//         rounded-full 
//         bg-white 
//         border-4 
//         border-secondary 
//         flex 
//         items-center 
//         justify-center
//       ">
//         <span className="text-secondary font-bold">
//           {year}
//         </span>
//       </div>
//     </div>
//   );
  
//   const VerticalTimeline = () => {
//     const events = [
//       {
//         year: 2020,
//         title: "Expansion year",
//         description: "Expansion started with opening of two stores in an Arab like model lUt tempor exercitation reprehenderit pariatur exercitation ad eu anim tempor. Sit in officia in labore id ad consequat. Eu fugiat tempor minim esse id est dolore dolor culpa commodo. Occaecat ullamco in non irure ut labore elit excepteur aliquip ullamco culpa consectetur aliqua nisi. Nisi occaecat do officia Lorem ullamco cillum. Velit sit cillum commodo magna Lorem esse. Exercitation aliquip sint labore nulla sunt enim ea ullamco dolor quis.",
//         isRight: true
//       },
//       {
//         year: 2021,
//         title: "Market 1000 D",
//         description: "Market 1000 dealer is our community network with 85 outlets.",
//         isRight: false
//       },
//       {
//         year: 2022,
//         title: "Ev Startup",
//         description: "Recognized as EV startup of the year",
//         isRight: true
//       },
//       {
//         year: 2023,
//         title: "Ev Startup",
//         description: "Completed half a decade, identifying as India's leading Mobility Platform",
//         isRight: false
//       }
//     ];
  
//     return (
//       <div className="relative min-h-screen bg-[#E8F0F2] overflow-hidden">
//         <div className="max-w-6xl mx-auto relative">
//           {/* Events */}
//           <div className="relative py-40">
//             {/* Center line that only spans between first and last years */}
//             <div className="
//               absolute 
//               left-1/2 
//               w-1 
//               bg-secondary
//               transform 
//               -translate-x-1/2
//             " 
            
//             style={{
//                 top: '32px',  // Starts at the first year marker
//                 height: `calc(100% - 64px)`, // Ends at the last year marker
//               }}
//             />
            
//             {events.map((event, index) => (
//               <div key={event.year} className="relative h-64">
//                 <TimelineMarker year={event.year} />
//                 <TimelineCard {...event} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default VerticalTimeline;

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const VerticalJourneyTimeline = () => {
  const containerRef = useRef(null);
  const rickshawRef = useRef(null);
  const [currentYear, setCurrentYear] = useState(2019);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring animation for rickshaw movement
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 800]),
    { damping: 20, stiffness: 100 }
  );

  const milestones = [
    { year: 2019, title: 'Incorporation year', description: 'with 1st station opening in May 2019 in Delhi', position: 'right' },
    { year: 2020, title: 'Expansion started', description: 'with opening new stores in asset lite model', position: 'left' },
    { year: 2021, title: 'Marked drivers', description: 'Marked 1000 drivers in our community network with 85 stations', position: 'right' },
    { year: 2022, title: 'Recognized as EV startup', description: 'Recognized as EV startup of the year', position: 'left' },
    { year: 2023, title: 'Growth in Revenue', description: '8x Growth in Revenue since 2021, across 13 new cities from 4000 drivers', position: 'right' },
  ];

  const MilestoneCard = ({ milestone }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    
    const cardVariants = {
      hidden: { 
        opacity: 0, 
        x: milestone.position === 'left' ? -50 : 50 
      },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      }
    };

    useEffect(() => {
      if (isInView) {
        setCurrentYear(milestone.year);
      }
    }, [isInView]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
        className={`w-full md:w-5/12 bg-white/90 backdrop-blur-sm rounded-xl 
          shadow-lg p-6 transition-all duration-300 hover:shadow-xl border border-[#B8D8D6]
          ${milestone.position === 'left' ? 'mr-auto md:mr-20' : 'ml-auto md:ml-20'}`}
      >
        <h3 className="text-lg md:text-xl font-bold text-[#003444] mb-2">
          {milestone.title}
        </h3>
        <p className="text-[#2C4A52] text-sm md:text-base leading-relaxed">
          {milestone.description}
        </p>
      </motion.div>
    );
  };

  const ERickshaw = () => (
    <motion.div 
      style={{ y }}
      className="fixed left-1/2 top-20 -translate-x-1/2 md:z-20 w-20 md:w-28"
      ref={rickshawRef}
    >
      <motion.div 
        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#2C4A52] text-white px-3 py-1 rounded-full text-sm font-bold"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      >
        {currentYear}
      </motion.div>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
        {/* Main body */}
        <motion.rect
          x="20" y="30" width="60" height="40" rx="6"
          fill="#278c6a" stroke="#003444" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Roof */}
        <motion.path
          d="M15 30 H85 L80 20 H20 Z"
          fill="#1e7295" stroke="#003444" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        
        {/* Windows */}
        <motion.path
          d="M25 30 L28 23 H72 L75 30"
          fill="#E8F0F2" stroke="#A5C6CE" strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.rect
          x="25" y="35" width="15" height="15" rx="2"
          fill="#E8F0F2" stroke="#A5C6CE"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <motion.rect
          x="60" y="35" width="15" height="15" rx="2"
          fill="#E8F0F2" stroke="#A5C6CE"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        
        {/* Wheels with animation */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="30" cy="70" r="10" fill="#2C4A52" stroke="#1B2B2D" strokeWidth="2" />
          <circle cx="30" cy="70" r="3" fill="#89A9B6" />
          <circle cx="70" cy="70" r="10" fill="#2C4A52" stroke="#1B2B2D" strokeWidth="2" />
          <circle cx="70" cy="70" r="3" fill="#89A9B6" />
        </motion.g>
        
        {/* Headlights */}
        <motion.circle
          cx="25" cy="35" r="2" fill="#D9EBE5"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <motion.circle
          cx="75" cy="35" r="2" fill="#D9EBE5"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        
        {/* Driver */}
        <circle cx="50" cy="40" r="4" fill="#3A5F68" />
        <rect x="46" y="44" width="8" height="12" fill="#3A5F68" rx="2" />
      </svg>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F5F5F5]" ref={containerRef}>
      {/* Road */}
      <div className="fixed left-1/2 top-0 h-full -translate-x-1/2 md:z-10">
        <div className="relative h-full w-16 md:w-24 bg-[#1B2B2D]">
          <div 
            className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2"
            style={{
              backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent 45%, #E8F0F2 45%, #E8F0F2 55%, transparent 55%, transparent 100%)',
              backgroundSize: '1px 20px',
              backgroundRepeat: 'repeat-y',
            }} 
          />
        </div>
      </div>

      <ERickshaw />

      {/* Timeline content */}
      <div className="relative mx-auto px-4 sm:px-8 md:px-16 pt-24 pb-20">
        <div className="max-w-6xl mx-auto">
          {milestones.map((milestone) => (
            <div
              key={milestone.year}
              className={`flex milestone ${milestone.position === 'left' ? 'justify-start' : 'justify-end'} mb-24 md:mb-32 relative z-30`}
              data-year={milestone.year}
            >
              <MilestoneCard milestone={milestone} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalJourneyTimeline;
