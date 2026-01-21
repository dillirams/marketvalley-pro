import React, { ReactElement } from "react";

interface iconButtonProp {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  count?: number;
  onclick?: () => void;
}

export const IconButton = ({ Icon, count, onclick }: iconButtonProp) => {
  return (
    <div
      className="relative flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-110"
      onClick={onclick}
    >
      <span
        className={`${count && count <= 0 ? "hidden" : "block"}
    absolute -top-1 -right-1
    min-w-4.5 h-4.5
    rounded-full
    bg-red-500
    text-white
    text-[10px]
    p-1
    flex items-center justify-center
    font-semibold
   
  `}
      >
        {count && count > 99 ? "99+" : count}
      </span>

      <Icon
        size={35}
        className="text-gray-500 hover:text-black transition-colors duration-200"
      />
    </div>
  );
};
