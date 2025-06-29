import { useTheme } from "../ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full focus:outline-none z-[690] absolute top-1.5 right-1.5 text-orangeCustom text-xl lg:text-2xl md:top-3 md:right-7"
      aria-label={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
    >
      {theme === "light" ? (
        <i className="bxr  bx-brightness"></i>
      ) : (
        <i class="bxr  bx-moon"></i>
      )}
    </button>
  );
};

export default ThemeToggle;
