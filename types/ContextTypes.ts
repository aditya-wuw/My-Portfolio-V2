import { AnimationPlaybackControls } from "motion";

// 1. Explicit TypeScript types
export interface Track {
  id: string;
  Title: string;
  music_src: string;
  banner: string;
  isplaying: boolean;
  bg: string;
}

export interface ContextType {
  inView: boolean;
  setIsInView: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MusicContextType {
  MusicRef: React.RefObject<HTMLAudioElement | null>;
  rotateDiskRef: React.RefObject<AnimationPlaybackControls | null>;
  showPlaylist: boolean;
  setShowPlaylist: React.Dispatch<React.SetStateAction<boolean>>;
  CurrentTrack: Track;
  setCurrentTrack: React.Dispatch<React.SetStateAction<Track>>;
  TrackPlayList: Track[];
  setTrackPlayList: React.Dispatch<React.SetStateAction<Track[]>>;
  HandlePlay: (id?: string) => void;
  HandleNavigation: (Direction: "Forward" | "Backwards") => void;
  isPlaying: boolean;
  setisPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}
