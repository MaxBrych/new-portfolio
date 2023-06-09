// IconComponent.tsx
import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FiExternalLink } from "react-icons/fi";

interface IconComponentProps {
  Icon: IconType;
  color?: string;
  href: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ Icon, color, href }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const bg = useColorModeValue("white", "whiteAlpha.300");
  const text = useColorModeValue("gray.700", "gray.100");
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      bg={bg}
      border="1.5px solid"
      borderColor={border}
      className="flex items-center justify-center col-span-2 row-span-1 transition-all duration-100 bg-white cursor-pointer hover:scale-105 hover md:row-span-1 md:col-span-3 rounded-3xl"
    >
      <Link href={href}>
        <Icon className={`w-12 h-12 md:w-32 md:h-32 ${color}`} />
        {isHovered && (
          <motion.div
            className="absolute top-4 right-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiExternalLink className="w-6 h-6 p-2 rounded-xl md:w-8 md:h-8 bg-dark-90 " />
          </motion.div>
        )}
      </Link>
    </Box>
  );
};

export default IconComponent;
