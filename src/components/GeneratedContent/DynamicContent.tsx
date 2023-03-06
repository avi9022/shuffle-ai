import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { generationType } from '../../types/generation'
import { GeneratedPostContent } from './GeneratedPostContent'
import { GeneratedVideoContent } from './GeneratedVideoContent'
import { useRecoilValue } from 'recoil'
import { userPostGenerationsAtom, currentUserVideoGenerationAtom } from '../../state/atoms/userGenerations'
import { GeneratedCoverContent } from './GeneratedCoverContent'
import { Button } from '../Button/Button'
import { ShareSvg } from '../SVG/ShareSvg'
import { CopySvg } from '../SVG/CopySvg'
import { EditSvg } from '../SVG/EditSvg'
import crown from '../../assets/images/crown.png'

export const DynamicContent: FunctionComponent = () => {
  const { type } = useParams()
  const userGeneration = useRecoilValue(userPostGenerationsAtom)
  const userVideoGeneration = useRecoilValue(currentUserVideoGenerationAtom)
  const getContent = () => {
    switch (type) {
      case generationType.post:
      case generationType.ad:
        return <GeneratedPostContent />
      case generationType.video:
      case generationType.video916:
        return <GeneratedVideoContent />
      //   case generationType.youtube:
      //   case generationType.tiktok:
      //     return <ThumbnailForm />;
      case generationType.cover:
        return <GeneratedCoverContent />
      default:
        return <></>
    }
  }

  return (
    <div className="d-flex flex-column justify-content-between h-100 p-4">
      <div className="mb-5 border-bottom border-light pb-5">
        <div className="fw-bold">Result</div>
        <div className="bg-light-gray p-4 rounded-3 mb-2">{getContent()}</div>
        {userGeneration && (
          <div className="w-100 d-flex gap-1">
            <Button btnType="styleless" className="p-0 pe-4 d-flex align-items-center gap-2">
              <ShareSvg />
              <div>Share</div>
            </Button>
            <Button btnType="styleless" className="p-0 pe-4 d-flex align-items-center gap-2">
              <CopySvg />
              <div>Copy</div>
            </Button>
            <Button btnType="styleless" className="p-0 d-flex align-items-center gap-2">
              <EditSvg />
              <div>Edit text</div>
            </Button>
          </div>
        )}
      </div>
      <div>
        <div className="fw-bold d-flex align-items-center gap-1">
          Pro Tip <img src={crown} alt="" />
        </div>
        <div>
          With our AI tools, you can easily create eye-catching visuals and engaging content that will help you to reach a wider audience and promote your music to the masses. Take advantage of our
          powerful AI tools to grow your music career!
        </div>
      </div>
    </div>
  )
}
