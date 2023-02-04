import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import { GenerationCards } from '../../shared/consts/generation-types'
import { generationType } from '../../types/generation'

import './GeneratorSideNav.css'

export const GeneratorSideNav: FunctionComponent = () => {
  const navigate = useNavigate()
  const getNavText = (type: string) => {
    switch (type) {
      case 'video916':
        return 'video 9:16'
      case 'video':
        return 'video 1:1'
      default:
        return type
    }
  }
  return (
    <nav>
      <ul className="d-flex gap-4 flex-md-column gap-md-2 justify-content-center p-4">
        {GenerationCards.filter((card) => card.type !== generationType.soon).map(({ type, icon }) => (
          <li className="list-group-item pointer text-capitalize" onClick={() => navigate(`/generator/${type}`)}>
            <div className="d-flex gap-2 pb-1 align-items-center">
              <div className="p-0">
                <img src={icon} alt="" height={25} />
              </div>
              <div>{getNavText(type)}</div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}
