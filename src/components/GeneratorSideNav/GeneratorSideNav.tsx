import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import { GenerationCards } from '../../shared/consts/generation-types'
import { generationType } from '../../types/generation'
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
      <ul className="d-flex gap-4 flex-md-column gap-md-2 justify-content-center p-0">
        {GenerationCards.filter((card) => card.type !== generationType.soon).map(({ type }) => (
          <li className="list-group-item pointer text-capitalize" onClick={() => navigate(`/generator/${type}`)}>
            {getNavText(type)}
          </li>
        ))}
      </ul>
    </nav>
  )
}
