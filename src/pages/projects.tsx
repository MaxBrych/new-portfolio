import Navbar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";
import { useProject } from "@/components/useProjects";
import { Container, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Projects() {
  const bg = useColorModeValue("#f7f7f7", "#0a0b0d");
  const border = useColorModeValue("gray.200", "gray.700");
  const color = useColorModeValue("black", "white");
  const { data, isLoading, isError } = useProject();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <Container
      p={0}
      maxW="full"
      className="flex flex-col items-start justify-center min-h-screen p-0 md:px-24 md:py-16"
      bg={bg}
      color={color}
    >
      <Container
        pt={4}
        pb={16}
        maxW="7xl"
        className="min-h-screen p-0 md:px-24 md:py-16 "
        bg={bg}
        color={color}
      >
        <Navbar />

        <ProjectSection projects={data} />
      </Container>
    </Container>
  );
}
