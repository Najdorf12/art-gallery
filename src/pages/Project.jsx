import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import TsParticlesBg from "../components/TsParticlesBg";
import Navbar from "../components/Navbar";
import arrow from "/arrow-orange.png";
import { Link } from "react-router-dom";
/* import About from "../components/About"; */
/* import WhatWeDo from "../components/WhatWeDo"; */

const Project = () => {
  const [activeArticle, setActiveArticle] = useState("project");
  const containerRef = useRef(null);
  const titleRef = useRef();
  const subtitleRef = useRef();
  const subtitle2Ref = useRef();
  const btnRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power1.out" },
    });

    timeline
      .fromTo(titleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(subtitle2Ref.current, { x: 40, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo(
        subtitleRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1 },
        "<" // Comienza al mismo tiempo que la animación anterior
      );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      btnRef.current,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, ease: "power1.out", delay: 1.5, duration: 1 }
    );
  }, []);

  const handleButtonClick = (newArticle) => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.7,
      onComplete: () => {
        setActiveArticle(newArticle);

        gsap.fromTo(
          containerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.7 }
        );
      },
    });
  };

  return (
    <section className="relative w-full bg-blackCustom h-[100dvh] md:h-screen z-40 flex flex-col justify-start overflow-hidden">
      <TsParticlesBg />
      <Navbar />
      <div className="w-full z-[550] relative flex flex-col px-3 lg:pl-[5%] h-full">
        <div ref={containerRef} className="relative">
          {activeArticle === "project" && (
            <article className="flex flex-col justify-start items-start relative z-50 w-full cursor-default mt-20 xl:mt-24 2xl:mt-28">
              <h1
                ref={titleRef}
                className="font-title leading-[4.8rem] text-orangeCustom text-7xl max-w-[400px] lg:max-w-[600px] lg:leading-[8.1rem] lg:text-[8rem] 2xl:text-[10rem] 2xl:max-w-[800px] 2xl:leading-[10.1rem]"
              >
                Voces gráficas de{" "}
                <span className="text-whiteCustom">Valpo</span> en Europa
              </h1>
              <p
                ref={subtitle2Ref}
                className="text-sm font-text2 mt-4 text-grayCustom lg:mt-6 lg:text-lg"
              >
                Arte Gráfico / Pintura / Cultura / Poética Urbana
              </p>
              <p
                ref={subtitleRef}
                className="text-sm text-grayCustom font-text2 font-medium text-balance mt-4 max-w-[800px] lg:mt-5 lg:text-base 2xl:text-lg 2xl:max-w-[920px]"
              >
                La propuesta está enfocada en llevar el proyecto “Galería
                Invisible” a un circuito de exhibición y venta en importantes
                galerías de arte contemporáneo en España. Buscando así,
                establecer una red de colaboración que permita la circulación y
                promoción de este grupo de artistas. Obtener la consolidación de
                sus trabajos en el medio y lograr una presencia estable en el
                mercado de arte europeo, promoviendo así su proyección
                internacional.
              </p>
              <div
                ref={btnRef}
                className="flex justify-start items-center gap-9 mt-9 lg:gap-10 z-50 relative"
              >
                <Link to={"/Proyecto"}>
                  <button className="flex font-text2 font-medium justify-center items-center gap-6 text-whiteCustom border-b border-orangeCustom pb-[2px] pl-[2px] lg:text-lg hover:scale-105 hover:text-whiteCustom duration-500">
                    PLANO
                    <img src={arrow} alt="arrow" className="w-6 -rotate-45" />
                  </button>
                </Link>
                <Link to={"/Contacto"}>
                  <button className="flex font-text2 font-medium justify-center items-center gap-6 text-grayCustom border-b border-orangeCustom pb-[2px] pl-[2px] lg:text-lg hover:scale-105 hover:text-whiteCustom duration-500">
                    CONTACTO
                    <img src={arrow} alt="arrow" className="w-6 -rotate-45" />
                  </button>
                </Link>
              </div>
            </article>
          )}
          {activeArticle === "whatWeDo" && (
            /*  <WhatWeDo handleButtonClick={handleButtonClick} /> */ <div>
              WhatWeDO
            </div>
          )}
          {activeArticle === "about" && (
            /*  <About handleButtonClick={handleButtonClick} /> */ <div></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
