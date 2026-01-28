import React from "react";

interface buttonType {
  title: string;
  click: () => void;
  size: "sm" | "md" | "lg";
  startIcon?: React.FC;
  endIcon?: React.FC;
  variant: "primary" | "secondary" | "tertiary";
  font: "light" | "normal" | "bold";
  fullWidth?: boolean;
  type?: "submit";
}

const variantTypes = {
  primary: "bg-button-primary text-white hover:brightness-110",
  secondary: "bg-button-secondary text-blue-600 hover:brightness-105",
  tertiary: "bg-button-tertiary text-white hover:brightness-70",
};

const sizeTypes = {
  sm: "px-2.5 py-1 text-[10px] sm:px-3 sm:py-1.5 sm:text-xs md:text-sm rounded-2xl whitespace-nowrap",

  md: "px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg rounded-3xl whitespace-nowrap",

  lg: "px-5 py-3 text-base sm:px-6 sm:py-3.5 sm:text-lg md:px-8 md:py-4 md:text-xl rounded-3xl whitespace-nowrap",
};

const fontVariant = {
  light: "font-light",
  normal: "font-normal",
  bold: "font-bold",
};

export const Button = (props: buttonType) => {
  return (
    <button
      type={props.type}
      onClick={props.click}
      className={`
        ${variantTypes[props.variant]}
        ${sizeTypes[props.size]}
        ${fontVariant[props.font]}
        hover:cursor-pointer
        transition
        ${props.fullWidth ? "w-full" : ""}
      `}
    >
      {props.title}
    </button>
  );
};
