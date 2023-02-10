import { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import contentPlaceholder from "../../assets/images/generation-placeholder.svg";
import {
  isSetUserGenerationsAtom,
  userPostGenerationsAtom,
} from "../../state/atoms/userGenerations";
import loading from "../../assets/images/loading.svg";

export const GeneratedPostContent: FunctionComponent = () => {
  const userGeneration = useRecoilValue(userPostGenerationsAtom);
  const isLoading = useRecoilValue(isSetUserGenerationsAtom);
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState<string | "">(
    "Every day im shuffeling and you know it"
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    setText("");
    if (userGeneration?.text) setFullText(userGeneration?.text);
  }, [userGeneration?.text]);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);
  if (isLoading)
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <img src={loading} alt="" />
      </div>
    );
  return (
    <div className="d-flex h-100">
      {!!userGeneration ? (
        <div>{userGeneration.text}</div>
      ) : (
        <div className="d-flex flex-column justify-space-between w-100">
          <img
            className="align-self-center"
            src={contentPlaceholder}
            alt=""
            width={150}
          />
          <div className="w-100 align-self-start">{text}</div>
        </div>
      )}
    </div>
  );
};
