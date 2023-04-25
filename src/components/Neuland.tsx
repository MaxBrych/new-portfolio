// IconComponent.tsx
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";

interface IconComponentProps {
  title: string;
  description: string;
  cta: string;
}

const IconComponent: React.FC<IconComponentProps> = ({
  title,
  description,
  cta,
}) => {
  return (
    <div className="flex items-center justify-center col-span-6 p-4 bg-white rounded-2xl">
      <div className="flex flex-col justify-center w-1/2 h-full">
        <h1 className="text-3xl md:text-4xl font-medium">{title}</h1>{" "}
        <p className="mb-4 text-sm md:text-base">{description}</p>
        <div className="flex-shrink-0">
          <Link
            className="px-6 bg-gray-300 text-sm md:text-base font-bold rounded-full cursor-pointer h-11"
            href={""}
          >
            {cta}
          </Link>
        </div>
      </div>
      <Image
        width={324}
        height={324}
        alt={""}
        className="object-cover w-1/2"
        src={
          "https://cdn.discordapp.com/attachments/911669935363752026/1100135571059384321/NEULAND_Cover_V1.png"
        }
      />
    </div>
  );
};

export default IconComponent;
