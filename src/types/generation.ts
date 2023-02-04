export interface GenerationCard {
  icon: string
  text: string
  type: generationType
}

export enum generationType {
  post = 'post',
  video916 = 'video916',
  tiktok = 'tiktok',
  ad = 'ad',
  video = 'video',
  cover = 'cover',
  youtube = 'youtube',
  soon = 'soon',
}
