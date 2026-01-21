import React from "react";
import { UseFormRegister } from "react-hook-form";
import { FieldErrors } from "react-hook-form";

interface inputType {
  placeholder: string;
  label: string;
  inputtype: string;
  register: UseFormRegister<any>;
  required: boolean;
  errors: FieldErrors<any>;
  maxlength?: number;
  minlength?: number;
}

const Input = ({
  label,
  register,
  placeholder,
  inputtype,
  required,
  maxlength,
  minlength,
  errors,
}: inputType) => {
  const hasErrors = errors[label];
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-lg text-gray-700 font-bold">{label}</label>

      <input
        {...register(label, {
          required: `${label} is required`,
          maxLength: {
            value: maxlength!,
            message: "max length should be " + maxlength,
          },
          minLength: {
            value: minlength! | 5,
            message: "min length should be " + minlength,
          },
        })}
        type={inputtype}
        placeholder={placeholder}
        className="
      w-full
      px-3 py-2
      text-sm
      border border-gray-300
      rounded-md
      bg-white
      placeholder-gray-400
      shadow-sm
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      focus:border-blue-500
      transition
    "
      />
      {hasErrors && <p className="text-red-500">{String(hasErrors.message)}</p>}
    </div>
  );
};

export default Input;
