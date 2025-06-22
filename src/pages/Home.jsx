import Navbar from "../components/Navbar";
import CardsHome from "../components/CardsHome";
import TsParticlesBg from "../components/TsParticlesBg";
import { artistsData } from "../data/artistsData";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Home = () => {
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const lineRef2 = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]); // <-- Array de referencias para las cards

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power1.out" },
    });

    // Animaciones iniciales
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

    timeline.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.4 },
      "-=0.5"
    );

    timeline.fromTo(
      descriptionRef.current,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.01"
    );

    // Animación de las cards una por una
    gsap.fromTo(
      cardsRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        delay: 1.2,
        opacity: 1,
        duration: 1,
        stagger: 0.4, // <-- Retraso entre cada card
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <main className="relative w-full h-[100dvh] lg:h-screen z-50 flex flex-col justify-center items-center overflow-hidden">
      <TsParticlesBg />
      <div className="w-full h-[100dvh] lg:h-screen z-[550] relative flex flex-col justify-evenly gap-2 items-center pt-7">
        <Navbar />
        <article className="flex flex-col justify-center items-center relative z-50 w-full cursor-default">
          <h1
            ref={titleRef}
            className="font-title leading-none bg-gradient-to-b bg-clip-text text-transparent from-grayCustom via-grayCustom to-zinc-300 text-[5.6rem] px-2 text-center lg:text-[16rem] xl:text-[18.2rem] 2xl:text-[22rem]"
          >
            GALERÍA INVISIBLE
          </h1>
          <div className="text-stone-500 font-text2 mt-1 flex justify-center items-center gap-4 text-sm lg:mt-3 lg:text-xl 2xl:text-2xl">
            <span
              ref={lineRef}
              className="w-20 h-[1px] bg-stone-600 lg:w-[400px] xl:w-[500px]"
            ></span>
            EXPOSICIÓN COLECTIVA{" "}
            <span
              ref={lineRef2}
              className="w-20 h-[1px] bg-stone-600 lg:w-[400px] xl:w-[500px]"
            ></span>
          </div>
          <p
            ref={descriptionRef}
            className="text-sm text-grayCustom font-text2 font-medium text-center text-pretty px-2 mt-2 lg:text-base lg:text-balance xl:max-w-[1500px] 2xl:max-w-[1500px] xl:text-lg 2xl:text-xl"
          >
            Galería Invisible nace como el catálogo de la exposición colectiva
            “Artistas Gráficos de Valpo por el Mundo”, proyecto que reúne a seis
            artistas contemporáneos de Valparaíso. Este grupo de artistas,
            utilizan la gráfica y el soporte bidimensional, como herramienta
            discursiva para desarrollar una investigación estética, poética y
            narrativa que representa su imaginario visual
            porteño-latinoamericanista.
          </p>
        </article>

        <section className="relative z-50 flex flex-wrap justify-center items-center gap-x-5 gap-y-5 w-full lg:gap-x-6 xl:gap-x-9 2xl:gap-x-14">
          {artistsData?.map((artist, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)} // Asigna la referencia
              id="card"
            >
              <CardsHome artist={artist} />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Home;
