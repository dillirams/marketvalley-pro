"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: InputProps) {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      {/* Input */}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search shops..."
        className="
          w-full
          pl-10 pr-10
          py-2
          rounded-xl
          border border-gray-200
          bg-white
          text-sm
          outline-none
          focus:ring-2 focus:ring-blue-500
          focus:border-blue-500
          transition
        "
      />

      {/* Clear Icon */}
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
