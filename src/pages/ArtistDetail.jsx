import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import arrow from "/arrow-orange.png";
import { ReactLenis } from "lenis/react";
gsap.registerPlugin(ScrollTrigger);

const ArtistDetail = ({ artistsData }) => {
  const { id } = useParams();
  const artist = artistsData.find((artist) => artist.id === id);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const lenisRef = useRef();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageSelected, setSelectedImage] = useState(null);

  const artistImages = artist.obras.map((obra) => obra.image);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  useEffect(() => {
    // Esperar a que todas las imágenes se carguen
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

  useEffect(() => {
    if (!imagesLoaded) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const cover = card.querySelector(".card-cover");
        const img = cover;
        const containerHeight = card.offsetHeight;
        const imgHeight = img.naturalHeight;

        // Calcular el movimiento necesario
        const movement = imgHeight - containerHeight;
        const movementPercent = (movement / containerHeight) * 100;

        // Ajustar dinámicamente la altura de la imagen
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

  if (imageSelected !== null)
    return (
      <div className="w-full h-[100dvh] md:h-screen bg-blackCustom">
        <button
          onClick={() => setSelectedImage(null)}
          className="w-12 h-12 absolute top-3 right-3 bg-orangeCustom z-50 text-xl text-whiteCustom"
        >
          X
        </button>
        <figure className="z-10 w-full h-screen xl:h-auto">
          <img
            src={imageSelected}
            alt="img-artist"
            className="card-cover w-full h-full min-h-full object-cover object-center absolute top-0 left-0"
            loading="lazy"
          />
        </figure>
      </div>
    );

  return (
    <>
      <ReactLenis root ref={lenisRef} autoRaf={false} />
      <section className="bg-whiteCustom w-full font-text2">
        <Navbar />

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
            {/*    <div className="flex items-center justify-start mt-12 gap-6">
              <div className="flex items-center font-text gap-2">
                <i className="bxr bx-phone text-xl"></i>
                {artist.phone}
              </div>
              <div className="flex items-center font-text gap-2">
                <i class="bxr  bx-envelope text-xl"></i>
                {artist.email}
              </div>
            </div> */}
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
              className="relative w-full h-[80vh] rounded-xl overflow-hidden"
              onClick={() => setSelectedImage(img)} // Altura fija en vh
            >
              <figure className="absolute inset-0 overflow-hidden z-10">
                <img
                  src={img}
                  alt={`Artist work ${index + 1}`}
                  className="card-cover w-full h-auto min-h-full object-cover object-center absolute top-0 left-0"
                  loading="lazy"
                />
              </figure>
              {/* <div className="absolute w-12 -rotate-45 bottom-1 right-2 z-[600]">
                <img src={arrow} alt="" />
              </div> */}
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
