// IconComponent.tsx
import { useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FiArrowUpRight } from "react-icons/fi";

interface IconComponentProps {
  image: string;
  label: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ image, label }) => {
  const bg = useColorModeValue("white", "gray.700");
  const text = useColorModeValue("gray.700", "gray.100");
  return (
    <div className="flex items-start justify-between col-span-2 p-4 bg-white md:col-span-3 rounded-3xl">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {label}
        </h1>

        <div className="flex-shrink-0 ">
          <Link
            href={""}
            className="flex items-center justify-between gap-2 py-2 pl-5 pr-2 text-sm font-bold rounded-full cursor-pointer h-11 md:gap-3 bg-slate-300"
          >
            Mehr erfahren{" "}
            <FiArrowUpRight className="w-8 h-8 p-1 rounded-full bg-cyan-500" />
          </Link>
        </div>
      </div>
      <div>
        <Image
          width={96}
          height={240}
          src={image}
          alt={label}
          className="object-cover w-12 h-full "
        />
      </div>
    </div>
  );
};

export default IconComponent;
