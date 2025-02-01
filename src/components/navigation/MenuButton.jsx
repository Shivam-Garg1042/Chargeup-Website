

import { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "../../contactComponent/ContactModal";

const MenuButton = ({ onClose }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const menuItems = [
    { title: "About us", path: "/about" },
    { title: "Our Solutions", path: "/solutions" },
    { title: "Investors & Media", path: "/investors" },
    { title: "Partners & Network", path: "/partners" },
    { title: "Our Community", path: "/community" },
    { title: "People", path: "/people" },
    { title: "EMI calculator", path: "/emi-calculator" },
  ];

  return (
    <div className="fixed inset-0 bg-background z-50">
      <div className="absolute top-0 right-0 w-full bg-background p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary p-2 hover:text-secondary"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="mt-16 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="block py-3 text-primary hover:text-secondary transition-colors duration-200"
              onClick={onClose}
            >
              {item.title}
            </Link>
          ))}

          {/* Contact Us Button */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="block w-full text-left py-3 text-primary hover:text-secondary transition-colors duration-200"
          >
            Contact Us
          </button>
        </nav>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default MenuButton;


