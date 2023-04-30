// IconComponent.tsx
import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import { FiExternalLink } from "react-icons/fi";

interface IconComponentProps {
  Icon: IconType;
}

const IconComponent: React.FC<IconComponentProps> = ({ Icon }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center justify-center col-span-3 row-span-1 bg-white cursor-pointer rounded-3xl"
    >
      <Icon className="w-12 h-12" />
      {isHovered && (
        <motion.div
          className="absolute top-0 right-0 p-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.1 }}
        >
          <FiExternalLink className="w-6 h-6 p-2 bg-[#EFF2F5]" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default IconComponent;
