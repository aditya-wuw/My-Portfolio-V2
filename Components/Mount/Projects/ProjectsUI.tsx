"use client";
import { MdGridView } from "react-icons/md";
import { FaList } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ProjectCardsType } from "@/types/ProjectTypes";
import { skillsData } from "@/data/data";

interface props {
  Projects: ProjectCardsType[];
}

const ProjectsUI = ({ Projects }: props) => {
  const Route = useRouter();

  function Navigate(link: string) {
    Route.push(`/projects/${link}`);
  }

  const [islist, setislist] = useState(false);
  const [duration, setduration] = useState(0);

  const handleClick = () => {
    setduration(0.13);
    setislist((prev) => !prev);
  };

  if (!Projects) return;
  return (
    <div id="Projects">
      <div
        className={`p-2 select-none rounded-md bg-white text-black dark:bg-black dark:text-white`}
      >
        <div>
          <div className="flex justify-between w-full mx-1 px-2">
            <span>
              <h1 className="font-bold text-xl">Featured</h1>
              <p className="text-sm">
                Click the Title or Description to expand or view Video demo
              </p>
            </span>
            <button
              className={`lg:block hidden scale-115 cursor-pointer hover:scale-120 transition-scale duration-200 ease-in-out`}
              onClick={handleClick}
            >
              {islist ? <MdGridView /> : <FaList />}
            </button>
          </div>
        </div>
        <section
          className={`project_section mt-4 gap-3 grid place-items-center h-full ${islist ? "grid-cols-1" : "xl:grid-cols-2"}`}
        >
          {Projects.map((item, i) => (
            <motion.div
              className={`project_comp relative bg-white dark:bg-black min-h-55 max-h-60 w-full h-55  overflow-hidden rounded-xl`}
              key={i}
              layout
              whileInView={{
                y: [20, 0],
              }}
              transition={{ duration: duration, ease: "easeInOut" }}
            >
              <div className="Image_comp h-[40%]">
                <a
                  href={
                    item.links[0]?.url !== "none"
                      ? item.links[0].url
                      : undefined
                  }
                  className="h-full"
                  aria-disabled={item.links[0]?.url === "none"}
                >
                  {item.image && (
                    <Image
                      src={item.image as string}
                      alt={item.title}
                      width={200}
                      height={200}
                      loading="eager"
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
                <h1 className="text-md font-bold flex items-center gap-3">
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
                  {item.links.map(
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

export default ProjectsUI;
