import { atom } from "recoil";
import {
  GeneratedPostContent,
  GeneratedVideoContent,
} from "../../types/generation";

export const userGenerationsAtom = atom<GeneratedPostContent[] | null>({
  key: "userGenerationsAtom",
  default: null,
});

export const currentUserGenerationAtom = atom<GeneratedPostContent | null>({
  key: "currentUserGenerationAtom",
  default: null,
});

export const currentUserVideoGenerationAtom =
  atom<GeneratedVideoContent | null>({
    key: "currentUserVideoGenerationAtom",
    default: null,
  });
