import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-[600] w-full flex justify-start  items-center pt-1 lg:justify-end lg:pt-3  2xl:pt-4 overflow-hidden">
      <ul className=" w-full flex flex-row justify-center items-center gap-5 font-text3 font-medium text-grayCustom text-sm  lg:gap-12 lg:text-lg xl:gap-16 ">
        <Link to={"/"}>
          <li className="hover:text-whiteCustom duration-700 cursor-pointer hover:scale-110">
            Inicio
          </li>
        </Link>
        <Link to={"/Proyecto"}>
          <li className="hover:text-whiteCustom duration-700 cursor-pointer hover:scale-110">
            Proyecto
          </li>
        </Link>
        <Link to={"/SobreNosotros"}>
          <li className="hover:text-whiteCustom duration-700 cursor-pointer hover:scale-110">
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
