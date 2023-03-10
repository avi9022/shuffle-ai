import React, { FunctionComponent } from "react";
import "./Input.css";

interface InputSelectProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  labelClassName?: string;
  preventDBlock?: boolean;
  inputClassName?: string;
  inputType?: "primary";
}

export const SelectInput: FunctionComponent<InputSelectProps> = ({
  id,
  className,
  children,
  label,
  labelClassName,
  preventDBlock,
  inputClassName,
  inputType = "primary",
  ...props
}) => {
  return (
    <label className={`mb-3 ${preventDBlock ? "" : "d-block"} ${className}`}>
      {label && <p className={`mb-1 ${labelClassName}`}>{label}</p>}
      <select
        className={`select-${inputType} outline-0 text-truncate placeholder-gray ${inputClassName}`}
        {...props}
      >
        {children}
      </select>
    </label>
  );
};
