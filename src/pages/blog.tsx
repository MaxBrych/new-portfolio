// blog.tsx
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

import BlogList from "../components/BlogList";
import Navbar from "@/components/NavBar";

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export default function Project({ posts }: any) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <BlogList posts={posts} />
    </div>
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
