"use client";
import React, { useRef, useState, useEffect } from "react";

interface ProfileUploadProps {
  value?: string | null;
  size?: number;
  onChange?: (file: File | null) => void;
  disabled?: boolean;
  firstletter: string;
}

export const ProfileUpload: React.FC<ProfileUploadProps> = ({
  value,
  size = 40,
  onChange,
  disabled = false,
  firstletter,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    setPreview(value ?? null);
  }, [value]);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
    onChange?.(file);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={() => !disabled && inputRef.current?.click()}
        style={{ width: size, height: size }}
        className={`
          relative
          rounded-full
          overflow-hidden
          border
          flex items-center justify-center
          cursor-pointer
          transition
          bg-gray-100
          ${disabled ? "opacity-50 cursor-not-allowed" : "hover:border-gray-400"}
        `}
      >
        {/* Profile image */}
        {preview ? (
          <img
            src={preview}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-lg font-semibold text-indigo-500 uppercase">
            {firstletter}
          </span>
        )}

        {/* Plus badge */}
        <span
          className="
            absolute
            -bottom-1
            -right-1
            w-5
            h-5
            rounded-full
            bg-indigo-500
            text-white
            text-sm
            flex items-center justify-center
            border
          "
        >
          +
        </span>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleSelect}
        />
      </div>
    </div>
  );
};
