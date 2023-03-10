import { FunctionComponent, useState } from "react";
import { useParams } from "react-router-dom";
import { generationType } from "../../types/generation";
import { GeneratedPostContent } from "./GeneratedPostContent";
import { GeneratedVideoContent } from "./GeneratedVideoContent";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  userPostGenerationsAtom,
  currentUserVideoGenerationAtom,
  userCoverGenerationsAtom,
  isEditUserGenerationsAtom,
} from "../../state/atoms/userGenerations";
import { GeneratedCoverContent } from "./GeneratedCoverContent";
import { Button } from "../Button/Button";
import { ShareSvg } from "../SVG/ShareSvg";
import { CopySvg } from "../SVG/CopySvg";
import { EditSvg } from "../SVG/EditSvg";
import crown from "../../assets/images/crown.png";
import { Notification } from "../Notification";

export const DynamicContent: FunctionComponent = () => {
  const { type } = useParams();
  const [userPostGeneration, setUserPostGeneration] = useRecoilState(
    userPostGenerationsAtom
  );
  const [isEditing, setIsEditing] = useRecoilState(isEditUserGenerationsAtom);
  const setUserCoverGeneration = useSetRecoilState(userCoverGenerationsAtom);
  const setCurrentUserVideoGeneration = useSetRecoilState(
    currentUserVideoGenerationAtom
  );
  const [copied, setCopied] = useState(false);

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
      case generationType.cover:
        return <GeneratedCoverContent />;
      default:
        return <></>;
    }
  };

  const handleCopy = () => {
    switch (type) {
      case generationType.post:
      case generationType.ad:
        return navigator.clipboard
          .writeText(userPostGeneration?.text || "")
          .then(() => {
            console.log("Content copied to clipboard");
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 3000);
          })
          .catch((err) => {
            console.error("Failed to copy content: ", err);
          });
      case generationType.video:
      case generationType.video916:
        return <GeneratedVideoContent />;
      //   case generationType.youtube:
      //   case generationType.tiktok:
      //     return <ThumbnailForm />;
      case generationType.cover:
        return <GeneratedCoverContent />;
      default:
        return <></>;
    }
  };

  // TODO - CHANGE USERPOSTGENERETAION TO BE A CONST THAT CHECKS FOR ONE AT LEAST

  // const onEditPostContent = (editableDiv: React.RefObject<any>) => {
  //   const nestedDiv = editableDiv.current.querySelector("div");
  //   nestedDiv.contentEditable = true;
  //   nestedDiv.focus();
  // };
  // TODO - CHANGE func to be dynamic

  return (
    <div className="d-flex flex-column justify-content-between h-100 p-4">
      <div className="border-bottom border-light">
        <div className="fw-bold">Result</div>
        <div className="bg-light-gray p-4 rounded-3 mb-2 d-flex justify-content-center align-items-center">
          {getContent()}
        </div>
        {userPostGeneration && (
          <div className="w-100">
            <div className="d-flex gap-1">
              <Button
                btnType="styleless"
                className="p-0 pe-4 d-flex align-items-center gap-2"
              >
                <ShareSvg />
                <div>Share</div>
              </Button>
              <Button
                btnType="styleless"
                disabled={!userPostGeneration}
                className="p-0 pe-4 d-flex align-items-center gap-2"
              >
                <CopySvg />
                <div onClick={handleCopy}>Copy</div>
              </Button>
              <Button
                btnType="styleless"
                className="p-0 d-flex align-items-center gap-2"
                onClick={() => setIsEditing(!isEditing)}
              >
                <EditSvg />
                {!isEditing ? <div>Edit text</div> : <div>Save text</div>}
              </Button>
            </div>
          </div>
        )}
        <Notification content="Content copied to clipboard!" visible={copied} />
      </div>
      <div>
        <div className="fw-bold d-flex align-items-center gap-1">
          Pro Tip <img src={crown} alt="" />
        </div>
        <div>
          With our AI tools, you can easily create eye-catching visuals and
          engaging content that will help you to reach a wider audience and
          promote your music to the masses. Take advantage of our powerful AI
          tools to grow your music career!
        </div>
      </div>
    </div>
  );
};
