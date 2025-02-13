import { useState, useEffect } from 'react';
import DesktopActivities from './DesktopActivities';
import MobileActivities from './MobileActivities';

const Activities = () => {
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

  return isMobile ? <MobileActivities /> : <DesktopActivities />;
};

export default Activities;



