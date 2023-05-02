import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import CTA from "./common/CTA";

interface ProjectComponentProps {
  title: string;
  image: string;
  description: string;
  cta: string;
  link: any;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({
  title,
  image,
  description,
  cta,
  link,
}) => {
  return (
    <>
      <motion.div
        className="flex justify-between h-full col-span-4 row-span-2 overflow-hidden bg-white md:col-span-3 rounded-3xl md:flex-col"
        transition={{ duration: 0.3 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <div className="flex-grow w-1/2 mx-4 my-4 md:mx-6 md:mt-6 md:w-full">
          <h1 className="text-xl font-semibold tracking-tight text-dark-30 md:text-4xl">
            {" "}
            {title}
          </h1>
          <p className="mb-6 text-xs font-medium md:mt-2 text-dark-50 md:text-base">
            {description}
          </p>
          <CTA cta={cta} href={link} />
        </div>

        <div className="items-end justify-end h-full ">
          <Image
            className="object-contain w-full h-full "
            src={image}
            width={240}
            height={240}
            alt={title}
          />
        </div>
      </motion.div>
    </>
  );
};

export default ProjectComponent;
