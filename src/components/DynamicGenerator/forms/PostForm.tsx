import { FunctionComponent, useState } from "react";
import { useRecoilState } from "recoil";
import { postFormValuesAtom } from "../../../state/atoms/generetionForms";
import { DateInput } from "../../Input/DateInput";
import { TextAreaInput } from "../../Input/TextAreaInput";
import { TextInput } from "../../Input/TextInput";

export const PostForm: FunctionComponent = () => {
  const [postFormValues, setPostFormValues] =
    useRecoilState(postFormValuesAtom);

  return (
    <div>
      <TextInput
        label="Name of the song"
        inputClassName="bg-transparent border-gray text-white"
        placeholder="Blue led"
        value={postFormValues.songName}
        onChange={(ev) => {
          setPostFormValues((prevState) => ({
            ...prevState,
            songName: ev.target.value,
          }));
        }}
      />
      <DateInput
        label="Date of release"
        inputClassName="bg-transparent border-gray text-white"
        placeholder="27th of April"
        value={postFormValues.dateOfRelease}
        onChange={(ev) => {
          setPostFormValues((prevState) => ({
            ...prevState,
            dateOfRelease: ev.target.value,
          }));
        }}
      />
      <TextInput
        label="Genre"
        inputClassName="bg-transparent border-gray text-white"
        placeholder="Rock"
        value={postFormValues.genre}
        onChange={(ev) => {
          setPostFormValues((prevState) => ({
            ...prevState,
            genre: ev.target.value,
          }));
        }}
      />
      <TextAreaInput
        label="Tell us about your single"
        inputClassName="bg-transparent border-gray text-white"
        value={postFormValues.description}
        placeholder="My new single Blue led is out bla bla bla"
        onChange={(ev) => {
          setPostFormValues((prevState) => ({
            ...prevState,
            description: ev.target.value,
          }));
        }}
      />
      <TextInput
        label="Select tone"
        inputClassName="bg-transparent border-gray text-white"
        placeholder="Friendly"
        value={postFormValues.tone}
        onChange={(ev) => {
          setPostFormValues((prevState) => ({
            ...prevState,
            tone: ev.target.value,
          }));
        }}
      />
    </div>
  );
};
