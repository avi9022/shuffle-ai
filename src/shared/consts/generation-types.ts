import { GenerationCard, generationType } from '../../types/generation'
import post from '../../assets/images/post.svg'
import phone from '../../assets/images/phone.svg'
import tiktok from '../../assets/images/tiktok.svg'
import text from '../../assets/images/text.svg'
import video from '../../assets/images/video.svg'
import comingSoon from '../../assets/images/coming-soon.svg'
import disc from '../../assets/images/disc.svg'
import thumbnails from '../../assets/images/thumbnails.svg'

export const GenerationCards: GenerationCard[] = [
  {
    icon: post,
    text: 'Generate - post for new single',
    type: generationType.post,
  },
  {
    icon: phone,
    text: 'Generate - 15 second video out of your song lyrics (9:16)',
    type: generationType.video916,
  },
  {
    icon: tiktok,
    text: 'Generate - Thumbnails for TikTok',
    type: generationType.tiktok,
  },
  {
    icon: text,
    text: 'Generate - text for ads',
    type: generationType.ad,
  },
  {
    icon: video,
    text: 'Generate - 15 second video out of your song lyrics (1:1)',
    type: generationType.video,
  },
  {
    icon: comingSoon,
    text: 'Coming Soon…',
    type: generationType.soon,
  },
  {
    icon: disc,
    text: 'Generate - Art cover',
    type: generationType.cover,
  },
  {
    icon: thumbnails,
    text: 'Generate - Thumbnails for Youtube',
    type: generationType.youtube,
  },
  {
    icon: comingSoon,
    text: 'Coming Soon…',
    type: generationType.soon,
  },
]
