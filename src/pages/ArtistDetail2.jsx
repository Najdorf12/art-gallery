import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import arrow from "/arrow-orange.png";
import { ReactLenis } from "lenis/react";
import Slider from "../components/Slider";

gsap.registerPlugin(ScrollTrigger);

const ArtistDetail = ({ artistsData }) => {
  const { id } = useParams();
  const lenisRef = useRef();
  const modalRef = useRef();

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
        x: 200,
        scale: 1,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
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
                {artist.description2}
              </p>
              <Link>
                <button className="flex font-text2 font-medium justify-center items-center gap-6 text-orangeCustom mt-9 border-b border-orangeCustom pb-[2px] pl-[2px] lg:text-lg hover:scale-105 hover:text-whiteCustom duration-500">
                  Visitar sitio
                  <img src={arrow} alt="arrow" className="w-6 -rotate-45" />
                </button>
              </Link>
            </article>
          </section>

          <section className="w-full h-[40dvh] md:w-1/2 md:h-screen flex flex-col items-end justify-end">
            <div className="w-[30%] md:w-[90%] h-[1dvh] bg-grayCustom "></div>
            <div className="w-[50%] md:w-full h-[50dvh] bg-orangeCustom "></div>
          </section>
        </section>

        {/* DESCRIPTION3 */}
        <section className="w-full relative py-12 md:py-24 text-stone-300 bg-blackCustom flex justify-end items-center">
          <div className="w-[90%] relative z-50 self-end text-balance text-grayCustom text-sm px-4 lg:pr-32  lg:w-[70%] lg:text-base">
            {artist.description3}
          </div>
          <div className="absolute left-0 z-5 bg-grayCustom w-[5%] h-full lg:w-[25%]"></div>
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
            <div className="fixed inset-0 z-[500] h-screen flex items-center justify-center bg-blackCustom px-3">
              <button
                onClick={closeModal}
                className="absolute -top-5 right-2 z-50 text-7xl text-orangeCustom md:right-6 md:-top-2 xl:text-8xl"
              >
                ×
              </button>

              <div
                ref={modalRef}
                className="relative max-w-6xl w-full p-1 mt-6 md:mt-0"
              >
                <article className="p-2">
                  <div className="flex flex-col md:flex-row gap-8 md:items-start md:justify-center ">
                    <div className="">
                      <img
                        src={selectedImage.image}
                        alt={selectedImage.name}
                        className="w-full object-contain h-auto max-h-[470px] md:h-auto md:max-h-[900px] max-w-[520px] rounded-sm"
                      />
                    </div>
                    <div className=" pl-1 md:pt-14 md:pl-6 xl:pt-16">
                      <h6 className="text-6xl leading-10 font-title text-stone-300 md:text-8xl xl:text-9xl">
                        {selectedImage.name}
                      </h6>
                      <ul className="mt-8 flex flex-col gap-2 text-stone-400 text-sm md:text-base md:mt-16 md:gap-3 lg:mt-20">
                        <li>{selectedImage.description.detail1}</li>
                        <li>{selectedImage.description.detail2}</li>
                        <li>{selectedImage.description.detail3}</li>
                        <li>{selectedImage.description.detail4}</li>
                        <li>{selectedImage.description.detail5}</li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          )}
        </section>

        {/*    <section className="flex items-center justify-center relative">
            <div className="absolute bottom-2 right-2 flex items-center gap-12 lg:right-24">
              <figure className="w-6 md:w-12 ">
                <img className="w-full h-full rotate-180" src={arrow} alt="" />
              </figure>
              <figure className="w-6 md:w-12 ">
                <img className="w-full h-full" src={arrow} alt="" />
              </figure>
          </div>
        </section> */}
      </section>
    </>
  );
};

export default ArtistDetail;
