"use client";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useAppContext } from "@/Context/AppContext";
import Image from "next/image";
import MarkdownReader from "@/Components/Mount/MarkdownReader";
import { ProjectData } from "@/types/ProjectTypes";
import GoHomeBtn from "@/Components/GoHomeBtn";

interface props {
  ProjectData: ProjectData;
}

export default function DedicatedPageView({ ProjectData }: props) {
  const { setIsInView } = useAppContext();

  useEffect(() => {
    setIsInView(false);
  }, [setIsInView]);

  return (
    <div className="md:mt-5">
      <GoHomeBtn />
      <motion.div
        className={`bg-white text-black dark:bg-black dark:text-white flex gap-5 flex-col rounded-2xl px-4 py-2`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        <h1 className="text-2xl max-lg:text-xl font-bold">
          {ProjectData.title}
        </h1>
        {ProjectData.image && !ProjectData.DemoVideo && (
          <div className="h-55 max-sm:h-25 w-full overflow-hidden rounded-2xl relative">
            <Image
              draggable={false}
              src={String(ProjectData.image)}
              width={1920}
              height={1080}
              loading="eager"
              alt="project cover Image"
              className="aspect-auto absolute xl:-top-8"
            />
          </div>
        )}
        {ProjectData.DemoVideo && (
          <div>
            <video
              src={ProjectData.DemoVideo}
              width={1920}
              height={1080}
              className="rounded-md"
              controlsList="nodownload"
              autoPlay
              loop
              muted
              // controls
            >
              your browser is not supported :(
            </video>
          </div>
        )}
        <div className="text-md max-lg:text-sm">
          <MarkdownReader content={ProjectData.content} />
        </div>

        <div className="flex gap-3 items-center justify-end mb-3">
          {ProjectData.links &&
            ProjectData.links.map(
              (Linkitem, LinkIndex) =>
                Linkitem.label !== "none" && (
                  <a
                    key={LinkIndex}
                    className={`p-2 text-sm ${typeof Linkitem.label === "string" && Linkitem.label !== "none" && "p-1 bg-blue-500 rounded-md text-white"}`}
                    href={Linkitem.url}
                  >
                    {Linkitem.label}
                  </a>
                ),
            )}
        </div>
      </motion.div>
    </div>
  );
}
