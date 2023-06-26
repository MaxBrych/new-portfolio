import { useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Text } from "@chakra-ui/react";

export default function CTA({ cta, href }: any) {
  const bg = useColorModeValue("white", "blackAlpha.900");
  const text = useColorModeValue("gray.700", "gray.200");

  return (
    <div className="flex-shrink-0">
      <Link
        href={href}
        className="inline-flex items-center justify-between gap-2 py-2 pl-4 pr-2 text-xs font-semibold tracking-tight transition-all duration-150 rounded-full cursor-pointer text-black bg-[#eee] md:pl-5 h-9 md:text-sm md:h-11 md:gap-3 hover:bg-[#ddd]"
      >
        {cta}
        <FiArrowUpRight className="w-6 h-6 p-1 rounded-full md:w-8 md:h-8 " />
      </Link>
    </div>
  );
}
