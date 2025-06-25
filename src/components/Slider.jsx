import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import "./slider.css";

export default function Slider({ obras, handleSelectedImage }) {
  const [windWidth, setWindWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="wrapper-slider z-50 ">
        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={3}
            slidesPerView={"auto"}
            spaceBetween={windWidth < 1000 ? 40 : 120}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 270,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".forward",
              prevEl: ".backward",
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {obras?.map((obra, i) => (
              <SwiperSlide key={i} onClick={() => handleSelectedImage(obra)}>
                <img src={obra?.image} alt={obra.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </section>
    </>
  );
}
