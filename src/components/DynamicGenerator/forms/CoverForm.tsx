import { FunctionComponent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { coverFormValuesAtom } from '../../../state/atoms/generetionForms'
import { DateInput } from '../../Input/DateInput'
import { TextAreaInput } from '../../Input/TextAreaInput'
import { TextInput } from '../../Input/TextInput'

export const CoverForm: FunctionComponent = () => {
  const [coverFormValues, setCoverFormValues] = useRecoilState(coverFormValuesAtom)

  return (
    <div>
      <TextInput
        label="Name of the song"
        placeholder="Blue led"
        value={coverFormValues.songName}
        onChange={(ev) => {
          setCoverFormValues((prevState) => ({
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
          value={coverFormValues.dateOfRelease}
          onChange={(ev) => {
            setCoverFormValues((prevState) => ({
              ...prevState,
              dateOfRelease: ev.target.value,
            }))
          }}
        />
        <TextInput
          label="Genre"
          placeholder="Rock"
          className="flex-grow-1"
          value={coverFormValues.genre}
          onChange={(ev) => {
            setCoverFormValues((prevState) => ({
              ...prevState,
              genre: ev.target.value,
            }))
          }}
        />
      </div>
      <TextAreaInput
        label="Describe what you'd like to see"
        value={coverFormValues.description}
        placeholder="My new single Blue led is out bla bla bla"
        onChange={(ev) => {
          setCoverFormValues((prevState) => ({
            ...prevState,
            description: ev.target.value,
          }))
        }}
      />
    </div>
  )
}
