import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const transitionRef = useRef(null);

  useEffect(() => {
    // Animación de entrada
    gsap.from(transitionRef.current, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      ease: 'power2.out',
      onComplete: () => {
        // Scroll al top después de la transición
        window.scrollTo(0, 0);
      }
    });
  }, [location.key]);

  return <div ref={transitionRef}>{children}</div>;
};

export default PageTransition;