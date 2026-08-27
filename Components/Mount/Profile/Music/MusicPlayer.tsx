import React, { useCallback, useEffect, useState } from "react";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";
import { FaCompactDisc } from "react-icons/fa6";
import { animate, motion, useMotionValue } from "motion/react";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { PiSpeakerXFill } from "react-icons/pi";
import { TiArrowLoop } from "react-icons/ti";
import { RiPlayListFill } from "react-icons/ri";
import { useMusicContext } from "@/Context/MusicContext";
import { FormateTime } from "@/utils/utils";

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

  /**
   * States
   */
  const [ShowVolume, setShowVolume] = useState(false);
  const [isDraging, setDraging] = useState(false);
  const [duration, setduration] = useState(0);
  const [Timeline, setTimeline] = useState(0);

  /**
   * Settings
   */
  const [Volume, setVolume] = useState(20);
  const [AutoPlayON, setAutoPlayON] = useState(true);
  const [isMute, setMute] = useState(() => {
    try {
      const saved = localStorage.getItem("isMute");
      return saved !== null ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  /**
   * Component Initial load functions
   */
  const SetInitial = useCallback(async () => {
    const Audio = MusicRef.current;
    if (Audio && CurrentTrack) {
      Audio.volume = Volume / 100;
      setduration(Audio.duration);
    }
  }, [MusicRef, CurrentTrack, Volume]);

  useEffect(() => {
    SetInitial();
  }, [SetInitial]);

  /**
   * UI Disk Rotation elements
   */
  const rotate = useMotionValue(0);
  useEffect(() => {
    const RotateControl = animate(rotate, [0, 360], {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    });
    if (!isPlaying) return RotateControl.pause();
    rotateDiskRef.current = RotateControl;
  }, [rotateDiskRef, rotate, isPlaying]);

  /**
   * Event Check: If user Dragging stop playing music
   */
  useEffect(() => {
    const Audio = MusicRef.current;
    if (!Audio) return;

    if (isDraging) {
      Audio.pause();
      rotateDiskRef.current?.pause();
    } else {
      if (isPlaying) {
        Audio.play();
        rotateDiskRef.current?.play();
      }
    }
  }, [isDraging, MusicRef, rotateDiskRef, isPlaying]);

  /**
   * Handle Music player functions
   */
  const HandleVolume = (Target: number) => {
    const Audio = MusicRef.current;
    if (!Audio) return console.error("Failed to get audio node reference");
    if (Target < 1) {
      setMute(true);
      setVolume(0);
      Audio.muted = true;
    } else {
      Audio.muted = false;
      setMute(false);
      Audio.volume = Target / 100;
      setVolume(Target);
    }
  };

  const HandleMute = () => {
    const Audio = MusicRef.current;
    if (!Audio) return;
    const mute = !isMute;
    setMute(mute);
    localStorage.setItem("isMute", `${mute}`);
  };

  function HandleSeek(Target: number) {
    const Audio = MusicRef.current;
    if (!Audio) return;
    Audio.currentTime = Target;
    setTimeline(Target);
  }

  const HandleOnEnd = () => {
    setisPlaying(!isPlaying);
  };

  //styles
  const VolumeBar: React.CSSProperties = {
    background: `linear-gradient(to right, white ${Volume}%,#C9C9C9 10%)`,
  };

  const Progress = (Timeline / duration) * 100;
  const SeekBar: React.CSSProperties = {
    background: `linear-gradient(to right, skyblue ${Progress + 1}%,#C9C9C9 5%)`,
  };

  const PlayerControlStyle =
    "cursor-pointer hover:scale-130 scale-140 transiton duration-200 ease-in-out ";

  //main component
  return (
    <div
      id="Music"
      className={`w-full h-full select-none relative rounded-2xl
        ${
          CurrentTrack.bg === "black"
            ? `bg-${CurrentTrack.bg}`
            : CurrentTrack.bg
              ? `${CurrentTrack.bg}`
              : "bg-blue-500"
        }
        transition duration-200 ease-in-out`}
    >
      {/* Audio enghine */}
      <audio
        key={CurrentTrack.id}
        muted={isMute}
        src={CurrentTrack.music_src}
        ref={MusicRef}
        preload="metadata"
        onLoadStart={() => {
          setTimeline(0);
        }}
        onLoadedMetadata={(e) => {
          e.currentTarget.volume = Volume / 100;
          setduration(e.currentTarget.duration);
        }}
        onTimeUpdate={(e) => {
          if (!isDraging) {
            setTimeline(e.currentTarget.currentTime);
          }
        }}
        onEnded={() => HandleOnEnd()}
      />
      {/*----------------*/}
      <div className="w-full h-full p-2 overflow-hidden relative rounded-2xl">
        <motion.img
          src={CurrentTrack.banner}
          alt="bg-media-player"
          draggable="false"
          className={`bg_cover object-cover select-none max-sm:scale-110 absolute 2xl:-top-5  right-0 mask-r-from-50% z-1 mask-l-from-70%`}
          key={CurrentTrack.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
              {isMute ? (
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
                onChange={(e) => HandleVolume(Number(e.target.value))}
                className={`appearance-none accent-white flex h-1 rounded-full outline-none cursor-pointer w-20 max-sm:w-17 ${ShowVolume ? "opacity-100" : "opacity-0"} transition-opacity duration-200 ease-in-out`}
                style={VolumeBar}
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
                    title="Autoplay playlist"
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
                  {FormateTime(Timeline)} / {FormateTime(duration)}
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
                  max={duration || 100}
                  step={0.1}
                  onInput={() => setDraging(true)}
                  onMouseUp={() => setDraging(false)}
                  onTouchEnd={() => setDraging(false)}
                  className={`Seek_help w-[90%] appearance-none cursor-pointer accent-blue-300 hover:accent-cyan-300 rounded-full ${isDraging ? "h-2" : "h-0.75"} pop-in`}
                  style={SeekBar}
                />
              </label>
            </div>
            <ul
              className={`flex gap-6 text-white items-center w-fit max-md:scale-90`}
            >
              <li
                className={`${PlayerControlStyle}`}
                onClick={() => HandleNavigation("Backwards")}
              >
                <FaBackward />
              </li>
              <li
                className={`${PlayerControlStyle}`}
                onClick={() => HandlePlay()}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </li>
              <li
                className={`${PlayerControlStyle}`}
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
