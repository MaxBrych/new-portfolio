// IconComponent.tsx
import React from "react";
import { IconType } from "react-icons";

interface IconComponentProps {
  Icon: IconType;
}

const IconComponent: React.FC<IconComponentProps> = ({ Icon }) => {
  return (
    <div className="flex items-center justify-center col-span-2 bg-white cursor-pointer rounded-2xl">
      <Icon className="w-12 h-12" />
    </div>
  );
};

export default IconComponent;
