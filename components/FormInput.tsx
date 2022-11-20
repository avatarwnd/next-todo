import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface FormInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  function FormInput({ label, error, ...props }: FormInputProps, ref) {
    return (
      <div className="mb-4 flex flex-col relative">
        <label className="" htmlFor={props.name}>
          {label}
        </label>
        <input
          ref={ref}
          className={`flex items-center border-2 pl-8 ${
            error ? "border-red-500 focus:outline-none" : "border-black"
          } w-full rounded-sm h-10 p-2`}
          {...props}
        />
        <FontAwesomeIcon
          icon={props.type === "password" ? faLock : faUser}
          className="absolute left-3 top-8"
          size="lg"
        />
        {error && <span className="text-red-500">{error}</span>}
      </div>
    );
  }
);
