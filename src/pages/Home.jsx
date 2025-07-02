import Navbar from "../components/Navbar";
import CardsHome from "../components/CardsHome";
import TsParticlesBg from "../components/TsParticlesBg";
import { artistsData } from "../data/artistsData";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ThemeToggle from "../components/ThemeToggle";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const Home = () => {
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const lineRef2 = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]);

  /*   useLayoutEffect(() => {
    document.fonts.ready.then(() => {
      let split = SplitText.create(titleRef.current, {
        type: "words,lines",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
          return gsap.from(self.words, {
            duration: 3,
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
            ease: "expo.out", // sine.out
          });
        },
        
      });
    });
  }, []); */
  useLayoutEffect(() => {
    document.fonts.ready.then(() => {
      let split = SplitText.create(titleRef.current, {
        type: "chars, words",
        mask: "chars",
        aria: "auto",
        onSplit: (self) => {
          return gsap.from(self.chars, {
            duration: 3,
            ease: "power3.out",
            yPercent: "random([-150, 150])",
            xPercent: "random([-150, 150])",
            stagger: {
              from: "random",
              amount: 0.6,
            },
          });
        },
      });
      return split;
    });
  }, []);

  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power1.out" },
    });

    timeline.fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, transformOrigin: "center" }
    );

    timeline.fromTo(
      lineRef2.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, transformOrigin: "center" },
      "<"
    );

    /*   timeline.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.4 },
      "-=0.5"
    ); */

    timeline.fromTo(
      descriptionRef.current,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.01"
    );

    gsap.fromTo(
      cardsRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        delay: 1.2,
        opacity: 1,
        duration: 1,
        stagger: 0.4,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <main className="relative w-full h-[100dvh] md:h-screen bg-blackCustom dark:bg-whiteCustom z-50 flex flex-col justify-center items-center overflow-hidden">
      <TsParticlesBg />
      <Navbar />
      <ThemeToggle />
      <section className="w-full h-full relative flex flex-col items-center mt-12 lg:mt-20 2xl:mt-28">
        <article className="flex flex-col justify-center items-center relative z-50 w-full cursor-default">
          <h1
            ref={titleRef}
            className="font-title leading-none text-stone-500 text-[6.3rem] sm:text-[6.5rem] text-center lg:text-nowrap lg:text-[12rem] xl:text-[16rem] 2xl:text-[18rem] 3xl:text-[20rem]"
          >
            GALERIA EN <span className="text-orangeCustom">MOVIMIENTO</span>
          </h1>
          <div className="text-grayCustom font-text3 mt-1 flex justify-center items-center gap-4 text-sm sm:mt-2 lg:text-xl 2xl:text-2xl 2xl:mt-3">
            <span
              ref={lineRef}
              className="w-16 h-[1px] sm:w-20 bg-orangeCustom lg:w-[400px] xl:w-[500px]"
            ></span>
            EXPOSICIÓN COLECTIVA{" "}
            <span
              ref={lineRef2}
              className="w-16 h-[1px] sm:w-20 bg-orangeCustom lg:w-[400px] xl:w-[500px]"
            ></span>
          </div>
          <p
            ref={descriptionRef}
            className="text-sm text-grayCustom font-text2 font-medium text-center text-pretty px-1 sm:px-3 max-w-[390px] mt-1 lg:text-base  lg:px-16 xl:mt-3 md:max-w-[1500px] 2xl:max-w-[1500px] xl:text-lg 2xl:mt-5 2xl:text-xl dark:text-stone-400"
          >
            Galería en Movimiento nace como el catálogo de la exposición
            colectiva “Artistas Gráficos de Valpo por el Mundo”, proyecto que
            reúne a cuatro artistas contemporáneos de Valparaíso. Este grupo de
            artistas utiliza la gráfica y el soporte bidimensional como
            herramienta discursiva para desarrollar una investigación estética,
            poética y narrativa que representa su imaginario visual
            porteño-latinoamericanista.
          </p>
        </article>

        <section className="relative z-50 flex flex-wrap justify-center items-center gap-x-5 gap-y-3 w-full mt-4 md:mt-9 lg:mt-16 lg:gap-x-10 xl:gap-x-16 2xl:mt-20 2xl:gap-x-24">
          {artistsData?.map((artist, i) => (
            <div key={i} ref={(el) => (cardsRef.current[i] = el)} id="card">
              <CardsHome artist={artist} />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Home;
