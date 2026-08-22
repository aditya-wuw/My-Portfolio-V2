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
import { ContextType, Track } from "@/types/ContextTypes";

const AppContext = createContext<ContextType | null>(null);

export const ContextProviderWrap = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // 2. Lazy initializer avoids cascading renders & reads storage cleanly on client
  const [LightTheme, setTheme] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "Light";
    }
    return true;
  });

  const musicRef = useRef<HTMLAudioElement | null>(null);
  const rotateControlRef = useRef<AnimationPlaybackControls | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [inView, setIsInView] = useState(true);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trackList, setTrackList] = useState<Track[]>(MusicData);

  // 3. Define handler functions at component top-level
  const handlePlaying = useCallback(() => {
    try {
      const audio = musicRef.current;
      if (!audio) return;

      setTrackList((prev) =>
        prev.map((track, i) => ({
          ...track,
          isplaying: i === currentIndex ? !isPlaying : false,
        })),
      );

      if (!isPlaying) {
        rotateControlRef.current?.play();
        setIsPlaying(true);
        audio.play().catch((e: Error) => console.warn("Playback error:", e));
      } else {
        audio.pause();
        rotateControlRef.current?.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.warn("Playback toggle error:", error);
    }
  }, [currentIndex, isPlaying]);

  const handleNext = useCallback(
    (action: "forward" | "back" | "play", target?: number) => {
      const audio = musicRef.current;
      if (!audio) return;

      let nextIndex = currentIndex;
      if (action === "forward") {
        nextIndex =
          currentIndex === MusicData.length - 1 ? 0 : currentIndex + 1;
      } else if (action === "back") {
        nextIndex =
          currentIndex === 0 ? MusicData.length - 1 : currentIndex - 1;
      } else if (action === "play" && typeof target === "number") {
        nextIndex = target;
      }

      audio.pause();
      setCurrentIndex(nextIndex);
      audio.src = MusicData[nextIndex].music_src;

      if (isPlaying) {
        setTrackList((prev) =>
          prev.map((track, i) => ({
            ...track,
            isplaying: i === nextIndex,
          })),
        );
        audio.play().catch((e: Error) => console.warn("Playback error:", e));
      }
    },
    [currentIndex, isPlaying],
  );

  // 4. Memoize context value to avoid re-rendering entire app tree
  const contextValue = useMemo<ContextType>(
    () => ({
      LightTheme,
      setTheme,
      musicRef,
      rotateControlRef,
      isPlaying,
      setIsPlaying,
      inView,
      setIsInView,
      showPlaylist,
      setShowPlaylist,
      currentIndex,
      setCurrentIndex,
      trackList,
      musicPlayer: {
        handlePlaying,
        handleNext,
      },
    }),
    [
      LightTheme,
      isPlaying,
      inView,
      showPlaylist,
      currentIndex,
      trackList,
      handlePlaying,
      handleNext,
    ],
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// 5. Custom hook with automatic null validation
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ContextProviderWrap",
    );
  }
  return context;
};
