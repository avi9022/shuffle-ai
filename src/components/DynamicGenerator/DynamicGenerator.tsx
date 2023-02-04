import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { generationType } from '../../types/generation'
import { CoverForm } from './forms/CoverForm'
import { PostForm } from './forms/PostForm'
import { ThumbnailForm } from './forms/ThumbnailForm'
import { VideoForm } from './forms/VideoForm'

export const DynamicGenerator: FunctionComponent = () => {
  const { type } = useParams()
  const getForm = () => {
    switch (type) {
      case generationType.post:
      case generationType.ad:
        return <PostForm />
      case generationType.video:
      case generationType.video916:
        return <VideoForm />
      case generationType.youtube:
      case generationType.tiktok:
        return <ThumbnailForm />
      case generationType.cover:
        return <CoverForm />
      default:
        return <>Choose what to generate</>
    }
  }

  return (
    <form className="d-flex flex-column justify-content-between h-100 p-4">
      {getForm()}
      {type && (
        <button className="align-self-end border-0 text-white px-5 py-1 rounded-3" style={{ backgroundColor: '#139ebc' }}>
          Generate
        </button>
      )}
    </form>
  )
}
