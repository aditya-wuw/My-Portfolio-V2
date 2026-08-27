"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { AnimationPlaybackControls } from "motion/react";
import MusicData from "@/data/music.json";
import { MusicContextType, Track } from "@/types/ContextTypes";

const AppContext = createContext<MusicContextType | null>(null);

export const MusicContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  /**
   Music Player
  */
  //states
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [PlayIndex, setPlayIndex] = useState(0);
  const [isPlaying, setisPlaying] = useState(false);

  //refs
  const [TrackPlayList, setTrackPlayList] = useState(MusicData as Track[]);
  const MusicRef = useRef<HTMLAudioElement | null>(null);
  const rotateDiskRef = useRef<AnimationPlaybackControls | null>(null);
  const [CurrentTrack, setCurrentTrack] = useState(TrackPlayList[PlayIndex]);

  const UpdatePlaylist = useCallback(
    (id: string) => {
      const Target = TrackPlayList.map((i) => ({
        ...i,
        isplaying: i.id === id,
      }));
      setTrackPlayList(Target);
    },
    [setTrackPlayList, TrackPlayList],
  );

  //Trigger play on track change
  useEffect(() => {
    (async () => {
      if (!MusicRef.current) return;
      MusicRef.current.pause();
      MusicRef.current.src = CurrentTrack.music_src;
      if (!isPlaying) return;
      await MusicRef.current
        .play()
        .then(() => setisPlaying(true))
        .catch((e) => console.error(`Playback error, Error: ${e}`));
    })();
  }, [CurrentTrack, isPlaying]);

  const HandlePlay = useCallback(
    (id?: string) => {
      if (!MusicRef.current) return console.error("Failed to play music");
      // console.log(`logged id : ${id}`);
      // play specific track if ID is given
      if (id) {
        const Target = TrackPlayList.find((i) => i.id === id);
        if (!Target) return console.error("target music not found");
        UpdatePlaylist(id);
        return setCurrentTrack(Target);
      }

      setisPlaying(!isPlaying);
      UpdatePlaylist(CurrentTrack.id);
      return isPlaying ? MusicRef.current.pause() : MusicRef.current.play();
    },
    [isPlaying, TrackPlayList, UpdatePlaylist, CurrentTrack],
  );

  const HandleNavigation = useCallback(
    (Direction: "Forward" | "Backwards") => {
      switch (Direction) {
        case "Forward": {
          const curr = PlayIndex + 1;
          if (curr === TrackPlayList.length) {
            setPlayIndex(0);
            break;
          }
          setPlayIndex(curr);
          const Target = TrackPlayList[curr];
          setCurrentTrack(Target);
          UpdatePlaylist(Target.id);
          // console.log(curr, `Total track ${TrackPlayList.length}`);
          break;
        }
        case "Backwards": {
          const curr = PlayIndex - 1;
          if (curr === -1) {
            setPlayIndex(TrackPlayList.length - 1);
            break;
          }
          const Target = TrackPlayList[curr];
          setPlayIndex(curr);
          setCurrentTrack(Target);
          UpdatePlaylist(Target.id);
          // console.warn("going backwards", curr);
          break;
        }
        default:
          console.error("no option available");
      }
    },
    [PlayIndex, TrackPlayList, UpdatePlaylist],
  );

  const contextValue = useMemo<MusicContextType>(
    () => ({
      MusicRef,
      rotateDiskRef,
      showPlaylist,
      setShowPlaylist,
      CurrentTrack,
      setCurrentTrack,
      HandlePlay,
      HandleNavigation,
      TrackPlayList,
      setTrackPlayList,
      isPlaying,
      setisPlaying,
    }),
    [
      showPlaylist,
      CurrentTrack,
      HandleNavigation,
      TrackPlayList,
      isPlaying,
      HandlePlay,
    ],
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// 5. Custom hook with automatic null validation
export const useMusicContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a ContextProviderWrap");
  }
  return context;
};
