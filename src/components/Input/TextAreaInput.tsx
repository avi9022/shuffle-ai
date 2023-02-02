import React, { FunctionComponent } from 'react'

interface InputTextProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  labelClassName?: string
  preventDBlock?: boolean
  inputClassName?: string
  rows?: number
}

export const TextAreaInput: FunctionComponent<InputTextProps> = ({ id, className, children, label, labelClassName, preventDBlock, inputClassName, rows, ...props }) => {
  return (
    <label className={`mb-3 ${preventDBlock ? '' : 'd-block'} ${className}`}>
      <p className={`mb-1 ${labelClassName}`}>{label}</p>
      <textarea rows={rows || 5} className={`form-control resize-none outline-0 text-truncate ${inputClassName}`} {...props}>
        {children}
      </textarea>
    </label>
  )
}
