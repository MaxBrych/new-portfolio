import { useEffect, useState } from "react";
import {
  Box,
  Link as ChakraLink,
  HStack,
  IconButton,
  useColorMode,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import NextLink from "next/link";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

interface LinkProps {
  href: string;
  children: string;
}

const Link: FunctionComponent<LinkProps> = ({ href, children }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(router.pathname === href);
  }, [router]);

  return (
    <NextLink href={href} passHref>
      <ChakraLink
        px={5}
        py={2}
        h={{ base: 8, md: 10 }}
        className="text-sm sm:text-base"
        rounded={"full"}
        border={isActive ? "0.5px" : undefined}
        borderColor={isActive ? "black" : undefined}
        bg={isActive ? "#edf2f7" : undefined}
        color={isActive ? "black" : "#797979"}
        _hover={{
          textDecoration: "none",
          bg: "blackAlpha.100",
          color: "#797979",
        }}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};

const Navbar: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#1D1E20");
  const stroke = useColorModeValue("gray.300", "gray.700");

  return (
    <Flex
      h={16}
      direction="row"
      justifyContent="space-between"
      align="center"
      width={"full"}
      gap={4}
      maxWidth={"container.xl"}
      position={{ base: "relative", md: "static" }} // Make the Navbar position relative on mobile
    >
      <Box flexShrink={0} flexGrow={1} className="font-bold">
        Max Brych
      </Box>
      <HStack
        spacing={1}
        bg={bg}
        rounded={"full"}
        px={{ base: 2, md: 2 }}
        h={{ base: 12, md: 12 }}
        position={{ base: "fixed", md: "static" }} // Make the HStack absolute on mobile
        top={600} // Set the bottom value to 16px
        left={4} // Set the left value to 16px
        right={4} // Set the right value to 16px
        borderColor={stroke} // Set the border color
        shadow={{ base: "lg", md: "none" }} // Set the shadow
        borderWidth={"0.5px"} // Set the border width
      >
        <Box>
          <Link href="/">Home</Link>
        </Box>
        <Box>
          <Link href="/projects">Projekte</Link>
        </Box>
        <Box>
          <Link href="/blog">Blog</Link>
        </Box>
      </HStack>
      <IconButton
        bg={bg}
        scale={2}
        rounded={"full"}
        aria-label="Toggle Color Mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Navbar;
