import { motion, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";
import { createThemeContext } from "@/Context/context";
// import video from '/Video_bg/_fuji_loop.mp4'

const video =
  "https://ik.imagekit.io/3sfckuehxk/_fuji_loop.mp4?updatedAt=1783435507739";
const Cover = () => {
  const { LightTheme, setisinView } = createThemeContext();
  const AMinView = useRef<HTMLDivElement | null>(null);
  const videoref = useRef<HTMLVideoElement>(null);
  const isInView = useInView(AMinView);
  useEffect(() => {
    setisinView(isInView);
  }, [isInView, videoref, setisinView]);

  return (
    <motion.div
      ref={AMinView}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeIn" }}
    >
      <div className="relative">
        <h1
          className={`mask-l-from-70% lg:p-15 max-sm:p-5 absolute z-2 -rotate-2 italic top-0 lg:-right-15 -right-2 text-8xl max-lg:text-8xl max-lg:top-15 max-sm:text-6xl max-sm:top-6 max-sm:-right-5 backdrop-blur-[3px] font-extrabold ${LightTheme ? "text-white/60" : "text-black/80"}`}
        >
          アディ
        </h1>
        <video
          src={video}
          className={` absolute lg:-top-23 transition-opacity ease-in-out duration-200`}
          width={2250}
          height={1200}
          muted
          autoPlay
          loop
          playsInline
          rel="preload"
          preload="auto"
        />
      </div>
    </motion.div>
  );
};

export default Cover;
