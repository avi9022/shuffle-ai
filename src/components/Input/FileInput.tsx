import React, { FunctionComponent, useEffect, useRef } from 'react'
import { FileTypes } from '../../types/file-types'
import './Input.css'

interface InputSelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  source: File | null
  acceptFile: FileTypes[]
  preventDBlock?: boolean
  label?: string
  labelClassName?: string
  inputType?: 'primary'
}

export const FileInput: FunctionComponent<InputSelectProps> = ({ className, children, source, acceptFile, preventDBlock, label, labelClassName, inputType = 'primary', ...props }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (!source && fileInputRef.current) fileInputRef.current.value = ''
  }, [source])

  return (
    <label className={`${preventDBlock ? '' : 'd-block'} ${className}`}>
      {label && <p className={`mb-1 ${labelClassName}`}>{label}</p>}
      <input ref={fileInputRef} type="file" {...props} accept={acceptFile.join(', ')} className={`d-none ${className} input-${inputType}`} />
      {children}
    </label>
  )
}
