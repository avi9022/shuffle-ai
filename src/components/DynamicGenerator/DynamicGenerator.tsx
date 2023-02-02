import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { generationType } from '../../types/generation'
import { PostForm } from './PostForm/PostForm'

export const DynamicGenerator: FunctionComponent = () => {
  const { type } = useParams()
  switch (type) {
    case generationType.post:
      return (
        <div>
          <PostForm />
        </div>
      )
    default:
      return <> dyn</>
  }
}
