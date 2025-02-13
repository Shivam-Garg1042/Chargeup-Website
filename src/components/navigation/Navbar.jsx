import { useState, useEffect } from 'react';
import Logo from './Logo';
import MenuButton from './MenuButton';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      if (window.innerWidth >= 768) {
        setVisible(
          (prevScrollPos > currentScrollPos) || currentScrollPos < 10
        );
      } else {
        setVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`bg-background py-4 px-6 fixed w-full top-0 z-50 transition-all duration-300 ${
      !visible ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop NavLinks */}
        <div className="hidden md:flex items-center space-x-7">
          <NavLinks />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="p-2 hover:bg-secondary rounded-full transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-primary"></span>
              <span className="block w-6 h-0.5 bg-primary"></span>
              <span className="block w-6 h-0.5 bg-primary"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <MenuButton 
            onClose={() => setIsMobileMenuOpen(false)} 
            className="md:hidden" 
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
