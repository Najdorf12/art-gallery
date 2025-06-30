import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import arrow from "/arrow-orange.png";
import ImageZoom from "react-image-zooom";
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
      <section className="bg-blackCustom w-full font-text2 overflow-hidden ">
        <Navbar />
        <section className="relative w-full h-screen flex flex-col md:flex-row">
          <section className="w-full h-[70vh] pl-[5%] md:h-screen xl:pl-0 md:w-[55%] bg-whiteCustom  flex flex-col items-center justify-center">
            <article className="">
              <h6 className="font-title -mt-16 text-8xl md:text-8xl lg:text-[9rem]  xl:text-[12rem] xl:leading-[12rem] text-stone-300">
                {artist.firstname + " "}{" "}
                <span className="text-orangeCustom">{artist.lastname}</span>
              </h6>
              <p className="text-stone-400 text-sm pr-4 max-w-[660px] text-balance mt-6 md:mt-10 lg:text-base">
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

          <section className="w-full h-[30vh] md:w-1/2  md:h-screen flex flex-col items-end justify-end">
            <div className="w-[85%] md:w-full h-[40vh] rounded-tl-lg  flex justify-center items-end">
              <p className="font-title text-orangeCustom text-5xl leading-[3.2rem] md:text-7xl md:leading-[4.8rem] text-end text-balance pb-8 px-3 md:px-8 xl:pb-7 ">
                * {artist.quote1} *
              </p>
            </div>
          </section>
        </section>

        {/* DESCRIPTION3 */}
        <section className="w-full relative py-12 md:py-20 text-stone-300 bg-whiteCustom flex justify-end items-center">
          <div className="w-[80%] relative z-50 self-end text-pretty text-stone-400 text-sm px-4 lg:pr-32 lg:w-[70%] lg:text-base">
            {artist.description2}
          </div>
          <div className="absolute left-0 z-5 bg-blackCustom w-[15%] h-full lg:w-[25%]"></div>
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
            <section
              ref={modalRef}
              className="fixed inset-0 z-[500] h-screen flex items-center justify-center bg-whiteCustom px-2 overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute -top-5 right-2 z-50 text-7xl text-orangeCustom md:right-6 md:-top-2 xl:-top-6 xl:text-8xl"
              >
                ×
              </button>

              <div className="relative w-full pt-10  flex flex-col gap-4 lg:flex-row lg:pt-4 lg:pl-[12%] lg:gap-10 lg:items-center lg:justify-center ">
                <div ref={imgRef} className="flex justify-center items-center ">
                  <ImageZoom
                    src={selectedImage?.image}
                    alt="obra-img"
                    zoom="300"
                    className="max-w-[900px] rounded-lg"
                  />
                </div>
                <div ref={textRef} className="text-end pr-3 lg:text-start max-w-[400px]">
                  <p className="text-balance font-title text-grayCustom text-6xl leading-16 md:leading-24 md:text-8xl">
                    {selectedImage.name}
                  </p>
                  <ul className="mt-4 font-text2 flex flex-col gap-2 text-stone-500 text-sm md:text-base md:mt-16 md:gap-3">
                    <li>{selectedImage.description.tecnica}</li>
                    <li className="font-text3">
                      {selectedImage.description.medidas} cm
                    </li>
                    <li>{selectedImage.description.autor}</li>
                  </ul>
                </div>
              </div>
            </section>
          )}
        </section>
      </section>
    </>
  );
};

export default ArtistDetail;
