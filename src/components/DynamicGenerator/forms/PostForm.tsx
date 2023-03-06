import { FunctionComponent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { postFormValuesAtom } from '../../../state/atoms/generetionForms'
import { DateInput } from '../../Input/DateInput'
import { TextAreaInput } from '../../Input/TextAreaInput'
import { TextInput } from '../../Input/TextInput'

export const PostForm: FunctionComponent = () => {
  const [postFormValues, setPostFormValues] = useRecoilState(postFormValuesAtom)

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
          }))
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
            }))
          }}
        />
        <TextInput
          label="Genre"
          placeholder="Rock"
          className="flex-grow-1"
          value={postFormValues.genre}
          onChange={(ev) => {
            setPostFormValues((prevState) => ({
              ...prevState,
              genre: ev.target.value,
            }))
          }}
        />
      </div>
      <TextAreaInput
        label="Tell us about your single"
        value={postFormValues.description}
        placeholder="My new single Blue led is out bla bla bla"
        onChange={(ev) => {
          setPostFormValues((prevState) => ({
            ...prevState,
            description: ev.target.value,
          }))
        }}
      />
      <TextInput
        label="Select tone"
        placeholder="Friendly"
        value={postFormValues.tone}
        onChange={(ev) => {
          setPostFormValues((prevState) => ({
            ...prevState,
            tone: ev.target.value,
          }))
        }}
      />
    </div>
  )
}
