"use client";
import React from "react";
import { motion } from "motion/react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { RiArrowUpWideFill } from "react-icons/ri";
import { useMusicContext } from "@/Context/MusicContext";

const Playlist = () => {
  const { showPlaylist, setShowPlaylist, HandlePlay, TrackPlayList } =
    useMusicContext();

  return (
    <motion.div
      className={`
          text-black bg-white border-black/20 border-[0.2px]
          dark:text-white dark:bg-black dark:border-white/15 dark:border-[0.2px]
      } w-full rounded-xl overflow-hidden select-none`}
      initial={false} // important so it doesn’t animate on first render
      animate={{
        maxHeight: showPlaylist ? "55vh" : "0vh",
        opacity: showPlaylist ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: "circInOut" }}
    >
      <div className="flex justify-between lg:mx-7 mx-5">
        <h1 className="xl:text-2xl text-lg font-bold mt-2 py-2">
          Music Player Hmm...?
        </h1>
        <h1
          className="text-2xl font-bold mt-2 py-2"
          onClick={() => setShowPlaylist(!showPlaylist)}
        >
          <RiArrowUpWideFill
            size={25}
            className={`${showPlaylist ? "rotate-y-180" : "rotate-y-0"} transition duration-300 ease-in-out cursor-pointer hover:bg-black/50 dark:hover:bg-white/30 p-1 rounded-xl`}
          />
        </h1>
      </div>
      <div className="lg:p-1 lg:pb-3 lg:px-3 p-4 overflow-y-auto max-lg:h-65 scroll_bar_ scroll_bar_thumb group cursor-pointer">
        {TrackPlayList.map((track, i: number) => (
          <motion.section
            className={`opacity-70 flex gap-3 items-center relative z-20 group rounded-xl ${track.isplaying && "opacity-100 dark:bg-white/10 bg-gray-400/20"} hover:bg-gray-800/20 dark:hover:bg-white/20 py-3 xl:px-5 px-1 justify-between fade-in-all`}
            key={i}
            whileInView={{ y: [-20, 0] }}
            transition={{ duration: (1 + i) / 16 }}
          >
            <div className="flex items-center gap-3">
              <span
                onClick={() => {
                  HandlePlay(track.id);
                }}
              >
                {!track.isplaying ? (
                  <FaPlay className="hover:scale-125 transtion duration-300 ease-in-out" />
                ) : (
                  <FaPause className="hover:scale-125 transtion duration-300 ease-in-out" />
                )}
              </span>
              <h1>{track.Title}</h1>
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
};

export default React.memo(Playlist);
