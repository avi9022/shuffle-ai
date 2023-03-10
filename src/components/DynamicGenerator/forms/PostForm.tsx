import { FunctionComponent, useState } from "react";
import { useRecoilState } from "recoil";
import { postFormValuesAtom } from "../../../state/atoms/generetionForms";
import { DateInput } from "../../Input/DateInput";
import { SelectInput } from "../../Input/SelectInput";
import { TextAreaInput } from "../../Input/TextAreaInput";
import { TextInput } from "../../Input/TextInput";

export const PostForm: FunctionComponent = () => {
  const [postFormValues, setPostFormValues] =
    useRecoilState(postFormValuesAtom);

  return (
    <div>
      <TextInput
        label="Name of the song"
        placeholder="Blue led"
        value={postFormValues.songName}
        onChange={(ev) => {
          setPostFormValues((prevState) => ({
            ...prevState,
            songName: ev.target.value,
          }));
        }}
      />
      <div className="d-flex w-100 gap-3">
        <DateInput
          label="Date of release"
          placeholder="27th of April"
          className="flex-grow-1"
          value={postFormValues.dateOfRelease}
          onChange={(ev) => {
            setPostFormValues((prevState) => ({
              ...prevState,
              dateOfRelease: ev.target.value,
            }));
          }}
        />
        <SelectInput
          label="Genre"
          className="flex-grow-1"
          value={postFormValues.genre}
          onChange={(ev) => {
            setPostFormValues((prevState) => ({
              ...prevState,
              genre: ev.target.value,
            }));
          }}
        >
          {[
            { label: "Rock", value: "rock" },
            { label: "Pop", value: "pop" },
          ].map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </SelectInput>
      </div>
      <TextAreaInput
        label="Tell us about your single"
        value={postFormValues.description}
        placeholder="My new single Blue led is out"
        onChange={(ev) => {
          setPostFormValues((prevState) => ({
            ...prevState,
            description: ev.target.value,
          }));
        }}
      />
      <SelectInput
        label="Select tone"
        value={postFormValues.tone}
        onChange={(ev) => {
          setPostFormValues((prevState) => ({
            ...prevState,
            tone: ev.target.value,
          }));
        }}
      >
        {[{ label: "Friendly", value: "friendly" }].map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </SelectInput>
    </div>
  );
};
