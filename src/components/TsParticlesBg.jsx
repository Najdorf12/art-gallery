import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


const TsParticlesBg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        detect_on: "canvas",
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: {
            enable: true,
            mode: "attract",
            parallax: { enable: false, force: 60, smooth: 20 },
          },
          resize: true,
        },
        modes: {
          push: { quantity: 7 },
          attract: { distance: 190, duration: 7, factor: 5 },
        },
      },
      particles: {
        color: { value: "#878787" },
        links: {
          color: "#ffffff",
          distance: 180,
          enable: true,
          opacity: 0.4,
          width: .8,
        },
        move: {
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
          bounce: false,
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: false,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true, area: 100 }, value: 100 },
        opacity: {
          animation: { enable: false, minimumValue: 0.1, speed: 6, sync: false },
          random: false,
          value: 0.5,
        },
        shape: {
          type: "circle",
          stroke: { color: "#212121", width: 0 },
        },
        size: {
          animation: { enable: false, minimumValue: 0.2, speed: 90, sync: false },
          random: true,
          value: 3.5,
        },
      },
      retina_detect: true,
    }),
    []
  );

  return (
    <div className="absolute inset-0">
      {init && <Particles id="tsparticles" options={options} />}
    </div>
  );
};

export default TsParticlesBg;
