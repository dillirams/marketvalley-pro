import React from "react";

interface IconButtonProps {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  count?: number;
  onClick?: () => void;
  size: number;
}

export const IconButton = ({
  Icon,
  count,
  onClick,
  size,
}: IconButtonProps) => {
  const showBadge = typeof count === "number" && count > 0;

  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
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
    </button>
  );
};
