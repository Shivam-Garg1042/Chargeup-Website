import './MarqueeSlider.css';
import logos from './logo.js';
// import { Marquee } from "@devnomic/marquee";
import Marquee from "react-fast-marquee";


const MarqueeSlider = () => {
  return (
    <div className="marquee-container">
      <Marquee fade={true}>
        <div className="marquee">
          {logos.map((logo, index) => (
            <div key={index} className="logo-wrapper">
              <img src={logo.src} alt={logo.alt} className="logo" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;











