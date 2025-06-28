import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-[200] w-full flex justify-start items-center lg:justify-end pt-2 overflow-hidden lg:pt-3">
      <ul className=" w-full flex flex-row justify-center items-center gap-5 font-text2 text-grayCustom text-sm lg:gap-10 lg:text-lg xl:gap-14 ">
        <Link to={"/"}>
          <li className="hover:text-whiteCustom dark:hover:text-stone-400 duration-700 cursor-pointer hover:scale-110">
            Inicio
          </li>
        </Link>
        <Link to={"/Proyecto"}>
          <li className="hover:text-whiteCustom dark:hover:text-stone-400 duration-700 cursor-pointer hover:scale-110">
            Proyecto
          </li>
        </Link>
        <Link to={"/SobreNosotros"}>
          <li className="hover:text-whiteCustom dark:hover:text-stone-400 duration-700 cursor-pointer hover:scale-110">
            Sobre Nosotros
          </li>
        </Link>
        <Link to={"/contacto"}>
          <li className="text-orangeCustom duration-700 cursor-pointer hover:scale-110">
            Contacto
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
