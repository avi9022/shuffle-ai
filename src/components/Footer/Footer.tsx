import { FunctionComponent } from 'react'
import img from '../../assets/images/logo.svg'
import './Footer.css'

export const Footer: FunctionComponent = () => {
  return (
    <section className="footer-container">
      <div className="container text-center text-white pt-5 pb-4 d-flex flex-column align-items-center justify-content-between" style={{ height: '400px' }}>
        <h4 className="px-5 pt-4">
          Shuffle was founded in order to help record labels and musicians to reach the right potential fence and to make sure that their music would get to the right ears.
        </h4>
        <div>
          <img src={img} alt="" width={150} />
        </div>
        <div>
          <div className="pb-1">Shuffle | Tel Aviv 2022 | info@wershuffle.com</div>
          <div>Website By Kfir Digital & Shon Amar</div>
        </div>
      </div>
    </section>
  )
}
