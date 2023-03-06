import React, { FunctionComponent } from 'react'
import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: 'primary' | 'secondary' | 'brand' | 'styleless'
  outline?: boolean
  showTooltip?: boolean
}

export const Button: FunctionComponent<ButtonProps> = ({ children, className, outline = false, btnType = 'primary', ...props }) => {
  return (
    <button className={`btn py-1 btn-${btnType} ${className}`} {...props}>
      {children}
    </button>
  )
}
