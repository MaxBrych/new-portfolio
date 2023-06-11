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

export default function Project({ posts }: any) {
  const bg = useColorModeValue("gray.100", "#0a0b0d");
  const color = useColorModeValue("gray.700", "white");

  return (
    <Container
      pt={4}
      maxW="full"
      className="md:px-24 md:py-16 "
      bg={bg}
      minHeight={"100vh"}
      color={color}
    >
      <Navbar />
      <BlogList posts={posts} />
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
