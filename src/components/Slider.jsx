import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import "./slider.css"

export default function Slider({ obras }) {
  const [windWidth, setWindWidth] = useState(window.innerWidth)
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
            spaceBetween={windWidth < 1000 ? 40 : 120  }
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
            {obras?.map((obra,i) => (
              <SwiperSlide key={i}>
                <img src={obra?.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </section>
    </>
  );
}
{
  /*  */
}