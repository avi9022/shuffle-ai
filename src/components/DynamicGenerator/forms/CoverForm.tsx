import { FunctionComponent, useState } from "react";
import { useRecoilState } from "recoil";
import { coverFormValuesAtom } from "../../../state/atoms/generetionForms";
import { DateInput } from "../../Input/DateInput";
import { TextAreaInput } from "../../Input/TextAreaInput";
import { TextInput } from "../../Input/TextInput";

export const CoverForm: FunctionComponent = () => {
  const [coverFormValues, setCoverFormValues] =
    useRecoilState(coverFormValuesAtom);

  return (
    <div>
      <TextInput
        label="Name of the song"
        inputClassName="bg-transparent border-gray text-white"
        placeholder="Blue led"
        value={coverFormValues.songName}
        onChange={(ev) => {
          setCoverFormValues((prevState) => ({
            ...prevState,
            songName: ev.target.value,
          }));
        }}
      />
      <DateInput
        label="Date of release"
        inputClassName="bg-transparent border-gray text-white"
        placeholder="27th of April"
        value={coverFormValues.dateOfRelease}
        onChange={(ev) => {
          setCoverFormValues((prevState) => ({
            ...prevState,
            dateOfRelease: ev.target.value,
          }));
        }}
      />
      <TextInput
        label="Genre"
        inputClassName="bg-transparent border-gray text-white"
        placeholder="Rock"
        value={coverFormValues.genre}
        onChange={(ev) => {
          setCoverFormValues((prevState) => ({
            ...prevState,
            genre: ev.target.value,
          }));
        }}
      />
      <TextAreaInput
        label="Describe what you'd like to see"
        inputClassName="bg-transparent border-gray text-white"
        value={coverFormValues.description}
        placeholder="My new single Blue led is out bla bla bla"
        onChange={(ev) => {
          setCoverFormValues((prevState) => ({
            ...prevState,
            description: ev.target.value,
          }));
        }}
      />
    </div>
  );
};
