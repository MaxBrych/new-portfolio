import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../components/RichTextComponents";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import { Manrope, Inter } from "next/font/google";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "@/components/NavBar";
const manrope = Manrope({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

type Props = {
  params: {
    slug: string;
  };
};

export async function getStaticPaths() {
  const query = groq`*[_type == 'post'] { slug }`;
  const slugs: Post[] = await client.fetch(query);
  const paths = slugs.map((post) => ({ params: { slug: post.slug.current } }));

  return {
    paths,
    fallback: false, // See the "fallback" section in the docs
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const query = groq`
      *[_type == 'post' && slug.current == $slug] [0]
      {
        ...,
        author->,
        categories[]->
      }
      `;
  const post: Post = await client.fetch(query, { slug: params.slug });

  return {
    props: {
      post,
    },
    revalidate: 30, // Revalidate content on this page every 30 seconds
  };
}

const Post = ({ post }: { post: Post }) => {
  const bg = useColorModeValue("#f7f7f7", "#0a0b0d");
  const border = useColorModeValue("gray.200", "gray.700");
  const color = useColorModeValue("gray.700", "white");
  return (
    <>
      <Container
        pt={4}
        maxW="full"
        className="p-0 md:px-24 md:py-16 "
        bg={bg}
        minHeight={"100vh"}
        color={color}
      >
        <Navbar />
        <Box
          background={bg}
          className={`${inter.className} flex flex-col items-center w-full font-modern md:p-8 sm:py-14`}
        >
          <div className="py-6 md:py-12 md:w-1/2">
            <div className="px-4 ">
              <div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl leading-16">
                  {post.title}
                </h1>
                <div className="flex justify-between py-6 sm:py-8 ">
                  <div className="flex flex-row items-center ">
                    <Image
                      className="h-12 rounded-full"
                      src={urlFor(post.author.image).url()}
                      alt={post.author.name}
                      width={44}
                      height={44}
                    />
                    <p className="items-center px-2 font-semibold text-m">
                      {" "}
                      {post.author.name}
                    </p>
                  </div>
                  <p className="text-m ">
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <Image
                    className="object-cover object-center w-full mx-auto rounded-xl"
                    src={urlFor(post.mainImage).url()}
                    alt={post.author.name}
                    width={560}
                    height={160}
                  />
                </div>
                <p className="py-6 mt-4 text-lg sm:text-xl">
                  {post.description}
                </p>
                <div>{/* TODO: CATEGORIES */}</div>
              </div>
              <div className="py-6 text-lg leading-8 md:leading-8 md:py-8 sm:text-lg">
                <PortableText
                  value={post.body}
                  components={RichTextComponents}
                />
              </div>
            </div>
            <div className="absolute right-6 top-24">
              <h1 className="invisible text-white md:visible">Sidebar</h1>
            </div>
            <div className="absolute invisible left-4 top-20 sm:left-6 sm:top-24 md:visible">
              <Link href="/blog">
                <MdArrowBackIosNew className="w-12 h-12 p-3 border border-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-300" />
              </Link>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Post;
