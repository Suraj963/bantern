/* src/components/ScrollToTop.jsx */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current URL path
  const { pathname } = useLocation();

  // This effect runs every time the 'pathname' changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component renders nothing
};

export default ScrollToTop;