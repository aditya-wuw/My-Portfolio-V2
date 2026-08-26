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
  const TrackPlayList = MusicData as Track[];
  const MusicRef = useRef<HTMLAudioElement | null>(null);
  const rotateDiskRef = useRef<AnimationPlaybackControls | null>(null);
  const CurrentTrack = TrackPlayList[PlayIndex];

  //music functions
  const HandlePlay = useCallback(
    (id?: string) => {
      if (!MusicRef.current) return console.error("Failed to play music");
      if (!id) {
        setisPlaying(!isPlaying);
        // MusicRef.current.play();
        return isPlaying ? MusicRef.current.pause() : MusicRef.current.play();
      }
    },
    [isPlaying],
  );

  const HandleNavigation = useCallback(
    (Direction: "Forward" | "Backwards") => {
      switch (Direction) {
        case "Forward": {
          // console.warn("going forward", PlayIndex);
          const curr = PlayIndex + 1;

          if (curr === TrackPlayList.length) {
            setPlayIndex(0);
            break;
          }
          // console.log(curr, `Total track ${TrackPlayList.length}`);
          setPlayIndex(curr);
          break;
        }
        case "Backwards": {
          const curr = PlayIndex - 1;

          if (curr === -1) {
            setPlayIndex(TrackPlayList.length - 1);
            break;
          }
          setPlayIndex(curr);
          // console.warn("going backwards", curr);
          break;
        }
        default:
          console.error("no option available");
      }
    },
    [TrackPlayList.length, PlayIndex],
  );

  const contextValue = useMemo<MusicContextType>(
    () => ({
      MusicRef,
      rotateDiskRef,
      showPlaylist,
      setShowPlaylist,
      CurrentTrack,
      HandlePlay,
      HandleNavigation,
      TrackPlayList,
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
