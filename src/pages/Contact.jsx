import { useForm } from "react-hook-form";
import TsParticlesBg from "../components/TsParticlesBg";
import ThemeToggle from "../components/ThemeToggle";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const titleRef = useRef();
  const subtitleRef = useRef();
  const textRef = useRef();
  const formRef = useRef();

  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 0.7, ease: "power1.out" },
    });

    timeline
      .fromTo(titleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(formRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(subtitleRef.current, { x: -40, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo(
        textRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1 },
        "<"
      );
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://galeria-invisible-backend.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (response.ok) {
        console.log("Correo enviado:", result);
      } else {
        console.error("Error al enviar el correo:", result.error);
      }
    } catch (err) {
      console.error("Error en la solicitud:", err);
    }
  };

  return (
    <>
      <section className="pt-20 relative h-[100dvh] md:h-screen w-full bg-blackCustom flex flex-col lg:flex-row lg:pt-24 dark:bg-whiteCustom 2xl:pt-28">
        <TsParticlesBg />
        <Navbar />
        <ThemeToggle />
        <article className="z-50 text-center self-center lg:pl-[9%] lg:text-start lg:w-1/2 lg:self-start ">
          <h6
            ref={titleRef}
            id="split"
            className="text-8xl text-orangeCustom font-medium font-title md:text-9xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[16rem]"
          >
            <span className="text-whiteCustom dark:text-grayCustom">C</span>
            ONTACTO
          </h6>
          <div className="z-50 px-4 font-text2 text-balance max-w-[500px] mt-6 2xl:mt-8">
            <div className=" text-start self-start text-lg xl:text-xl 2xl:text-3xl text-stone-400">
              HABLEMOS AHORA
            </div>
            <div className="bg-orangeCustom w-44 h-[1px] z-50 relative mt-1 xl:w-[430px] 2xl:mt-2  2xl:w-[300px]"></div>
            <p
              ref={subtitleRef}
              style={{ animation: "appear 3s ease-out" }}
              className="text-start text-grayCustom text-sm mt-3 md:text-base lg:mt-5 xl:mt-6 2xl:text-lg 2xl:mt-7 2xl:w-[700px]"
            >
              Para consultas sobre exposiciones, adquisición de obras o
              colaboraciones institucionales, contáctenos a través de este
              formulario o directamente a
              <span className="text-orangeCustom pl-1">
                info@galeriaenmovimiento.com
              </span>
              .
              {/* 
               - Oficina de gestión: Madrid | Representantes en Valparaíso, Barcelona y Berlín. 
               -Redes de distribución en Europa y América Latina.
               - Agentes culturales, galerías y coleccionistas: para incluir estas obras en su 
                circuito artístico o recibir el dossier completo del proyecto, contáctenos. 
              -   Representación artística disponible para museos, galerías y coleccionistas. 
                  Horario de contacto: Lunes a Viernes de 10:00 a 18:00 CET.
  */}
            </p>
          </div>
        </article>

        <section className="w-full flex flex-col justify-center items-center mt-5 font-text2 relative z-50 lg:w-1/2 lg:self-end lg:pb-20 lg:pr-24 2xl:self-center 2xl:mt-[20%]">
          <div
            style={{ animation: "slideInFromLeft 1s ease-out" }}
            className="w-full relative rounded-md  overflow-hidden flex flex-col px-5 max-w-[500px] 2xl:max-w-[600px]"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
              action="#"
              className="py-8 font-text flex flex-col gap-7 xl:gap-8 2xl:gap-12 2xl:text-lg"
            >
              <div className="relative">
                <input
                  autoComplete="off"
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-orangeCustom text-white bg-transparent placeholder-transparent focus:outline-none focus:border-grayCustom"
                  required=""
                  id="email"
                  name="email"
                  type="email"
                  {...register("email")}
                />
                <label
                  className="absolute left-0 -top-3.5 text-orangeCustom text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-orangeCustom peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm"
                  for="email"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <textarea
                  autoComplete="off"
                  placeholder=""
                  className="peer h-10 pt-2 w-full border-b-2 border-orangeCustom text-white bg-transparent placeholder-transparent focus:outline-none focus:border-grayCustom"
                  required=""
                  {...register("message")}
                />
                <label
                  className="absolute left-0 -top-3.5 text-orangeCustom text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-orangeCustom peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm"
                  htmlForfor="password"
                >
                  Escribe tu mensaje
                </label>
              </div>

              <button
                className="w-full py-2 px-4 bg-orangeCustom rounded-md text-whiteCustom font-semibold transition duration-500 hover:bg-transparent"
                type="submit"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
          <div
            ref={textRef}
            id="text-reveal2"
            className="relative z-50 text-grayCustom font-text2 text-center text-balance mt-5 text-sm px-4 lg:text-base xl:mt-4  2xl:text-lg"
          >
            Redes de distribución en Europa y América Latina. <br />
            Oficina de gestión: Madrid | Representantes en Valparaíso, Barcelona
            y Berlín.
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
