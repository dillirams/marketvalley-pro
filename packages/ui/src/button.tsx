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
  sm: "py-1 md:py-2 px-4 rounded-2xl text-sm ",
  md: "py-3 px-6 rounded-4xl text-md",
  lg: "py-4 px-8 rounded-4xl text-xl",
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
      className={`${variantTypes[props.variant]} ${sizeTypes[props.size]} ${fontVariant[props.font]} hover:cursor-pointer ${props.fullWidth && "w-full"} `}
      onClick={props.click}
    >
      {props.title}
    </button>
  );
};
