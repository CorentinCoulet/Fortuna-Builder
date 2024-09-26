import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/components/Others/Input.scss";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errors?: string[];
  label: string;
}

export default function Input({
  className,
  label,
  errors,
  ...inputProps
}: IInputProps): JSX.Element {
  return (
    <div className="input-component">
      <label htmlFor="email">{label}</label>
      <input
        {...inputProps}
        className={`${className || ""} ${
          errors && errors.length > 0 ? "input-error" : ""
        } `}
      />
      <div className="errors">
        {errors?.map((error, index) => (
          <p key={index}>
            <FontAwesomeIcon icon={faTriangleExclamation} />
            {error}
          </p>
        ))}
      </div>
    </div>
  );
}
