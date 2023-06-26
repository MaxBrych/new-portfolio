import post from "../../schemas/post";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import category from "../../schemas/category";
import ClientSideRoute from "./ClientSideRoute";
import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"] });

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  {
    /*console.log(posts.length);*/
  }
  const bg = useColorModeValue("white", "whiteAlpha.300");
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const heading = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
  const text = useColorModeValue("blackAplha.500", "whiteAlpha.500");

  return (
    <div className="py-4 md:px-16 md:py-14">
      <div className="flex py-2">
        <Text color={heading} className="mb-4 text-3xl font-semibold">
          Blog
        </Text>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 gap-y-8 md:gap-y-16">
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <Box
              border="1.5px solid"
              borderColor={border}
              bg={bg}
              className="flex flex-col p-3 transition-all duration-150 border cursor-pointer md:p-4 rounded-xl group "
            >
              <div className="relative w-full h-40 md:h-56h-56">
                <Image
                  className="object-cover object-left rounded-lg"
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                />
                <div className="absolute bottom-0 flex justify-between invisible w-full p-5 bg-opacity-20 rounded-b-2xl">
                  <div>
                    <Text
                      color={text}
                      className="font-regular md:text-xl text-md"
                    >
                      {post.title}
                    </Text>
                    <Text color={text}>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex-1 mt-4 ">
                <Text
                  color={heading}
                  className="mb-1 text-lg font-semibold leading-5 md:text-md"
                >
                  {post.title}
                </Text>
                <Text color={text} className="text-sm line-clamp-3 md:text-md">
                  {post.description}
                </Text>
              </div>
            </Box>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
