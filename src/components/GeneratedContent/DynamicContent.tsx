import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { generationType } from "../../types/generation";
import { GeneratedPostContent } from "./GeneratedPostContent";
import { GeneratedVideoContent } from "./GeneratedVideoContent";
import { BsHeart } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { RiFileCopyLine } from "react-icons/ri";
import { useRecoilValue } from "recoil";
import {
  currentUserGenerationAtom,
  currentUserVideoGenerationAtom,
} from "../../state/atoms/userGenerations";

export const DynamicContent: FunctionComponent = () => {
  const { type } = useParams();
  const userGeneration = useRecoilValue(currentUserGenerationAtom);
  const userVideoGeneration = useRecoilValue(currentUserVideoGenerationAtom);
  const getContent = () => {
    switch (type) {
      case generationType.post:
      case generationType.ad:
        return <GeneratedPostContent />;
      case generationType.video:
      case generationType.video916:
        return <GeneratedVideoContent />;
      //   case generationType.youtube:
      //   case generationType.tiktok:
      //     return <ThumbnailForm />;
      //   case generationType.cover:
      //     return <CoverForm />;
      default:
        return <>Choose what to generate</>;
    }
  };

  return (
    <div className="d-flex flex-column justify-content-between h-100 p-4">
      {getContent()}
      {userGeneration && (
        <div className="w-100 d-flex gap-2 justify-content-center">
          <button className="btn btn-secondary d-flex gap-1 align-items-center">
            <BsHeart />
            Share
          </button>
          <button className="btn btn-secondary d-flex gap-1 align-items-center">
            <RiFileCopyLine />
            Copy text
          </button>
          <button className="btn btn-secondary d-flex gap-1 align-items-center">
            <FiEdit2 />
            Edit text
          </button>
        </div>
      )}
    </div>
  );
};
