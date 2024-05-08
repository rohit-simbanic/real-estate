import { ButtonProps } from "@/types/button-types";
import Link from "next/link";
import React from "react";

const ButtonAuth: React.FC<ButtonProps> = ({
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
      className={`inline-block px-5 py-2.5 text-sm font-medium text-${textColor} bg-${bgColor} border-${borderWidth} border-${borderColor} rounded-${borderRadius} ${shadowClass} transition-colors duration-300 hover:bg-${hoverBgColor}`}
    >
      {text}
    </Link>
  );
};

export default ButtonAuth;
