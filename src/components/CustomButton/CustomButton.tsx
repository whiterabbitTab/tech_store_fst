import { Image } from "antd";
import React from "react";

interface IButton {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: React.FormEvent<HTMLButtonElement>) => void;
  title?: string | number;
  className?: string;
  type?: "button" | "reset" | "submit";
  icon?: string;
  width?: number;
  height?: number;
}

export const CustomButton: React.FC<IButton> = ({
  type,
  title,
  className,
  onClick,
  onChange,
  icon,
  width,
  height
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };
  
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center px-4 py-2 text-base rounded-md focus:outline-none ${className}`}
      onChange={onChange}
      onClick={handleClick}>
      {title && title}
      {icon && <Image src={icon} alt="asdf" width={width} height={height} preview={false} />}
    </button>
  )
}