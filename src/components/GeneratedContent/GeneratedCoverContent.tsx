import { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import loading from "../../assets/images/loading.svg";
import contentPlaceholder from "../../assets/images/generation-placeholder.svg";
import {
  isSetUserGenerationsAtom,
  userCoverGenerationsAtom,
} from "../../state/atoms/userGenerations";
export const GeneratedCoverContent: FunctionComponent = () => {
  const userCoverGenerations = useRecoilValue(userCoverGenerationsAtom);
  const isLoading = useRecoilValue(isSetUserGenerationsAtom);

  if (isLoading)
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <img src={loading} alt="" />
      </div>
    );
  return (
    <div className="d-flex h-100">
      {!!userCoverGenerations ? (
        <img className="w-100 h-100" src={userCoverGenerations.url} alt="" />
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
