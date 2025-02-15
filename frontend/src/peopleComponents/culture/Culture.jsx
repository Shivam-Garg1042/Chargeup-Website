import { useState, useEffect } from 'react';
import DesktopCulture from './DesktopCulture';
import MobileCulture from './MobileCulture';

const Culture = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window width is less than 768px (typical mobile breakpoint)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MobileCulture /> : <DesktopCulture />;
};

export default Culture;



