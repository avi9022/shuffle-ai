import { atom } from "recoil";
import {
  GeneratedCoverContent,
  GeneratedPostContent,
  GeneratedVideoContent,
} from "../../types/generation";

export const userPostGenerationsAtom = atom<GeneratedPostContent | null>({
  key: "userPostGenerationsAtom",
  default: null,
});

export const userCoverGenerationsAtom = atom<GeneratedCoverContent | null>({
  key: "userCoverGenerationsAtom",
  default: null,
});

export const isSetUserGenerationsAtom = atom<boolean | null>({
  key: "isSetUserGenerationsAtom",
  default: null,
});

export const currentUserVideoGenerationAtom =
  atom<GeneratedVideoContent | null>({
    key: "currentUserVideoGenerationAtom",
    default: null,
  });
