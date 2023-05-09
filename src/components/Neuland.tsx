// IconComponent.tsx
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import CTA from "./common/CTA";

interface IconComponentProps {
  title: string;
  description: string;
  cta: string;
  link: any;
}

const IconComponent: React.FC<IconComponentProps> = ({
  title,
  description,
  cta,
  link,
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-center col-span-4 row-span-2 overflow-hidden bg-white md:col-span-6 rounded-3xl"
    >
      <div className="flex flex-col justify-center w-1/2 h-full p-4 md:p-8">
        <h1 className="text-2xl font-bold text-dark-30 md:text-3xl">{title}</h1>{" "}
        <p className="mb-4 text-xs leading-4 md:leading-5 text-dark-10 md:text-medium">
          {description}
        </p>
        <CTA cta={cta} href={link} />
      </div>
      <Image
        width={324}
        height={324}
        alt={""}
        className="object-contain w-1/2 h-full"
        src={
          "https://cdn.discordapp.com/attachments/911669935363752026/1100135571059384321/NEULAND_Cover_V1.png"
        }
      />
    </motion.div>
  );
};

export default IconComponent;
