import { atom } from 'recoil'
import { GeneratedCoverContent, GeneratedPostContent, GeneratedVideoContent } from '../../types/generation'

export const userPostGenerationsAtom = atom<GeneratedPostContent | null>({
  key: 'userPostGenerationsAtom',
  default: {
    text: 'With our AI tools, you can easily create eye-catching visuals and engaging content that will help you to reach a wider audience and promote your music to the masses. Take advantage of our powerful AI tools to grow your music career!',
  },
})

export const userCoverGenerationsAtom = atom<GeneratedCoverContent | null>({
  key: 'userCoverGenerationsAtom',
  default: null,
})

export const isSetUserGenerationsAtom = atom<boolean | null>({
  key: 'isSetUserGenerationsAtom',
  default: null,
})

export const currentUserVideoGenerationAtom = atom<GeneratedVideoContent | null>({
  key: 'currentUserVideoGenerationAtom',
  default: null,
})
