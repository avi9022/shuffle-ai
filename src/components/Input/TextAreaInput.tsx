import React, { FunctionComponent } from 'react'
import './Input.css'

interface InputTextProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  labelClassName?: string
  preventDBlock?: boolean
  inputClassName?: string
  rows?: number
  inputType?: 'primary'
}

export const TextAreaInput: FunctionComponent<InputTextProps> = ({ id, className, children, label, labelClassName, preventDBlock, inputClassName, inputType = 'primary', rows, ...props }) => {
  return (
    <label className={`mb-3 ${preventDBlock ? '' : 'd-block'} ${className}`}>
      <p className={`mb-1 ${labelClassName}`}>{label}</p>
      <textarea rows={rows || 5} className={`input-${inputType} resize-none outline-0 text-truncate placeholder-gray ${inputClassName}`} {...props}>
        {children}
      </textarea>
    </label>
  )
}
