import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

interface ProjectComponentProps {
  title: string;
  image: string;
  description: string;
  cta: string;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({
  title,
  image,
  description,
  cta,
}) => {
  return (
    <>
      <motion.div
        className="flex justify-between col-span-3 row-span-2 overflow-hidden bg-white rounded-3xl md:flex-col"
        transition={{ duration: 0.3 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <div className="mx-6 mt-6 ">
          <h1 className="text-base font-semibold tracking-tight text-gray-700 md:text-4xl">
            {" "}
            {title}
          </h1>
          <p className="mt-2 mb-6 text-sm font-medium text-gray-500 md:text-base">
            {description}
          </p>
          <Link
            href={""}
            className="flex items-center justify-between gap-2 py-2 pl-5 pr-2 text-base font-bold rounded-full cursor-pointer h-11 md:gap-3 bg-[#EFF2F5]"
          >
            {cta}{" "}
            <FiArrowUpRight className="w-8 h-8 p-1 rounded-full bg-[#A8CBFF]" />
          </Link>
        </div>

        <div>
          <Image
            className="object-contain w-full"
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
