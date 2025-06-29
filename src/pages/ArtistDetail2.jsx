import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import arrow from "/arrow-orange.png";
import BtnPrimary from "../components/BtnPrimary";
import { ReactLenis } from "lenis/react";
import Slider from "../components/Slider";

gsap.registerPlugin(ScrollTrigger);

const ArtistDetail = ({ artistsData }) => {
  const { id } = useParams();
  const lenisRef = useRef();
  const modalRef = useRef();
  const imgRef = useRef();
  const textRef = useRef();

  const artist = artistsData.find((artist) => artist.id === id);
  const artistImages = artist.obras.map((obra) => obra.image);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  useLayoutEffect(() => {
    if (showModal) {
      // Animación de entrada
      gsap.from(modalRef.current, {
        y: "100%",
        borderTopLeftRadius: "60%",
        borderTopRightRadius: "60%",
        scale: 1,
        duration: 0.7,
        ease: "power1",
      });
      gsap.from(textRef.current, {
        x: -60,
        opacity: 0,
        delay: 0.6,
        scale: 1,
        duration: 1,
        ease: "power1",
      });
      gsap.from(imgRef.current, {
        x: 60,
        opacity: 0,
        delay: 0.6,
        duration: 1,
        ease: "power1",
      });
    }
  }, [showModal]);

  const handleSelectedImage = (imgObra) => {
    setSelectedImage(imgObra);
    setShowModal(true);
  };

  const closeModal = () => {
    // Animación de salida
    gsap.to(modalRef.current, {
      opacity: 1,
      duration: 0.1,
      ease: "power2.in",
      onComplete: () => {
        setShowModal(false);
        setSelectedImage(null);
      },
    });
  };

  return (
    <>
      <ReactLenis root ref={lenisRef} autoRaf={false} />
      <section className="bg-whiteCustom w-full font-text2 overflow-hidden">
        <Navbar />

        <section className="relative w-full h-screen flex flex-col md:flex-row">
          <section className="w-full h-[60vh] pt-2 pl-[5%] md:h-[90vh] xl:pl-0 md:w-1/2 bg-whiteCustom flex flex-col items-center justify-center">
            <article>
              <h6 className="font-title text-8xl md:text-8xl lg:text-[12rem] lg:leading-[12rem] text-stone-300">
                {artist.firstname + " "}{" "}
                <span className="text-orangeCustom">{artist.lastname}</span>
              </h6>
              <p className="text-stone-400 text-sm pr-3 max-w-[600px] text-balance mt-6 md:mt-10 lg:text-base">
                {artist.description}
              </p>
              <Link>
                <button className="flex font-text2 font-medium justify-center items-center gap-6 text-orangeCustom mt-6 xl:mt-8 border-b border-orangeCustom pb-[2px] pl-[2px] lg:text-lg duration-500 dark:text-grayCustom dark:border-orangeCustom group cursor-pointer">
                  <span className="group-hover:translate-x-3 duration-300">
                    Visitar sitio
                  </span>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-6 -rotate-45 group-hover:rotate-0 group-hover:translate-x-3 duration-300"
                  />
                </button>
              </Link>
            </article>
          </section>

          <section className="w-full h-[40dvh] md:w-1/2 md:h-screen flex flex-col items-end justify-end">
            <div className="w-[30%] md:w-[90vh] h-[1vh] bg-grayCustom "></div>
            <div className="w-[85%] md:w-full h-[40vh] bg-orangeCustom flex justify-center items-end">
              <p className="font-title text-whiteCustom  text-4xl md:text-7xl text-end pb-6 px-3 md:px-10 text-balancee">
                {artist.quote1}
              </p>
            </div>
          </section>
        </section>

        {/* DESCRIPTION3 */}
        <section className="w-full relative py-12 md:py-24 text-stone-300 bg-blackCustom flex justify-end items-center">
          <div className="w-[90%] relative z-50 self-end text-balance text-grayCustom text-sm px-4 lg:pr-32  lg:w-[70%] lg:text-base">
            {artist.description2}
          </div>
          <div className="absolute left-0 z-5 bg-whiteCustom w-[5%] h-full lg:w-[25%]"></div>
        </section>

        {/* Images Section */}
        <section className="w-full relative flex items-center justify-center mt-16">
          <div className="lg:h-[95vh]">
            <Slider
              obras={artist?.obras}
              handleSelectedImage={handleSelectedImage}
            />
          </div>

          {showModal && selectedImage && (
            <div
              ref={modalRef}
              className="fixed inset-0 z-[500] h-screen flex items-center justify-center bg-blackCustom px-3"
            >
              <button
                onClick={closeModal}
                className="absolute -top-5 right-2 z-50 text-7xl text-orangeCustom md:right-6 md:-top-2 xl:text-8xl"
              >
                ×
              </button>

              <div className="relative max-w-6xl w-full p-1 mt-7 md:mt-0">
                <article className="p-2">
                  <div className="flex flex-col md:flex-row gap-8 md:items-start md:justify-center ">
                    <div className="">
                      <img
                        ref={imgRef}
                        src={selectedImage.image}
                        alt={selectedImage.name}
                        className="w-full object-contain h-auto max-h-[470px] md:h-auto md:max-h-[680px] max-w-[520px] rounded-sm"
                      />
                    </div>
                    <div
                      ref={textRef}
                      className="pl-1 md:pl-12 md:pt-32 relative"
                    >
                     {/*  <div className="w-[100%] h-[1px] bg-orangeCustom absolute -bottom-2 md:-bottom-9"></div>
                      <div className="w-[30%] h-[1px] bg-orangeCustom absolute -top-5 md:top-12"></div> */}
                      <h6 className="text-6xl leading-10 font-title text-whiteCustom md:leading-24 md:text-8xl xl:leading-32 text-balance xl:text-9xl">
                        {selectedImage.name}
                      </h6>
                      <ul className="mt-8 flex flex-col gap-2 text-stone-500 text-sm md:text-base md:mt-16 md:gap-3 lg:mt-20">
                        <li>{selectedImage.description.tecnica}</li>
                        <li className="font-text3">{selectedImage.description.medidas} cm</li>
                        <li>{selectedImage.description.autor}</li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          )}
        </section>

    
      </section>
    </>
  );
};

export default ArtistDetail;
