import { FunctionComponent } from 'react'

import './Services.css'
import { GenerationCards } from '../../shared/consts/generation-types'
import { useNavigate } from 'react-router-dom'

export const Services: FunctionComponent = () => {
  const navigate = useNavigate()
  const lines = ['Thumbnails for youtube', 'Post for new single', 'Text for ads', '15 second video out of your song']

  return (
    <section id="services" className="services pb-5">
      <div className="container text-center">
        <div className="row pb-5">
          <div className="fs-1 pb-2">Services</div>
          <div className="d-flex gap-2 justify-content-center align-items-center fs-3">
            <div className="d-inline ">Generate</div>
            <div className="multi-line-container rounded">
              <div className="lines text-start">
                {lines.map((line, idx) => (
                  <div className="line" key={idx}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5 text-start">
          {GenerationCards.map(({ icon, text, type }, idx) => (
            <button className="col-4 p-2 pointer border-0" role="button" onClick={() => navigate(`/generator/${type}`)}>
              <div key={idx}>
                <div className="bg-white h-100 rounded-md border border-2">
                  <div className="d-flex gap-4 align-items-center ps-2">
                    <div className="icon p-4 rounded my-2">
                      <img src={icon} alt="" width={60} height={60} />
                    </div>
                    <div className="pe-1">{text}</div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
        <button className="border border-dark text-black bg-transparent px-4 py-3 rounded-1">Contact us for more information</button>
      </div>
    </section>
  )
}
