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
        h={10}
        rounded={"full"}
        bg={isActive ? "white" : undefined}
        color={isActive ? "black" : "#CCC"}
        _hover={{
          textDecoration: "none",
          bg: "whiteAlpha.200",
          color: "#CCC",
        }}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};

const Navbar: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#222327");

  return (
    <Flex
      h={16}
      direction="row"
      justifyContent="space-between"
      align="center"
      width={"full"}
      gap={4}
      maxWidth={"container.xl"}
    >
      <Box flexShrink={0} flexGrow={1}></Box>
      <HStack spacing={1} bg={bg} rounded={"full"} p={2} py={3} h={12}>
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
