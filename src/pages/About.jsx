import arrow from "/arrow-orange.png";
import Navbar from "../components/Navbar";
import BtnPrimary from "../components/BtnPrimary";
import TsParticlesBg from "../components/TsParticlesBg";
import ThemeToggle from "../components/ThemeToggle";
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
    <section className="flex flex-col bg-blackCustom h-[100dvh] md:h-screen overflow-hidden relative w-full justify-between pt-20 lg:pt-0 lg:flex-row lg:items-center lg:pl-[5%] dark:bg-whiteCustom">
      <Navbar />
      <TsParticlesBg />
      <ThemeToggle />
      <article className="cursor-default flex flex-col justify-start items-start relative z-50 w-full px-4 lg:max-w-[60%] lg:self-start lg:mt-20 2xl:mt-32">
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
        </p>
        <div className="flex justify-start items-center gap-9 mt-9 lg:gap-10 z-50 relative 2xl:mt-12">
          <Link ref={btnRef} to={"/Proyecto"}>
            <BtnPrimary btnName={"Proyecto"} />
          </Link>
        </div>
      </article>
      <ul className="flex flex-col gap-1 relative max-w-[500px] self-end z-50 w-full pb-6 lg:pb-3 lg:max-w-[700px] 2xl:max-w-[900px]">
        {artistsBtns?.map((artist, i) => (
          <Link key={i} to={`/Artista/${artist?.id}`}>
            <li
              ref={(el) => (artistRef.current[i] = el)}
              className="flex border-b border-orangeCustom pl-3 pr-2 py-2 dark:border-grayCustom group"
            >
              <p className="font-title text-whiteCustom text-5xl w-[70%] lg:text-6xl xl:text-8xl 2xl:text-9xl group-hover:translate-x-12 duration-300 dark:text-orangeCustom">
                {artist?.name.toLocaleUpperCase()}
              </p>
              <div className="flex flex-col justify-end text-grayCustom text-sm font-text text-nowrap xl:text-base 2xl:text-lg group-hover:text-whiteCustom dark:group-hover:text-blackCustom 2xl:pl-3">
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
