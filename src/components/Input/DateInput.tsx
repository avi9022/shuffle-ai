import React, { FunctionComponent } from 'react'

interface InputDateProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelClassName?: string
  preventDBlock?: boolean
  inputClassName?: string
}

export const DateInput: FunctionComponent<InputDateProps> = ({ id, className, children, label, labelClassName, preventDBlock, inputClassName, ...props }) => {
  return (
    <label className={`mb-3 ${preventDBlock ? '' : 'd-block'} ${className}`}>
      <p className={`mb-1 ${labelClassName}`}>{label}</p>
      <input type="date" className={`form-control outline-0 text-truncate ${inputClassName}`} {...props}>
        {children}
      </input>
    </label>
  )
}
