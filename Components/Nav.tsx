"use client";
import { MdLightMode } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { useAppContext } from "@/Context/AppContext";
import { scrollToSection } from "@/Utils/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { BiSolidNotepad } from "react-icons/bi";

const Nav = () => {
  const { inView } = useAppContext();

  const pathname = usePathname();
  const ShowNav: boolean = pathname == "/";

  const navlist = [
    { id: "About", logo: <IoPerson size={15} /> },
    { id: "Projects", logo: <GoProjectSymlink size={15} /> },
    { id: "Journal", logo: <BiSolidNotepad size={15} /> },
  ];

  const { resolvedTheme, setTheme } = useTheme();
  const handleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`sticky top-2 border border-gray-300/10 ${ShowNav ? "translate-y-0" : "-translate-y-50 h-0 "}  left-2/8 z-50 max-h-20 backdrop-blur-xl p-2 rounded-md bg-blue-500/15  dark:bg-gray-200/10 transition-bg duration-400 ease-in-out max-w-350 2xl:max-w-[50vw]`}
    >
      <div className="flex justify-between items-center mx-2">
        <h1
          className={`md:text-xl text-md font-extrabold tracking-[2px] text-blue-400 dark:text-white`}
        >
          <Link
            href="/"
            className={`${!inView && "opacity-100 cursor-pointer"} opacity-0 cursor-default transition-opacity duration-600 ease-in-out`}
          >
            <span className="font-extralight font-mono leading-relaxed">
              &lt;<span>A</span>/&gt;
            </span>
          </Link>
        </h1>
        <div className={`text-black dark:text-white flex items-center gap-3`}>
          {navlist.map((i, index) => (
            <span
              key={index}
              onClick={() => scrollToSection(i.id)}
              className="hover:scale-110 cursor-pointer relative group"
              title={i.id}
            >
              {i.logo}
            </span>
          ))}
          <button
            aria-label="L/D mode"
            onClick={handleTheme}
            className={`p-2 hover:bg-blue-500/20 transition-all ease-in-out rounded-sm cursor-pointer`}
          >
            <MdLightMode
              className={`scale-110 text-blue-500 dark:text-white transtion duration-300 ease-in-out`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
