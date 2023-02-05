import { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";

import contentPlaceholder from "../../assets/images/generation-placeholder.svg";
import {
  currentUserGenerationAtom,
  currentUserVideoGenerationAtom,
} from "../../state/atoms/userGenerations";
export const GeneratedPostContent: FunctionComponent = () => {
  const userGeneration = useRecoilValue(currentUserGenerationAtom);
  const userVideoGeneration = useRecoilValue(currentUserVideoGenerationAtom);

  const [text, setText] = useState("");
  const [fullText, setFullText] = useState<string | "">(
    "Every day im shuffeling and you know it"
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    setText("");
    if (userGeneration?.text) setFullText(userGeneration?.text);
  }, [userGeneration]);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);

  return (
    <div className="d-flex h-100">
      {!!userGeneration ? (
        <div>{text}</div>
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
      {/* {!!userVideoGeneration && (
        <div
          dangerouslySetInnerHTML={{
            __html: `<iframe width="100%" height="355" src="${userVideoGeneration.url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
          }}
        />
      )} */}
    </div>
  );
};
