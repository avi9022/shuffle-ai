import { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";

import contentPlaceholder from "../../assets/images/generation-placeholder.svg";
import { currentUserVideoGenerationAtom } from "../../state/atoms/userGenerations";
export const GeneratedVideoContent: FunctionComponent = () => {
  const userVideoGeneration = useRecoilValue(currentUserVideoGenerationAtom);

  return (
    <div className="d-flex h-100">
      {!!userVideoGeneration ? (
        <iframe
          width="100%"
          height="355"
          src={`${userVideoGeneration.url}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ) : (
        <div className="d-flex flex-column justify-space-between w-100">
          <img
            className="align-self-center"
            src={contentPlaceholder}
            alt=""
            width={150}
          />
          <div className="w-100 align-self-start">
            Every day im shuffeling and you know it
          </div>
        </div>
      )}
    </div>
  );
};
