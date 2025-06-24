import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import arrow from "/arrow-orange.png";
import { ReactLenis } from "lenis/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

gsap.registerPlugin(ScrollTrigger);

const ArtistDetail = ({ artistsData }) => {
  const { id } = useParams();
  const artist = artistsData.find((artist) => artist.id === id);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const lenisRef = useRef();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);

  const artistImages = artist.obras.map((obra) => obra.image);

  // Configuración de Lenis
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  // Carga de imágenes
  useEffect(() => {
    const loadImages = () => {
      const promises = artistImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(promises).then(() => setImagesLoaded(true));
    };

    loadImages();
  }, [artistImages]);

  // Animaciones GSAP
  useLayoutEffect(() => {
    if (!imagesLoaded) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const cover = card.querySelector(".card-cover");
        const img = cover;
        const containerHeight = card.offsetHeight;
        const imgHeight = img.naturalHeight;

        const movement = imgHeight - containerHeight;

        gsap.set(cover, {
          height: `${imgHeight}px`,
          y: movement > 0 ? 0 : "50%",
        });

        gsap.to(cover, {
          y: movement > 0 ? -movement : 0,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      // Animación de entrada
      gsap.from(cardsRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, cardsContainerRef);

    return () => ctx.revert();
  }, [imagesLoaded]);

  // Efecto para el modal
  useLayoutEffect(() => {
    if (selectedImage) {
      // Pausar Lenis cuando el modal está abierto
      lenisRef.current?.lenis?.stop();
      // Animación de entrada del modal
      gsap.from(modalRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      // Reanudar Lenis cuando el modal se cierra
      lenisRef.current?.lenis?.start();
    }
  }, [selectedImage]);

  const closeModal = (e) => {
    e?.stopPropagation(); // Evitar que el evento se propague al Zoom
    setSelectedImage(null);
  };

  return (
    <>
      <ReactLenis root ref={lenisRef} autoRaf={false} />
      <section className="bg-whiteCustom w-full font-text2">
        <Navbar />

        {/* Modal con Zoom */}
        {selectedImage && (
          <div
            ref={modalRef}
            className="fixed inset-0 bg-whiteCustom bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-orangeCustom z-50 text-xl text-whiteCustom hover:bg-orange-600 transition-colors"
            >
              X
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <Zoom zoomMargin={40}>
                <img
                  src={selectedImage}
                  alt="img-artist"
                  className="max-w-full max-h-screen object-contain"
                  style={{ cursor: "zoom-in" }}
                />
              </Zoom>
            </div>
          </div>
        )}

        {/* Contenido principal */}
        <section className="w-full h-screen flex flex-col md:flex-row">
          <div className="w-full h-[60vh] pt-2 pl-[5%] md:h-[90vh] xl:pl-0 md:w-1/2 bg-whiteCustom flex flex-col items-center justify-center">
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
          </div>

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
        <section
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 px-1 md:px-5 my-[150px] mb-[300px]"
        >
          {artistImages.map((img, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative w-full h-[80vh] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <figure className="absolute inset-0 overflow-hidden z-10">
                <img
                  src={img}
                  alt={`Artist work ${index + 1}`}
                  className="card-cover w-full h-auto min-h-full object-cover object-center absolute top-0 left-0"
                  loading="lazy"
                />
              </figure>
            </div>
          ))}
        </section>

        <footer className="h-[50dvh] w-full bg-blackCustom flex items-center justify-center">
          <p></p>
          <p></p>
        </footer>
      </section>
    </>
  );
};

export default ArtistDetail;
