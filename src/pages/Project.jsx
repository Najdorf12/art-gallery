import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import TsParticlesBg from "../components/TsParticlesBg";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import { Link } from "react-router-dom";
import BtnPrimary from "../components/BtnPrimary";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const Project = () => {
  const [activeArticle, setActiveArticle] = useState("project");
  const containerRef = useRef(null);
  const titleRef = useRef();
  const subtitleRef = useRef();
  const subtitle2Ref = useRef();
  const btnRef = useRef();

  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power1.out" },
    });
    gsap.fromTo(
      btnRef.current,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, ease: "power1.out", delay: 1.5, duration: 1 }
    );
    timeline
      .fromTo(titleRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(subtitle2Ref.current, { x: 40, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo(
        subtitleRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1 },
        "<"
      );
  }, []);

  return (
    <section className="relative w-full bg-blackCustom h-[100dvh] md:h-screen z-50 flex flex-col justify-start overflow-hidden dark:bg-whiteCustom">
      <TsParticlesBg />
      <Navbar />
      <ThemeToggle />
      <div className="w-full z-50 relative flex flex-col px-3 lg:pl-[5%] h-full">
        <div ref={containerRef} className="relative">
          {activeArticle === "project" && (
            <article className="flex flex-col justify-start items-start relative z-50 w-full cursor-default mt-20  2xl:mt-28">
              <h4
                ref={titleRef}
                className="font-title leading-[4.8rem]  text-orangeCustom text-7xl max-w-[400px] lg:max-w-[600px] lg:leading-[8.1rem] lg:text-[8rem] 2xl:text-[10rem] 2xl:max-w-[800px] 2xl:leading-[10.1rem]"
              >
                Voces gráficas de{" "}
                <span className="text-whiteCustom dark:text-grayCustom">
                  Valpo
                </span>{" "}
                en Europa
              </h4>
              <p
                ref={subtitle2Ref}
                className="text-sm font-text2 mt-4 text-grayCustom lg:mt-6 lg:text-lg dark:text-stone-400"
              >
                Arte Gráfico / Pintura / Cultura / Poética Urbana
              </p>
              <p
                ref={subtitleRef}
                className="text-sm text-grayCustom font-text2 font-medium text-balance mt-4 max-w-[800px] lg:mt-5 lg:text-base 2xl:text-lg 2xl:max-w-[920px]"
              >
                El propósito principal de este proyecto es promover la
                visibilidad y comercialización de la obra gráfica y pictórica de
                cuatro artistas chilenos por el circuito de arte global, tomando
                España como punto de partida para esta travesía por europa. La
                propuesta busca llevar el proyecto “Galería en Movimiento” a un
                circuito de exhibición por espacios relevantes dentro de la
                escena de vanguardia artistica en España. Estableciendo una red
                de colaboración que permita la circulación, despliegue y
                divulgación de la obra de este grupo de artistas, construyendo
                una conexión estable entre la obra y el mercado de arte europeo.
              </p>
              <div
                ref={btnRef}
                className="flex justify-start items-center gap-9 mt-9 lg:gap-10 z-50 relative 2xl:mt-12 2xl:gap-16"
              >
                <Link to={"/Proyecto"}>
                  <BtnPrimary btnName={"Sobre Nosotros"} />
                </Link>
                <Link to={"/Contacto"}>
                  <BtnPrimary btnName={"Contacto"} />
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
