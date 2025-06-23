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

  return (
    <>
      <ReactLenis root ref={lenisRef} autoRaf={false} />
      <section className="bg-whiteCustom min-h-screen w-full font-text2">
        <Navbar />

        <section className="w-full h-[100dvh] md:h-screen flex flex-col md:flex-row">
          <div className="w-full h-[90dvh] md:w-1/2  bg-whiteCustom flex flex-col items-center justify-center">
            <article>
              <h6 className="font-title text-8xl md:text-8xl xl:text-[12rem] xl:leading-[12rem] text-stone-300">
                {artist.firstname + " "} <span className="text-orangeCustom">{artist.lastname}</span>
              </h6>
              <p className="text-stone-400 max-w-[600px] text-balance mt-6 md:mt-10">
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

          <section className="w-full h-[50dvh] md:w-1/2 md:h-screen flex flex-col justify-end">
            <div className="w-[90%] self-end h-[1dvh] bg-grayCustom "></div>
            <div className="w-full h-[50dvh] bg-orangeCustom "></div>
          </section>
        </section>

        <section className="w-full relative py-24 text-stone-300 bg-blackCustom flex justify-end items-center">
          <p className="w-1/2 relative z-50 px-12 self-end text-balance text-grayCustom">{artist.description3}</p>
          <div className="absolute left-0 z-5 bg-grayCustom w-[50%] h-full"></div>
        </section>
        {/* Images Section */}
        <section
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 my-[200px] mb-[400px]"
        >
          {artistImages.map((img, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative w-full h-[80vh] rounded-xl overflow-hidden" // Altura fija en vh
            >
              <figure className="absolute inset-0 overflow-hidden z-10">
                <img
                  src={img}
                  alt={`Artist work ${index + 1}`}
                  className="card-cover w-full h-auto min-h-full object-cover absolute top-0 left-0"
                  loading="lazy"
                />
              </figure>
            </div>
          ))}
        </section>

        <footer className="h-[50dvh] w-full bg-grayCustom flex items-center justify-center">
          <p></p>
          <p></p>
        </footer>
      </section>
    </>
  );
};

export default ArtistDetail;
