import { FunctionComponent, useRef, useEffect, useState } from "react";
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
  const [range, setRange] = useState<Range | null>(null);

  useEffect(() => {
    const div = divRef.current;

    if (!div) {
      return;
    }

    // Save the current selection range
    const handleSelectionChange = () => {
      const sel = window.getSelection();
      if (sel && sel.rangeCount > 0) {
        setRange(sel.getRangeAt(0));
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);

    // Update range state when content prop changes
    setRange(null);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, [content]);

  useEffect(() => {
    const div = divRef.current;

    if (!div) {
      return;
    }

    // Initialize range state with current selection range
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      setRange(sel.getRangeAt(0));
    }

    // Save the current selection range
    const handleSelectionChange = () => {
      const sel = window.getSelection();
      if (sel && sel.rangeCount > 0) {
        setRange(sel.getRangeAt(0));
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);

    // Update range state when content prop changes
    setRange(null);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, [content]);

  return (
    <div
      ref={divRef}
      style={{ outline: "none" }}
      suppressContentEditableWarning={true}
      contentEditable={!!isEditing}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
