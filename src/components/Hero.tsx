import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

export default function Hero() {
  const bg = useColorModeValue("white", "whiteAlpha.200");
  const border = useColorModeValue("gray.200", "gray.700");

  const heading = useColorModeValue("gray.700", "gray.100");
  const text = useColorModeValue("gray.700", "gray.200");

  return (
    <Box
      bg={bg}
      border="1px solid"
      borderColor={border}
      className="col-span-4 row-span-2 p-4 cursor-default md:p-6 md:row-span-1 rounded-3xl md:col-span-6"
    >
      <Image
        width={96}
        height={96}
        src={
          "https://cdn.discordapp.com/attachments/911904116782026772/1102575083995803689/323686967_176874778361794_318219261891802310_n.jpg"
        }
        alt={""}
        className="w-16 h-16 mb-3 text-xl rounded-full bg-slate-300"
      />
      <h1
        color={heading}
        className="mb-1 text-2xl font-bold tracking-tight md:mb-2 md:text-3xl "
      >
        Hi, ich bin Max!
      </h1>
      <p
        color={text}
        className="text-sm font-medium leading-5 md:leading-7 md:text-lg"
      >
        Ein Web Entwickler und Designer aus Deutschland.
        <br /> Ich interessiere mich für Web3, KI Prompts und neue Technologien.
      </p>
    </Box>
  );
}
