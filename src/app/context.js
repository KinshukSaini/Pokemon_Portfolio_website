import  { createContext } from "react";

export const AudioContext = createContext({
  mute: false,
  setMute: () => {},
});