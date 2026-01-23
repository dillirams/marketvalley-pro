import React from "react";

interface IconButtonProps {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  count?: number;
  onClick?: () => void;
  size: number;
  label?: string;
}

export const IconButton = ({
  Icon,
  count,
  onClick,
  size,
  label,
}: IconButtonProps) => {
  const showBadge = typeof count === "number" && count > 0;

  return (
    <button
      onClick={onClick}
      className="relative inline-flex flex-col items-center justify-center gap-1 transition-transform duration-200 ease-in-out hover:scale-110"
      style={{ width: size, height: size + (label ? 18 : 0) }}
    >
      {/* Badge */}
      {showBadge && (
        <span
          className="
            absolute
            -top-1
            -right-1
            min-w-4
            h-4
            rounded-full
            bg-red-500
            text-white
            text-[10px]
            px-1
            flex items-center justify-center
            font-semibold
            leading-none
          "
        >
          {count > 99 ? "99+" : count}
        </span>
      )}

      {/* Icon */}
      <Icon
        size={size}
        className="text-gray-500 hover:text-black transition-colors duration-200"
      />

      {/* Label */}
      {label && (
        <span className="text-[11px] text-gray-600 font-medium leading-none">
          {label}
        </span>
      )}
    </button>
  );
};
