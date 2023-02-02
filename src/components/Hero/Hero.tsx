import { FunctionComponent } from 'react'
import { scrollIntoView } from '../../services/utils'

import img from '../../assets/images/Mask-Group-12.png'
import './Hero.css'

export const Hero: FunctionComponent = () => {
  return (
    <section className="hero text-white">
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <div className="font-weight-bold fs-xlg pb-2">Shuffle Ai</div>
            <div className="subheading pb-2 fs-5">Elevating Music marketing to the next level with Technology, Algorithms & Data</div>
            <div className="description mb-5">
              Shuffle provides its clients with the most efficient and effective way to promote their music. With Shuffle, musicians and labels can use AI writers and create content for their social
              media accounts, Spotify playlists, YouTube videos, and more. Additionally, Shuffle also helps its clients with music marketing by providing them promotions to music streaming services
              like Spotify and Apple Music.
            </div>
            <button className="border border-white text-white bg-transparent px-4 py-3 rounded-1" onClick={() => scrollIntoView('services')}>
              Start Generating
            </button>
          </div>
          <div className="col-6 hero-img-container">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
