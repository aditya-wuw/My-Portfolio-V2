import React from 'react'
import { motion } from 'motion/react'
import { FaExternalLinkAlt, FaPause } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa6'
import { RiArrowUpWideFill } from 'react-icons/ri'
import Music from '@/data/music.json'
import { createThemeContext } from '@/Context/context'

const Playlist = () => {
  const { LightTheme, ShowPlaylist, setShowPlaylist, MusicPlayer, Track_rec } =
    createThemeContext()
  return (
    <motion.div
      className={`${
        LightTheme
          ? 'text-black bg-white border-black/30 border-[0.2px]'
          : 'text-white bg-black border-white/30 border-[0.2px]'
      } w-full rounded-xl overflow-hidden select-none`}
      initial={false} // important so it doesn’t animate on first render
      animate={{
        maxHeight: ShowPlaylist ? '55vh' : '0vh',
        opacity: ShowPlaylist ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: 'circInOut' }}
    >
      <div className="flex justify-between lg:mx-7 mx-5">
        <h1 className="xl:text-2xl text-lg font-bold mt-2">
          Music Player Hmm...?
        </h1>
        <h1
          className="text-2xl font-bold mt-2"
          onClick={() => setShowPlaylist(!ShowPlaylist)}
        >
          <RiArrowUpWideFill
            className={`${ShowPlaylist ? 'rotate-y-180' : 'rotate-y-0'} transition duration-300 ease-in-out cursor-pointer ${LightTheme ? 'hover:bg-black/50' : 'hover:bg-white/30'} p-1 rounded-xl`}
          />
        </h1>
      </div>
      <div className="lg:p-1 lg:pb-3 lg:px-3 p-4 overflow-y-auto max-h-[50vh] scroll_bar_ scroll_bar_thumb group cursor-pointer">
        {Music.map((track, i: number) => (
          <motion.section
            className={`flex gap-3 items-center relative z-20 group rounded-xl ${LightTheme ? 'hover:bg-gray-800/20' : 'hover:bg-white/20'} py-3 xl:px-5 px-1 justify-between`}
            key={i}
            whileInView={{ y: [-20, 0] }}
            transition={{ duration: (1 + i) / 16 }}
          >
            <div className="flex items-center gap-3">
              <span
                onClick={() => {
                  MusicPlayer.handle_next('play', i)
                }}
              >
                {!Track_rec[i].isplaying ? (
                  <FaPlay className="hover:scale-125 transtion duration-300 ease-in-out" />
                ) : (
                  <FaPause className="hover:scale-125 transtion duration-300 ease-in-out" />
                )}
              </span>
              <h1>{track.Title}</h1>
            </div>
            {track.link && (
              <div>
                <a href={track.link} target="_blank">
                  <FaExternalLinkAlt className="cursor-pointer scale-90 hover:scale-125 transtion duration-300 ease-in-out" />
                </a>
              </div>
            )}
          </motion.section>
        ))}
      </div>
    </motion.div>
  )
}

export default React.memo(Playlist)
