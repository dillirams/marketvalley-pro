import { ImagesIcon } from "lucide-react";
import React, { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface imageUploadType {
  register: UseFormRegister<any>;
  size: number;
  name: string;
  errors: FieldErrors<any>;
}

const Imageupload = (props: imageUploadType) => {
  const hasErrors = props.errors[props.name];
  const [preview, setPreview] = useState<string>("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  }

  return (
    <div className="space-y-2">
      {/* Label / Dropzone */}
      <label
        className={`
          relative flex items-center justify-center
          h-40 w-full rounded-lg border-2 border-dashed
          cursor-pointer transition
          ${
            hasErrors
              ? "border-red-400 bg-red-50"
              : "border-green-300 hover:border-green-400 hover:bg-green-50"
          }
        `}
      >
        {/* Hidden Input */}
        <input
          {...props.register(props.name, {
            required: `${props.name} is required`,
          })}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />

        {/* Preview */}
        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="flex flex-col items-center text-gray-400">
            <ImagesIcon className="h-8 w-8 mb-2" />
            <span className="text-sm font-medium">
              Click to upload Business License
            </span>
          </div>
        )}
      </label>

      {/* Error */}
      {hasErrors && (
        <p className="text-sm text-red-500">{String(hasErrors.message)}</p>
      )}
    </div>
  );
};

export default Imageupload;
