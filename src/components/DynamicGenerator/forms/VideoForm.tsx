import { FunctionComponent, useState } from 'react'
import { TextAreaInput } from '../../Input/TextAreaInput'
import { TextInput } from '../../Input/TextInput'

export const VideoForm: FunctionComponent = () => {
  const [videoFormValues, setVideoFormValues] = useState<{
    songName: string
    lyrics: string
  }>({
    songName: '',
    lyrics: '',
  })

  return (
    <div>
      <TextInput
        label="Name of the song"
        inputClassName="bg-transparent border-gray text-white"
        placeholder="Blue led"
        value={videoFormValues.songName}
        onChange={(ev) => {
          setVideoFormValues((prevState) => ({ ...prevState, songName: ev.target.value }))
        }}
      />
      <TextAreaInput
        label="Give us the lyrics of your song"
        inputClassName="bg-transparent border-gray text-white"
        value={videoFormValues.lyrics}
        placeholder="My new single Blue led is out bla bla bla"
        onChange={(ev) => {
          setVideoFormValues((prevState) => ({ ...prevState, lyrics: ev.target.value }))
        }}
      />
    </div>
  )
}