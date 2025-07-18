import { Link } from "react-router-dom";
import arrowOrange from "/arrow-orange.png";

const CardsHome = ({ artist }) => {
  return (
    <Link to={`/Artista/${artist?.id}`}>
      <div className="relative z-50 border-l-[2px] border-b-[2px] border-stone-600 w-[180px] rounded-sm h-[110px] sm:h-[120px] pl-3 pt-2 lg:pl-3 lg:w-[220px] lg:h-[133px] xl:w-[280px] xl:h-[154px] 2xl:w-[310px] 2xl:h-[178px] hover:border-stone-300 duration-1000 cursor-pointer group dark:border-stone-300 hover:-translate-y-6 ">
        <figure>
          <img
            src={artist?.icon}
            alt="icon"
            className="w-10 h-10 object-cover object-center rounded-full lg:w-12 lg:h-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 group-hover:scale-120 duration-1000 border border-stone-400 group-hover:translate-x-[200px]"
          />
        </figure>
        <article className="text-sm mt-2 sm:mt-4  md:text-balance lg:text-base xl:mt-5 xl:text-lg 2xl:mt-7  2xl:text-lg">
          <div className="w-full h-[1px] bg-stone-600 dark:bg-stone-400"></div>
          <h6 className="text-whiteCustom font-text2 text-base mt-1 lg:mt-2  xl:text-xl 2xl:text-2xl dark:text-grayCustom">
            {artist?.firstname} {artist?.lastname}
          </h6>
          <p className="text-[13px] text-stone-500 font-text2 leading-3 lg:text-base mt-1 lg:leading-5 2xl:text-lg dark:text-stone-400">
            {artist?.contentHome}
          </p>
        </article>
        <figure className="w-6 md:w-7 p-1 absolute bottom-1 -right-2 md:bottom-1 md:-right-2 -rotate-45 group-hover:translate-x-3 group-hover:rotate-0 duration-1000">
          <img src={arrowOrange} alt="" />
        </figure>
      </div>{" "}
    </Link>
  );
};

export default CardsHome;
