// components/PageTransition.jsx
import { useRef, useEffect } from "react";
import gsap from "gsap";

const PageTransition = () => {
  const boxes = useRef([]);

  useEffect(() => {
    // Configuración inicial - los divs deben cubrir toda la pantalla
    gsap.set(boxes.current, {
      y: "100%"
    });

    const tl = gsap.timeline();
    
     tl.to(boxes.current, {
      y: "0%",
      duration: 0.4,
      stagger: 0.3, // Retraso entre cada div
      ease: "expo"
    }); 
    
      tl.to(boxes.current, {
      y: "100%",
      duration: 0.5,
      stagger: 0.5, // Retraso entre cada div
      ease: "expo",
      delay: 0.6 // Retraso adicional después de que termina la entrada
    }, ">") ; // El ">" indica que comienza después de la animación anterior
 
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[100] pointer-events-none flex ">
      <div 
        ref={el => boxes.current[0] = el} 
        className="w-full h-full bg-whiteCustom translate-y-full dark:bg-blackCustom"
      ></div>
      <div 
        ref={el => boxes.current[1] = el} 
        className="w-[20%] h-[100%] bg-orangeCustom translate-y-full"
      ></div>
      <div 
        ref={el => boxes.current[2] = el} 
        className="w-full h-full bg-whiteCustom translate-y-full dark:bg-blackCustom"
      ></div> 
    </div>
  );
};

export default PageTransition;