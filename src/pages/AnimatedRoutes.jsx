// components/Layout.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageTransition from './PageTransition';

const AnimatedRoutes = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Esta función se ejecutará cada vez que cambie la ruta
    console.log('Ruta cambiada:', location.pathname);
  }, [location]);

  return (
    <>
      <PageTransition key={location.pathname} />
      {children}
    </>
  );
};

export default AnimatedRoutes;