import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface inputType {
  placeholder: string;
  label: string;
  name: string;
  inputtype: string;
  register: UseFormRegister<any>;
  required: boolean;
  errors: FieldErrors<any>;
  maxlength?: number;
  minlength?: number;
  size: "sm" | "md" | "lg";
  label_size?: "sm" | "md" | "lg";
}

const SIZE_STYLES = {
  sm: "px-2 py-1.5 text-sm w-full",
  md: "px-3 py-2 text-sm w-full",
  lg: "px-4 py-3 text-base w-full",
} as const;
const LABEL_SIZE = {
  sm: "text-md",
  md: "text-xl",
  lg: "text-2xl",
} as const;

const Input = ({
  label,
  register,
  placeholder,
  inputtype,
  required,
  maxlength,
  minlength,
  errors,
  name,
  size,
  label_size,
}: inputType) => {
  const hasErrors = errors[name];

  return (
    <div className="flex flex-col gap-1.5">
      <label
        className={`${label_size ? LABEL_SIZE[label_size] : "text-md"} text-gray-700 font-semibold`}
      >
        {label}
      </label>

      <input
        {...register(name, {
          required: required ? `${label} is required` : false,
          ...(maxlength && {
            maxLength: {
              value: maxlength,
              message: `Max length should be ${maxlength}`,
            },
          }),
          ...(minlength && {
            minLength: {
              value: minlength,
              message: `Min length should be ${minlength}`,
            },
          }),
        })}
        type={inputtype}
        placeholder={placeholder}
        className={`
          w-full
          border
          rounded-md
          bg-white
          placeholder-gray-400
          shadow-sm
          transition
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          ${SIZE_STYLES[size]}
          ${hasErrors ? "border-red-400" : "border-gray-300"}
        `}
      />

      {hasErrors && (
        <p className="text-sm text-red-500">{String(hasErrors.message)}</p>
      )}
    </div>
  );
};

export default Input;
