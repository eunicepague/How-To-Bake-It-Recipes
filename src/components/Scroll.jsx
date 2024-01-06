import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    try {
      // Using scrollTo with options
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch (error) {
      // Just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return children;
};

export default ScrollToTop;
