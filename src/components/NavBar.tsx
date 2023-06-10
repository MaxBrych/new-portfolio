import {
  Box,
  Link as ChakraLink,
  HStack,
  IconButton,
  useColorMode,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import router, { useRouter } from "next/router";
import { FunctionComponent } from "react";
import NextLink from "next/link";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

interface LinkProps {
  href: string;
  children: string;
}

const Link: FunctionComponent<LinkProps> = ({ href, children }) => {
  const isActive = router.pathname === href;

  return (
    <NextLink href={href} passHref>
      <ChakraLink
        px={4}
        py={2}
        rounded={"full"}
        bg={isActive ? "white" : undefined}
        color={isActive ? "black" : "gray.500"}
        _hover={{
          textDecoration: "none",
          bg: "gray.200",
          color: "black",
        }}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};

const Navbar: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.700");

  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      align="center"
      width={"full"}
      gap={4}
      maxWidth={"container.xl"}
    >
      <Box flexShrink={0} flexGrow={1}></Box>
      <HStack spacing={4} bg={bg} rounded={"full"} p={2} py={2}>
        <Box>
          <Link href="/">Home</Link>
        </Box>
        <Box>
          <Link href="/about">About</Link>
        </Box>
        <Box>
          <Link href="/blog">Blog</Link>
        </Box>
      </HStack>
      <IconButton
        bg={bg}
        rounded={"full"}
        aria-label="Toggle Color Mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Navbar;
