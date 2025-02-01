

import { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "../../contactComponent/ContactModal";

const DesktopNavLinks = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Link to="/about" className="text-primary hover:text-secondary font-medium text-lg">About us</Link>
      <Link to="/solutions" className="text-primary hover:text-secondary font-medium text-lg">Our Solutions</Link>
      <Link to="/investors" className="text-primary hover:text-secondary font-medium text-lg">Investors & Media</Link>
      <Link to="/partners" className="text-primary hover:text-secondary font-medium text-lg">Partners & Network</Link>
      <Link to="/community" className="text-primary hover:text-secondary font-medium text-lg">Community</Link>
      <Link to="/people" className="text-primary hover:text-secondary font-medium text-lg">People</Link>

      <button onClick={() => setIsContactOpen(true)} className="px-4 py-2 bg-[#003444] text-white rounded-lg hover:bg-[#1e7295] transition-colors">
        Contact Us
      </button>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default DesktopNavLinks;
