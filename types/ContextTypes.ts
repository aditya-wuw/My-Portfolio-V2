import { AnimationPlaybackControls } from "motion";

// 1. Explicit TypeScript types
export interface Track {
  music_src: string;
  isplaying?: boolean;
  [key: string]: unknown;
}

export interface ContextType {
  musicRef: React.RefObject<HTMLAudioElement | null>;
  rotateControlRef: React.RefObject<AnimationPlaybackControls | null>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  inView: boolean;
  setIsInView: React.Dispatch<React.SetStateAction<boolean>>;
  showPlaylist: boolean;
  setShowPlaylist: React.Dispatch<React.SetStateAction<boolean>>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  trackList: Track[];
  musicPlayer: {
    handlePlaying: () => void;
    handleNext: (action: "forward" | "back" | "play", target?: number) => void;
  };
}
