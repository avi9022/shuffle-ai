import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { generationType } from "../../types/generation";
import { GeneratedPostContent } from "./GeneratedPostContent";
import { GeneratedVideoContent } from "./GeneratedVideoContent";


export const DynamicContent: FunctionComponent = () => {
  const { type } = useParams();
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
    </div>
  );
};
