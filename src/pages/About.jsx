import arrow from "/arrow.png";

const artistsBtns = [
  {
    name: "Laura Aguirre",
    data1: "Lorem impsum",
    data2: "Lorem impsum",
  },
  {
    name: "Edu Hinojosa",
    data1: "Lorem impsum",
    data2: "Lorem impsum",
  },
  {
    name: "La Fabrika",
    data1: "Lorem impsum",
    data2: "Lorem impsum",
  },
];

const About = ({ handleButtonClick }) => {
  return (
    <section className="flex flex-col  h-screen justify-evenly pt-3 lg:flex-row lg:items-center">
      <article className="flex flex-col justify-start items-start relative z-50 w-full cursor-default lg:max-w-[60%] lg:self-start lg:mt-28">
        <h1 className="august-bold leading-none text-zinc-300 text-8xl lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem]">
          <span className="text-redCustom">N</span>OSOTROS
        </h1>
        <div className="w-12 h-[1px] bg-grayCustom mt-3  lg:w-[300px] lg:mt-6"></div>
        <p className="text-sm text-grayCustom font-text2 font-medium text-balance mt-4 lg:text-base lg:mt-6 max-w-[660px]  2xl:text-xl 2xl:max-w-[700px]">
          Cada uno de ellos es un activo creador y gestor en la escena
          contemporánea de arte en Chile, desarrollando en su particularidad una
          investigación teórica y técnica sostenida en el tiempo que comparte en
          su narrativa un claro enfoque hacia la construcción de un universo
          visual latinoamericano.
        </p>
        <div className="flex justify-start items-center gap-9 mt-9 lg:gap-10 z-50 relative">
          <button
            onClick={() => handleButtonClick("project")}
            className="flex justify-center items-center gap-3 text-whiteCustom border-b border-grayCustom pb-1 pl-1 lg:text-lg hover:scale-105 hover:text-whiteCustom duration-500"
          >
            PROYECTO
            <img src={arrow} alt="arrow" className="w-3" />
          </button>
          <button
            onClick={() => handleButtonClick("whatWeDo")}
            className="flex justify-center items-center gap-3 text-grayCustom border-b border-grayCustom pb-1 pl-1 lg:text-lg hover:scale-105 hover:text-whiteCustom duration-500 "
          >
            QUE HACEMOS?
            <img src={arrow} alt="arrow" className="w-3" />
          </button>
        </div>
      </article>
      <ul className="flex flex-col gap-1 relative z-50 w-full mt-1 lg:self-end lg:pb-3">
        {artistsBtns?.map((artist, i) => (
          <li
            key={i}
            className="flex  border-b border-grayCustom py-2 max-w-[500px] lg:max-w-[700px]"
          >
            <p className="august-bold text-zinc-300 text-5xl w-[70%] lg:text-6xl xl:text-7xl 2xl:text-8xl">
              {artist?.name.toLocaleUpperCase()}
            </p>
            <div className="flex flex-col justify-between text-grayCustom text-sm font-text xl:text-base">
              {artist?.data1}
              <div>{artist?.data2}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
