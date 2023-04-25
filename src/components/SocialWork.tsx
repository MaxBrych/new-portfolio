// IconComponent.tsx
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FiArrowUpRight } from "react-icons/fi";

interface IconComponentProps {
  Icon: IconType;
  label: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ Icon, label }) => {
  return (
    <div className="flex  items-start justify-between col-span-3 p-4 bg-white rounded-2xl">
      <div className="flex-col flex h-full justify-between">
        <h1 className="text-3xl md:text-4xl font-bold">{label}</h1>

        <div className="flex-shrink-0">
          <Link
            href={""}
            className="flex items-center md:text-base text-sm font-bold justify-between gap-2 md:gap-4 pl-5 pr-2 py-2 rounded-full cursor-pointer bg-slate-300"
          >
            Mehr erfahren{" "}
            <FiArrowUpRight className="h-8 p-1 w-8 rounded-full bg-cyan-500" />
          </Link>
        </div>
      </div>
      <div>
        <Icon className="w-12 h-12 relative" />
      </div>
    </div>
  );
};

export default IconComponent;
