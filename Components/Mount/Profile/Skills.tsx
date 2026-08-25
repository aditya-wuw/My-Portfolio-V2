import { skillsData } from "@/data/data";

const Skills = () => {
  return (
    <div
      className={`rounded-xl select-none relative z-20 bg-white text-black border border-black/20  dark:bg-black dark:text-white dark:border dark:border-white/15 w-full h-full`}
    >
      <div className="absolute overflow-hidden w-full h-full p-3 group">
        <span
          aria-hidden={true}
          className="absolute text-[120px] font-extrabold mx-2 opacity-15 -right-5 -rotate-2 xl:blur-[5px] xl:group-hover:blur-[2px] blur-[2px] duration-300 ease-in-out"
        >
          Skills
        </span>
      </div>
      <div className="flex flex-wrap gap-2 mx-2 p-3">
        {skillsData.items.map((item, i) => (
          <div
            key={i}
            className="relative group  hover:scale-105 scale-100 cursor-pointer"
          >
            <span
              className={`absolute -top-10 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 p-2 text-xs whitespace-nowrap pointer-events-none rounded-2xl bg-white text-black dark:bg-black dark:text-white`}
            >
              {item.Name}
            </span>
            <span className={`${item.color}`}>{item.Comp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
