import arrow from "/arrow-orange.png";
import Navbar from "../components/Navbar";
import BtnPrimary from "../components/BtnPrimary";
import TsParticlesBg from "../components/TsParticlesBg";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";

const artistsBtns = [
  {
    id: "LauraAguirre",
    name: "Laura Aguirre",
    data1: "Grabadora Litografista",
  },
  {
    id: "EduHinojosa",
    name: "Edu Hinojosa",
    data1: "Ilustrador - Pintor",
  },
  {
    id: "GonzaloOlivares",
    name: "Gonzalo Olivares",
    data1: "Artista Gráfico",
  },
  {
    id: "ManuJorquera",
    name: "Manu Jorquera",
    data1: "Pintor (Street-Art)",
  },
];

const About = ({ handleButtonClick }) => {
  const titleRef = useRef();
  const subtitleRef = useRef();
  const btnRef = useRef();
  const artistRef = useRef([]);

  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power1.out" },
    });

    timeline
      .fromTo(titleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        subtitleRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1 },
        "+=0.6"
      )
      .fromTo(btnRef.current, { x: -30, opacity: 0 }, { x: 0, opacity: 1 });

    gsap.fromTo(
      artistRef.current,
      { x: 40, opacity: 0 },
      {
        x: 0,
        delay: 0.7,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <section className="flex flex-col bg-blackCustom h-[100dvh] md:h-screen overflow-hidden relative w-full justify-evenly pt-3 lg:flex-row lg:items-center lg:pl-[5%] dark:bg-whiteCustom">
      <Navbar />
      <TsParticlesBg />
      <article className="cursor-default flex flex-col justify-start items-start relative z-50 w-full px-4 lg:max-w-[60%] lg:self-start lg:mt-20">
        <h1
          ref={titleRef}
          className="font-title leading-none text-orangeCustom text-7xl lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem]"
        >
          <span className="text-whiteCustom dark:text-grayCustom">N</span>
          OSOTROS
        </h1>
        <div className="w-44 h-[1px] bg-orangeCustom mt-3  lg:w-[390px] lg:mt-6 dark:bg-grayCustom"></div>
        <p
          ref={subtitleRef}
          className="text-sm text-grayCustom font-text2 font-medium text-balance mt-4 lg:text-base lg:mt-8 max-w-[660px]  2xl:text-xl 2xl:max-w-[700px]"
        >
          Cada uno de ellos es un activo creador y gestor en la escena
          contemporánea de arte en Chile, desarrollando en su particularidad una
          investigación poética y política arraigada en conceptos como el
          territorio, la tradición y la herencia con foco en el universo visual
          latinoamericano.
          {/* El propósito principal de este proyecto es promover la visibilidad y comercialización de la obra gráfica y pictórica de cuatro artistas chilenos por el circuito de arte global, tomando España como punto de partida para esta travesía por europa.
Los artistas convocados para ser parte de esta exposición colectiva son: Laura Aguirre, grabadora litografista; Manu Jorquera, pintor proveniente del Street art; Gonzalo Olivares, artista grafico y Edu Hinojosa, ilustrador, pintor y gestor de este proyecto. Todos activos creadores en la escena contemporánea de arte en Chile.
Cada uno desarrolla una investigación poética y política arraigada en conceptos como el territorio, la tradición y la herencia con con foco en el universo visual latinoamericano. 
La propuesta busca llevar el proyecto “Galería en Movimiento” a un circuito de exhibición por espacios relevantes dentro de la escena  de vanguardia artistica en España. Estableciendo  una red de colaboración que permita la circulación, despliegue y divulgación de la obra de este grupo de artistas, construyendo una conexión estable entre la obra y el mercado de arte europeo. */}
        </p>
        <div className="flex justify-start items-center gap-9 mt-9 lg:gap-10 z-50 relative">
          <Link ref={btnRef} to={"/Proyecto"}>
            <BtnPrimary btnName={"Proyecto"} />
          </Link>
        </div>
      </article>
      <ul className="flex flex-col gap-1 relative z-50 w-full mt-1 lg:self-end lg:pb-3">
        {artistsBtns?.map((artist, i) => (
          <Link key={i} to={`/Artista/${artist?.id}`}>
            <li
              ref={(el) => (artistRef.current[i] = el)}
              className="flex border-b border-orangeCustom pl-3 pr-2 py-2 max-w-[500px] lg:max-w-[700px] dark:border-grayCustom group"
            >
              <p className="font-title text-whiteCustom text-5xl w-[70%] lg:text-6xl xl:text-8xl 2xl:text-8xl group-hover:translate-x-12 duration-300 dark:text-orangeCustom">
                {artist?.name.toLocaleUpperCase()}
              </p>
              <div className="flex flex-col justify-end text-grayCustom text-sm font-text text-nowrap 2 xl:text-base group-hover:text-whiteCustom dark:group-hover:text-blackCustom">
                {artist?.data1}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default About;
