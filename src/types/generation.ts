export interface GenerationCard {
  icon: string;
  text: string;
  type: generationType;
}

export enum generationType {
  post = "post",
  video916 = "video916",
  tiktok = "tiktok",
  ad = "ad",
  video = "video",
  cover = "cover",
  youtube = "youtube",
  soon = "soon",
}

export interface PostFormGenerationValues {
  songName: string;
  dateOfRelease: string;
  genre: string;
  description: string;
  tone: string;
}

export interface CoverFormGenerationValues {
  songName: string;
  dateOfRelease: string;
  genre: string;
  description: string;
}

export interface VideoFormGenerationValues {
  songName?: string;
  lyrics?: string;
}

export interface GeneratedPostContent {
  text?: string;
}

export interface GeneratedCoverContent {
  url?: string;
}

export interface GeneratedVideoContent {
  url?: string;
}
