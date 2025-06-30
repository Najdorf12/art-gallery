import arrow from "/arrow-orange.png";

const BtnPrimary = ({ btnName }) => {
  return (
    <button className="flex font-text2 font-medium justify-center items-center gap-6 text-whiteCustom border-b border-orangeCustom pb-[2px] pl-[2px] lg:text-lg 2xl:text-xl 3xl:text-2xl 2xl:gap-12 hover:text-orangeCustom duration-500 dark:text-grayCustom dark:border-orangeCustom group cursor-pointer">
      <span className="group-hover:translate-x-3 duration-300">{btnName}</span>
      <img
        src={arrow}
        alt="arrow"
        className="w-6 -rotate-45 group-hover:rotate-0 group-hover:translate-x-3 duration-300"
      />
    </button>
  );
};

export default BtnPrimary;
