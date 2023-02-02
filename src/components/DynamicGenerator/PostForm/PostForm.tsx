import { FunctionComponent, useState } from 'react'
import { DateInput } from '../../Input/DateInput'
import { TextAreaInput } from '../../Input/TextAreaInput'
import { TextInput } from '../../Input/TextInput'

export const PostForm: FunctionComponent = () => {
  const [postFormValues, setPostFormValues] = useState<{
    songName: string
    dateOfRelease: string
    genre: string
    description: string
    tone: string
  }>({
    songName: '',
    dateOfRelease: '',
    genre: '',
    description: '',
    tone: '',
  })

  const generate = (ev: React.FormEvent) => {
    ev.preventDefault()
    console.log(postFormValues)
  }

  return (
    <form onSubmit={generate}>
      <TextInput
        label="Name of the song"
        inputClassName="bg-transparent border-gray text-white"
        placeholder="Blue led"
        value={postFormValues.songName}
        onChange={(ev) => {
          setPostFormValues((prevState) => ({ ...prevState, songName: ev.target.value }))
        }}
      />
      <DateInput
        label="Date of release"
        inputClassName="bg-transparent border-gray text-white"
        placeholder="27th of April"
        value={postFormValues.dateOfRelease}
        onChange={(ev) => {
          setPostFormValues((prevState) => ({ ...prevState, dateOfRelease: ev.target.value }))
        }}
      />
      <TextInput
        label="Genre"
        inputClassName="bg-transparent border-gray text-white"
        placeholder="Rock"
        value={postFormValues.genre}
        onChange={(ev) => {
          setPostFormValues((prevState) => ({ ...prevState, genre: ev.target.value }))
        }}
      />
      <TextAreaInput
        label="Tell us about your single"
        inputClassName="bg-transparent border-gray text-white"
        value={postFormValues.description}
        placeholder="My new single Blue led is out bla bla bla"
        onChange={(ev) => {
          setPostFormValues((prevState) => ({ ...prevState, description: ev.target.value }))
        }}
      />
      <TextInput
        label="Select tone"
        inputClassName="bg-transparent border-gray text-white"
        placeholder="Friendly"
        value={postFormValues.tone}
        onChange={(ev) => {
          setPostFormValues((prevState) => ({ ...prevState, tone: ev.target.value }))
        }}
      />
      <button className="float-end border-0 text-white px-5 py-1 rounded-3" style={{ backgroundColor: '#139ebc' }}>
        Generate
      </button>
    </form>
  )
}
