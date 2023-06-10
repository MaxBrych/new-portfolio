import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import CTA from "./common/CTA";
import { Box, useColorModeValue } from "@chakra-ui/react";

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
  const bg = useColorModeValue("white", "gray.700");
  const heading = useColorModeValue("gray.700", "gray.100");
  const text = useColorModeValue("gray.700", "gray.200");

  return (
    <>
      <Box
        bg={bg}
        className="flex justify-between h-full col-span-4 row-span-2 overflow-hidden bg-white md:col-span-3 rounded-3xl md:flex-col"
      >
        <div className="flex-grow w-1/2 mx-4 my-4 md:mx-6 md:mt-6 md:w-full">
          <h1
            color={heading}
            className="text-xl font-bold tracking-tight md:text-2xl"
          >
            {" "}
            {title}
          </h1>
          <p
            color={text}
            className="mb-6 text-xs font-medium md:mt-2 md:text-base"
          >
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
      </Box>
    </>
  );
};

export default ProjectComponent;
