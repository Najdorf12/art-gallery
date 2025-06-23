import arrow from "/arrow-orange.png";
import Navbar from "../components/Navbar";
import TsParticlesBg from "../components/TsParticlesBg";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";

const artistsBtns = [
  {
    id : "LauraAguirre",
    name: "Laura Aguirre",
    data1: "Lorem impsum",
    data2: "Lorem impsum",
  },
  {
    id: "EduHinojosa",
    name: "Edu Hinojosa",
    data1: "Lorem impsum",
    data2: "Lorem impsum",
  },
  {
    id: "LoremIpsum",
    name: "Lorem Ipsum",
    data1: "Lorem impsum",
    data2: "Lorem impsum",
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
      .fromTo(subtitleRef.current, { x: 40, opacity: 0 }, { x: 0, opacity: 1 }, "+=0.6")
      .fromTo(btnRef.current, { x: -30, opacity: 0 }, { x: 0, opacity: 1 })

    gsap.fromTo(
      artistRef.current,
      { x: 40, opacity: 0 },
      {
        x: 0,
        delay: .7,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <section className="flex flex-col bg-blackCustom h-[100dvh] md:h-screen overflow-hidden relative w-full justify-evenly pt-3 lg:flex-row lg:items-center lg:pl-[5%]">
      <Navbar />
      <TsParticlesBg />
      <article className="cursor-default flex flex-col justify-start items-start relative z-50 w-full px-4 lg:max-w-[60%] lg:self-start lg:mt-20">
        <h1
          ref={titleRef}
          className="font-title leading-none text-orangeCustom text-7xl lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem]"
        >
          <span className="text-whiteCustom">N</span>OSOTROS
        </h1>
        <div className="w-44 h-[1px] bg-orangeCustom mt-3  lg:w-[390px] lg:mt-6"></div>
        <p
          ref={subtitleRef}
          className="text-sm text-grayCustom font-text2 font-medium text-balance mt-4 lg:text-base lg:mt-8 max-w-[660px]  2xl:text-xl 2xl:max-w-[700px]"
        >
          Cada uno de ellos es un activo creador y gestor en la escena
          contemporánea de arte en Chile, desarrollando en su particularidad una
          investigación teórica y técnica sostenida en el tiempo que comparte en
          su narrativa un claro enfoque hacia la construcción de un universo
          visual latinoamericano.
        </p>
        <div className="flex justify-start items-center gap-9 mt-9 lg:gap-10 z-50 relative">
          <Link ref={btnRef} to={"/Proyecto"}>
            <button  className="flex font-text2 font-medium justify-center items-center gap-6 text-whiteCustom border-b border-orangeCustom pb-[2px] pl-[2px] lg:text-lg hover:scale-105 hover:text-whiteCustom duration-500">
              PROYECTO
              <img src={arrow} alt="arrow" className="w-6 -rotate-45" />
            </button>
          </Link>
        </div>
      </article>
      <ul className="flex flex-col gap-1 relative z-50 w-full mt-1 lg:self-end lg:pb-3">
        {artistsBtns?.map((artist, i) => (
          <Link to={`/Artista/${artist?.id}`}>
            <li
              key={i}
              ref={(el) => (artistRef.current[i] = el)}
              className="flex border-b border-orangeCustom pl-3 py-2 max-w-[500px] lg:max-w-[700px]"
            >
              <p className="font-title text-whiteCustom text-5xl w-[70%] lg:text-6xl xl:text-8xl 2xl:text-8xl">
                {artist?.name.toLocaleUpperCase()}
              </p>
              <div className="flex flex-col justify-end text-grayCustom text-sm font-text2 xl:text-base">
                {artist?.data1}
                <div>{artist?.data2}</div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default About;
