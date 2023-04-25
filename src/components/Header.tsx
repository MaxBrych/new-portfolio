// IconComponent.tsx
import React from "react";
import { IconType } from "react-icons";

interface HeaderProps {}

const IconComponent: React.FC<HeaderProps> = () => {
  return (
    <div className="flex h-16 items-center justify-center w-full bg-white cursor-pointer rounded-2xl"></div>
  );
};

export default IconComponent;
