import React, { FunctionComponent } from 'react'
import './Input.css'

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelClassName?: string
  preventDBlock?: boolean
  inputClassName?: string
  inputType?: 'primary'
}

export const TextInput: FunctionComponent<InputTextProps> = ({ id, className, children, label, labelClassName, preventDBlock, inputClassName, inputType = 'primary', ...props }) => {
  return (
    <label className={`mb-3 ${preventDBlock ? '' : 'd-block'} ${className}`}>
      {label && <p className={`mb-1 ${labelClassName}`}>{label}</p>}
      <input type="text" className={`input-${inputType} outline-0 text-truncate placeholder-gray ${inputClassName}`} {...props}>
        {children}
      </input>
    </label>
  )
}
