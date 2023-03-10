import { FunctionComponent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import contentPlaceholder from "../../assets/images/generation-placeholder.svg";
import {
  isSetUserGenerationsAtom,
  userPostGenerationsAtom,
} from "../../state/atoms/userGenerations";
import loading from "../../assets/images/loading.svg";
import { TextEditor } from "../TextEditor";

export const GeneratedPostContent: FunctionComponent = () => {
  const [userGeneration, setUserGeneration] = useRecoilState(
    userPostGenerationsAtom
  );

  const isLoading = useRecoilValue(isSetUserGenerationsAtom);
  if (isLoading) return <img src={loading} alt="loading" />;

  return (
    <div className="d-flex">
      {!!userGeneration?.text ? (
        <div>
          <TextEditor
            content={userGeneration.text}
            onSetValue={(text: string) => {
              if (text !== "") {
                setUserGeneration({ text });
              }
            }}
          />
        </div>
      ) : (
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <img src={contentPlaceholder} alt="" width={150} />
          <div>Every day im shuffeling and you know it</div>
        </div>
      )}
    </div>
  );
};
