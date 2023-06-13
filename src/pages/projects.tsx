import Navbar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";
import { useProject } from "@/components/useProjects";
import { Container, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Projects() {
  const bg = useColorModeValue("gray.100", "#0a0b0d");
  const color = useColorModeValue("gray.700", "white");
  const { data, isLoading, isError } = useProject();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <Container
      pt={4}
      maxW="full"
      className="p-0 md:px-24 md:py-16 "
      bg={bg}
      minHeight={"100vh"}
      color={color}
    >
      <Navbar />

      <ProjectSection projects={data} />
    </Container>
  );
}