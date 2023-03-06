import React, { FunctionComponent } from 'react'
import './Input.css'

interface InputDateProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelClassName?: string
  preventDBlock?: boolean
  inputClassName?: string
  inputType?: 'primary'
}

export const DateInput: FunctionComponent<InputDateProps> = ({ id, className, children, label, labelClassName, preventDBlock, inputClassName, inputType = 'primary', ...props }) => {
  return (
    <label className={`mb-3 ${preventDBlock ? '' : 'd-block'} ${className}`}>
      <p className={`mb-1 ${labelClassName}`}>{label}</p>
      <input type="date" className={`input-${inputType} outline-0 text-truncate ${inputClassName}`} {...props}>
        {children}
      </input>
    </label>
  )
}
