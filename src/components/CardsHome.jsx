import { Link } from "react-router-dom";

const CardsHome = ({ artist }) => {
  return (
    <Link to={`/artist/${artist?.id}`}>
      <div className="relative z-50 border-l-[2px] border-b-[2px] border-stone-700 w-[180px] rounded-sm h-[114px] pl-3 pt-2  lg:pl-3 lg:w-[220px] lg:h-[133px] xl:w-[255px] xl:h-[154px]  2xl:w-[280px] 2xl:h-[178px] hover:border-stone-300 duration-700 cursor-pointer group">
        <figure>
          <img
            src={artist?.icon}
            alt="icon"
            className="w-10 h-10 object-cover object-center rounded-full lg:w-12 lg:h-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 group-hover:scale-110  duration-700 border "
          />
        </figure>
        <article className="text-sm mt-4  md:text-balance lg:text-base xl:mt-5 xl:text-lg 2xl:mt-7  2xl:text-lg">
          <div className="w-full h-[1px] bg-stone-700 "></div>
          <h6 className="text-whiteCustom font-text font-medium text-base mt-1 lg:mt-2  xl:text-xl 2xl:text-2xl">
            {artist?.firstname} {artist?.lastname}
          </h6>
          <p className="text-[13px] text-stone-500 font-text2 leading-3 lg:text-base lg:mt-1 lg:leading-5 2xl:text-lg ">
            {artist?.contentHome}
          </p>
        </article>
      </div>{" "}
    </Link>
  );
};

export default CardsHome;
