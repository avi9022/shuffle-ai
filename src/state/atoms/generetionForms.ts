import { atom } from "recoil";
import {
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

export const videoFormValuesAtom = atom<VideoFormGenerationValues>({
  key: "videoFormValuesAtom",
  default: {
    songName: "",
    lyrics: "",
  },
});
