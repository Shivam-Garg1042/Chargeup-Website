

import { useState, useEffect, useRef } from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/5.png";
import image3 from "../../assets/6.png";
import image4 from "../../assets/4.png";

const sections = [
  { id: 1, text: "Select your area", description: "Nostrud sit amet ipsum qui nisi sunt dolor duis nostrud eu. Et dolor id est duis est laboris sint sit qui nisi dolor dolor. Reprehenderit laborum voluptate duis veniam ipsum exercitation dolor laboris non consectetur in deserunt cillum.",
     image: image1 },
  { id: 2, text: "Decide your investment", description: "Anim duis velit sint cupidatat Lorem sint commodo aliqua officia cillum aliqua.",
     image: image2 },
  { id: 3, text: "Onboard with Chargeup", description: "Aliqua reprehenderit voluptate mollit sint excepteur do eu. Irure sit tempor incididunt tempor nulla commodo nulla non est. Occaecat aliqua id proident dolore ipsum aliquip. Sit voluptate ea proident ut duis. Ut proident adipisicing quis aliqua commodo pariatur aute tempor deserunt.", 
    image: image3 },
  { id: 4, text: "Start earning", description: "Adipisicing nostrud ex consectetur incididunt dolore. Fugiat ut culpa ipsum tempor proident consectetur. Magna eu voluptate adipisicing id ex id nisi tempor minim pariatur. Eiusmod magna Lorem culpa magna irure nisi id cupidatat.",
     image: image4 },
];

export default function ScrollComponent() {
  const [activeSection, setActiveSection] = useState(1);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = { root: null, threshold: 0.5 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(parseInt(entry.target.dataset.id));
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => sectionRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  return (
    <div className="flex h-screen w-full p-10 overflow-hidden">

      {/* Left Side */}
      <div className="w-1/2 h-full overflow-y-auto space-y-10 scrollbar-hide">

        {sections.map((section, index) => (
          <div key={section.id} data-id={section.id} ref={(el) => (sectionRefs.current[index] = el)} className="h-screen flex items-center justify-center">
            <img src={section.image} alt={section.text} className="max-w-full h-auto" />
          </div>
        ))}
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center space-y-8 sticky top-0">
        {sections.map((section) => (
          <div key={section.id} className={`transition-opacity duration-500 ${activeSection === section.id ? "opacity-100" : "opacity-40"}`}>
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-bold text-lg ${activeSection === section.id ? "bg-black text-white" : "bg-white text-black"}`}>
                {section.id}
              </div>
              <h2 className="text-3xl font-bold">{section.text}</h2>
            </div>
            <p className="text-lg">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
