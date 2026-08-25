"use client";

import React, {
  createContext,
  useCallback,
  useContext,
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
  const TrackPlayList = MusicData as Track[];
  const [showPlaylist, setShowPlaylist] = useState(false);
  const MusicRef = useRef<HTMLAudioElement | null>(null);
  const [PlayIndex, setPlayIndex] = useState(0);
  const rotateDiskRef = useRef<AnimationPlaybackControls | null>(null);
  const CurrentTrack = TrackPlayList[PlayIndex];
  const [isPlaying, setisPlaying] = useState(false);

  const HandlePlay = (id?: string) => {
    if (!MusicRef.current) return console.error("Failed to play music");
    if (!id) return MusicRef.current.play();
  };

  const HandleNavigation = useCallback(
    (Direction: "Forward" | "Backwards") => {
      switch (Direction) {
        case "Forward": {
          console.warn("going forward");
          const curr = PlayIndex + 1;

          if (curr > TrackPlayList.length) {
            setPlayIndex(0);
          }

          setPlayIndex(curr);
          break;
        }
        case "Backwards": {
          console.warn("going backwards");
          const curr = PlayIndex - 1;

          if (TrackPlayList.length > curr) {
            setPlayIndex(TrackPlayList.length);
          }

          setPlayIndex(curr);
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
    [showPlaylist, CurrentTrack, HandleNavigation, TrackPlayList, isPlaying],
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
