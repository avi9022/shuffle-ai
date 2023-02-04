import React, { FunctionComponent } from 'react'

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelClassName?: string
  preventDBlock?: boolean
  inputClassName?: string
}

export const TextInput: FunctionComponent<InputTextProps> = ({ id, className, children, label, labelClassName, preventDBlock, inputClassName, ...props }) => {
  return (
    <label className={`mb-3 ${preventDBlock ? '' : 'd-block'} ${className}`}>
      {label && <p className={`mb-1 ${labelClassName}`}>{label}</p>}
      <input type="text" className={`form-control outline-0 text-truncate placeholder-gray ${inputClassName}`} {...props}>
        {children}
      </input>
    </label>
  )
}
