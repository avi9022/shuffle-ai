import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { generateCover, generatePost, generateVideo } from '../../shared/services/generation'
import { coverFormValuesAtom, postFormValuesAtom, videoFormValuesAtom } from '../../state/atoms/generetionForms'
import { currentUserVideoGenerationAtom, isSetUserGenerationsAtom, userCoverGenerationsAtom, userPostGenerationsAtom } from '../../state/atoms/userGenerations'
import { GeneratedCoverContent, GeneratedPostContent, generationType } from '../../types/generation'
import { Button } from '../Button/Button'
import { CoverForm } from './forms/CoverForm'
import { PostForm } from './forms/PostForm'
import { ThumbnailForm } from './forms/ThumbnailForm'
import { VideoForm } from './forms/VideoForm'

export const DynamicGenerator: FunctionComponent = () => {
  const { type } = useParams()
  const postFormValues = useRecoilValue(postFormValuesAtom)
  const coverFormValues = useRecoilValue(coverFormValuesAtom)
  const videoFormValues = useRecoilValue(videoFormValuesAtom)
  const setUserPostGeneration = useSetRecoilState(userPostGenerationsAtom)
  const setUserCoverGeneration = useSetRecoilState(userCoverGenerationsAtom)
  const isSetUserGenerations = useSetRecoilState(isSetUserGenerationsAtom)
  const setCurrentUserVideoGeneration = useSetRecoilState(currentUserVideoGenerationAtom)
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
  const onGenerate = async (ev: React.FormEvent) => {
    ev.preventDefault()
    isSetUserGenerations(true)
    if (type === 'post') {
      const generatedPost = (await generatePost(postFormValues)) as GeneratedPostContent
      setUserPostGeneration(generatedPost)
    } else if (type === 'video' || type === 'video916') {
      const generatedVideo = await generateVideo(videoFormValues)
      setCurrentUserVideoGeneration(generatedVideo)
    } else if (type === 'cover') {
      const generatedCover = (await generateCover(coverFormValues)) as GeneratedCoverContent
      setUserCoverGeneration(generatedCover)
    }
    isSetUserGenerations(false)
  }

  return (
    <div>
      <form className="d-flex flex-column justify-content-between" onSubmit={onGenerate}>
        {getForm()}
        {type && (
          <Button btnType="brand" className="align-self-start fs-md py-3 px-5">
            Generate!
          </Button>
        )}
      </form>
    </div>
  )
}
