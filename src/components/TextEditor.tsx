import { FunctionComponent, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { isEditUserGenerationsAtom } from "../state/atoms/userGenerations";

interface TextEditorProps {
  content: string;
  onSetValue: (value: string) => void;
}

export const TextEditor: FunctionComponent<TextEditorProps> = ({
  content,
  onSetValue,
}) => {
  const isEditing = useRecoilValue(isEditUserGenerationsAtom);
  const divRef = useRef<HTMLDivElement>(null);
  const selRef = useRef<Selection | null>(null);

  useEffect(() => {
    const div = divRef.current;

    if (!div) {
      return;
    }

    const sel = window.getSelection();
    if (!sel) {
      return;
    }

    // Select the last child node of the div
    let lastChildNode: ChildNode | null = div.lastChild;
    while (lastChildNode && lastChildNode.nodeType !== Node.TEXT_NODE) {
      lastChildNode = lastChildNode.previousSibling;
    }
    const range = document.createRange();
    if (lastChildNode) {
      range.setStart(lastChildNode, lastChildNode.textContent?.length || 0);
    } else {
      range.setStart(div, 0);
    }
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);

    // Add event listener for input to update selection range
    const handleInput = () => {
      const sel = window.getSelection();
      if (sel) {
        selRef.current = sel;
      }
      onSetValue(div.innerText);
    };

    div.addEventListener("input", handleInput);

    return () => {
      div.removeEventListener("input", handleInput);
    };
  }, [content, divRef, onSetValue]);

  return (
    <div
      ref={divRef}
      style={{ outline: "none" }}
      suppressContentEditableWarning={true}
      contentEditable={!!isEditing}
    >
      {content}
    </div>
  );
};
