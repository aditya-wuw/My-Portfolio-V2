import React, { useEffect, useState } from "react";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";
import { FaCompactDisc } from "react-icons/fa6";
import { animate, motion, useMotionValue } from "motion/react";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { PiSpeakerXFill } from "react-icons/pi";
import { TiArrowLoop } from "react-icons/ti";
import { RiPlayListFill } from "react-icons/ri";
import MusicData from "@/data/music.json";
import { useAppContext } from "@/Context/AppContext";
import { useMusicContext } from "@/Context/MusicContext";

/**
 * Utility Functions
 */
const FormateTime = (val: number): string => {
  if (isNaN(val)) return "00:00";
  const minute = Math.floor(val / 60);
  const seconds = Math.floor(val % 60);
  return `${String(minute).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const MusicPlayer = () => {
  const {
    MusicRef,
    rotateDiskRef,
    CurrentTrack,
    showPlaylist,
    setShowPlaylist,
    HandlePlay,
    HandleNavigation,
    isPlaying,
    setisPlaying,
  } = useMusicContext();

  const [Volume, setVolume] = useState(20);
  const [duration, setduration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [ismute, setmute] = useState(false);
  const [ShowVolume, setShowVolume] = useState(false);
  const [Timeline, setTimeline] = useState<number | undefined>(0);
  const [isDraging, setDraging] = useState(false);
  const [AutoPlayON, setAutoPlayON] = useState(true);

  /**
   * UI elements
   */
  const rotate = useMotionValue(0);
  const [isBGLoadedHUH, setisBGLoadedHUH] = useState(false);

  useEffect(() => {
    const Rotate_control = animate(rotate, [0, 360], {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    });
    Rotate_control.pause();
    rotateDiskRef.current = Rotate_control;
  }, [rotateDiskRef, rotate]);

  const HandleMute = () => {
    console.warn("Muted");
  };

  function HandleSeek(Target: number) {
    const audio = MusicRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      rotateDiskRef.current?.pause();
      const newTime = duration * (Target / 100);
      audio.currentTime = newTime;

      if (!isDraging) {
        setTimeout(() => {
          audio.play().catch((e: Error) => console.warn(e));
          rotateDiskRef.current?.play();
        }, 100);
      }
    } else {
      audio.currentTime = duration * (Target / 100);
    }
  }

  const Volume_bar: React.CSSProperties = {
    background: `linear-gradient(to right, white ${Volume}%,#C9C9C9 10%)`,
  };

  const seek_bar: React.CSSProperties = {
    background: `linear-gradient(to right, skyblue ${Timeline && Timeline + 1}%,#C9C9C9 5%)`,
  };

  const player_control_style =
    "cursor-pointer hover:scale-130 scale-140 transiton duration-200 ease-in-out ";

  return (
    <div
      id="Music"
      className={`w-full h-full select-none relative rounded-2xl bg-blue-500
        ${
          // add conditional background change
          ""
        }
        transition duration-200 ease-in-out`}
    >
      <div className="w-full h-full p-2 overflow-hidden relative rounded-2xl">
        <motion.img
          onLoad={() => {
            setTimeout(() => {
              setisBGLoadedHUH(true);
            }, 30);
          }}
          src={CurrentTrack.banner}
          alt="bg-media-player"
          draggable="false"
          className={`bg_cover object-cover select-none max-sm:scale-110 absolute 2xl:-top-12  right-0 mask-r-from-50% z-1 mask-l-from-70%`}
          key={CurrentTrack.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: isBGLoadedHUH ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        <motion.div
          className="text-white absolute z-3 -top-3 right-3"
          style={{ rotate }}
        >
          <FaCompactDisc className="scale-400 w-full h-5" />
        </motion.div>

        <div className="relative translate-y-8 z-13 w-full px-4">
          <section
            className="p-1 pr-3 flex absolute bottom-5 left-5 xl:w-30 max-xl:w-25 items-center gap-3"
            onMouseEnter={() => setShowVolume(true)}
            onMouseLeave={() => setShowVolume(false)}
          >
            <button
              aria-label="volume"
              className="volume"
              onClick={() => HandleMute()}
            >
              {ismute ? (
                <PiSpeakerXFill className="xl:scale-160 max-xl:scale-120 hover:scale-170 transition duration-200 ease-in-out cursor-pointer text-white" />
              ) : (
                <HiMiniSpeakerWave
                  className={`xl:scale-160 max-xl:scale-120 hover:scale-170 transition duration-200 ease-in-out cursor-pointer text-white`}
                />
              )}
            </button>
            <label htmlFor="VolumeRange" className="w-full h-full">
              <span className="sr-only">Volume</span>
              <input
                id="VolumeRange"
                type="range"
                min={0}
                max={100}
                value={Volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className={`appearance-none accent-white flex h-1 rounded-full outline-none cursor-pointer w-20 max-sm:w-17 ${ShowVolume ? "opacity-100" : "opacity-0"} transition-opacity duration-200 ease-in-out`}
                style={Volume_bar}
              />
            </label>
          </section>
          <section className="w-full flex justify-end mb-2">
            <div className="text-end text-white backdrop-blur-xs rounded-2xl xl:w-53 w-47">
              <motion.div className="w-52 overflow-hidden">
                <motion.h2
                  className="whitespace-nowrap xl:text-lg text-md -translate-x-5 font-medium"
                  key={CurrentTrack.Title}
                  initial={{ x: 50 }}
                  animate={{ x: -50 }}
                  transition={{
                    duration: 10,
                    ease: "easeOut",
                    repeatType: "loop",
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  {CurrentTrack.Title}
                </motion.h2>
              </motion.div>
              <h1 className="xl:text-md text-sm">
                <section>
                  <span
                    onClick={() => setAutoPlayON(!AutoPlayON)}
                    title="Autoplay playlist or nah?"
                    className="cursor-pointer"
                  >
                    <span className="absolute z-10 left-0 flex items-center  hover:scale-125 scale-100 trnsition-scale duration-300 ease-in-out">
                      <TiArrowLoop
                        className={`w-5 h-7.5 transition-rotate ease-in-out duration-300 ${AutoPlayON && "rotate-y-180"}`}
                      />
                      <h1>{AutoPlayON ? "1" : "0"}</h1>
                    </span>
                  </span>
                </section>
                <section className="absolute -bottom-0.5 left-10 z-1">
                  <span
                    className="text-white cursor-pointer"
                    onClick={() => setShowPlaylist(!showPlaylist)}
                  >
                    <RiPlayListFill className="max-lg:scale-100 scale-120 hover:scale-150 transtion duration-300 ease-in-out" />
                  </span>
                </section>
                <span>
                  {FormateTime(currentTime)} / {FormateTime(duration)}
                </span>
              </h1>
            </div>
          </section>
          <section className="player_control w-full flex gap-3 px-2">
            <div className="seek_bar relative z-10 w-full translate-y-1 flex items-center">
              <label htmlFor="timeline" className="w-full">
                <input
                  id="timeline"
                  type="range"
                  name="timeline"
                  value={Timeline}
                  onChange={(e) => HandleSeek(parseFloat(e.target.value))}
                  min={0}
                  max={100}
                  step={0.1}
                  onInput={() => setDraging(true)}
                  onMouseUp={() => setDraging(false)}
                  onTouchEnd={() => setDraging(false)}
                  className={`Seek_help w-[90%] appearance-none cursor-pointer accent-white hover:accent-gray-300 rounded-full ${isDraging ? "h-2" : "h-0.75"} transition-h duration-200 ease-in-out`}
                  style={seek_bar}
                />
              </label>
            </div>
            <ul
              className={`flex gap-6 text-white items-center w-fit max-md:scale-90`}
            >
              <li
                className={`${player_control_style}`}
                onClick={() => HandleNavigation("Backwards")}
              >
                <FaBackward />
              </li>
              <li
                className={`${player_control_style}`}
                onClick={() => HandlePlay()}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </li>
              <li
                className={`${player_control_style}`}
                onClick={() => HandleNavigation("Forward")}
              >
                <FaForward />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
