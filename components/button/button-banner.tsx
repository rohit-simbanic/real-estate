import { ButtonProps } from "@/types/button-types";
import Link from "next/link";
import React from "react";

const ButtonBanner: React.FC<ButtonProps> = ({
  text,
  textColor,
  href,
  borderColor,
  borderWidth,
  borderRadius,
  bgColor,
  hoverBgColor,
  shadow,
}) => {
  const shadowClass = shadow ? "shadow" : "";
  return (
    <Link
      href={href}
      className={`inline-block px-12 py-3 text-sm font-medium text-${textColor} bg-${bgColor} border-${borderWidth} border-${borderColor} rounded-${borderRadius} ${shadowClass} hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto hover:bg-${hoverBgColor}`}
    >
      {text}
    </Link>
  );
};

export default ButtonBanner;
