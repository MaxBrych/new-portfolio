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
  const bg = useColorModeValue("white", "whiteAlpha.300");
  const heading = useColorModeValue("blackAlpha.700", "whiteAlpha.700");
  const text = useColorModeValue("blackAplha.500", "whiteAlpha.500");
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.300");

  return (
    <>
      <Box
        bg={bg}
        border="1.5px solid"
        borderColor={border}
        className="flex justify-between md:h-full col-span-4 row-span-2 overflow-hidden h-[216px]  bg-white md:col-span-3 rounded-3xl md:flex-col"
      >
        <div className="flex-grow w-1/2 mx-4 my-4 md:mx-6 md:mt-6 md:w-full">
          <h1
            color={heading}
            className="text-xl font-semibold tracking-tight md:text-2xl"
          >
            {" "}
            {title}
          </h1>
          <p
            color={text}
            className="w-full mb-6 text-xs font-regular md:mt-2 md:text-base"
          >
            {description}
          </p>
          <CTA cta={cta} href={link} />
        </div>
        <div className="flex flex-col items-end justify-end h-[216px] md:h-full ">
          <Image
            className="bottom-0 object-contain w-full h-[216px] md:h-full"
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
