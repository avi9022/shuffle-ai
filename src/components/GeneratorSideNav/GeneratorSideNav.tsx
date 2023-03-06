import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'

import generatorLogo from '../../assets/images/generator-logo.svg'
import { PostSvg } from '../SVG/PostSvg'
import { AdSvg } from '../SVG/AdSvg'
import { CoverSvg } from '../SVG/CoverSvg'
import { YoutubeSvg } from '../SVG/YoutubeSvg'
import { TiktokSvg } from '../SVG/TiktokSvg'
import { LyricsSvg } from '../SVG/LyricsSvg'
import { PlayIntroSvg } from '../SVG/PlayIntroSvg'
import { SupportSvg } from '../SVG/SupportSvg'

import './GeneratorSideNav.css'

export const GeneratorSideNav: FunctionComponent = () => {
  const navigate = useNavigate()

  return (
    <section className="p-4 h-100 d-flex flex-column">
      <div className="border-bottom border-light pb-4">
        <img className="w-75" src={generatorLogo} alt="" />
      </div>
      <nav className="d-flex flex-column justify-content-between flex-grow-1">
        <div>
          <div className="mt-4 text-grey fs-sm">TEXT</div>
          <Button className="w-100 bg-light-gray py-2 my-1" onClick={() => navigate('/generator/post')}>
            <div className="d-flex align-items-center gap-2">
              <div>
                <PostSvg />
              </div>
              <div className="fs-sm">New Post</div>
            </div>
          </Button>
          <Button className="w-100 bg-light-gray py-2 my-1" onClick={() => navigate('/generator/ad')}>
            <div className="d-flex align-items-center gap-2">
              <div>
                <AdSvg />
              </div>
              <div className="fs-sm">New Ad</div>
            </div>
          </Button>
          <div className="mt-5 text-grey fs-sm">IMAGE</div>
          <Button className="w-100 bg-light-gray py-2 my-1" onClick={() => navigate('/generator/cover')}>
            <div className="d-flex align-items-center gap-2">
              <div>
                <CoverSvg />
              </div>
              <div className="fs-sm">New Art Cover</div>
            </div>
          </Button>
          <Button className="w-100 bg-light-gray py-2 my-1" onClick={() => navigate('/generator/youtube')}>
            <div className="d-flex align-items-center gap-2">
              <div>
                <YoutubeSvg />
              </div>
              <div className="fs-sm">New Youtube Thumbnail</div>
            </div>
          </Button>
          <Button className="w-100 bg-light-gray py-2 my-1" onClick={() => navigate('/generator/tiktok')}>
            <div className="d-flex align-items-center gap-2">
              <div>
                <TiktokSvg />
              </div>
              <div className="fs-sm">New TikTok Thumbnail</div>
            </div>
          </Button>
          <div className="mt-5 text-grey fs-sm">VIDEO</div>
          <Button className="w-100 bg-light-gray py-2 my-1" onClick={() => navigate('/generator/video')}>
            <div className="d-flex align-items-center gap-2">
              <div>
                <LyricsSvg />
              </div>
              <div className="fs-sm">New Lyrics Thumbnail</div>
            </div>
          </Button>
        </div>
        <div className="pb-4">
          <div className="introduction-container p-3 text-white fs-sm rounded">
            <div className="fw-bold">Introducing Shuffle AI</div>
            <div>
              Unleash the boundless potential of AI by crafting written content, designing visuals, and producing videos. Expand your imagination, and manifest your artistic vision like magic!
            </div>
            <Button className="w-100 py-2 mt-2 fs-sm" btnType="secondary">
              <div className="d-flex gap-2 align-items-center">
                <div>
                  <PlayIntroSvg />
                </div>
                <div>Watch 1 min demo</div>
              </div>
            </Button>
          </div>
          <Button className="w-100 py-2 my-1 mt-2">
            <div className="d-flex align-items-center gap-2">
              <div>
                <SupportSvg />
              </div>
              <div className="fs-sm">Support</div>
            </div>
          </Button>
        </div>
      </nav>
    </section>
  )
}
