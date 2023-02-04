import { FunctionComponent, useState } from 'react'
import { FileTypes } from '../../../types/file-types'
import { FileInput } from '../../Input/FileInput'
import { TextInput } from '../../Input/TextInput'

export const ThumbnailForm: FunctionComponent = () => {
  const [thumbnailFormValues, setThumbnailFormValues] = useState<{
    title: string
    photo: File | null
    genre: string
  }>({
    title: '',
    photo: null,
    genre: '',
  })

  return (
    <div>
      <TextInput
        label="The title of the thumbnail"
        inputClassName="bg-transparent border-gray text-white"
        placeholder='Cover for "With you"'
        value={thumbnailFormValues.title}
        onChange={(ev) => {
          setThumbnailFormValues((prevState) => ({ ...prevState, title: ev.target.value }))
        }}
      />
      <FileInput
        label="Upload your photo without background"
        acceptFile={[FileTypes.IMAGE]}
        source={thumbnailFormValues.photo}
        onChange={(ev) => setThumbnailFormValues((prevState) => ({ ...prevState, photo: ev.target.files?.[0] || null }))}
      >
        <div className="d-flex gap-2 align-items-center">
          <TextInput
            inputClassName="bg-transparent border-gray text-white"
            className="flex-grow-1"
            placeholder={thumbnailFormValues.photo?.name || 'Upload photo...'}
            value={thumbnailFormValues.title}
            disabled
          />
          <p className="btn h-100" style={{ backgroundColor: '#139ebc' }}>
            upload
          </p>
        </div>
      </FileInput>
      <TextInput
        label="Genre"
        inputClassName="bg-transparent border-gray text-white"
        placeholder='Cover for "With you"'
        value={thumbnailFormValues.genre}
        onChange={(ev) => {
          setThumbnailFormValues((prevState) => ({ ...prevState, genre: ev.target.value }))
        }}
      />
    </div>
  )
}
