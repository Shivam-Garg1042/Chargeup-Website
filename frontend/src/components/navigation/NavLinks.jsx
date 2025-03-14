import { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "../../contactComponent/ContactModal";

const DesktopNavLinks = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const links = [
    // { to: "/about", text: "About us" },
    { to: "/solutions", text: "Our Solutions" },
    { to: "/investors", text: "Investors & Media" },
    { to: "/partners", text: "Partners & Network" },
    // { to: "/community", text: "Community" },
    { to: "/people", text: "People" },
  ];

  return (
    <div className="flex justify-center items-center space-x-8">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`relative text-primary hover:text-secondary font-medium text-lg
            ${activeLink === link.to ?
              'after:content-[""] after:absolute after:bottom-[-6px] after:left-1/2 after:w-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-secondary after:to-transparent after:opacity-100 after:transition-all after:duration-200'
              : ''}`}
          onClick={() => setActiveLink(link.to)}
        >
          {link.text}
        </Link>
      ))}

      <button 
        onClick={() => setIsContactOpen(true)}
        className="px-4 py-2 bg-[#003444] text-white rounded-lg hover:bg-[#1e7295] transition-colors"
      >
        Contact Us
      </button>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default DesktopNavLinks;