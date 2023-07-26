// blog.tsx
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

import BlogList from "../components/BlogList";
import Navbar from "@/components/NavBar";
import { Container, useColorModeValue } from "@chakra-ui/react";

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export default function Blog({ posts }: any) {
  const bg = useColorModeValue("#f7f7f7", "#0a0b0d");
  const border = useColorModeValue("gray.200", "gray.700");
  const color = useColorModeValue("black", "white");

  return (
    <Container
      p={0}
      maxW="full"
      className="flex flex-col items-center justify-center min-h-screen p-0 md:px-24 md:py-16"
      bg={bg}
      color={color}
    >
      <Container
        pt={4}
        pb={16}
        maxW="7xl"
        className="p-0 md:px-24 md:py-16 "
        bg={bg}
        color={color}
      >
        <Navbar />
        <BlogList posts={posts} />
      </Container>
    </Container>
  );
}

export async function getServerSideProps() {
  const posts = await client.fetch(query);

  return {
    props: {
      posts,
    },
  };
}
