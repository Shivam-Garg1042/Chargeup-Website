// import bgImage from "../../assets/1.png";
// const DesktopGallery = ({ items }) => {
//   return (
//     <div 
//       className="hidden md:block min-h-screen w-full relative overflow-y-auto scrollbar-hide" 
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundAttachment: 'fixed',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         msOverflowStyle: 'none',
//         scrollbarWidth: 'none',
//       }}
//     >
//       {/* Add CSS to hide scrollbar */}
//       <style>
//         {`
//           .scrollbar-hide::-webkit-scrollbar {
//             display: none;
//           }
//         `}
//       </style>

//       <div className="absolute inset-0 bg-black/30 fixed" />
      
//       <div className="relative w-full min-h-screen">
//         <div className="max-w-7xl mx-auto p-4">
//           <div className="grid grid-cols-3 gap-4 p-6">
//             {items.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative group bg-white rounded-lg shadow-md overflow-hidden"
//               >
//                 <div className="aspect-w-1 aspect-h-1">
//                   <img
//                     src={item.imageUrl}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//                   {item.description && (
//                     <p className="text-sm text-gray-600 mt-1">{item.description}</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DesktopGallery;







import React, { useRef } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useScroll } from '@use-gesture/react';
import { ChevronRight } from 'lucide-react';
import bgImage from "../../assets/1.png";

const DesktopGallery = ({ items }) => {
  const distributeItems = (items) => {
    const totalItems = items.length;
    const itemsPerRow = Math.ceil(totalItems / 3);
    
    return {
      row1: items.slice(0, itemsPerRow),
      row2: items.slice(itemsPerRow, itemsPerRow * 2),
      row3: items.slice(itemsPerRow * 2)
    };
  };

  const { row1, row2, row3 } = distributeItems(items);

  // Revert back to original clamp function
  const clamp = (value, clampAt = 30) => {
    if (Math.abs(value) < 0.1) return 0;
    const amplifiedValue = value * 1.2;
    return Math.max(Math.min(amplifiedValue, clampAt), -clampAt);
  };

  const [style1, set1] = useSpring(() => ({
    transform: "perspective(800px) rotateY(0deg)",
    config: { mass: 1, tension: 180, friction: 20 }
  }));
  
  const [style2, set2] = useSpring(() => ({
    transform: "perspective(800px) rotateY(0deg)",
    config: { mass: 1, tension: 180, friction: 20 }
  }));
  
  const [style3, set3] = useSpring(() => ({
    transform: "perspective(800px) rotateY(0deg)",
    config: { mass: 1, tension: 180, friction: 20 }
  }));

  const Label = ({ text, color }) => (
    <div className="flex items-center justify-center sm:justify-start sm:self-center gap-2 bg-gradient-to-r sm:bg-gradient-to-b from-black/70 to-black/50 text-white px-4 sm:px-3 py-4 sm:py-6 rounded-lg font-bold shadow-lg backdrop-blur-sm w-[80%] mx-auto sm:w-12 sm:h-[200px] sm:mx-0">
      <div className="flex sm:flex-col items-center gap-2 w-full">
        <div className={`w-2 h-2 rounded-full ${color} sm:hidden`}></div>
        <div className="text-lg sm:text-base sm:mt-4 tracking-wider [writing-mode:horizontal-tb] sm:[writing-mode:vertical-rl] sm:rotate-180">
          {text.toUpperCase()}
        </div>
      </div>
    </div>
  );

  const Row = ({ items, label, color, style, setStyle }) => {
    const scrollContainerRef = useRef(null);
    
    // Simplified scroll binding for smoother animation
    const bind = useScroll(({ delta: [deltaX] }) => {
      setStyle({
        transform: `perspective(800px) rotateY(${clamp(deltaX)}deg)`,
        config: { mass: 1, tension: 180, friction: 20 }
      });
    }, {
      filterTaps: true,
      from: () => [0, 0],
    });

    const scroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = container.querySelector('[data-card]').offsetWidth;
        const gap = 24;
        container.scrollBy({ 
          left: cardWidth + gap, 
          behavior: 'smooth' 
        });
      }
    };

    return (
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <Label text={label} color={color} />
        <div className="flex sm:flex-row items-center gap-4">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide flex-1 sm:px-0 snap-x snap-mandatory"
            style={{ touchAction: 'pan-x pan-y' }}
            {...bind()}
          >
            <div className="flex sm:space-x-6 pb-4">
              {items.map((item, index) => (
                <animated.div
                  key={index}
                  data-card
                  style={style}
                  className="w-screen pl-[7.5vw] pr-[7.5vw] sm:w-[60vw] sm:p-0 md:w-[45vw] lg:w-[calc((100%-3rem)/3)] flex-shrink-0 snap-center"
                >
                  <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300">
                    <div className="aspect-w-16 aspect-h-9 sm:aspect-w-1 sm:aspect-h-1">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-base sm:text-lg font-bold text-gray-800">{item.title}</h3>
                      {item.description && (
                        <p className="text-xs sm:text-sm text-gray-600 mt-2">{item.description}</p>
                      )}
                    </div>
                  </div>
                </animated.div>
              ))}
            </div>
          </div>
          <div className="hidden sm:block">
            <button 
              onClick={scroll}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="w-full relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        
        <div className="relative w-full">
          <div className="max-w-7xl mx-auto py-6 sm:py-8 space-y-12">
            <Row 
              items={row1} 
              label="Featured" 
              color="bg-blue-400" 
              style={style1}
              setStyle={set1}
            />
            <Row 
              items={row2} 
              label="Popular" 
              color="bg-purple-400"
              style={style2}
              setStyle={set2}
            />
            <Row 
              items={row3} 
              label="New" 
              color="bg-green-400"
              style={style3}
              setStyle={set3}
            />
          </div>
        </div>
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default DesktopGallery;
