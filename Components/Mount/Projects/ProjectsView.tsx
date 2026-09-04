"use client";
import { MdGridView } from "react-icons/md";
import { FaList } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ProjectCardsType } from "@/types/ProjectTypes";
import { skillsData } from "@/data/data";
import { scrollToSection } from "@/Utils/utils";

interface props {
  Projects: ProjectCardsType[];
}

const ProjectsView = ({ Projects }: props) => {
  const Route = useRouter();

  function Navigate(link: string) {
    Route.push(`/projects/${link}`);
  }

  const MaxVisibleProjects = 4;
  const ProjectsLength = Projects.length;
  const [islist, setislist] = useState(false);
  const [duration, setduration] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // console.log(isMobile);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = (key: string) => {
    setduration(0.13);
    if (!islist) {
      scrollToSection(key);
    }
    setislist((prev) => !prev);
  };

  if (!Projects || ProjectsLength === 0) return;
  return (
    <div id="Projects">
      <div
        className={`p-2 select-none rounded-md bg-white text-black dark:bg-black dark:text-white`}
      >
        <div>
          <div className="flex justify-between w-full mx-1 px-2">
            <span>
              <h1 className="font-bold text-xl">Featured</h1>
              <p className="text-xs xl:text-md pt-2">
                Click the Title or Description to expand or view Video demo
              </p>
            </span>
            <button
              className={`lg:block hidden scale-115 cursor-pointer hover:scale-120 transition-scale duration-200 ease-in-out`}
              onClick={() => handleClick(Projects[MaxVisibleProjects - 1].Link)}
            >
              <AnimatePresence mode="wait">
                {islist ? (
                  <motion.span
                    key={"grid-view"}
                    initial={{ x: 2, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -32, opacity: 0 }}
                    transition={{ ease: "backInOut", duration: 0.3 }}
                  >
                    <MdGridView />
                  </motion.span>
                ) : (
                  <div className="flex-center gap-2 pr-2">
                    <motion.span
                      key={"list-view"}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -12, opacity: 0 }}
                      transition={{ ease: "easeInOut", duration: 0.1 }}
                      className="dark:bg-blue-700 text-white bg-blue-500 rounded-2xl px-3 py-1 text-xs inset-shadow-2xs shadow-inner dark:shadow-blue-900"
                    >
                      {ProjectsLength - MaxVisibleProjects}+ projects
                    </motion.span>
                    <FaList />
                  </div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
        <section
          className={`project_section mt-4 gap-3 grid place-items-center h-full ${islist ? "grid-cols-1" : "xl:grid-cols-2"}`}
        >
          {Projects.sort((a, b) => a.orderIndex - b.orderIndex)
            .slice(0, islist && !isMobile ? MaxVisibleProjects : ProjectsLength)
            .map((item, i) => (
              <motion.div
                className={`project_comp relative bg-white dark:bg-black min-h-55 max-h-65 w-full h-65  overflow-hidden rounded-xl`}
                key={i}
                id={item.Link}
                layout
                whileInView={{
                  y: [20, 0],
                }}
                transition={{ duration: duration, ease: "easeInOut" }}
              >
                <div className="Image_comp h-[40%]">
                  <a
                    href={
                      item.links && item.links[0]?.url !== "none"
                        ? item.links[0].url
                        : undefined
                    }
                    className="h-full"
                    aria-disabled={item.links && item.links[0]?.url === "none"}
                  >
                    {item.image && (
                      <Image
                        src={item.image as string}
                        alt={item.title}
                        width={500}
                        height={500}
                        loading="eager"
                        quality={90}
                        className="object-cover object-center cursor-pointer hover:scale-105 scale-100 transition duration-300 ease-in-out w-full h-full"
                      />
                    )}
                  </a>
                </div>
                <div
                  className="p-3 select-none cursor-pointer md:text-[13px] text-[10px]"
                  onClick={() => Navigate(item.Link)}
                  title={"view details " + item.title}
                >
                  <h1 className="text-lg font-bold flex items-center gap-3">
                    {item.title}{" "}
                  </h1>
                  <span>{item.Description}</span>
                  {islist && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      {item.AdditionalDescription}
                    </motion.span>
                  )}
                </div>
                <div className="px-3 mt-3 flex gap-2 items-center justify-between mr-1 absolute w-full bottom-3 z-10">
                  <div className="flex gap-2 items-center">
                    {item.links &&
                      item.links.map(
                        (l, lindex) =>
                          l.label !== "none" && (
                            <a
                              key={lindex}
                              href={l.url}
                              target="_blank"
                              className={`${typeof l.label === "string" && "bg-blue-600 px-2 py-1 rounded-md text-xs text-white"}`}
                            >
                              {l.label}
                            </a>
                          ),
                      )}
                  </div>
                  <div className="flex gap-2 text-xs items-center">
                    {item.tags.map((p, index) => {
                      const Key = p
                        .trim()
                        .toLocaleLowerCase()
                        .replaceAll(/[ .]/g, "");
                      // console.log(Key);
                      const UITags = skillsData.items[Key];
                      return (
                        <div
                          key={index}
                          className={`p-1 rounded-md text-white bg-blue-700`}
                        >
                          {UITags ? UITags.Comp : p}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default ProjectsView;
