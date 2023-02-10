import { atom } from "recoil";
import {
  CoverFormGenerationValues,
  PostFormGenerationValues,
  VideoFormGenerationValues,
} from "../../types/generation";

export const postFormValuesAtom = atom<PostFormGenerationValues>({
  key: "postFormValuesAtom",
  default: {
    songName: "",
    dateOfRelease: "",
    genre: "",
    description: "",
    tone: "",
  },
});

export const coverFormValuesAtom = atom<CoverFormGenerationValues>({
  key: "coverFormValuesAtom",
  default: {
    songName: "",
    dateOfRelease: "",
    genre: "",
    description: "",
  },
});

export const videoFormValuesAtom = atom<VideoFormGenerationValues>({
  key: "videoFormValuesAtom",
  default: {
    songName: "",
    lyrics: "",
  },
});
